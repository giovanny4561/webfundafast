import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SEDES, CONTACT_INFO, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-fundafast-blue-dark">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white">FundaFast</h3>
            <p className="mt-2 text-sm text-blue-200">S.A.S. - Su Socio en el Desarrollo</p>
            <p className="mt-4 text-sm leading-relaxed text-blue-200">
              Contribuimos al desarrollo socioeconomico de los tenderos y sus familias en el
              suroccidente colombiano.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-300">
              Navegacion
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.filter((l) => !("children" in l)).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-300">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-blue-200">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-blue-200">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+573187171931" className="hover:text-white transition-colors">
                  +57 318 717 1931
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-blue-200">
                <MessageCircle className="h-4 w-4 shrink-0" />
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-blue-200">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{CONTACT_INFO.mainAddress}</span>
              </li>
            </ul>
          </div>

          {/* Sedes */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-300">
              Sedes
            </h4>
            <ul className="space-y-3">
              {SEDES.map((sede) => (
                <li key={sede.city} className="text-sm text-blue-200">
                  <span className="font-medium text-white">{sede.city}:</span>{" "}
                  {sede.address}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-blue-800 pt-8 text-center text-sm text-blue-300">
          &copy; {new Date().getFullYear()} FundaFast S.A.S. | Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}
