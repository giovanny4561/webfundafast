/**
 * Schema.org JSON-LD builders for FundaFast S.A.S.
 * All functions return plain objects ready for JSON.stringify.
 * Import these in page Server Components and render via <SchemaScript />.
 */

import { SEDES, CREDIT_PRODUCTS, INSURANCE_PRODUCTS } from "@/lib/constants";

const DOMAIN = "https://www.fundafast.com.co";
const LOGO_URL = `${DOMAIN}/images/logo-fundafast.png`;

// ─── 1. Organization (homepage) ─────────────────────────────────────────────

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${DOMAIN}/#organization`,
    name: "FundaFast S.A.S.",
    alternateName: "FundaFast",
    url: DOMAIN,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
      width: 200,
      height: 200,
    },
    image: LOGO_URL,
    description:
      "Microcreditos rapidos y seguros para tenderos colombianos. Credifast: facil aprobacion, cuotas flexibles. 4 sedes en el suroccidente colombiano.",
    foundingLocation: {
      "@type": "Place",
      name: "Cali, Colombia",
    },
    areaServed: [
      { "@type": "City", name: "Cali" },
      { "@type": "City", name: "Pasto" },
      { "@type": "City", name: "Palmira" },
      { "@type": "City", name: "Pereira" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cl. 30 Nte. #5N - 07",
      addressLocality: "Cali",
      addressRegion: "Valle del Cauca",
      addressCountry: "CO",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+573187171931",
        contactType: "customer service",
        availableLanguage: "Spanish",
        areaServed: "CO",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "contacto@fundafast.com.co",
        availableLanguage: "Spanish",
        areaServed: "CO",
      },
    ],
    sameAs: [
      `https://wa.me/573187171931`,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Financieros FundaFast",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "FinancialProduct",
            name: "Credifast — Microcredito",
            url: `${DOMAIN}/creditos`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "InsuranceProduct",
            name: "Proteccion de Credito por Fallecimiento",
            url: `${DOMAIN}/seguros`,
          },
        },
      ],
    },
  };
}

// ─── 2. WebSite (sitelinks searchbox eligibility) ───────────────────────────

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${DOMAIN}/#website`,
    url: DOMAIN,
    name: "FundaFast S.A.S.",
    description: "Microcreditos para tenderos colombianos",
    inLanguage: "es-CO",
    publisher: {
      "@id": `${DOMAIN}/#organization`,
    },
  };
}

// ─── 3. LocalBusiness — one per sede ────────────────────────────────────────

const SEDE_META: Record<
  string,
  { region: string; postalCode?: string; geo: { lat: number; lng: number } }
> = {
  Cali: {
    region: "Valle del Cauca",
    postalCode: "760001",
    geo: { lat: 3.4516, lng: -76.532 },
  },
  Pasto: {
    region: "Narino",
    postalCode: "520001",
    geo: { lat: 1.2136, lng: -77.2811 },
  },
  Palmira: {
    region: "Valle del Cauca",
    postalCode: "763001",
    geo: { lat: 3.5394, lng: -76.3036 },
  },
  Pereira: {
    region: "Risaralda",
    postalCode: "660001",
    geo: { lat: 4.8133, lng: -75.6961 },
  },
};

export function buildLocalBusinessSchemas() {
  return SEDES.map((sede) => {
    const meta = SEDE_META[sede.city];
    return {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "@id": `${DOMAIN}/#sede-${sede.city.toLowerCase()}`,
      name: `FundaFast S.A.S. — ${sede.city}`,
      url: `${DOMAIN}/contacto`,
      image: LOGO_URL,
      logo: LOGO_URL,
      description: `Sede FundaFast en ${sede.city}. Microcreditos y servicios financieros para tenderos.`,
      address: {
        "@type": "PostalAddress",
        streetAddress: sede.address,
        addressLocality: sede.city,
        addressRegion: meta?.region ?? "",
        postalCode: meta?.postalCode ?? "",
        addressCountry: "CO",
      },
      geo: meta
        ? {
            "@type": "GeoCoordinates",
            latitude: meta.geo.lat,
            longitude: meta.geo.lng,
          }
        : undefined,
      telephone: sede.phones.map((p) => `+57${p}`).join(", "),
      parentOrganization: {
        "@id": `${DOMAIN}/#organization`,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:00",
          closes: "17:00",
        },
      ],
    };
  });
}

// ─── 4. FinancialProduct — credit products ───────────────────────────────────

export function buildCreditProductSchemas() {
  const ownProducts = CREDIT_PRODUCTS.own.map((product) => ({
    "@context": "https://schema.org",
    "@type": "LoanOrCredit",
    "@id": `${DOMAIN}/creditos#${product.title.toLowerCase().replace(/\s+/g, "-")}`,
    name: product.title,
    description: product.description,
    url: `${DOMAIN}/creditos`,
    feesAndCommissionsSpecification: product.features.join(". "),
    provider: {
      "@id": `${DOMAIN}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    currency: "COP",
  }));

  const allyProducts = CREDIT_PRODUCTS.allies.map((ally) => ({
    "@context": "https://schema.org",
    "@type": "LoanOrCredit",
    "@id": `${DOMAIN}/creditos#convenio-${ally.name.toLowerCase().replace(/\s+/g, "-")}`,
    name: `Credito FundaFast — Convenio ${ally.name}`,
    description: ally.description,
    url: `${DOMAIN}/creditos`,
    provider: {
      "@id": `${DOMAIN}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    currency: "COP",
  }));

  return [...ownProducts, ...allyProducts];
}

// ─── 5. InsuranceProduct schemas ─────────────────────────────────────────────

export function buildInsuranceProductSchemas() {
  return INSURANCE_PRODUCTS.map((product) => ({
    "@context": "https://schema.org",
    "@type": "InsuranceProduct",
    "@id": `${DOMAIN}/seguros#${product.title.toLowerCase().replace(/\s+/g, "-")}`,
    name: product.title,
    description: product.description,
    url: `${DOMAIN}/seguros`,
    provider: {
      "@id": `${DOMAIN}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
  }));
}

// ─── 6. BreadcrumbList builder ───────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── 7. WebPage schema builder ───────────────────────────────────────────────

export function buildWebPageSchema({
  url,
  name,
  description,
  breadcrumbId,
}: {
  url: string;
  name: string;
  description: string;
  breadcrumbId?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "es-CO",
    isPartOf: { "@id": `${DOMAIN}/#website` },
    ...(breadcrumbId ? { breadcrumb: { "@id": breadcrumbId } } : {}),
    publisher: { "@id": `${DOMAIN}/#organization` },
  };
}

// ─── 8. FAQ schema builder ───────────────────────────────────────────────────
// NOTE: Google restricts FAQPage rich results to government/healthcare sites
// (August 2023). On commercial sites this schema still benefits AI/LLM
// citations (GEO). Use buildFaqSchema only if GEO discoverability is a goal.

export interface FaqItem {
  question: string;
  answer: string;
}

export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
