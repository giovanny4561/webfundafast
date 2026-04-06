import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-7xl font-bold text-fundafast-blue">404</p>
      <h1 className="mt-4 text-2xl font-bold text-fundafast-text">
        Pagina no encontrada
      </h1>
      <p className="mt-2 text-fundafast-text-secondary">
        Lo sentimos, la pagina que buscas no existe.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-lg bg-fundafast-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-fundafast-blue-light"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}
