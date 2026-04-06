// src/lib/constants.ts

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Quienes Somos", href: "/quienes-somos" },
  {
    label: "Servicios",
    href: "#",
    children: [
      { label: "Creditos", href: "/creditos" },
      { label: "Seguros", href: "/seguros" },
    ],
  },
  { label: "Contacto", href: "/contacto" },
  { label: "La Tienda", href: "/la-tienda" },
  { label: "Trabaja con Nosotros", href: "/empleo" },
] as const;

export const SEDES = [
  {
    city: "Cali",
    address: "Cl. 30 Nte. #5N - 07, San Vicente",
    phones: ["3187171931", "3153806184"],
  },
  {
    city: "Pasto",
    address: "Calle 16 # 21A-53 Local 2, Barrio Centro, Narino",
    phones: ["3187171931"],
  },
  {
    city: "Palmira",
    address: "CR 34 # 31-35 PI 1 LC 101, Valle del Cauca",
    phones: ["3160252556"],
  },
  {
    city: "Pereira",
    address: "Calle 13 #15-110 Local 232A, Centro Comercial",
    phones: ["3160252556"],
  },
] as const;

export const SERVICES = [
  {
    icon: "Zap",
    title: "Credifast",
    description:
      "Microcreditos rapidos y flexibles disenados para las necesidades unicas de tu negocio.",
    href: "/creditos",
    cta: "Explorar Creditos",
  },
  {
    icon: "Handshake",
    title: "Su Solucion",
    description:
      "Programas de apoyo, asesoria y herramientas para optimizar la gestion y rentabilidad de tu tienda.",
    href: "/creditos",
    cta: "Ver Asesorias",
  },
  {
    icon: "Shield",
    title: "Seguros",
    description:
      "Proteccion integral para ti y tu familia con nuestros aliados estrategicos.",
    href: "/seguros",
    cta: "Ver Seguros",
  },
  {
    icon: "Building",
    title: "Nuestra Fundacion",
    description:
      "Proyectos de impacto social que contribuyen al bienestar de la comunidad tendera.",
    href: "/quienes-somos",
    cta: "Saber Mas",
  },
] as const;

export const CREDIT_PRODUCTS = {
  own: [
    {
      title: "Microcredito",
      emoji: "🏪",
      description:
        "Disenado para impulsar negocios pequenos como tiendas de barrio, panaderias y otros emprendimientos. Capital para crecer, reabastecer inventario o expandir tu local.",
      features: ["Facil aprobacion", "Cuotas flexibles", "Enfoque en crecimiento local"],
    },
    {
      title: "Credito Susolucion",
      emoji: "✨",
      description:
        "Credito exclusivo para empleados de FundaFast y Distritiendas. Tasas preferenciales y descuento por nomina.",
      features: [
        "Tasas especiales",
        "Descuento directo por nomina",
        "Rapida respuesta",
      ],
    },
  ],
  allies: [
    {
      name: "Moto 8",
      logo: "/images/logo-moto8.png",
      description: "Financiacion directa para adquisicion de motocicletas con tasas preferenciales.",
    },
    {
      name: "Grupo Indufrial",
      logo: "/images/logo-indufrial.png",
      description:
        "Credito facil y rapido para congeladores, neveras exhibidoras y equipos refrigerantes.",
    },
    {
      name: "Bravo",
      logo: "/images/logo-bravo.png",
      description:
        "Repuestos originales, accesorios, llantas y lubricantes para tu motocicleta.",
    },
  ],
} as const;

export const INSURANCE_PRODUCTS = [
  {
    title: "Proteccion de Credito por Fallecimiento",
    logo: "/images/logo-pan-american.png",
    logoAlt: "Pan American Life",
    description:
      "Tu credito queda automaticamente asegurado. En caso de fallecimiento del titular, el seguro cubre el saldo restante.",
    badge: "Seguro Obligatorio",
    badgeVariant: "default" as const,
  },
  {
    title: "Plan Exequial (Los Olivos)",
    logo: "/images/logo-los-olivos.png",
    logoAlt: "Funeraria Los Olivos",
    description:
      "Plan Exequial completo con Funeraria Los Olivos. Apoyo y soporte en los momentos mas dificiles.",
    badge: "Plan Opcional",
    badgeVariant: "secondary" as const,
  },
  {
    title: "Servicios de Salud y Orientacion Medica",
    logo: "/images/logo-pan-american.png",
    logoAlt: "Pan American Life + Prevemed",
    description:
      "Titular + 5 asegurados. Medicos, especialistas, laboratorios y opticas a precios especiales. Orientacion medica ilimitada.",
    badge: "Beneficio Adicional",
    badgeVariant: "outline" as const,
  },
] as const;

export const REVISTAS = [
  { edition: "2091", date: "Marzo 2025", cover: "/images/2091.png", pdf: "https://www.fundafast.com.co/revistas/Peri%C3%B3dicoLaTienda2091.pdf" },
  { edition: "2092", date: "Julio 2025", cover: "/images/2092.png", pdf: "https://www.fundafast.com.co/revistas/Peri%C3%B3dicoLaTienda2092.pdf" },
  { edition: "2093", date: "Septiembre 2025", cover: "/images/2093.png", pdf: "https://www.fundafast.com.co/revistas/Peri%C3%B3dicoLaTienda2093.pdf" },
  { edition: "2094", date: "Noviembre 2025", cover: "/images/2094.png", pdf: "https://www.fundafast.com.co/revistas/Peri%C3%B3dicoLaTienda2094.pdf" },
] as const;

export const VACANCY = {
  title: "Analista de Credito",
  locations: "Cali - Pasto - Pereira - Palmira",
  requirements: [
    "Experiencia: 1 ano minimo en cargos relacionados",
    "Tipo de contrato: Indefinido",
    "Requisito indispensable: contar con vehiculo particular (moto)",
  ],
  contact: {
    email: "analistagh@fundafast.com.co",
    phone: "3187171931",
    name: "Camilo Andres Zipaquira",
  },
} as const;

export const PSE_URL =
  "https://www.avalpaycenter.com/wps/portal/portal-de-pagos/web/pagos-aval/resultado-busqueda/realizar-pago-facturadores?idConv=00002808&origen=buscar";

export const CONTACT_INFO = {
  email: "contacto@fundafast.com.co",
  mainAddress: "Cl. 30 Nte. #5N - 07, San Vicente, Cali",
  whatsapp: "573187171931",
} as const;
