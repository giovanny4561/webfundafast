import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { ContactForm } from "@/components/contact-form";
import { SedeCard } from "@/components/sede-card";
import { SectionHeader } from "@/components/section-header";
import { SEDES, CONTACT_INFO } from "@/lib/constants";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { SchemaScript } from "@/components/schema-script";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contacto y Sedes FundaFast | Cali, Pasto, Palmira",
  description:
    "Contáctanos por WhatsApp, teléfono o email. Sedes en Cali, Pasto, Palmira y Pereira. Asesores listos para ayudarte a solicitar tu microcrédito.",
  alternates: { canonical: "/contacto" },
};

const DOMAIN = "https://www.fundafast.com.co";

export default function ContactoPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Inicio", url: DOMAIN },
    { name: "Contacto", url: `${DOMAIN}/contacto` },
  ]);

  const webpage = buildWebPageSchema({
    url: `${DOMAIN}/contacto`,
    name: "Contacto — FundaFast S.A.S.",
    description:
      "Contacta a FundaFast S.A.S. Estamos en Cali, Pasto, Palmira y Pereira.",
  });

  return (
    <>
      {/* ─── SCHEMA ─── */}
      <SchemaScript schema={breadcrumb} />
      <SchemaScript schema={webpage} />

      <HeroSection
        title="Contáctanos"
        subtitle="Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-ff-text">Envíanos un Mensaje</h2>
              <p className="mt-2 mb-8 text-ff-text-muted">
                Llena el formulario y nos pondremos en contacto contigo.
              </p>
              <ContactForm />
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-ff-text">Información de Contacto</h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4 rounded-xl bg-ff-surface p-5">
                  <div className="rounded-lg bg-ff-blue/10 p-3">
                    <Mail className="h-5 w-5 text-ff-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-ff-text-muted">Email</p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="font-medium text-ff-text hover:text-ff-blue"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-ff-surface p-5">
                  <div className="rounded-lg bg-ff-blue/10 p-3">
                    <Phone className="h-5 w-5 text-ff-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-ff-text-muted">Teléfono</p>
                    <a
                      href="tel:+573187171931"
                      className="font-medium text-ff-text hover:text-ff-blue"
                    >
                      +57 318 717 1931
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-ff-surface p-5">
                  <div className="rounded-lg bg-green-50 p-3">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-ff-text-muted">WhatsApp</p>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-ff-text hover:text-green-600"
                    >
                      Chatea con nosotros
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sedes */}
      <section className="bg-ff-blue-dark py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader title="Nuestras Sedes" light />
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
