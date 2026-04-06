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
  title: {
    default: "FundaFast S.A.S. - Su Socio en el Desarrollo",
    template: "%s | FundaFast S.A.S.",
  },
  description:
    "Microcreditos rapidos y seguros para tenderos colombianos. Credifast: facil aprobacion, cuotas flexibles, 4 sedes en el suroccidente.",
  keywords: ["FundaFast", "Credifast", "microcredito", "tenderos", "Cali", "Colombia", "Distritiendas"],
  openGraph: {
    title: "FundaFast S.A.S. - Su Socio en el Desarrollo",
    description: "Microcreditos para tenderos colombianos. Facil, rapido y cercano.",
    url: "https://www.fundafast.com.co",
    siteName: "FundaFast S.A.S.",
    locale: "es_CO",
    type: "website",
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
