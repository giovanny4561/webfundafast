import type { Metadata } from "next";
import Image from "next/image";
import { HeroSection } from "@/components/hero-section";
import { SectionHeader } from "@/components/section-header";
import { CREDIT_PRODUCTS } from "@/lib/constants";
import { CheckCircle, Store, Handshake, type LucideIcon } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import {
  buildBreadcrumbSchema,
  buildCreditProductSchemas,
  buildWebPageSchema,
} from "@/lib/schema";

const ICON_MAP: Record<string, LucideIcon> = { Store, Handshake };

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
    { name: "Créditos", url: `${DOMAIN}/creditos` },
  ]);

  const webpage = buildWebPageSchema({
    url: `${DOMAIN}/creditos`,
    name: "Créditos — FundaFast S.A.S.",
    description:
      "Microcréditos rápidos, créditos por nómina y financiación con aliados estratégicos para tenderos colombianos.",
  });

  const creditProducts = buildCreditProductSchemas();

  return (
    <>
      {/* ─── SCHEMA ─── */}
      <SchemaScript schema={breadcrumb} />
      <SchemaScript schema={webpage} />
      <SchemaScript schema={creditProducts} />

      <HeroSection
        title="Productos de Crédito"
        subtitle="Encuentra la solución financiera perfecta para las necesidades de tu tienda."
        ctaLabel="Solicitar ahora"
        ctaHref="#productos"
      />

      {/* Own Products */}
      <section id="productos" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Soluciones de Financiación Propias"
            subtitle="Créditos diseñados especialmente para tenderos y comerciantes colombianos."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {CREDIT_PRODUCTS.own.map((product) => {
              const Icon = ICON_MAP[product.icon];
              return (
                <div
                  key={product.title}
                  className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
                >
                  {Icon && (
                    <div className="mb-5 inline-flex rounded-xl bg-ff-surface p-3">
                      <Icon className="h-7 w-7 text-ff-blue" />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-ff-text">{product.title}</h3>
                  <p className="mt-3 leading-relaxed text-ff-text-muted">
                    {product.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-ff-text-muted">
                        <CheckCircle className="h-4 w-4 shrink-0 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ally Credits */}
      <section className="bg-ff-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Créditos por Convenio con Aliados"
            subtitle="Financia la compra de productos y servicios con nuestros aliados. Pregunta por el crédito FundaFast en el punto de venta."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CREDIT_PRODUCTS.allies.map((ally) => (
              <div
                key={ally.name}
                className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm transition-all hover:shadow-lg"
              >
                <div className="relative mb-6 h-16 w-32">
                  <Image
                    src={ally.logo}
                    alt={ally.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-ff-text">{ally.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ff-text-muted">
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
