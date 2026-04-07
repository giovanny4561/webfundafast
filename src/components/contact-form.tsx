"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <p className="text-lg font-semibold text-green-800">
          Mensaje enviado exitosamente
        </p>
        <p className="mt-2 text-green-700">
          Nos pondremos en contacto contigo pronto.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-green-600 underline hover:text-green-800"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ff-text">
          Nombre Completo
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-ff-blue focus:outline-none focus:ring-2 focus:ring-ff-blue/20"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ff-text">
          Tu Celular
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-ff-blue focus:outline-none focus:ring-2 focus:ring-ff-blue/20"
          placeholder="300 123 4567"
        />
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ff-text">
          Asunto
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-ff-blue focus:outline-none focus:ring-2 focus:ring-ff-blue/20"
          placeholder="Asunto de tu mensaje"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ff-text">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-ff-blue focus:outline-none focus:ring-2 focus:ring-ff-blue/20 resize-none"
          placeholder="Escribe tu mensaje aquí..."
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-lg bg-ff-red px-8 py-3 font-semibold text-white transition-all hover:bg-ff-red-hover hover:shadow-lg"
      >
        <Send className="h-4 w-4" />
        Enviar Mensaje
      </button>
    </form>
  );
}
