import type { Metadata } from "next";
import Image from "next/image";
import { HeroSection } from "@/components/hero-section";
import { SectionHeader } from "@/components/section-header";
import { CREDIT_PRODUCTS } from "@/lib/constants";
import { CheckCircle } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import {
  buildBreadcrumbSchema,
  buildCreditProductSchemas,
  buildWebPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Créditos para Tenderos en Colombia",
  description:
    "Microcréditos rápidos para tu tienda, crédito por nómina y financiación de motos y equipos. Fácil aprobación en Cali, Pasto, Palmira y Pereira.",
  alternates: { canonical: "/creditos" },
};

const DOMAIN = "https://www.fundafast.com.co";

export default function CreditosPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Inicio", url: DOMAIN },
    { name: "Creditos", url: `${DOMAIN}/creditos` },
  ]);

  const webpage = buildWebPageSchema({
    url: `${DOMAIN}/creditos`,
    name: "Creditos — FundaFast S.A.S.",
    description:
      "Microcreditos rapidos, creditos por nomina y financiacion con aliados estrategicos para tenderos colombianos.",
  });

  const creditProducts = buildCreditProductSchemas();

  return (
    <>
      {/* ─── SCHEMA ─── */}
      <SchemaScript schema={breadcrumb} />
      <SchemaScript schema={webpage} />
      <SchemaScript schema={creditProducts} />

      <HeroSection
        title="Productos de Credito"
        subtitle="Encuentra la solucion financiera perfecta para tus necesidades personales y empresariales."
        ctaLabel="Solicitar Ahora"
        ctaHref="#productos"
      />

      {/* Own Products */}
      <section id="productos" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Soluciones de Financiacion Propias"
            subtitle="Creditos disenados especialmente para ti."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {CREDIT_PRODUCTS.own.map((product) => (
              <div
                key={product.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{product.emoji}</div>
                <h3 className="text-2xl font-bold text-fundafast-text">{product.title}</h3>
                <p className="mt-3 text-fundafast-text-secondary leading-relaxed">
                  {product.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-fundafast-text-secondary">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ally Credits */}
      <section className="bg-fundafast-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Creditos por Convenio con Aliados"
            subtitle="Financia la compra de productos y servicios con nuestros aliados. Pregunta por el credito FundaFast en el punto de venta."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CREDIT_PRODUCTS.allies.map((ally) => (
              <div
                key={ally.name}
                className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all hover:shadow-lg"
              >
                <div className="relative mb-6 h-16 w-32">
                  <Image
                    src={ally.logo}
                    alt={ally.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-fundafast-text">{ally.name}</h3>
                <p className="mt-3 text-sm text-fundafast-text-secondary leading-relaxed">
                  {ally.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
