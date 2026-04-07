"use client";

import { useState, type FormEvent } from "react";
import { Send, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;

    const text = encodeURIComponent(
      `Hola FundaFast, soy *${name}*.\n\n*Asunto:* ${subject}\n\n${message}\n\n_Mi celular: ${phone}_`
    );

    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${text}`, "_blank");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <MessageCircle className="mx-auto h-10 w-10 text-green-500" />
        <p className="mt-4 text-lg font-semibold text-green-800">
          ¡Mensaje listo en WhatsApp!
        </p>
        <p className="mt-2 text-sm text-green-700">
          Se abrió WhatsApp con tu mensaje. Si no se abrió,{" "}
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            haz clic aquí
          </a>.
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
          placeholder="¿En qué te podemos ayudar?"
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
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-ff-blue focus:outline-none focus:ring-2 focus:ring-ff-blue/20"
          placeholder="Escribe tu mensaje aquí..."
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-8 py-3.5 font-semibold text-white transition-all hover:bg-green-600 hover:shadow-lg sm:w-auto"
      >
        <Send className="h-4 w-4" />
        Enviar por WhatsApp
      </button>
    </form>
  );
}
