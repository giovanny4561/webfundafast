import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
// import { Navbar } from "@/components/layout/navbar";
// import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "FundaFast S.A.S. - Su Socio en el Desarrollo",
    template: "%s | FundaFast S.A.S.",
  },
  description:
    "Contribuimos al desarrollo socioeconomico de los tenderos y sus familias con programas de financiamiento, seguros y capacitacion en el suroccidente colombiano.",
  keywords: [
    "FundaFast",
    "microcredito",
    "tenderos",
    "tienda de barrio",
    "Cali",
    "Colombia",
    "Distritiendas",
    "creditos",
    "seguros",
  ],
  openGraph: {
    title: "FundaFast S.A.S. - Su Socio en el Desarrollo",
    description:
      "Microcreditos, seguros y apoyo integral para tenderos en el suroccidente colombiano.",
    url: "https://www.fundafast.com.co",
    siteName: "FundaFast S.A.S.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
