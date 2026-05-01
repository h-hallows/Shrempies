import Link from "next/link";
import { songs, categoryColors } from "@/lib/data";
import PlatformLinks from "@/components/ui/PlatformLinks";
import FadeIn from "@/components/ui/FadeIn";

const preview = songs.slice(0, 6);

// Category icon map
const CATEGORY_ICONS: Record<string, string> = {
  "Lullabies & Calm": "◑",
  "Dance & Movement": "◈",
  "Emotional Learning": "♡",
  "Adventure & Exploration": "◎",
  "Social & Friendship": "✦",
  "Silliness & Play": "⬡",
};

export default function HomeSongs() {
  return (
    <section
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "linear-gradient(170deg, #FBF8F3 0%, #EBF5F0 40%, #F0EDE8 100%)" }}
    >
      {/* Subtle top wave */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ transform: "scaleY(-1)" }}>
        <svg aria-hidden="true" viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full" style={{ height: 40 }}>
          <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,10 1440,20 L1440,40 L0,40 Z" fill="#F0F9F4" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "#085041", fontFamily: "var(--font-body), sans-serif" }}
            >
              The music
            </p>
            <h2
              className="display-lg font-black leading-none"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}
            >
              36 original<br />songs
            </h2>
          </div>
          <p
            className="text-base opacity-60 max-w-xs sm:text-right"
            style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}
          >
            Lullabies, dance songs, emotional learning, adventure anthems — music that actually does something.
          </p>
        </FadeIn>

        {/* Song list — editorial style */}
        <div className="flex flex-col">
          {preview.map((song, i) => {
            const color = categoryColors[song.category] ?? "#085041";
            const icon = CATEGORY_ICONS[song.category] ?? "◎";
            return (
              <FadeIn
                key={song.title}
                delay={i * 80}
                className="group relative flex items-center gap-5 sm:gap-8 py-5 cursor-default"
                style={{
                  borderBottom: i < preview.length - 1 ? "1px solid rgba(6,30,58,0.07)" : "none",
                }}
              >
                {/* Color accent line */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: color }}
                />

                {/* Number */}
                <div
                  className="shrink-0 text-sm font-black opacity-25 w-7 text-right"
                  style={{ color: "#061E3A", fontFamily: "var(--font-heading), sans-serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Icon bubble */}
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-base transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${color}18`, color }}
                >
                  {icon}
                </div>

                {/* Title + hook */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-black text-base sm:text-lg leading-tight truncate"
                    style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}
                  >
                    {song.title}
                  </h3>
                  <p
                    className="text-sm mt-0.5 opacity-55 truncate"
                    style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}
                  >
                    {song.hook}
                  </p>
                </div>

                {/* Category pill */}
                <div
                  className="hidden sm:block shrink-0 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: `${color}15`,
                    color,
                    fontFamily: "var(--font-body), sans-serif",
                  }}
                >
                  {song.category}
                </div>

                {/* Equalizer bars + play hint */}
                <div className="shrink-0 flex items-center gap-3">
                  {/* Animated sound bars */}
                  <div className="hidden sm:flex items-end gap-0.5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[1, 2, 3, 4].map((bar) => (
                      <div
                        key={bar}
                        className="w-1 rounded-full"
                        style={{
                          backgroundColor: color,
                          height: `${[60, 100, 45, 80][bar - 1]}%`,
                          animation: `eq-bar-${bar} ${0.6 + bar * 0.15}s ease-in-out infinite alternate`,
                        }}
                      />
                    ))}
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ backgroundColor: color }}
                  >
                    <span className="text-white text-xs pl-0.5">▶</span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Fade + CTA */}
        <FadeIn delay={400} className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xs opacity-40 mb-2" style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
              + 30 more songs · hundreds in development
            </p>
            <PlatformLinks variant="pills" />
          </div>
          <Link
            href="/songs"
            className="shrink-0 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105"
            style={{
              backgroundColor: "#085041",
              color: "white",
              fontFamily: "var(--font-heading), sans-serif",
              boxShadow: "0 4px 20px rgba(8,80,65,0.25)",
            }}
          >
            See all 36 songs →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
