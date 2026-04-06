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
    <section className="relative overflow-hidden bg-gradient-to-br from-fundafast-blue-dark via-fundafast-blue to-fundafast-blue-light">
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
        <div className="absolute inset-0 bg-gradient-to-r from-fundafast-blue-dark/90 to-fundafast-blue/70" />
      )}
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-blue-100 sm:text-xl">
            {subtitle}
          </p>
          {ctaLabel && ctaHref && (
            <div className="mt-10 flex flex-wrap gap-4">
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
