"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { songs, categoryColors } from "@/lib/data";
import PlatformLinks from "@/components/ui/PlatformLinks";

// Purpose filter — what parent needs right now
const PURPOSES = [
  { id: "all", label: "All Songs", icon: "◎", color: "#061E3A" },
  { id: "bedtime", label: "Bedtime", icon: "◑", color: "#3C3489", cats: ["Lullabies & Calm"] },
  { id: "movement", label: "Dance & Move", icon: "◈", color: "#854F0B", cats: ["Dance & Movement"] },
  { id: "feelings", label: "Big Feelings", icon: "♡", color: "#993556", cats: ["Emotion & Feeling"] },
  { id: "learning", label: "Learning", icon: "✦", color: "#185FA5", cats: ["Educational"] },
  { id: "adventure", label: "Adventure", icon: "◉", color: "#085041", cats: ["Adventure & Story"] },
  { id: "characters", label: "Characters", icon: "★", color: "#993C1D", cats: ["Character Intros"] },
];

const CATEGORY_ICONS: Record<string, string> = {
  "Lullabies & Calm": "◑",
  "Dance & Movement": "◈",
  "Adventure & Story": "◉",
  "Educational": "✦",
  "Emotion & Feeling": "♡",
  "Character Intros": "★",
};

export default function SongsPage() {
  const [activePurpose, setActivePurpose] = useState("all");
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"list" | "grid">("list");

  const filtered = useMemo(() => {
    let result = songs;
    if (activePurpose !== "all") {
      const purpose = PURPOSES.find((p) => p.id === activePurpose);
      if (purpose?.cats) result = result.filter((s) => purpose.cats!.includes(s.category));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (s) => s.title.toLowerCase().includes(q) || s.hook.toLowerCase().includes(q) || s.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activePurpose, search]);

  // Group by category for "all" view
  const grouped = useMemo(() => {
    if (activePurpose !== "all" || search) return null;
    const groups: Record<string, typeof songs> = {};
    songs.forEach((s) => {
      if (!groups[s.category]) groups[s.category] = [];
      groups[s.category].push(s);
    });
    return groups;
  }, [activePurpose, search]);

  return (
    <div style={{ backgroundColor: "#FBF8F3" }}>
      {/* Hero */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "linear-gradient(175deg, #0EA5E9 0%, #06B6D4 22%, #0D9488 52%, #065F46 80%, #047857 100%)" }}
      >
        {/* Ambient light */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(186,230,253,0.50) 0%, transparent 65%)",
        }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-5"
              style={{ color: "rgba(186,230,253,0.80)", fontFamily: "var(--font-body), sans-serif" }}>
              The music library
            </p>
            <h1 className="display-lg font-black mb-4"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff", textShadow: "0 2px 40px rgba(0,0,0,0.15)" }}>
              36 Original Songs
              <span className="block text-base font-bold mt-2" style={{ fontFamily: "var(--font-body), sans-serif", color: "rgba(186,230,253,0.55)" }}>
                Volume 1 &amp; 2 — with hundreds more in development
              </span>
            </h1>
            <p className="text-base max-w-xl mb-8"
              style={{ color: "rgba(224,242,254,0.85)", fontFamily: "var(--font-body), sans-serif" }}>
              Lullabies, dance songs, emotional learning, adventure anthems — purpose-built music for babies and toddlers.
            </p>

            {/* Platform links */}
            <div className="mb-2">
              <p className="text-xs font-bold uppercase tracking-widest opacity-40 mb-3"
                style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
                Listen now
              </p>
              <PlatformLinks variant="pills" dark />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wave */}
      <div className="h-10 overflow-hidden" style={{ backgroundColor: "#085041" }}>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,10 1440,20 L1440,40 L0,40 Z" fill="#FBF8F3" />
        </svg>
      </div>

      {/* Sticky filter bar */}
      <div className="sticky top-16 z-30 border-b" style={{ backgroundColor: "rgba(251,248,243,0.95)", backdropFilter: "blur(16px)", borderColor: "rgba(6,30,58,0.08)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          {/* Purpose pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 flex-1" style={{ scrollbarWidth: "none" }}>
            {PURPOSES.map((p) => {
              const isActive = activePurpose === p.id;
              return (
                <button key={p.id} onClick={() => setActivePurpose(p.id)}
                  className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all"
                  style={{
                    backgroundColor: isActive ? p.color : "transparent",
                    color: isActive ? "#fff" : p.color,
                    border: `1.5px solid ${p.color}${isActive ? "00" : "40"}`,
                    fontFamily: "var(--font-body), sans-serif",
                  }}>
                  <span>{p.icon}</span>
                  <span>{p.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative shrink-0">
            <input
              type="text"
              placeholder="Search songs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 pr-4 py-2 rounded-full text-sm border outline-none w-44 transition-all focus:w-56"
              style={{
                borderColor: "rgba(6,30,58,0.15)",
                backgroundColor: "white",
                color: "#061E3A",
                fontFamily: "var(--font-body), sans-serif",
              }}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40 text-xs">⌕</span>
          </div>

          {/* View toggle */}
          <div className="hidden sm:flex gap-1 shrink-0">
            {(["list", "grid"] as const).map((v) => (
              <button key={v} onClick={() => setView(v)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-colors"
                style={{
                  backgroundColor: view === v ? "#061E3A" : "transparent",
                  color: view === v ? "#fff" : "#061E3A",
                  opacity: view === v ? 1 : 0.4,
                }}>
                {v === "list" ? "≡" : "⊞"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-10 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Result count */}
          <p className="text-xs opacity-40 mb-8" style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
            {search || activePurpose !== "all"
              ? `${filtered.length} song${filtered.length !== 1 ? "s" : ""} found`
              : "36 songs across 6 categories"
            }
          </p>

          <AnimatePresence mode="wait">
            {/* Grouped view (default "all" + no search) */}
            {grouped ? (
              <motion.div key="grouped" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {Object.entries(grouped).map(([category, catSongs], groupIdx) => {
                  const color = categoryColors[category] ?? "#085041";
                  const icon = CATEGORY_ICONS[category] ?? "◎";
                  return (
                    <div key={category} className="mb-14">
                      {/* Category header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-base"
                          style={{ backgroundColor: `${color}18`, color }}>
                          {icon}
                        </div>
                        <div>
                          <h2 className="font-black text-lg" style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
                            {category}
                          </h2>
                          <p className="text-xs opacity-40" style={{ fontFamily: "var(--font-body), sans-serif", color: "#061E3A" }}>
                            {catSongs.length} songs
                          </p>
                        </div>
                      </div>

                      {/* Song list */}
                      <div className="flex flex-col">
                        {catSongs.map((song, i) => (
                          <motion.div key={song.title}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                            className="group relative flex items-center gap-5 py-4 cursor-default"
                            style={{ borderBottom: i < catSongs.length - 1 ? "1px solid rgba(6,30,58,0.06)" : "none" }}>
                            {/* Accent line on hover */}
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                              style={{ backgroundColor: color }} />
                            <div className="shrink-0 text-xs font-black opacity-20 w-6 text-right"
                              style={{ color: "#061E3A", fontFamily: "var(--font-heading), sans-serif" }}>
                              {String(i + 1).padStart(2, "0")}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-black text-base leading-tight"
                                style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
                                {song.title}
                              </h3>
                              <p className="text-sm mt-0.5 opacity-50 truncate"
                                style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                                {song.hook}
                              </p>
                            </div>
                            <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                              style={{ backgroundColor: color }}>
                              <span className="text-white text-xs pl-0.5">▶</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            ) : (
              /* Filtered flat view */
              <motion.div key="filtered" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {view === "list" ? (
                  <div className="flex flex-col">
                    {filtered.map((song, i) => {
                      const color = categoryColors[song.category] ?? "#085041";
                      const icon = CATEGORY_ICONS[song.category] ?? "◎";
                      return (
                        <motion.div key={song.title}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.3) }}
                          className="group relative flex items-center gap-5 py-4 cursor-default"
                          style={{ borderBottom: i < filtered.length - 1 ? "1px solid rgba(6,30,58,0.06)" : "none" }}>
                          <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ backgroundColor: color }} />
                          <div className="shrink-0 text-xs font-black opacity-20 w-6 text-right"
                            style={{ color: "#061E3A", fontFamily: "var(--font-heading), sans-serif" }}>
                            {String(i + 1).padStart(2, "0")}
                          </div>
                          <div className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${color}18`, color }}>
                            {icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-black text-base leading-tight"
                              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
                              {song.title}
                            </h3>
                            <p className="text-sm mt-0.5 opacity-50 truncate"
                              style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                              {song.hook}
                            </p>
                          </div>
                          <div className="hidden sm:block shrink-0 px-3 py-1.5 rounded-full text-xs font-bold"
                            style={{ backgroundColor: `${color}12`, color, fontFamily: "var(--font-body), sans-serif" }}>
                            {song.category}
                          </div>
                          <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                            style={{ backgroundColor: color }}>
                            <span className="text-white text-xs pl-0.5">▶</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.map((song, i) => {
                      const color = categoryColors[song.category] ?? "#085041";
                      const icon = CATEGORY_ICONS[song.category] ?? "◎";
                      return (
                        <motion.div key={song.title}
                          initial={{ opacity: 0, scale: 0.97 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.3) }}
                          className="group rounded-2xl p-5 cursor-default transition-transform hover:-translate-y-1"
                          style={{ backgroundColor: "white", boxShadow: `0 2px 0 0 ${color}22, 0 8px 32px rgba(6,30,58,0.06)` }}>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                              style={{ backgroundColor: `${color}18`, color }}>
                              {icon}
                            </div>
                            <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                              style={{ backgroundColor: `${color}12`, color, fontFamily: "var(--font-body), sans-serif" }}>
                              {song.category}
                            </span>
                          </div>
                          <h3 className="font-black text-base leading-snug mb-2"
                            style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
                            {song.title}
                          </h3>
                          <p className="text-sm opacity-55"
                            style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                            {song.hook}
                          </p>
                          <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-7 h-7 rounded-full flex items-center justify-center"
                              style={{ backgroundColor: color }}>
                              <span className="text-white" style={{ fontSize: 10, paddingLeft: 1 }}>▶</span>
                            </div>
                            <span className="text-xs font-semibold opacity-60"
                              style={{ color, fontFamily: "var(--font-body), sans-serif" }}>
                              Preview coming soon
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}

                {filtered.length === 0 && (
                  <div className="text-center py-20 opacity-40">
                    <div className="text-4xl mb-3">◎</div>
                    <p style={{ fontFamily: "var(--font-body), sans-serif", color: "#061E3A" }}>No songs found</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Coming soon banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-3xl p-8 text-center"
            style={{ background: "linear-gradient(135deg, #061E3A 0%, #085041 100%)" }}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-40 mb-3"
              style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
              Growing library
            </p>
            <h3 className="text-2xl font-black mb-2"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}>
              Hundreds more songs in development
            </h3>
            <p className="text-sm opacity-60 mb-6"
              style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
              Covering every emotion, educational concept, and developmental milestone. Be the first to know when new music drops.
            </p>
            <Link href="/contact"
              className="inline-block px-7 py-3 rounded-full font-bold text-sm text-white transition-all hover:scale-105"
              style={{ backgroundColor: "#E8601C", fontFamily: "var(--font-heading), sans-serif", boxShadow: "0 4px 20px rgba(232,96,28,0.4)" }}>
              Stay Updated →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
