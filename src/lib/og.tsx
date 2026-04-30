import { ImageResponse } from "next/og";

// Shared OG image template. Each route's opengraph-image.tsx imports this and
// passes its own title, eyebrow, and accent color.
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export function ogImage({
  eyebrow,
  title,
  subtitle,
  accent = "#F5A623",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  accent?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          background:
            "linear-gradient(160deg, #042c53 0%, #061E3A 35%, #053d2e 100%)",
          color: "#FBF8F3",
          position: "relative",
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            right: -180,
            top: -180,
            borderRadius: 9999,
            background: `radial-gradient(circle, ${accent}33 0%, transparent 60%)`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            left: -120,
            bottom: -120,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(94,234,212,0.18) 0%, transparent 60%)",
            display: "flex",
          }}
        />

        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: "-0.01em",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#061E3A",
                fontSize: 22,
                fontWeight: 900,
              }}
            >
              s
            </div>
            <span style={{ display: "flex" }}>shrempies</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              color: "rgba(214,245,234,0.65)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            shrempies.com
          </div>
        </div>

        {/* Body */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, zIndex: 1, maxWidth: 940 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: accent,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 800,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              color: "#FBF8F3",
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                display: "flex",
                fontSize: 30,
                color: "rgba(214,245,234,0.78)",
                lineHeight: 1.3,
                fontWeight: 500,
                maxWidth: 880,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1,
            fontSize: 22,
            color: "rgba(214,245,234,0.6)",
            fontWeight: 600,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                display: "flex",
                width: 8,
                height: 8,
                borderRadius: 9999,
                background: "#5EEAD4",
              }}
            />
            Where every feeling has a name.
          </div>
          <div style={{ display: "flex", color: "rgba(214,245,234,0.45)" }}>
            zero ads · zero data
          </div>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
