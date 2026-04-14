"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { episodes } from "@/lib/data";

const THEMES = [
  { id: "all", label: "All Episodes" },
  { id: "feelings", label: "Feelings" },
  { id: "friendship", label: "Friendship" },
  { id: "bravery", label: "Bravery" },
  { id: "learning", label: "Learning" },
];

// Episode theme tags (maps to episodes by number)
const EP_THEMES: Record<number, string[]> = {
  1: ["bravery", "learning"], 2: ["friendship", "feelings"],
  3: ["feelings", "learning"], 4: ["feelings"], 5: ["feelings", "learning"],
  6: ["feelings", "bravery", "friendship"], 7: ["bravery", "learning"],
  8: ["friendship", "feelings"], 9: ["bravery", "feelings"],
  10: ["bravery", "learning"], 11: ["learning", "feelings"],
  12: ["learning"], 13: ["friendship", "feelings"],
  14: ["feelings"], 15: ["friendship", "feelings", "bravery"],
  16: ["friendship", "feelings"],
};

export default function EpisodesPage() {
  const [activeTheme, setActiveTheme] = useState("all");

  const filtered = activeTheme === "all"
    ? episodes
    : episodes.filter((ep) => (EP_THEMES[ep.number] ?? []).includes(activeTheme));

  return (
    <div style={{ backgroundColor: "#FBF8F3" }}>
      {/* Hero */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #061E3A 0%, #085041 60%, #0d5a48 100%)" }}
      >
        {/* Bubbles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute bottom-0 rounded-full animate-bubble"
              style={{
                left: `${10 + i * 12}%`, width: 12 + i * 6, height: 12 + i * 6,
                border: "1.5px solid rgba(255,255,255,0.2)",
                animationDuration: `${8 + i * 1.5}s`, animationDelay: `${i * 0.8}s`,
              }} />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-5 opacity-50"
              style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
              Watch &amp; Listen
            </p>
            <h1 className="display-lg font-black mb-4"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}>
              Episodes &amp; Videos
            </h1>
            <p className="text-base opacity-70 max-w-xl mx-auto mb-8"
              style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
              16 episode scripts in development, plus music videos, character shorts, and more. Subscribe to be notified when new content drops.
            </p>

            {/* YouTube CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <Link href="https://youtube.com/@shrempies" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-full font-black text-base transition-all hover:scale-105"
                style={{
                  backgroundColor: "#FF0000", color: "#fff",
                  fontFamily: "var(--font-heading), sans-serif",
                  boxShadow: "0 8px 32px rgba(255,0,0,0.4)",
                }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
                Subscribe on YouTube
              </Link>
              <span className="text-sm opacity-50" style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
                @shrempies
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wave */}
      <div className="h-10 overflow-hidden" style={{ backgroundColor: "#0d5a48" }}>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,10 1440,20 L1440,40 L0,40 Z" fill="#FBF8F3" />
        </svg>
      </div>

      {/* Intro video */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 opacity-50"
              style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
              Featured
            </p>
            <h2 className="text-2xl font-black mb-6"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
              Character Intro
            </h2>
            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/9" }}>
              <video
                src="/characters-intro.mp4"
                autoPlay muted loop playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming soon video grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-50"
                  style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                  Music videos
                </p>
                <h2 className="text-2xl font-black"
                  style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
                  Coming to YouTube
                </h2>
              </div>
              <Link href="https://youtube.com/@shrempies" target="_blank" rel="noopener noreferrer"
                className="self-start flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105"
                style={{ backgroundColor: "#FF0000", color: "#fff", fontFamily: "var(--font-body), sans-serif" }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
                Subscribe @shrempies
              </Link>
            </div>

            {/* Placeholder video grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {["Wiggle Like a Shrempy", "Floating with the Tide", "Deep Down Below", "Happy Feels Like Bubbles",
                "The Bubble Bounce", "Even Shrempies Get the Grumps", "Swim Swim Swim", "Ten Little Shrempies"].map((title, i) => (
                <motion.div key={title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative rounded-2xl overflow-hidden cursor-default"
                  style={{ aspectRatio: "16/9", backgroundColor: "#061E3A" }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3"
                    style={{ background: `linear-gradient(135deg, #061E3A${Math.floor(180 + i * 5).toString(16)} 0%, #085041${Math.floor(180 + i * 5).toString(16)} 100%)` }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2 opacity-40"
                      style={{ border: "2px solid rgba(255,255,255,0.4)" }}>
                      <span className="text-white text-sm pl-0.5">▶</span>
                    </div>
                    <p className="text-white text-xs font-bold text-center opacity-60 leading-snug"
                      style={{ fontFamily: "var(--font-heading), sans-serif" }}>
                      {title}
                    </p>
                    <div className="mt-2 px-2 py-0.5 rounded-full text-xs opacity-50"
                      style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
                      Coming soon
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Episode scripts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto">
          {/* Filter */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-50"
                style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                Episode scripts
              </p>
              <h2 className="text-2xl font-black"
                style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
                16 Episodes in Development
              </h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {THEMES.map((t) => (
                <button key={t.id} onClick={() => setActiveTheme(t.id)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all"
                  style={{
                    backgroundColor: activeTheme === t.id ? "#061E3A" : "transparent",
                    color: activeTheme === t.id ? "#fff" : "#061E3A",
                    border: "1.5px solid rgba(6,30,58,0.2)",
                    fontFamily: "var(--font-body), sans-serif",
                  }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((ep, i) => (
              <motion.div key={ep.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
                className="group rounded-2xl p-5 transition-transform hover:-translate-y-1"
                style={{ backgroundColor: "white", boxShadow: "0 2px 0 0 rgba(8,80,65,0.12), 0 8px 32px rgba(6,30,58,0.06)" }}>
                <div className="flex items-start justify-between mb-3">
                  <div className="text-xs font-black opacity-30"
                    style={{ color: "#061E3A", fontFamily: "var(--font-heading), sans-serif" }}>
                    EP {String(ep.number).padStart(2, "0")}
                  </div>
                  <div className="px-2 py-0.5 rounded-full text-xs font-bold"
                    style={{ backgroundColor: "#F0F9F4", color: "#085041", fontFamily: "var(--font-body), sans-serif" }}>
                    Script Ready
                  </div>
                </div>
                <h3 className="font-black text-base mb-1"
                  style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
                  {ep.title}
                </h3>
                <p className="text-xs font-bold mb-2" style={{ color: "#085041", fontFamily: "var(--font-body), sans-serif" }}>
                  {ep.lesson}
                </p>
                <p className="text-sm opacity-55 leading-relaxed"
                  style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                  {ep.description}
                </p>
                <div className="mt-4 flex gap-1 flex-wrap">
                  {ep.characters.slice(0, 3).map((c) => (
                    <span key={c} className="px-2 py-0.5 rounded-full text-xs opacity-60"
                      style={{ backgroundColor: "rgba(6,30,58,0.06)", color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                      {c}
                    </span>
                  ))}
                  {ep.characters.length > 3 && (
                    <span className="px-2 py-0.5 rounded-full text-xs opacity-40"
                      style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                      +{ep.characters.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
