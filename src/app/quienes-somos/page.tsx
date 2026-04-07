import type { Metadata } from "next";
import Image from "next/image";
import { HeroSection } from "@/components/hero-section";
import { SectionHeader } from "@/components/section-header";
import { Target, Eye, CheckCircle } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Quiénes Somos – FundaFast | Financiera para Tenderos",
  description:
    "FundaFast apoya el desarrollo de tenderos colombianos con microcréditos, asesoría y seguros. Conoce nuestra misión, visión y el equipo detrás.",
  alternates: { canonical: "/quienes-somos" },
};

const DOMAIN = "https://www.fundafast.com.co";

const OBJECTIVES = [
  "Fortalecer el desarrollo socioeconómico de nuestros clientes.",
  "Ofrecer programas de financiamiento y capacitación personalizados.",
  "Garantizar procesos amigables y eficientes.",
  "Promover un ambiente laboral agradable para nuestros colaboradores.",
  "Asegurar la solidez y permanencia de la entidad.",
  "Expandir nuestra cobertura en el suroccidente colombiano.",
];

export default function QuienesSomosPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Inicio", url: DOMAIN },
    { name: "Quiénes Somos", url: `${DOMAIN}/quienes-somos` },
  ]);

  const webpage = buildWebPageSchema({
    url: `${DOMAIN}/quienes-somos`,
    name: "Quiénes Somos — FundaFast S.A.S.",
    description:
      "Conoce la misión, visión y objetivos de FundaFast S.A.S., tu socio en el desarrollo socioeconómico del gremio tendero.",
  });

  return (
    <>
      {/* ─── SCHEMA ─── */}
      <SchemaScript schema={breadcrumb} />
      <SchemaScript schema={webpage} />

      <HeroSection
        title="Quiénes Somos"
        subtitle="Conoce la empresa que trabaja día a día por el bienestar de los tenderos colombianos."
      />

      {/* Misión */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex rounded-xl bg-ff-blue/10 p-3">
                <Target className="h-8 w-8 text-ff-blue" />
              </div>
              <h2 className="text-3xl font-bold text-ff-text">Nuestra Misión</h2>
              <p className="mt-4 text-lg leading-relaxed text-ff-text-muted">
                Contribuir al desarrollo socioeconómico de los clientes de Distritiendas y sus
                familias a través de programas de financiamiento y capacitación acordes a sus
                necesidades.
              </p>
              <p className="mt-4 text-ff-text-muted leading-relaxed">
                Disponemos de procesos amables y adecuados que le permiten al tendero alcanzar
                sus metas, ofreciendo un ambiente laboral agradable para nuestros colaboradores y
                garantizando la solidez y permanencia de la entidad en el tiempo.
              </p>
            </div>
            <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-xl lg:h-96">
              <Image
                src="/images/mision-tenderos.jpg"
                alt="Familia tendera frente a su tienda de barrio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visión */}
      <section className="bg-ff-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 relative h-80 w-full overflow-hidden rounded-2xl shadow-xl lg:h-96">
              <Image
                src="/images/vision-crecimiento.jpg"
                alt="Tendero revisando documentos financieros en su tienda"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-4 inline-flex rounded-xl bg-ff-red/10 p-3">
                <Eye className="h-8 w-8 text-ff-red" />
              </div>
              <h2 className="text-3xl font-bold text-ff-text">Nuestra Visión</h2>
              <p className="mt-4 text-lg leading-relaxed text-ff-text-muted">
                Ser reconocidos en el 2026 como una entidad especializada en el gremio de los
                tenderos con cobertura en el suroccidente colombiano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Nuestros Objetivos"
            subtitle="Trabajamos cada día para cumplir estas metas."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {OBJECTIVES.map((obj) => (
              <div
                key={obj}
                className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                <p className="text-ff-text-muted">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
