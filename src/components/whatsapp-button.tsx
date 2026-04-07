"use client";

import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20cr%C3%A9ditos%20FundaFast.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/40 transition-all hover:scale-110 hover:bg-green-600 hover:shadow-xl"
    >
      <MessageCircle className="h-7 w-7 fill-white" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-ff-red text-[10px] font-bold">
        1
      </span>
    </a>
  );
}
