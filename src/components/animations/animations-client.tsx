"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register plugins once — must be at module level (client only)
gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * AnimationsClient
 *
 * Renders null (no markup). Uses useGSAP() per official GSAP React skill:
 * — no scope (page-level animations target the whole document intentionally)
 * — gsap.matchMedia() handles prefers-reduced-motion properly
 * — ScrollTrigger.batch() for grid card stagger reveals (performant)
 * — cleanup runs automatically via useGSAP
 *
 * Animation classes applied in page.tsx:
 *   .anim-hero-badge   .anim-hero-h1     .anim-hero-sub
 *   .anim-hero-benefit .anim-hero-cta    .anim-hero-card
 *   .anim-stats-bar    .anim-stat-number .anim-stat-text
 *   .anim-heading      .anim-connector   .anim-step
 *   .anim-batch        (batch-revealed cards)
 *   .anim-final-cta
 */
export function AnimationsClient() {
  useGSAP(() => {
      // Use matchMedia to handle prefers-reduced-motion + responsive differences
      const mm = gsap.matchMedia();

      mm.add(
        {
          // Full animations for users who haven't requested reduced motion
          motion: "(prefers-reduced-motion: no-preference)",
          // Reduced-motion: no decorative animations, only immediate visibility
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { motion } = context.conditions as { motion: boolean };

          if (!motion) {
            // Make everything visible immediately for reduced-motion users
            gsap.set(
              [
                ".anim-hero-badge",
                ".anim-hero-h1",
                ".anim-hero-sub",
                ".anim-hero-benefit",
                ".anim-hero-cta",
                ".anim-hero-card",
                ".anim-batch",
                ".anim-heading",
                ".anim-step",
                ".anim-final-cta",
              ],
              { opacity: 1, clearProps: "all" }
            );
            return;
          }

          // Set initial hidden state for all batch elements immediately
          // so they don't flash visible before their ScrollTrigger fires
          gsap.set(".anim-batch", { opacity: 0, y: 38 });

          // ── 1. HERO entrance — staggered timeline ─────────────────────
          const heroTl = gsap.timeline({
            defaults: { ease: "power3.out" },
          });

          heroTl
            .from(".anim-hero-badge", { opacity: 0, x: -20, duration: 0.45 })
            .from(".anim-hero-h1", { opacity: 0, y: 28, duration: 0.55 }, "-=0.2")
            .from(".anim-hero-sub", { opacity: 0, y: 18, duration: 0.45 }, "-=0.3")
            .from(
              ".anim-hero-benefit",
              { opacity: 0, y: 10, duration: 0.3, stagger: 0.07 },
              "-=0.25"
            )
            .from(
              ".anim-hero-cta",
              { opacity: 0, y: 14, scale: 0.96, duration: 0.35, stagger: 0.08 },
              "-=0.2"
            )
            .from(
              ".anim-hero-card",
              { opacity: 0, x: 36, duration: 0.55 },
              "-=0.45"
            );

          // ── 2. Stats bar — counter + fade ────────────────────────────
          const statNums = gsap.utils.toArray<HTMLElement>(".anim-stat-number");
          statNums.forEach((el) => {
            const raw = el.dataset.value ?? "";
            const numStr = raw.replace(/[^0-9.]/g, "");
            const suffix = raw.replace(/^[0-9.]*/, ""); // e.g. "%" from "100%"
            const num = parseFloat(numStr);
            if (isNaN(num)) return;

            const obj = { val: 0 };
            ScrollTrigger.create({
              trigger: el,
              start: "top 88%",
              once: true,
              onEnter: () => {
                gsap.to(obj, {
                  val: num,
                  duration: 1.4,
                  ease: "power2.out",
                  onUpdate() {
                    el.textContent = (Number.isInteger(num)
                      ? Math.round(obj.val).toString()
                      : obj.val.toFixed(1)) + suffix;
                  },
                });
              },
            });
          });

          gsap.from(".anim-stat-text", {
            opacity: 0,
            y: 10,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".anim-stats-bar",
              start: "top 88%",
              once: true,
            },
          });

          // ── 3. Section headings ───────────────────────────────────────
          gsap.utils.toArray<HTMLElement>(".anim-heading").forEach((el) => {
            gsap.from(el, {
              opacity: 0,
              y: 22,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                once: true,
              },
            });
          });

          // ── 4. Grid card reveals — per-card trigger ───────────────────
          // Each card gets its own ScrollTrigger so it animates exactly when
          // IT enters the viewport — no stagger timing mismatch across rows.
          // On desktop all 4 cards share the same Y so they fire simultaneously.
          gsap.utils.toArray<HTMLElement>(".anim-batch").forEach((card) => {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              overwrite: true,
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                once: true,
              },
            });
          });

          // ── 5. How-it-works: connector line draw + steps ──────────────
          gsap.from(".anim-connector", {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.9,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: ".anim-connector",
              start: "top 82%",
              once: true,
            },
          });

          const steps = gsap.utils.toArray<HTMLElement>(".anim-step");
          if (steps.length) {
            gsap.from(steps, {
              opacity: 0,
              y: 30,
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: steps[0].closest("div") ?? steps[0],
                start: "top 84%",
                once: true,
              },
            });
          }

          // ── 6. Final CTA ──────────────────────────────────────────────
          gsap.from(".anim-final-cta", {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: ".anim-final-cta",
              start: "top 88%",
              once: true,
            },
          });
        }
      );
  });

  return null;
}
