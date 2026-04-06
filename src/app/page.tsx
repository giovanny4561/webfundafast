import { HeroSection } from "@/components/hero-section";
import { ServiceCard } from "@/components/service-card";
import { SectionHeader } from "@/components/section-header";
import { SedeCard } from "@/components/sede-card";
import { CTAButton } from "@/components/cta-button";
import { SERVICES, SEDES } from "@/lib/constants";
import { Shield, GraduationCap, Home, Users } from "lucide-react";

const BENEFITS = [
  { icon: Users, label: "Alianzas", color: "bg-blue-50 text-fundafast-blue" },
  { icon: Home, label: "Vivienda", color: "bg-orange-50 text-fundafast-orange" },
  { icon: Shield, label: "Seguros", color: "bg-green-50 text-green-600" },
  { icon: GraduationCap, label: "Educacion", color: "bg-purple-50 text-purple-600" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Tu Socio en el Desarrollo"
        subtitle="Impulsamos el crecimiento de los tenderos colombianos con microcreditos, seguros y programas de capacitacion disenados para ti."
        ctaLabel="Solicitar Credifast"
        ctaHref="/creditos"
        secondaryCta={{ label: "Conocenos", href: "/quienes-somos" }}
      />

      {/* Benefits */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Beneficios para Ti"
            subtitle="Todo lo que necesitas para hacer crecer tu negocio en un solo lugar."
          />
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {BENEFITS.map((b) => (
              <div
                key={b.label}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-sm border border-gray-50 transition-all hover:shadow-md"
              >
                <div className={`rounded-xl p-3 ${b.color}`}>
                  <b.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-fundafast-text">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-fundafast-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Nuestras Soluciones Clave"
            subtitle="Herramientas financieras y de apoyo para el exito de tu negocio."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-fundafast-orange to-amber-500 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Haz crecer tu tienda hoy
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Solicita tu credito en minutos y recibe el impulso que tu negocio necesita.
          </p>
          <div className="mt-8">
            <CTAButton href="/creditos" variant="outline" size="lg">
              Solicitar Ahora
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Sedes */}
      <section className="bg-fundafast-blue-dark py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader title="Nuestras Sedes" subtitle="Estamos cerca de ti." light />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SEDES.map((sede) => (
              <SedeCard key={sede.city} {...sede} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
