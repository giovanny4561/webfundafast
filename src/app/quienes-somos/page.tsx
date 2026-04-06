import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { SectionHeader } from "@/components/section-header";
import { Target, Eye, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Quienes Somos",
  description:
    "Conoce la mision, vision y objetivos de FundaFast S.A.S., tu socio en el desarrollo socioeconomico del gremio tendero.",
};

const OBJECTIVES = [
  "Fortalecer el desarrollo socioeconomico de nuestros clientes.",
  "Ofrecer programas de financiamiento y capacitacion personalizados.",
  "Garantizar procesos amigables y eficientes.",
  "Promover un ambiente laboral agradable para nuestros colaboradores.",
  "Asegurar la solidez y permanencia de la entidad.",
  "Expandir nuestra cobertura en el suroccidente colombiano.",
];

export default function QuienesSomosPage() {
  return (
    <>
      <HeroSection
        title="Quienes Somos"
        subtitle="Conoce la empresa que trabaja dia a dia por el bienestar de los tenderos colombianos."
      />

      {/* Mision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex rounded-xl bg-fundafast-blue/10 p-3">
                <Target className="h-8 w-8 text-fundafast-blue" />
              </div>
              <h2 className="text-3xl font-bold text-fundafast-text">Nuestra Mision</h2>
              <p className="mt-4 text-lg leading-relaxed text-fundafast-text-secondary">
                Contribuir al desarrollo socioeconomico de los clientes de Distritiendas y sus
                familias a traves de programas de financiamiento y capacitacion acordes a sus
                necesidades.
              </p>
              <p className="mt-4 text-fundafast-text-secondary leading-relaxed">
                Disponemos de procesos amables y adecuados que le permiten al tendero alcanzar
                sus metas, ofreciendo un ambiente laboral agradable para nuestros colaboradores y
                garantizando la solidez y permanencia de la entidad en el tiempo.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-gradient-to-br from-fundafast-blue/20 to-fundafast-blue-light/10 flex items-center justify-center">
                <Target className="h-24 w-24 text-fundafast-blue/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-fundafast-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-gradient-to-br from-fundafast-orange/20 to-amber-100 flex items-center justify-center">
                <Eye className="h-24 w-24 text-fundafast-orange/40" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-4 inline-flex rounded-xl bg-fundafast-orange/10 p-3">
                <Eye className="h-8 w-8 text-fundafast-orange" />
              </div>
              <h2 className="text-3xl font-bold text-fundafast-text">Nuestra Vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-fundafast-text-secondary">
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
            subtitle="Trabajamos cada dia para cumplir estas metas."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {OBJECTIVES.map((obj) => (
              <div
                key={obj}
                className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                <p className="text-fundafast-text-secondary">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
