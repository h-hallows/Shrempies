"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { printables, printableTypeColors, type PrintableType } from "@/lib/data";

const TYPE_ICONS: Record<PrintableType, string> = {
  "Coloring Page":  "✏",
  "Lesson Sheet":   "◈",
  "Activity Card":  "✦",
  "Sing-Along":     "♪",
  "Poster":         "◉",
};

// Pick a diverse preview of 6 printables
const preview = [0, 2, 6, 9, 12, 16].map((i) => printables[i]).filter(Boolean);

export default function HomePrintables() {
  const allComingSoon = preview.every((p) => p.comingSoon);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FBF8F3" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-50"
                style={{ color: "#854F0B", fontFamily: "var(--font-body), sans-serif" }}>
                Free downloads
              </p>
              {allComingSoon && (
                <span className="flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold"
                  style={{ backgroundColor: "#FFF3E0", color: "#854F0B", fontFamily: "var(--font-body), sans-serif" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  Coming soon
                </span>
              )}
            </div>
            <h2 className="display-lg font-black leading-none"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
              Printables
            </h2>
          </div>
          <Link href="/printables"
            className="self-start sm:self-auto shrink-0 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
            style={{ backgroundColor: "#E8601C", color: "#fff", fontFamily: "var(--font-heading), sans-serif",
              boxShadow: "0 4px 16px rgba(232,96,28,0.3)" }}>
            Browse all printables →
          </Link>
        </motion.div>

        {/* Preview grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {preview.map((p, i) => {
            const typeColor = printableTypeColors[p.type];
            const icon = TYPE_ICONS[p.type];
            return (
              <motion.div key={p.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl overflow-hidden cursor-default"
                style={{ backgroundColor: "white",
                  boxShadow: "0 2px 0 0 rgba(6,30,58,0.05), 0 6px 20px rgba(6,30,58,0.07)" }}>
                {/* Thumbnail area */}
                <div className="relative flex items-center justify-center p-6"
                  style={{ aspectRatio: "3/4",
                    background: `linear-gradient(135deg, ${p.color}18 0%, ${p.color}08 100%)` }}>
                  <div className="text-4xl opacity-20" style={{ color: p.color }}>{icon}</div>

                  {/* Coming soon badge */}
                  {p.comingSoon && (
                    <div className="absolute bottom-3 inset-x-3 text-center">
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold"
                        style={{ backgroundColor: "rgba(6,30,58,0.08)", color: "#061E3A",
                          fontFamily: "var(--font-body), sans-serif" }}>
                        Soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Label */}
                <div className="p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-xs font-bold" style={{ color: typeColor }}>{icon}</span>
                    <span className="text-xs opacity-50 truncate"
                      style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                      {p.type}
                    </span>
                  </div>
                  <p className="text-xs font-black leading-tight line-clamp-2"
                    style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
                    {p.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Categories strip */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-3 items-center">
          {(Object.entries(printableTypeColors) as [PrintableType, string][]).map(([type, color]) => {
            const count = printables.filter((p) => p.type === type).length;
            return (
              <Link key={type} href={`/printables`}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all hover:scale-105"
                style={{ backgroundColor: `${color}12`, color, fontFamily: "var(--font-body), sans-serif" }}>
                <span>{TYPE_ICONS[type]}</span>
                <span>{type}</span>
                <span className="opacity-50">({count})</span>
              </Link>
            );
          })}
          <span className="text-xs opacity-40 ml-1"
            style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
            All free · Print at home
          </span>
        </motion.div>
      </div>
    </section>
  );
}
