import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle, CreditCard } from "lucide-react";
import { SEDES, CONTACT_INFO, NAV_LINKS, PSE_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ff-blue-dark text-white">
      {/* CTA Strip */}
      <div className="bg-ff-red">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <div>
            <p className="text-lg font-bold text-white">¿Listo para impulsar tu tienda?</p>
            <p className="text-sm text-red-100">Solicita tu Credifast hoy — sin tramites, sin complicaciones.</p>
          </div>
          <div className="flex gap-3">
            <a
              href={PSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/60 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-ff-red"
            >
              <CreditCard className="h-4 w-4" /> Pagar PSE
            </a>
            <Link
              href="/creditos"
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-ff-red transition-all hover:bg-red-50"
            >
              Solicitar Crédito
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo-fundafast.png"
                alt="FundaFast"
                width={36}
                height={36}
                className="h-9 w-9 object-contain brightness-0 invert"
              />
              <span className="text-lg font-bold text-white">FundaFast</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-blue-200">
              Contribuimos al desarrollo socioeconomico de los tenderos y sus familias en el suroccidente colombiano.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-blue-200 transition-colors hover:bg-white/20 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-blue-200 transition-colors hover:bg-white/20 hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-300">Navegación</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.filter((l) => !("children" in l)).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-blue-200 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-300">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-blue-200">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors break-all">{CONTACT_INFO.email}</a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-blue-200">
                <Phone className="h-4 w-4 shrink-0 text-blue-300" />
                <a href="tel:+573187171931" className="hover:text-white transition-colors">+57 318 717 1931</a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-blue-200">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                <span>{CONTACT_INFO.mainAddress}</span>
              </li>
            </ul>
          </div>

          {/* Sedes */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-300">Sedes</h4>
            <ul className="space-y-3">
              {SEDES.map((sede) => (
                <li key={sede.city} className="text-sm text-blue-200">
                  <span className="font-semibold text-white">{sede.city}</span>
                  <p className="mt-0.5 text-xs leading-relaxed">{sede.address}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-blue-300 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} FundaFast S.A.S. | Todos los derechos reservados</p>
          <p>Cali, Colombia — Ecosistema Distritiendas</p>
        </div>
      </div>
    </footer>
  );
}
