import { ImageResponse } from "next/og";

export const alt = "Nexorum";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "radial-gradient(circle at top left, rgba(67, 138, 255, 0.28), transparent 34%), linear-gradient(135deg, #04070b 0%, #081018 58%, #0b1622 100%)",
          color: "#f5f8fb",
          overflow: "hidden",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.00) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.04) 0, rgba(255,255,255,0.00) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            opacity: 0.18,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            padding: "72px 88px",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <div
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "999px",
                background: "#73b3ff",
                boxShadow: "0 0 24px rgba(115, 179, 255, 0.7)",
              }}
            />
            <div
              style={{
                display: "flex",
                fontSize: 28,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "#b9c9d8",
              }}
            >
              Decision Intelligence Infrastructure
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 118,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              lineHeight: 0.95,
            }}
          >
            Nexorum
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: "860px",
              fontSize: 34,
              lineHeight: 1.35,
              color: "#d6e0e8",
            }}
          >
            AI infrastructure for EPC projects focused on predictive governance of schedule, cost, margin, and outcomes.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
