import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "FundaFast S.A.S. — Microcrédito para Tenderos en Colombia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1E3A5F 0%, #1E40AF 60%, #3B82F6 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Red accent bar */}
        <div
          style={{
            width: "80px",
            height: "6px",
            background: "#DC2626",
            borderRadius: "3px",
            marginBottom: "32px",
          }}
        />
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          FundaFast
        </div>
        <div
          style={{
            fontSize: "36px",
            fontWeight: 400,
            color: "#BFDBFE",
            lineHeight: 1.4,
            maxWidth: "800px",
            marginBottom: "48px",
          }}
        >
          Microcrédito rápido para tenderos colombianos
        </div>
        <div
          style={{
            display: "flex",
            gap: "24px",
          }}
        >
          {["Cali", "Pasto", "Palmira", "Pereira"].map((city) => (
            <div
              key={city}
              style={{
                background: "rgba(255,255,255,0.15)",
                borderRadius: "8px",
                padding: "8px 20px",
                color: "white",
                fontSize: "20px",
              }}
            >
              {city}
            </div>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            color: "#93C5FD",
            fontSize: "18px",
          }}
        >
          fundafast.com.co
        </div>
      </div>
    ),
    { ...size }
  );
}
