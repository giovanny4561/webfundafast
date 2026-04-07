import Image from "next/image";
import { CTAButton } from "./cta-button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaVariant?: "primary" | "secondary" | "outline";
  secondaryCta?: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
  overlay?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  ctaVariant = "primary",
  secondaryCta,
  imageSrc,
  imageAlt = "",
  overlay = true,
}: HeroSectionProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1E3A5F 0%, #1E40AF 60%, #3B82F6 100%)" }}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover opacity-20"
          priority
        />
      )}
      {overlay && (
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(30,58,95,0.92) 0%, rgba(30,64,175,0.70) 100%)" }}
        />
      )}
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-blue-100 sm:text-lg">
            {subtitle}
          </p>
          {ctaLabel && ctaHref && (
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href={ctaHref} variant={ctaVariant} size="lg">
                {ctaLabel}
              </CTAButton>
              {secondaryCta && (
                <CTAButton href={secondaryCta.href} variant="outline" size="lg">
                  {secondaryCta.label}
                </CTAButton>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
