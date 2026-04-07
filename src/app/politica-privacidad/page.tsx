import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | FundaFast S.A.S.",
  description: "Política de tratamiento de datos personales de FundaFast S.A.S. conforme a la Ley 1581 de 2012.",
  alternates: { canonical: "/politica-privacidad" },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-3xl font-bold text-ff-text sm:text-4xl">Política de Tratamiento de Datos Personales</h1>
      <p className="mt-3 text-sm text-ff-text-muted">Última actualización: enero de 2025</p>

      <div className="mt-10 space-y-10 text-ff-text-muted [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ff-text [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ul]:list-disc">

        <section>
          <h2>1. Responsable del Tratamiento</h2>
          <p><strong>FundaFast S.A.S.</strong>, identificada con NIT correspondiente, con domicilio principal en Cl. 30 Nte. #5N-07, San Vicente, Cali, Valle del Cauca, Colombia. Correo electrónico: <a href="mailto:contacto@fundafast.com.co" className="text-ff-blue hover:underline">contacto@fundafast.com.co</a>. Teléfono: +57 318 717 1931.</p>
        </section>

        <section>
          <h2>2. Marco Legal</h2>
          <p>La presente política se adopta en cumplimiento de la Ley Estatutaria 1581 de 2012, el Decreto Reglamentario 1377 de 2013 y demás normas concordantes sobre protección de datos personales en Colombia.</p>
        </section>

        <section>
          <h2>3. Datos Personales que Recopilamos</h2>
          <p>FundaFast S.A.S. puede recopilar los siguientes datos personales:</p>
          <ul>
            <li>Datos de identificación: nombre completo, número de cédula, fecha de nacimiento.</li>
            <li>Datos de contacto: dirección, teléfono, correo electrónico.</li>
            <li>Datos financieros: información crediticia, historial de pagos, ingresos.</li>
            <li>Datos de navegación: dirección IP, tipo de navegador, páginas visitadas (mediante cookies).</li>
          </ul>
        </section>

        <section>
          <h2>4. Finalidades del Tratamiento</h2>
          <p>Los datos personales serán tratados para las siguientes finalidades:</p>
          <ul>
            <li>Evaluar y otorgar productos financieros (microcréditos, seguros).</li>
            <li>Gestionar la relación contractual con clientes y proveedores.</li>
            <li>Enviar información comercial y de servicios de FundaFast S.A.S.</li>
            <li>Cumplir obligaciones legales ante entidades de control y vigilancia.</li>
            <li>Consultar y reportar información en centrales de riesgo.</li>
            <li>Mejorar la experiencia en nuestro sitio web.</li>
          </ul>
        </section>

        <section>
          <h2>5. Derechos del Titular</h2>
          <p>Como titular de datos personales, usted tiene derecho a:</p>
          <ul>
            <li>Conocer, actualizar y rectificar sus datos personales.</li>
            <li>Solicitar prueba de la autorización otorgada.</li>
            <li>Ser informado sobre el uso de sus datos.</li>
            <li>Revocar la autorización y/o solicitar la supresión de sus datos cuando no se respeten los principios de la ley.</li>
            <li>Acceder gratuitamente a sus datos personales.</li>
            <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).</li>
          </ul>
        </section>

        <section>
          <h2>6. Procedimiento para Ejercer sus Derechos</h2>
          <p>Para ejercer sus derechos, el titular puede enviar su solicitud a:</p>
          <ul>
            <li>Correo electrónico: <a href="mailto:contacto@fundafast.com.co" className="text-ff-blue hover:underline">contacto@fundafast.com.co</a></li>
            <li>Presencialmente en cualquiera de nuestras sedes (Cali, Pasto, Palmira, Pereira).</li>
          </ul>
          <p>FundaFast S.A.S. dará respuesta en un plazo máximo de diez (10) días hábiles para consultas y quince (15) días hábiles para reclamos.</p>
        </section>

        <section>
          <h2>7. Cookies</h2>
          <p>Nuestro sitio web utiliza cookies para mejorar la experiencia de navegación, analizar el tráfico y personalizar contenido. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.</p>
        </section>

        <section>
          <h2>8. Transferencia de Datos</h2>
          <p>FundaFast S.A.S. podrá compartir datos con aliados estratégicos (Pan American Life, Funeraria Los Olivos, Moto 8, Grupo Indufrial, Bravo) y con el ecosistema Distritiendas, única y exclusivamente para las finalidades descritas en esta política y con las garantías legales correspondientes.</p>
        </section>

        <section>
          <h2>9. Vigencia</h2>
          <p>La presente política rige a partir de su publicación y podrá ser modificada en cualquier momento. Los cambios serán informados a través de nuestro sitio web.</p>
        </section>

      </div>

      <div className="mt-12 rounded-2xl bg-ff-surface p-6">
        <p className="text-sm text-ff-text-muted">¿Tienes preguntas sobre el manejo de tus datos?</p>
        <Link href="/contacto" className="mt-2 inline-flex items-center text-sm font-semibold text-ff-blue hover:underline">
          Contáctanos →
        </Link>
      </div>
    </div>
  );
}
