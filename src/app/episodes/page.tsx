"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { episodes } from "@/lib/data";

const THEMES = [
  { id: "all", label: "All Episodes" },
  { id: "feelings", label: "Feelings" },
  { id: "friendship", label: "Friendship" },
  { id: "bravery", label: "Bravery" },
  { id: "learning", label: "Learning" },
];

const THEME_COLORS: Record<string, string> = {
  feelings: "#E8601C",
  friendship: "#F5A623",
  bravery: "#C0192E",
  learning: "#0D9488",
};

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

// Floating characters for the hero — desktop only
const HERO_FLOATERS = [
  { name: "pip",     color: "#F5A623", ring: "#F5A623", x: "5%",  y: "55%", size: 110, delay: 0 },
  { name: "zippy",   color: "#06B6D4", ring: "#06B6D4", x: "13%", y: "30%", size: 78,  delay: 1.4 },
  { name: "coral",   color: "#E8601C", ring: "#E8601C", x: "80%", y: "50%", size: 105, delay: 0.7 },
  { name: "rara",    color: "#A78BFA", ring: "#A78BFA", x: "88%", y: "28%", size: 75,  delay: 2.1 },
  { name: "bubbles", color: "#5EEAD4", ring: "#5EEAD4", x: "74%", y: "68%", size: 68,  delay: 1.8 },
];

