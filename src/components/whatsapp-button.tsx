"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import { CONTACT_INFO } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber={CONTACT_INFO.whatsapp}
      accountName="FundaFast"
      avatar="/images/logo-fundafast.png"
      statusMessage="Normalmente responde en minutos"
      chatMessage="¡Hola! 👋 ¿En qué podemos ayudarte hoy? Solicita tu Credifast o pregunta sobre nuestros servicios."
      placeholder="Escribe un mensaje..."
      messageDelay={1}
      notification
      notificationDelay={30}
      notificationLoop={2}
      allowClickAway
      allowEsc
      buttonStyle={{ backgroundColor: "#22c55e" }}
    />
  );
}
