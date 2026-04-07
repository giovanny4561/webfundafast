"use client";

import CookieConsent from "react-cookie-consent";
import Link from "next/link";

export function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      cookieName="fundafast-cookie-consent"
      expires={365}
      buttonText="Aceptar"
      declineButtonText="Rechazar"
      enableDeclineButton
      flipButtons
      style={{
        background: "#0f172a",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        fontSize: "14px",
        alignItems: "center",
        padding: "12px 24px",
        zIndex: 9999,
      }}
      contentStyle={{ margin: "0", flex: "1 0 220px" }}
      buttonStyle={{
        background: "#e02e2e",
        color: "#fff",
        fontSize: "13px",
        fontWeight: "600",
        borderRadius: "8px",
        padding: "8px 20px",
        margin: "6px",
        cursor: "pointer",
      }}
      declineButtonStyle={{
        background: "transparent",
        border: "1px solid rgba(255,255,255,0.25)",
        color: "#94a3b8",
        fontSize: "13px",
        borderRadius: "8px",
        padding: "8px 16px",
        margin: "6px",
        cursor: "pointer",
      }}
    >
      <span style={{ color: "#e2e8f0" }}>
        Usamos cookies para mejorar tu experiencia.{" "}
        <Link
          href="/politica-privacidad"
          style={{ color: "#93c5fd", textDecoration: "underline" }}
        >
          Política de Privacidad
        </Link>
        .
      </span>
    </CookieConsent>
  );
}
