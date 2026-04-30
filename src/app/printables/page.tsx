"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { printables, printableTypeColors, type PrintableType, type PrintableTheme } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

const TYPE_FILTERS: { value: PrintableType | "All"; label: string; icon: string }[] = [
  { value: "All",           label: "Everything",     icon: "◎" },
  { value: "Coloring Page", label: "Coloring Pages", icon: "✏" },
  { value: "Lesson Sheet",  label: "Lesson Sheets",  icon: "◈" },
  { value: "Activity Card", label: "Activity Cards", icon: "✦" },
  { value: "Sing-Along",    label: "Sing-Alongs",    icon: "♪" },
  { value: "Poster",        label: "Posters",        icon: "◉" },
];

const THEME_FILTERS: { value: PrintableTheme | "All"; label: string }[] = [
  { value: "All",       label: "All themes" },
  { value: "Feelings",  label: "Feelings" },
  { value: "Characters", label: "Characters" },
  { value: "Movement",  label: "Movement" },
  { value: "Learning",  label: "Learning" },
  { value: "Ocean",     label: "Ocean" },
];

// Placeholder thumbnail — colored card with icon until real image exists
function PrintableThumbnail({ printable }: { printable: typeof printables[0] }) {
  const [imgError, setImgError] = useState(false);
  const color = printable.color;
  const typeIcon = { "Coloring Page": "✏", "Lesson Sheet": "◈", "Activity Card": "✦", "Sing-Along": "♪", "Poster": "◉" }[printable.type] ?? "◎";

  if (!imgError && !printable.comingSoon) {
    return (
      <div className="relative w-full h-full">
        <Image
          src={`/printables/thumbnails/${printable.id}.jpg`}
          alt={printable.title}
          fill
          className="object-cover"
          sizes="300px"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6"
      style={{ background: `linear-gradient(135deg, ${color}22 0%, ${color}0a 100%)` }}>
      <div className="text-4xl opacity-25" style={{ color }}>{typeIcon}</div>
      <div className="text-center">
        <p className="text-xs font-black uppercase tracking-wider opacity-40"
          style={{ color, fontFamily: "var(--font-heading), sans-serif" }}>
          {printable.type}
        </p>
      </div>
    </div>
  );
}

export default function PrintablesPage() {
  const [activeType, setActiveType] = useState<PrintableType | "All">("All");
  const [activeTheme, setActiveTheme] = useState<PrintableTheme | "All">("All");

  const filtered = useMemo(() => {
    return printables.filter((p) => {
      if (activeType !== "All" && p.type !== activeType) return false;
      if (activeTheme !== "All" && p.theme !== activeTheme) return false;
      return true;
    });
  }, [activeType, activeTheme]);

  const totalAvailable = printables.filter((p) => !p.comingSoon).length;

  return (
    <div style={{ backgroundColor: "#FBF8F3" }}>
      {/* Hero */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #854F0B 0%, #E8601C 40%, #F5A623 100%)" }}
      >
        {/* Texture overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

        {/* Floating shapes */}
        {["✏", "◈", "✦", "♪", "◉", "★"].map((icon, i) => (
          <div key={i} className="absolute text-white opacity-10 font-black select-none pointer-events-none animate-float"
            style={{ left: `${8 + i * 16}%`, top: `${20 + (i % 3) * 30}%`, fontSize: 32 + i * 4,
              animationDelay: `${i * 0.7}s`, animationDuration: `${5 + i}s` }}>
            {icon}
          </div>
        ))}

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Coming soon banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-bold"
              style={{ backgroundColor: "rgba(255,255,255,0.25)", color: "#fff", fontFamily: "var(--font-body), sans-serif" }}>
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Free printables — coming soon
            </div>

            <h1 className="display-lg font-black mb-4 leading-tight"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}>
              Free Printables
            </h1>
            <p className="text-lg opacity-80 max-w-xl mb-6"
              style={{ color: "#fff", fontFamily: "var(--font-body), sans-serif" }}>
              Coloring pages, lesson sheets, activity cards, sing-along lyric sheets — all free to download and print at home.
            </p>
            <div className="flex flex-wrap gap-3 text-sm font-bold"
              style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-body), sans-serif" }}>
              <span>✏ Coloring pages</span>
              <span>·</span>
              <span>◈ Lesson sheets</span>
              <span>·</span>
              <span>✦ Activity cards</span>
              <span>·</span>
              <span>♪ Sing-alongs</span>
              <span>·</span>
              <span>◉ Posters</span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-14 overflow-hidden">
          <svg aria-hidden="true" viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,14 1440,28 L1440,56 L0,56 Z" fill="#FBF8F3" />
          </svg>
        </div>
      </section>

      {/* Sticky filter bar */}
      <div className="sticky top-16 z-30 border-b"
        style={{ backgroundColor: "rgba(251,248,243,0.95)", backdropFilter: "blur(16px)", borderColor: "rgba(6,30,58,0.08)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          {/* Type filter */}
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 flex-1" style={{ scrollbarWidth: "none" }}>
            {TYPE_FILTERS.map((f) => {
              const isActive = activeType === f.value;
              const color = f.value === "All" ? "#061E3A" : printableTypeColors[f.value as PrintableType];
              return (
                <button key={f.value} onClick={() => setActiveType(f.value)}
                  className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all"
                  style={{
                    backgroundColor: isActive ? color : "transparent",
                    color: isActive ? "#fff" : color,
                    border: `1.5px solid ${color}${isActive ? "00" : "35"}`,
                    fontFamily: "var(--font-body), sans-serif",
                  }}>
                  <span>{f.icon}</span>
                  <span className="hidden sm:inline">{f.label}</span>
                </button>
              );
            })}
          </div>

          {/* Theme filter */}
          <div className="flex gap-2 shrink-0">
            {THEME_FILTERS.map((f) => {
              const isActive = activeTheme === f.value;
              return (
                <button key={f.value} onClick={() => setActiveTheme(f.value)}
                  className="shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-all"
                  style={{
                    backgroundColor: isActive ? "#085041" : "transparent",
                    color: isActive ? "#fff" : "#085041",
                    border: `1px solid ${isActive ? "transparent" : "rgba(8,80,65,0.25)"}`,
                    fontFamily: "var(--font-body), sans-serif",
                  }}>
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs opacity-40 mb-8" style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
            {filtered.length} printable{filtered.length !== 1 ? "s" : ""}
            {totalAvailable > 0 ? ` · ${totalAvailable} available to download` : " · All coming soon"}
          </p>

          <AnimatePresence mode="wait">
            <motion.div key={`${activeType}-${activeTheme}`}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filtered.map((p, i) => {
                const typeColor = printableTypeColors[p.type];
                return (
                  <motion.div key={p.id}
                    initial={{ opacity: 0, y: 16, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35, delay: Math.min(i * 0.05, 0.4) }}
                    className="group flex flex-col rounded-2xl overflow-hidden"
                    style={{ backgroundColor: "white", boxShadow: "0 2px 0 0 rgba(6,30,58,0.06), 0 8px 24px rgba(6,30,58,0.07)" }}>

                    {/* Thumbnail — 3:4 ratio */}
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                      <PrintableThumbnail printable={p} />

                      {/* Coming soon overlay */}
                      {p.comingSoon && (
                        <div className="absolute inset-0 flex items-end justify-center pb-4"
                          style={{ background: "linear-gradient(to top, rgba(6,30,58,0.5) 0%, transparent 60%)" }}>
                          <span className="px-3 py-1 rounded-full text-xs font-bold text-white"
                            style={{ backgroundColor: "rgba(6,30,58,0.7)", fontFamily: "var(--font-body), sans-serif",
                              backdropFilter: "blur(8px)" }}>
                            Coming soon
                          </span>
                        </div>
                      )}

                      {/* Age badge */}
                      {p.ageRange && (
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-bold"
                          style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "#061E3A",
                            fontFamily: "var(--font-body), sans-serif" }}>
                          {p.ageRange}y
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-4 flex flex-col gap-2 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: `${typeColor}15`, color: typeColor,
                            fontFamily: "var(--font-body), sans-serif" }}>
                          {p.type}
                        </span>
                      </div>
                      <h3 className="font-black text-sm leading-snug"
                        style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
                        {p.title}
                      </h3>

                      {/* Download / coming soon button */}
                      {p.comingSoon ? (
                        <div className="mt-auto pt-2">
                          <div className="w-full py-2 rounded-xl text-center text-xs font-bold opacity-40 cursor-default"
                            style={{ border: "1.5px dashed rgba(6,30,58,0.2)", color: "#061E3A",
                              fontFamily: "var(--font-body), sans-serif" }}>
                            Coming soon
                          </div>
                        </div>
                      ) : (
                        <div className="mt-auto pt-2">
                          <a href={`/printables/files/${p.id}.pdf`} download
                            className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl text-xs font-bold text-white transition-all hover:scale-105"
                            style={{ backgroundColor: typeColor, fontFamily: "var(--font-body), sans-serif" }}>
                            <span>↓</span>
                            <span>Download Free</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Notify when ready */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mt-16 rounded-3xl p-10 text-center"
            style={{ background: "linear-gradient(135deg, #854F0B 0%, #E8601C 60%, #F5A623 100%)" }}>
            <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-10"
              style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-3"
              style={{ color: "#fff", fontFamily: "var(--font-body), sans-serif" }}>
              Be first to know
            </p>
            <h3 className="text-2xl font-black mb-2"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}>
              New printables dropping soon
            </h3>
            <p className="text-sm opacity-70 mb-6"
              style={{ color: "#fff", fontFamily: "var(--font-body), sans-serif" }}>
              We're adding coloring pages, lesson sheets, activity cards and more. Join the list and we'll tell you first.
            </p>
            <Link href="/contact"
              className="inline-block px-7 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{ backgroundColor: "rgba(255,255,255,0.25)", color: "#fff",
                border: "2px solid rgba(255,255,255,0.5)", fontFamily: "var(--font-heading), sans-serif" }}>
              Notify me →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