// Music video cards — character art as backdrop
const VIDEO_CARDS = [
  { title: "Wiggle Like a Shrempy",           char: "pip",     color: "#F5A623" },
  { title: "Floating with the Tide",           char: "bubbles", color: "#5EEAD4" },
  { title: "Deep Down Below",                  char: "zippy",   color: "#06B6D4" },
  { title: "Happy Feels Like Bubbles",         char: "rara",    color: "#A78BFA" },
  { title: "The Bubble Bounce",                char: "noir",    color: "#6366F1" },
  { title: "Even Shrempies Get the Grumps",    char: "pip",     color: "#E8601C" },
  { title: "Swim Swim Swim",                   char: "dash",    color: "#FB923C" },
  { title: "Ten Little Shrempies",             char: "mimi",    color: "#F472B6" },
];

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
        style={{ background: "linear-gradient(175deg, #0EA5E9 0%, #06B6D4 22%, #0D9488 52%, #065F46 80%, #047857 100%)" }}
      >
        {/* Ambient light */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(186,230,253,0.50) 0%, transparent 65%)" }}
        />

        {/* Floating bubble particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 rounded-full animate-bubble"
              style={{
                left: `${5 + i * 9}%`, width: 10 + i * 5, height: 10 + i * 5,
                border: `1.5px solid rgba(${i % 3 === 0 ? "255,255,255" : i % 3 === 1 ? "94,234,212" : "125,211,252"},0.35)`,
                backgroundColor: "rgba(255,255,255,0.04)",
                animationDuration: `${8 + i * 1.2}s`, animationDelay: `${i * 0.6}s`,
              }}
            />
          ))}
        </div>

        {/* Floating character images — desktop only */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          {HERO_FLOATERS.map((f, i) => (
            <motion.div
              key={f.name}
              animate={{ y: [0, -(8 + i * 2), 0], rotate: [0, i % 2 === 0 ? 2 : -2, 0] }}
              transition={{ duration: 4.5 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: f.delay }}
              className="absolute"
              style={{ left: f.x, top: f.y, width: f.size, height: f.size }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{ boxShadow: `0 0 20px 6px ${f.color}55, 0 0 40px 8px ${f.color}25` }}
              />
              <div
                className="relative w-full h-full rounded-full overflow-hidden"
                style={{ border: `2.5px solid ${f.ring}`, boxShadow: "0 0 0 1px rgba(255,255,255,0.2)" }}
              >
                <Image
                  src={`/characters/${f.name}.png`}
                  alt={f.name}
                  fill
                  className="object-cover object-top"
                  sizes="110px"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] mb-5"
              style={{ color: "rgba(186,230,253,0.80)", fontFamily: "var(--font-body), sans-serif" }}
            >
              Watch &amp; Listen
            </p>
            <h1
              className="display-lg font-black mb-4"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff", textShadow: "0 2px 40px rgba(0,0,0,0.15)" }}
            >
              Episodes &amp; Videos
            </h1>
            <p
              className="text-base max-w-xl mx-auto mb-8"
              style={{ color: "rgba(224,242,254,0.85)", fontFamily: "var(--font-body), sans-serif" }}
            >
              16 episode scripts in development, plus music videos, character shorts, and more. Subscribe to be notified when new content drops.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <Link
                href="https://youtube.com/@shrempies"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-full font-black text-base transition-all hover:scale-105"
                style={{ backgroundColor: "#FF0000", color: "#fff", fontFamily: "var(--font-heading), sans-serif", boxShadow: "0 8px 32px rgba(255,0,0,0.4)" }}
              >
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

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden pointer-events-none">
          <svg aria-hidden="true" viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z" fill="#FBF8F3" />
          </svg>
        </div>
      </section>

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
              <Link
                href="https://youtube.com/@shrempies"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105"
                style={{ backgroundColor: "#FF0000", color: "#fff", fontFamily: "var(--font-body), sans-serif" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
                Subscribe @shrempies
              </Link>
            </div>

            {/* Video grid with character art backdrops */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {VIDEO_CARDS.map(({ title, char, color }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ scale: 1.04 }}
                  className="group relative rounded-2xl overflow-hidden cursor-default"
                  style={{ aspectRatio: "16/9" }}
                >
                  {/* Character image background */}
                  <div className="absolute inset-0" style={{ backgroundColor: color }}>
                    <Image
                      src={`/characters/${char}.png`}
                      alt={char}
                      fill
                      className="object-cover object-top opacity-70 group-hover:opacity-85 transition-opacity duration-300"
                      sizes="280px"
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, rgba(6,30,58,0.85) 0%, rgba(6,30,58,0.3) 55%, transparent 100%)` }}
                  />

                  {/* Play button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-2 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      style={{ backgroundColor: "rgba(255,255,255,0.25)", border: "2px solid rgba(255,255,255,0.5)", backdropFilter: "blur(4px)" }}
                    >
                      <span className="text-white text-sm pl-0.5">▶</span>
                    </div>
                  </div>

                  {/* Title + badge at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p
                      className="text-white text-xs font-black leading-snug mb-1"
                      style={{ fontFamily: "var(--font-heading), sans-serif", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                    >
                      {title}
                    </p>
                    <span
                      className="inline-block px-2 py-0.5 rounded-full text-xs font-bold"
                      style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body), sans-serif", backdropFilter: "blur(4px)" }}
                    >
                      Coming soon
                    </span>
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
                <button
                  key={t.id}
                  onClick={() => setActiveTheme(t.id)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all"
                  style={{
                    backgroundColor: activeTheme === t.id ? "#061E3A" : "transparent",
                    color: activeTheme === t.id ? "#fff" : "#061E3A",
                    border: "1.5px solid rgba(6,30,58,0.2)",
                    fontFamily: "var(--font-body), sans-serif",
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div
              className="rounded-3xl py-14 px-6 text-center"
              style={{ backgroundColor: "#F0F9F4", border: "1px solid rgba(8,80,65,0.12)" }}
              role="status"
              aria-live="polite"
            >
              <p
                className="text-base font-bold mb-2"
                style={{ color: "#061E3A", fontFamily: "var(--font-heading), sans-serif" }}
              >
                No episodes match this theme yet.
              </p>
              <p
                className="text-sm opacity-65 mb-5"
                style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}
              >
                We&rsquo;re still writing. Try another lens, or peek at the full list.
              </p>
              <button
                onClick={() => setActiveTheme("all")}
                className="px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105"
                style={{ backgroundColor: "#061E3A", color: "#fff", fontFamily: "var(--font-body), sans-serif" }}
              >
                Show all episodes
              </button>
            </div>
          ) : null}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((ep, i) => {
              const primaryTheme = (EP_THEMES[ep.number] ?? [])[0];
              const accent = THEME_COLORS[primaryTheme] ?? "#0D9488";
              return (
              <motion.div
                key={ep.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-5 pl-6 overflow-hidden transition-shadow"
                style={{
                  backgroundColor: "white",
                  boxShadow: `0 2px 0 0 ${accent}22, 0 8px 32px rgba(6,30,58,0.06)`,
                }}
              >
                {/* Left theme accent */}
                <span
                  className="absolute top-0 bottom-0 left-0 w-1 transition-all group-hover:w-[6px]"
                  style={{ backgroundColor: accent }}
                />
                {/* Huge faded episode numeral */}
                <div
                  className="absolute pointer-events-none font-black select-none transition-opacity group-hover:opacity-[0.13]"
                  style={{
                    right: -12,
                    bottom: -28,
                    fontFamily: "var(--font-heading), sans-serif",
                    fontSize: 112,
                    lineHeight: 1,
                    color: accent,
                    opacity: 0.08,
                  }}
                >
                  {String(ep.number).padStart(2, "0")}
                </div>
                <div className="relative flex items-start justify-between mb-3">
                  <div className="text-xs font-black"
                    style={{ color: accent, fontFamily: "var(--font-heading), sans-serif", opacity: 0.7 }}>
                    EP {String(ep.number).padStart(2, "0")}
                  </div>
                  <div className="px-2 py-0.5 rounded-full text-xs font-bold"
                    style={{ backgroundColor: `${accent}15`, color: accent, fontFamily: "var(--font-body), sans-serif" }}>
                    Script Ready
                  </div>
                </div>
                <h3 className="relative font-black text-base mb-1"
                  style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
                  {ep.title}
                </h3>
                <p className="relative text-xs font-bold mb-2" style={{ color: accent, fontFamily: "var(--font-body), sans-serif", opacity: 0.8 }}>
                  {ep.lesson}
                </p>
                <p className="relative text-sm opacity-55 leading-relaxed"
                  style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                  {ep.description}
                </p>
                <div className="relative mt-4 flex gap-1 flex-wrap">
                  {ep.characters.slice(0, 3).map((c) => (
                    <span
                      key={c}
                      className="px-2 py-0.5 rounded-full text-xs opacity-60"
                      style={{ backgroundColor: "rgba(6,30,58,0.06)", color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}
                    >
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
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
