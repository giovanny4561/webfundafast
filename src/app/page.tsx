import Link from "next/link";
import Image from "next/image";
import {
  Zap, Shield, Users, GraduationCap, Building,
  CheckCircle, MapPin, Phone, ArrowRight, Star,
  Handshake, Clock, BadgeCheck, ChevronRight
} from "lucide-react";
import { SEDES, PSE_URL } from "@/lib/constants";

const BENEFITS = [
  { icon: CheckCircle, text: "Facil aprobacion" },
  { icon: Clock, text: "Atencion cercana" },
  { icon: BadgeCheck, text: "Cuotas flexibles" },
  { icon: Zap, text: "Respuesta rapida" },
];

const STATS = [
  { number: "4", label: "Sedes activas" },
  { number: "10+", label: "Anos de experiencia" },
  { number: "1000s", label: "Tenderos atendidos" },
  { number: "100%", label: "Respaldo Distritiendas" },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Solicita tu credito", desc: "Visita una de nuestras sedes o contactanos. Sin formularios complicados." },
  { step: "02", title: "Evaluacion rapida", desc: "Nuestro equipo evalua tu solicitud y te da respuesta en el menor tiempo posible." },
  { step: "03", title: "Recibe tu dinero", desc: "Una vez aprobado, recibe el dinero para impulsar tu tienda de barrio." },
];

