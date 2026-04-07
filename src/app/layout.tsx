import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fundafast.com.co"),
  title: {
    default: "FundaFast – Microcrédito para Tenderos en Colombia",
    template: "%s | FundaFast S.A.S.",
  },
  description:
    "Microcréditos rápidos para tenderos colombianos. Fácil aprobación, cuotas flexibles. 4 sedes: Cali, Pasto, Palmira y Pereira. Solicita tu Credifast hoy.",
  keywords: ["FundaFast", "Credifast", "microcrédito", "tenderos", "Cali", "Colombia", "Distritiendas", "crédito para tiendas"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FundaFast – Microcrédito para Tenderos en Colombia",
    description: "Microcréditos rápidos para tenderos colombianos. Fácil aprobación, cuotas flexibles. 4 sedes en el suroccidente.",
    url: "https://www.fundafast.com.co",
    siteName: "FundaFast S.A.S.",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FundaFast – Microcrédito para Tenderos en Colombia",
    description: "Microcréditos rápidos para tenderos colombianos. Fácil aprobación, cuotas flexibles.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={ibmPlexSans.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
