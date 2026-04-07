import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { VACANCY } from "@/lib/constants";
import { Briefcase, MapPin, CheckCircle, Mail, Phone } from "lucide-react";
import { CTAButton } from "@/components/cta-button";

export const metadata: Metadata = {
  title: "Trabaja con FundaFast | Analista de Crédito Colombia",
  description:
    "Vacante: Analista de Crédito en Cali, Pasto, Pereira y Palmira. Contrato indefinido. Postúlate y únete al equipo FundaFast.",
  alternates: { canonical: "/empleo" },
};

export default function EmpleoPage() {
  return (
    <>
      <HeroSection
        title="Trabaja con Nosotros"
        subtitle="Unete al equipo que impulsa el desarrollo de los tenderos colombianos."
      />

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:p-12">
            <div className="mb-6 inline-flex rounded-xl bg-ff-blue/10 p-3">
              <Briefcase className="h-8 w-8 text-fundafast-blue" />
            </div>

            <h2 className="text-3xl font-bold text-fundafast-text">
              Vacante: {VACANCY.title}
            </h2>

            <div className="mt-3 flex items-center gap-2 text-fundafast-text-secondary">
              <MapPin className="h-4 w-4" />
              <span>{VACANCY.locations}</span>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-lg font-bold text-fundafast-text">
                Requisitos Minimos y Condiciones
              </h3>
              <ul className="space-y-3">
                {VACANCY.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                    <span className="text-fundafast-text-secondary">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 rounded-xl bg-fundafast-surface p-6">
              <h3 className="mb-4 text-lg font-bold text-fundafast-text">
                Informacion y Postulacion
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-fundafast-blue" />
                  <a
                    href={`mailto:${VACANCY.contact.email}?subject=Aplicacion Analista de Credito`}
                    className="text-fundafast-blue hover:underline"
                  >
                    {VACANCY.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-fundafast-blue" />
                  <a
                    href={`https://wa.me/57${VACANCY.contact.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fundafast-blue hover:underline"
                  >
                    +57 {VACANCY.contact.phone} ({VACANCY.contact.name})
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <CTAButton
                  href={`mailto:${VACANCY.contact.email}?subject=Aplicacion Analista de Credito`}
                  external
                >
                  Aplicar Ahora
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