const ALLIES = [
  { name: "Pan American Life", logo: "/images/logo-pan-american.png" },
  { name: "Los Olivos", logo: "/images/logo-los-olivos.png" },
  { name: "Moto 8", logo: "/images/logo-moto8.png" },
  { name: "Grupo Indufrial", logo: "/images/logo-indufrial.png" },
  { name: "Bravo", logo: "/images/logo-bravo.png" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ff-blue-dark via-ff-blue to-blue-600">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-10 left-1/3 h-64 w-64 rounded-full bg-ff-red/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              {/* Badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-100 backdrop-blur-sm">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                Socio oficial del ecosistema Distritiendas
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                El crédito que
                <span className="block text-ff-red"> tu tienda </span>
                necesita
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-blue-100 sm:text-xl">
                Microcreditos rapidos, seguros y diseñados para tenderos colombianos. Sin tramites complicados — solo el impulso que tu negocio merece.
              </p>

              {/* Benefit badges */}
              <div className="mt-7 flex flex-wrap gap-3">
                {BENEFITS.map((b) => (
                  <div key={b.text} className="flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-sm text-blue-100 backdrop-blur-sm">
                    <b.icon className="h-3.5 w-3.5 text-green-400" />
                    {b.text}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/creditos"
                  className="inline-flex items-center gap-2 rounded-xl bg-ff-red px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-red-900/30 transition-all hover:bg-ff-red-hover hover:shadow-xl"
                >
                  Solicitar Credifast
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/quienes-somos"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/10"
                >
                  Conocenos
                </Link>
              </div>
            </div>

            {/* Right — Quick Action Card */}
            <div className="hidden lg:flex lg:justify-end">
              <div className="w-full max-w-sm rounded-2xl bg-white/10 p-7 backdrop-blur-md border border-white/20">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">Accesos rapidos</p>
                <h3 className="mt-2 text-xl font-bold text-white">¿Que necesitas hoy?</h3>
                <div className="mt-6 space-y-3">
                  <Link
                    href="/creditos"
                    className="flex items-center justify-between rounded-xl bg-ff-red px-5 py-3.5 text-sm font-bold text-white transition-all hover:bg-ff-red-hover"
                  >
                    <span className="flex items-center gap-2"><Zap className="h-4 w-4" /> Solicitar Credifast</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={PSE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20 border border-white/20"
                  >
                    <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4" /> Pagar mi credito (PSE)</span>
                    <ChevronRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="/seguros"
                    className="flex items-center justify-between rounded-xl bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20 border border-white/20"
                  >
                    <span className="flex items-center gap-2"><Shield className="h-4 w-4" /> Ver seguros disponibles</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contacto"
                    className="flex items-center justify-between rounded-xl bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20 border border-white/20"
                  >
                    <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> Contactar un asesor</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-ff-blue">
        <div className="mx-auto max-w-7xl px-6 py-7">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-white">{s.number}</p>
                <p className="mt-1 text-sm text-blue-200">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICIOS ─── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-block rounded-full bg-ff-surface px-4 py-1 text-xs font-bold uppercase tracking-widest text-ff-blue">Nuestros Servicios</span>
            <h2 className="mt-3 text-3xl font-bold text-ff-text sm:text-4xl">Todo lo que necesita tu tienda</h2>
            <p className="mx-auto mt-4 max-w-xl text-ff-text-muted">Soluciones financieras y de proteccion diseñadas para el gremio tendero colombiano.</p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Zap, title: "Credifast", desc: "Microcreditos rapidos para reabastecer inventario, expandir tu local o cubrir imprevistos.", href: "/creditos", color: "text-ff-red bg-red-50" },
              { icon: Handshake, title: "Su Solucion", desc: "Credito exclusivo para empleados de FundaFast y Distritiendas con descuento por nomina.", href: "/creditos", color: "text-ff-blue bg-ff-surface" },
              { icon: Shield, title: "Seguros", desc: "Proteccion integral con Pan American Life y Funeraria Los Olivos para ti y tu familia.", href: "/seguros", color: "text-emerald-600 bg-emerald-50" },
              { icon: Building, title: "Fundacion", desc: "Proyectos de impacto social y capacitacion para el desarrollo del gremio tendero.", href: "/quienes-somos", color: "text-purple-600 bg-purple-50" },
            ].map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:border-ff-blue/20 hover:shadow-lg hover:-translate-y-1"
              >
                <div className={`mb-5 inline-flex rounded-xl p-3 ${s.color}`}>
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-ff-text">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ff-text-muted">{s.desc}</p>
                <div className="mt-5 flex items-center text-sm font-semibold text-ff-blue transition-all group-hover:gap-2">
                  <span>Ver más</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMO FUNCIONA ─── */}
      <section className="bg-ff-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-block rounded-full bg-white px-4 py-1 text-xs font-bold uppercase tracking-widest text-ff-blue">Como Funciona</span>
            <h2 className="mt-3 text-3xl font-bold text-ff-text sm:text-4xl">Tres pasos para tu credito</h2>
          </div>

          <div className="relative mt-14">
            {/* Connector line */}
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-ff-blue/30 to-transparent lg:block" />
            <div className="grid gap-8 lg:grid-cols-3">
              {HOW_IT_WORKS.map((step, i) => (
                <div key={step.step} className="relative flex flex-col items-center text-center">
                  <div className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl font-extrabold text-xl shadow-lg ${i === 0 ? "bg-ff-red text-white shadow-red-200" : "bg-ff-blue text-white shadow-blue-200"}`}>
                    {step.step}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ff-text">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ff-text-muted">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/creditos"
              className="inline-flex items-center gap-2 rounded-xl bg-ff-red px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-red-200 transition-all hover:bg-ff-red-hover hover:shadow-xl"
            >
              Solicitar ahora
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ALIADOS ─── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-ff-text-muted">
            Nuestros aliados estrategicos
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {ALLIES.map((ally) => (
              <div key={ally.name} className="group flex h-14 w-32 items-center justify-center grayscale transition-all hover:grayscale-0 hover:scale-105">
                <Image
                  src={ally.logo}
                  alt={ally.name}
                  width={120}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEDES ─── */}
      <section className="bg-ff-blue-dark py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-blue-300">Cobertura</span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Estamos cerca de ti</h2>
            <p className="mt-3 text-blue-200">4 sedes en el suroccidente colombiano</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SEDES.map((sede) => (
              <div key={sede.city} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ff-red">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white">{sede.city}</h4>
                </div>
                <p className="text-sm leading-relaxed text-blue-200">{sede.address}</p>
                <div className="mt-4 space-y-1.5">
                  {sede.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:+57${phone}`}
                      className="flex items-center gap-2 text-sm text-blue-300 transition-colors hover:text-white"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      +57 {phone}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-gradient-to-r from-ff-red to-red-700 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            ¿Tu tienda necesita un impulso?
          </h2>
          <p className="mt-4 text-lg text-red-100">
            Solicita tu Credifast hoy. Sin tramites, sin complicaciones. Solo el capital que necesitas para crecer.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/creditos"
              className="rounded-xl bg-white px-8 py-3.5 text-base font-bold text-ff-red transition-all hover:bg-red-50 hover:shadow-lg"
            >
              Solicitar Credifast
            </Link>
            <Link
              href="/contacto"
              className="rounded-xl border-2 border-white/40 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              Hablar con un asesor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
