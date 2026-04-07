import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones | FundaFast S.A.S.",
  description: "Términos y condiciones de uso del sitio web de FundaFast S.A.S.",
  alternates: { canonical: "/terminos" },
};

export default function TerminosPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-3xl font-bold text-ff-text sm:text-4xl">Términos y Condiciones</h1>
      <p className="mt-3 text-sm text-ff-text-muted">Última actualización: enero de 2025</p>

      <div className="mt-10 space-y-10 text-ff-text-muted [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ff-text [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ul]:list-disc">

        <section>
          <h2>1. Aceptación de los Términos</h2>
          <p>Al acceder y usar el sitio web de <strong>FundaFast S.A.S.</strong> (en adelante "FundaFast"), usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo, le pedimos no usar este sitio.</p>
        </section>

        <section>
          <h2>2. Sobre FundaFast S.A.S.</h2>
          <p>FundaFast S.A.S. es una compañía de financiamiento colombiana, parte del ecosistema Distritiendas, dedicada a ofrecer microcréditos y seguros a tenderos y comerciantes del suroccidente colombiano. Opera bajo la vigilancia de la Superintendencia de Sociedades de Colombia.</p>
        </section>

        <section>
          <h2>3. Uso del Sitio Web</h2>
          <p>Este sitio web es de carácter informativo. La información aquí contenida no constituye una oferta vinculante de productos financieros. Los productos y condiciones definitivas serán comunicados a través de nuestros asesores en sede.</p>
          <ul>
            <li>No usar el sitio para fines ilícitos o contrarios a la buena fe.</li>
            <li>No intentar acceder a sistemas o datos no autorizados.</li>
            <li>No reproducir el contenido sin autorización expresa de FundaFast.</li>
          </ul>
        </section>

        <section>
          <h2>4. Productos Financieros</h2>
          <p>Los productos financieros ofrecidos por FundaFast S.A.S. (Credifast, Crédito Susolución) están sujetos a evaluación crediticia, condiciones particulares y normativa colombiana vigente. La aprobación no es automática ni garantizada.</p>
          <p>Las tasas de interés, plazos y condiciones son informados por nuestros asesores al momento de la solicitud y pueden variar según el perfil del solicitante.</p>
        </section>

        <section>
          <h2>5. Seguros</h2>
          <p>Los convenios de seguros (Pan American Life, Funeraria Los Olivos) son ofrecidos por terceros aliados. FundaFast actúa como intermediario. Las condiciones específicas de cada seguro están contenidas en las pólizas correspondientes emitidas por cada aseguradora.</p>
        </section>

        <section>
          <h2>6. Propiedad Intelectual</h2>
          <p>Todo el contenido de este sitio (textos, imágenes, logotipos, diseño) es propiedad de FundaFast S.A.S. o de sus licenciantes. Queda prohibida su reproducción total o parcial sin autorización escrita.</p>
        </section>

        <section>
          <h2>7. Limitación de Responsabilidad</h2>
          <p>FundaFast S.A.S. no será responsable por daños directos o indirectos derivados del uso o imposibilidad de uso de este sitio web, ni por la exactitud de la información contenida en el mismo.</p>
        </section>

        <section>
          <h2>8. Enlaces a Terceros</h2>
          <p>Este sitio puede contener enlaces a sitios de terceros (portal PSE - Aval Pay Center, aliados estratégicos). FundaFast no se responsabiliza por el contenido ni las prácticas de privacidad de dichos sitios.</p>
        </section>

        <section>
          <h2>9. Ley Aplicable</h2>
          <p>Estos términos se rigen por las leyes de la República de Colombia. Cualquier controversia será sometida a los jueces competentes de la ciudad de Cali, Valle del Cauca.</p>
        </section>

        <section>
          <h2>10. Modificaciones</h2>
          <p>FundaFast S.A.S. se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entran en vigor desde su publicación en este sitio.</p>
        </section>

      </div>

      <div className="mt-12 rounded-2xl bg-ff-surface p-6">
        <p className="text-sm text-ff-text-muted">¿Tienes preguntas sobre nuestros términos?</p>
        <Link href="/contacto" className="mt-2 inline-flex items-center text-sm font-semibold text-ff-blue hover:underline">
          Contáctanos →
        </Link>
      </div>
    </div>
  );
}
