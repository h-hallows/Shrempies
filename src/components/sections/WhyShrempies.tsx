
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import CountUp from "@/components/ui/CountUp";

const props = [
  {
    icon: "♡",
    title: "Emotionally intelligent",
    body: "Every song, story, and character is built around naming feelings — not hiding them. Children deserve content that takes their inner life seriously.",
    color: "#E8601C",
    accent: "#FF6B35",
  },
  {
    icon: "◎",
    title: "Developmentally grounded",
    body: "From lullabies that regulate to movement songs that address the activity deficit — everything is designed around how young minds actually grow.",
    color: "#0D9488",
    accent: "#14B8A6",
  },
  {
    icon: "✦",
    title: "Actually beautiful",
    body: "Children deserve beauty, not noise. Shrempies is ocean-rich, warm, textured, and full of wonder — a world you'll want to visit with them.",
    color: "#F5A623",
    accent: "#FBBF24",
  },
];

const NUMBERS = [
  { value: "36", label: "Original songs", sub: "Volumes 1 & 2" },
  { value: "16", label: "Episode scripts", sub: "7–11 min episodes" },
  { value: "13", label: "Characters", sub: "Full personality arcs" },
  { value: "0", label: "Ads to children", sub: "Zero. Ever." },
];

export default function WhyShrempies() {
  return (
    <section
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(175deg, #065F46 0%, #0D9488 40%, #06B6D4 100%)",
      }}
    >
      {/* Ambient light layer */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse 70% 50% at 80% 20%, rgba(186,230,253,0.18) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 10% 70%, rgba(255,255,255,0.08) 0%, transparent 55%)
        `,
      }} />

      {/* Bubble decorations */}
      {[
        { x: "5%",  y: "20%", size: 80,  opacity: 0.06 },
        { x: "92%", y: "15%", size: 120, opacity: 0.05 },
        { x: "88%", y: "75%", size: 60,  opacity: 0.08 },
        { x: "3%",  y: "80%", size: 100, opacity: 0.05 },
      ].map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float pointer-events-none hidden lg:block"
          style={{
            left: b.x, top: b.y,
            width: b.size, height: b.size,
            border: `2px solid rgba(255,255,255,${b.opacity * 5})`,
            backgroundColor: `rgba(255,255,255,${b.opacity})`,
            animationDelay: `${i * 1.2}s`,
          }}
        />
      ))}

      {/* Bioluminescent micro-particles */}
      {[
        { x: "18%", y: "35%", delay: "0s" },
        { x: "45%", y: "10%", delay: "1.3s" },
        { x: "72%", y: "28%", delay: "0.7s" },
        { x: "85%", y: "55%", delay: "2s" },
        { x: "30%", y: "72%", delay: "1.6s" },
        { x: "60%", y: "80%", delay: "0.4s" },
        { x: "10%", y: "58%", delay: "2.4s" },
      ].map((p, i) => (
        <div
          key={`particle-${i}`}
          className="absolute pointer-events-none hidden lg:block animate-sparkle"
          style={{ left: p.x, top: p.y, animationDelay: p.delay, width: 6, height: 6 }}
        >
          <svg viewBox="0 0 20 20" fill="rgba(94,234,212,0.7)">
            <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z" />
          </svg>
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <p
            className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: "rgba(186,230,253,0.80)", fontFamily: "var(--font-body), sans-serif" }}
          >
            Why Shrempies
          </p>
          <h2
            className="display-lg font-black"
            style={{
              fontFamily: "var(--font-heading), sans-serif",
              color: "#fff",
              textShadow: "0 2px 30px rgba(0,0,0,0.15)",
            }}
          >
            Built different,<br />
            <span style={{ color: "#FDE68A" }}>on purpose.</span>
          </h2>
        </FadeIn>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {props.map((p, i) => (
            <FadeIn
              key={p.title}
              delay={i * 120}
              className="rounded-3xl p-9 flex flex-col gap-5 transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div
                className="text-2xl w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${p.color}25`, color: "#fff" }}
              >
                {p.icon}
              </div>
              <h3
                className="text-2xl font-black"
                style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}
              >
                {p.title}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body), sans-serif" }}
              >
                {p.body}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* Numbers strip */}
        <FadeIn
          delay={200}
          className="rounded-3xl p-8 sm:p-10 mb-12"
          style={{
            background: "rgba(0,0,0,0.18)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {NUMBERS.map((n, i) => (
              <FadeIn
                key={n.label}
                delay={300 + i * 80}
              >
                <div
                  className="text-4xl sm:text-5xl font-black mb-1"
                  style={{
                    fontFamily: "var(--font-heading), sans-serif",
                    color: "#FDE68A",
                    textShadow: "0 0 30px rgba(251,191,36,0.5)",
                  }}
                >
                  <CountUp value={n.value} duration={1800} />
                </div>
                <div className="text-sm font-bold mb-1" style={{ color: "#fff", fontFamily: "var(--font-heading), sans-serif" }}>
                  {n.label}
                </div>
                <div className="text-xs opacity-50" style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
                  {n.sub}
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* Quote */}
        <FadeIn delay={300} className="text-center">
          <p
            className="text-2xl sm:text-3xl font-black leading-snug max-w-3xl mx-auto mb-8"
            style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}
          >
            "Built for the first generation
            <span style={{ color: "#FDE68A" }}> to grow up alongside AI."</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/parents"
              className="px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1.5px solid rgba(255,255,255,0.30)",
                color: "#fff",
                fontFamily: "var(--font-body), sans-serif",
                backdropFilter: "blur(8px)",
              }}
            >
              Parent guide →
            </Link>
            <Link
              href="/about"
              className="px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.80)",
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              Our story →
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden pointer-events-none">
        <svg aria-hidden="true" viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,32 C360,64 720,0 1080,32 C1260,48 1380,24 1440,32 L1440,64 L0,64 Z" fill="#FBF8F3" />
        </svg>
      </div>
    </section>
  );
}
