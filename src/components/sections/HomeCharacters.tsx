import Link from "next/link";
import Image from "next/image";
import { characters } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";

// Size variants for organic bubble layout
const SIZES = [100, 140, 100, 120, 100, 140, 120, 100, 140, 100, 120, 100, 140];
// Delay offsets for staggered float animation
const DELAYS = [0, 1.2, 2.4, 0.6, 1.8, 3.0, 0.3, 2.1, 1.5, 0.9, 2.7, 1.1, 0.4];

// Row distribution: 4 | 5 | 4 — centered, with vertical overlap
const ROWS = [
  [0, 1, 2, 3],
  [4, 5, 6, 7, 8],
  [9, 10, 11, 12],
];

export default function HomeCharacters() {
  const all = characters.featured;

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: "linear-gradient(180deg, #EDF7F2 0%, #FBF8F3 18%)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <FadeIn>
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "#085041", fontFamily: "var(--font-body), sans-serif" }}
            >
              The cast
            </p>
            <h2
              className="display-lg font-black leading-none"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}
            >
              13 original<br className="hidden sm:block" />characters
            </h2>
          </FadeIn>
          <Link
            href="/characters"
            className="self-start sm:self-auto shrink-0 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
            style={{
              backgroundColor: "#061E3A",
              color: "#fff",
              fontFamily: "var(--font-heading), sans-serif",
            }}
          >
            Meet them all →
          </Link>
        </div>

        {/* Organic bubble cluster — desktop */}
        <div className="hidden sm:block">
          {ROWS.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex justify-center items-end gap-4 sm:gap-6"
              style={{ marginTop: rowIdx > 0 ? "-28px" : 0 }}
            >
              {row.map((charIdx, i) => {
                const char = all[charIdx];
                const size = SIZES[charIdx];
                const delay = DELAYS[charIdx];
                const globalI = rowIdx * 5 + i;
                return (
                  <FadeIn
                    key={char.name}
                    delay={globalI * 70}
                    className="relative group cursor-pointer shrink-0 transition-transform duration-300 hover:scale-[1.14] hover:z-20"
                    style={{
                      width: size,
                      height: size,
                      animation: `float ${5 + delay}s ease-in-out infinite`,
                      animationDelay: `${delay}s`,
                    }}
                  >
                    <Link href="/characters" aria-label={`Meet ${char.name}`} className="absolute inset-0 z-30 rounded-full" />
                    {/* Outer pulse ring — animates on hover */}
                    <div
                      className="absolute rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500"
                      style={{
                        inset: -8,
                        border: `2px solid ${char.color}70`,
                        boxShadow: `0 0 20px 4px ${char.color}40, inset 0 0 10px ${char.color}20`,
                        animation: "none",
                      }}
                    />
                    {/* Second outer ring — offset */}
                    <div
                      className="absolute rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700"
                      style={{
                        inset: -16,
                        border: `1px solid ${char.color}35`,
                        transitionDelay: "60ms",
                      }}
                    />

                    {/* Bubble */}
                    <div
                      className="relative w-full h-full rounded-full overflow-hidden"
                      style={{
                        border: `3px solid ${char.color}55`,
                        boxShadow: `0 8px 32px ${char.color}30, 0 2px 8px rgba(0,0,0,0.08)`,
                        backgroundColor: char.color,
                      }}
                    >
                      <Image
                        src={`/characters/${char.name.toLowerCase()}.png`}
                        alt={char.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="160px"
                      />
                      {/* Hover overlay */}
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-end pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(to top, ${char.color}f0 0%, ${char.color}88 45%, transparent 100%)`,
                        }}
                      >
                        <p
                          className="text-white font-black text-sm text-center leading-tight px-2 tracking-wide"
                          style={{ fontFamily: "var(--font-heading), sans-serif", textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
                        >
                          {char.name}
                        </p>
                      </div>
                    </div>

                    {/* Deep glow shadow on hover */}
                    <div
                      className="absolute rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{
                        inset: 0,
                        boxShadow: `0 0 40px 12px ${char.color}50, 0 0 80px 20px ${char.color}25`,
                      }}
                    />
                  </FadeIn>
                );
              })}
            </div>
          ))}
        </div>

        {/* Mobile: horizontal scroll strip */}
        <div className="sm:hidden flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-none">
          {all.map((char, i) => (
            <FadeIn
              key={char.name}
              delay={i * 50}
              className="relative shrink-0 snap-start"
              style={{ width: 96 }}
            >
              <Link
                href="/characters"
                className="block transition-transform active:scale-90"
                aria-label={`Meet ${char.name}`}
              >
                <div
                  className="relative rounded-full overflow-hidden mx-auto"
                  style={{
                    width: 88, height: 88,
                    border: `2.5px solid ${char.color}55`,
                    boxShadow: `0 4px 16px ${char.color}30`,
                    backgroundColor: char.color,
                  }}
                >
                  <Image
                    src={`/characters/${char.name.toLowerCase()}.png`}
                    alt={char.name}
                    fill
                    className="object-cover object-top"
                    sizes="88px"
                  />
                </div>
                <p
                  className="mt-1.5 text-center text-xs font-bold"
                  style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}
                >
                  {char.name}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA pill */}
        <FadeIn delay={500} className="hidden sm:flex justify-center mt-12">
          <Link
            href="/characters"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105"
            style={{
              backgroundColor: "#F0F9F4",
              color: "#085041",
              border: "1.5px solid #085041",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            <span>Explore all 13 characters</span>
            <span>→</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
