"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { printables, printableTypeColors, type PrintableType } from "@/lib/data";

const TYPE_ICONS: Record<PrintableType, string> = {
  "Coloring Page":  "✏",
  "Lesson Sheet":   "◈",
  "Activity Card":  "✦",
  "Sing-Along":     "♪",
  "Poster":         "◉",
};

// Hand-pick 6 cards that show the variety + character art
const PREVIEW_IDS = [
  "pip-coloring",
  "coral-coloring",
  "bubbles-coloring",
  "feelings-wheel",
  "feeling-cards",
  "wiggle-lyrics",
];
const preview = PREVIEW_IDS.map((id) => printables.find((p) => p.id === id)).filter(Boolean) as typeof printables;

// Decorative abstract shapes for cards without a character
const PATTERNS: Record<string, { shapes: { cx: string; cy: string; r: string }[] }> = {
  "feelings-wheel":  { shapes: [{ cx:"50%", cy:"40%", r:"35%" }, { cx:"75%", cy:"65%", r:"20%" }, { cx:"20%", cy:"70%", r:"15%" }] },
  "feeling-cards":   { shapes: [{ cx:"30%", cy:"35%", r:"30%" }, { cx:"70%", cy:"55%", r:"25%" }, { cx:"55%", cy:"80%", r:"18%" }] },
  "wiggle-lyrics":   { shapes: [{ cx:"60%", cy:"30%", r:"28%" }, { cx:"25%", cy:"60%", r:"22%" }, { cx:"75%", cy:"75%", r:"16%" }] },
};

export default function HomePrintables() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FBF8F3" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <p
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#854F0B", opacity: 0.6, fontFamily: "var(--font-body), sans-serif" }}
              >
                Free downloads
              </p>
              <span
                className="flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold"
                style={{ backgroundColor: "#FFF3E0", color: "#854F0B", fontFamily: "var(--font-body), sans-serif" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                Coming soon
              </span>
            </div>
            <h2
              className="display-lg font-black leading-none"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}
            >
              Printables
            </h2>
            <p
              className="mt-3 text-sm opacity-60 max-w-xs"
              style={{ fontFamily: "var(--font-body), sans-serif", color: "#061E3A" }}
            >
              Coloring pages, activity cards, sing-alongs — all free, print at home.
            </p>
          </div>
          <Link
            href="/printables"
            className="self-start sm:self-auto shrink-0 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
            style={{
              backgroundColor: "#E8601C",
              color: "#fff",
              fontFamily: "var(--font-heading), sans-serif",
              boxShadow: "0 4px 16px rgba(232,96,28,0.3)",
            }}
          >
            Browse all printables →
          </Link>
        </motion.div>

        {/* Preview grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {preview.map((p, i) => {
            const typeColor = printableTypeColors[p.type];
            const icon = TYPE_ICONS[p.type];
            const hasChar = !!p.character;
            const pattern = PATTERNS[p.id];
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="group rounded-2xl overflow-hidden cursor-default"
                style={{
                  backgroundColor: "white",
                  boxShadow: "0 2px 0 0 rgba(6,30,58,0.06), 0 8px 24px rgba(6,30,58,0.09)",
                }}
              >
                {/* Thumbnail */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: "3/4",
                    background: hasChar
                      ? `linear-gradient(160deg, ${p.color}30 0%, ${p.color}15 100%)`
                      : `linear-gradient(135deg, ${p.color}25 0%, ${p.color}10 100%)`,
                  }}
                >
                  {hasChar ? (
                    /* Character image — show bottom half for feet-up feel */
                    <div className="absolute inset-0">
                      <Image
                        src={`/characters/${p.character!.toLowerCase()}.png`}
                        alt={p.character!}
                        fill
                        className="object-cover object-top scale-110 group-hover:scale-125 transition-transform duration-500"
                        sizes="160px"
                      />
                      {/* Gradient overlay — bottom fade to white */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to bottom, transparent 30%, ${p.color}55 75%, white 100%)`,
                        }}
                      />
                    </div>
                  ) : (
                    /* Abstract shape pattern for non-character cards */
                    <div className="absolute inset-0">
                      <svg viewBox="0 0 100 133" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        {(pattern?.shapes ?? []).map((s, j) => (
                          <circle key={j} cx={s.cx} cy={s.cy} r={s.r} fill={p.color} opacity={0.12 + j * 0.04} />
                        ))}
                      </svg>
                      {/* Large centered icon */}
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ fontSize: 40, opacity: 0.18, color: p.color }}
                      >
                        {icon}
                      </div>
                    </div>
                  )}

                  {/* Type badge top-left */}
                  <div className="absolute top-2.5 left-2.5">
                    <span
                      className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-black"
                      style={{ backgroundColor: `${p.color}22`, color: p.color }}
                    >
                      {icon}
                    </span>
                  </div>

                  {/* Coming soon badge */}
                  {p.comingSoon && (
                    <div className="absolute bottom-2.5 inset-x-2.5">
                      <span
                        className="block text-center px-2 py-0.5 rounded-full text-xs font-bold"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.85)",
                          color: "#061E3A",
                          fontFamily: "var(--font-body), sans-serif",
                          backdropFilter: "blur(4px)",
                        }}
                      >
                        Soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Label */}
                <div className="p-3">
                  <p
                    className="text-[10px] font-bold mb-0.5 truncate"
                    style={{ color: typeColor, fontFamily: "var(--font-body), sans-serif" }}
                  >
                    {p.type}
                  </p>
                  <p
                    className="text-xs font-black leading-tight line-clamp-2"
                    style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}
                  >
                    {p.title}
                  </p>
                  {p.ageRange && (
                    <p
                      className="mt-1 text-[10px] opacity-40"
                      style={{ fontFamily: "var(--font-body), sans-serif", color: "#061E3A" }}
                    >
                      Ages {p.ageRange}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Categories strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-3 items-center"
        >
          {(Object.entries(printableTypeColors) as [PrintableType, string][]).map(([type, color]) => {
            const count = printables.filter((p) => p.type === type).length;
            return (
              <Link
                key={type}
                href="/printables"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all hover:scale-105"
                style={{
                  backgroundColor: `${color}12`,
                  color,
                  fontFamily: "var(--font-body), sans-serif",
                  border: `1px solid ${color}25`,
                }}
              >
                <span>{TYPE_ICONS[type]}</span>
                <span>{type}</span>
                <span className="opacity-50">({count})</span>
              </Link>
            );
          })}
          <span
            className="text-xs opacity-40 ml-1"
            style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}
          >
            All free · Print at home
          </span>
        </motion.div>
      </div>
    </section>
  );
}
