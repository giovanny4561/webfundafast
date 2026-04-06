import type { Metadata } from "next";
import Image from "next/image";
import { HeroSection } from "@/components/hero-section";
import { SectionHeader } from "@/components/section-header";
import { INSURANCE_PRODUCTS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Seguros",
  description:
    "Convenios de seguros FundaFast: proteccion de credito, plan exequial Los Olivos y servicios de salud con Pan American Life.",
};

export default function SegurosPage() {
  return (
    <>
      <HeroSection
        title="Convenios de Seguros"
        subtitle="Valoramos tu tranquilidad y la de tu familia. A traves de nuestros aliados estrategicos, te brindamos proteccion integral."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Nuestras Soluciones de Proteccion"
            subtitle="Asegura tu credito y tu bienestar con coberturas disenadas para ti."
          />
          <div className="mt-14 space-y-8">
            {INSURANCE_PRODUCTS.map((product) => (
              <div
                key={product.title}
                className="flex flex-col gap-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md sm:flex-row sm:items-start"
              >
                <div className="relative h-16 w-32 shrink-0">
                  <Image
                    src={product.logo}
                    alt={product.logoAlt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-fundafast-text">{product.title}</h3>
                    <Badge variant={product.badgeVariant}>{product.badge}</Badge>
                  </div>
                  <p className="mt-3 text-fundafast-text-secondary leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
