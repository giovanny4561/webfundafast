import type { NextConfig } from "next";

// Hosts allowed to serve images via next/image
const ALLOWED_IMAGE_HOSTS = [
  "www.fundafast.com.co",
  "images.unsplash.com",
];

/**
 * Content-Security-Policy
 *
 * - default-src 'self'                 → fallback for all resource types
 * - script-src 'self' 'unsafe-inline'  → required for Next.js inline scripts
 *                                        AND JSON-LD <script> tags (schema-script.tsx).
 *                                        Nonces would need a custom server; for a
 *                                        static/Vercel deployment 'unsafe-inline' is
 *                                        the pragmatic choice. eval is NOT allowed.
 * - style-src 'self' 'unsafe-inline'   → Tailwind generates inline styles at runtime
 * - img-src 'self' data: blob: https:  → next/image generates data URIs for blur
 *                                        placeholders; external covers from fundafast
 * - font-src 'self' https://fonts.gstatic.com → IBM Plex Sans via next/font
 * - connect-src 'self'                 → fetch/XHR only to same origin (no backend)
 * - frame-ancestors 'none'             → replaces X-Frame-Options (CSP3 equivalent)
 * - object-src 'none'                  → block Flash / plugins
 * - base-uri 'self'                    → prevent base-tag injection
 * - form-action 'self'                 → contact form stays on-domain (client-side only)
 * - upgrade-insecure-requests          → force HTTP → HTTPS for any mixed content
 *
 * PSE payment link (avalpaycenter.com) opens in a new tab — it is NOT framed, so
 * it does NOT need to be in frame-src. No resources are loaded from that domain.
 */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https:;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self';
  frame-src 'none';
  frame-ancestors 'none';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
`
  .replace(/\n/g, " ")
  .replace(/\s{2,}/g, " ")
  .trim();

const securityHeaders = [
  // ── Clickjacking protection (belt-and-suspenders with CSP frame-ancestors) ──
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // ── Stop browsers from MIME-sniffing away from the declared Content-Type ───
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // ── Only send the origin (no path/query) as Referer to cross-origin sites ──
  // Keeps internal URLs (e.g. PSE redirect URLs) from leaking via Referer.
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // ── Restrict browser feature APIs that are not needed on this site ─────────
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  // ── Force HTTPS for 1 year; include subdomains ─────────────────────────────
  // Only activated once site is confirmed on HTTPS. Vercel handles TLS, so this
  // is safe to ship. max-age=31536000 = 1 year.
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // ── Content Security Policy ────────────────────────────────────────────────
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },
  // ── Prevent cross-origin information leaks via speculative execution ───────
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
];

const routeHeaders = [
  {
    // Apply security headers to every route
    source: "/(.*)",
    headers: securityHeaders,
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: ALLOWED_IMAGE_HOSTS.map((hostname) => ({
      protocol: "https" as const,
      hostname,
      // No pathname wildcard — only serve images from these exact hosts.
      // Add pathname if subdirectory restriction is needed later.
    })),
  },
  headers: () => Promise.resolve(routeHeaders),
};

export default nextConfig;
