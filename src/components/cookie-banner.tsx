"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookies-accepted")) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-ff-blue-dark/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-4 sm:flex-row sm:items-center">
        <p className="text-sm text-blue-200">
          Usamos cookies para mejorar tu experiencia.{" "}
          <Link href="/politica-privacidad" className="underline hover:text-white">
            Política de privacidad
          </Link>
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={accept}
            className="rounded-lg bg-ff-red px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-ff-red-hover"
          >
            Aceptar
          </button>
          <button
            onClick={accept}
            aria-label="Cerrar"
            className="text-blue-300 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
