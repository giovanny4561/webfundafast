import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-7xl font-bold text-ff-blue">404</p>
      <h1 className="mt-4 text-2xl font-bold text-ff-text">
        Página no encontrada
      </h1>
      <p className="mt-2 text-ff-text-muted">
        Lo sentimos, la página que buscas no existe.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-lg bg-ff-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ff-blue-light"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}
