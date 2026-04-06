import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { SectionHeader } from "@/components/section-header";
import { RevistaCard } from "@/components/revista-card";
import { REVISTAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "La Tienda - Hemeroteca Digital",
  description:
    "Archivo digital de la revista La Tienda de FundaFast. Noticias, tendencias y analisis del sector comercio.",
};

export default function LaTiendaPage() {
  return (
    <>
      <HeroSection
        title="Archivo Digital de Revistas"
        subtitle="Consulta todas las ediciones de nuestra revista especializada. Noticias, tendencias y analisis del comercio."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Ediciones Disponibles"
            subtitle="Haz clic en cualquier edicion para verla en PDF."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {REVISTAS.map((revista) => (
              <RevistaCard key={revista.edition} {...revista} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
