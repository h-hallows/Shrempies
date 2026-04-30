"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CountUp from "@/components/ui/CountUp";

type Asset = {
  label: string;
  num?: number;
  static?: string;
  icon: string;
  detail: string;
};

const assets: Asset[] = [
  { label: "Original Songs",       num: 36,          icon: "◈", detail: "Volumes 1 & 2, with hundreds in development" },
  { label: "Episode Scripts",      num: 16,          icon: "◉", detail: "Short-form stories, 7–11 min, fully written" },
  { label: "Original Characters",  num: 13,          icon: "★", detail: "Named, with backstories and personality arcs" },
  { label: "Children's Books",     static: "Live",   icon: "◎", detail: "Already published and in market" },
  { label: "Music Partnerships",   static: "Active", icon: "♪", detail: "Award-winning musicians on board" },
  { label: "Community History",    static: "Years",  icon: "♡", detail: "IP universe built over years with real community" },
];

const comparisons = [
  { brand: "Cocomelon", outcome: "$3B",  valueB: 3.0, note: "Moonbug acquisition, 2021" },
  { brand: "Blippi",    outcome: "$3B",  valueB: 3.0, note: "Part of same Moonbug deal" },
  { brand: "Bluey",     outcome: "$2B+", valueB: 2.2, note: "BBC Studios licensing, 2024" },
  { brand: "Shrempies", outcome: "Now",  valueB: 3.2, note: "Pre-seed · the next one", isUs: true },
];
const MAX_BAR = 3.2;

export default function InvestPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, type: "investor-deck" }),
      });
    } catch { /* fail silently */ }
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div style={{ backgroundColor: "#FBF8F3" }}>
      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex items-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "linear-gradient(175deg, #0EA5E9 0%, #06B6D4 22%, #0D9488 52%, #065F46 80%, #047857 100%)" }}
      >
        {/* Ambient light */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(186,230,253,0.50) 0%, transparent 65%)",
        }} />
        {/* Animated orbs */}
        {[
          { c: "#E8601C", x: "5%",  y: "20%", size: 500 },
          { c: "#FDE68A", x: "85%", y: "70%", size: 400 },
          { c: "#F5A623", x: "50%", y: "110%", size: 350 },
        ].map((orb, i) => (
          <div key={i} className="absolute rounded-full pointer-events-none animate-glow"
            style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y,
              transform: "translate(-50%,-50%)",
              background: `radial-gradient(circle, ${orb.c}18 0%, transparent 70%)`,
              animationDelay: `${i * 1.3}s` }} />
        ))}

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-6"
              style={{ color: "rgba(186,230,253,0.85)", fontFamily: "var(--font-body), sans-serif" }}>
              Pre-seed raise · Strategic partners only
            </p>
            <h1 className="display-lg font-black mb-6 leading-tight max-w-3xl"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff", textShadow: "0 2px 40px rgba(0,0,0,0.15)" }}>
              We're building the next generation's
              <span style={{ color: "#FDE68A", textShadow: "0 0 40px rgba(251,191,36,0.5)" }}> first beloved brand.</span>
            </h1>
            <p className="text-xl leading-relaxed max-w-2xl mb-10"
              style={{ color: "rgba(224,242,254,0.90)", fontFamily: "var(--font-body), sans-serif" }}>
              The children's media market is worth $30B+. The next generational brand hasn't been built yet. Shrempies has the IP, the content, the mission — and the window.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#deck-request"
                className="shimmer inline-block px-9 py-4 rounded-full font-black text-base transition-transform hover:scale-105"
                style={{ backgroundColor: "#E8601C", color: "#fff", fontFamily: "var(--font-heading), sans-serif",
                  boxShadow: "0 8px 32px rgba(232,96,28,0.5)" }}>
                Request the Investor Deck
              </a>
              <Link href="/about"
                className="inline-block px-9 py-4 rounded-full font-black text-base transition-transform hover:scale-105"
                style={{ color: "#fff", fontFamily: "var(--font-heading), sans-serif",
                  background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.35)",
                  backdropFilter: "blur(12px)" }}>
                About Shrempies →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg aria-hidden="true" viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z" fill="#FBF8F3" />
          </svg>
        </div>
      </section>

      {/* Market opportunity — comparison table */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 opacity-50"
              style={{ color: "#085041", fontFamily: "var(--font-body), sans-serif" }}>
              The opportunity
            </p>
            <h2 className="text-3xl sm:text-4xl font-black"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
              Every generation gets one.<br />
              <span style={{ color: "#085041" }}>The next one is being built now.</span>
            </h2>
          </motion.div>

          {/* Comparison bars */}
          <div className="mb-14 flex flex-col gap-3">
            {comparisons.map((c, i) => {
              const pct = Math.round((c.valueB / MAX_BAR) * 100);
              return (
                <motion.div key={c.brand}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative"
                >
                  <div className="flex items-center justify-between mb-1.5 relative z-10">
                    <span className="font-black text-base sm:text-lg"
                      style={{ fontFamily: "var(--font-heading), sans-serif", color: c.isUs ? "#E8601C" : "#061E3A" }}>
                      {c.brand}
                      <span className="ml-3 text-xs font-semibold opacity-50"
                        style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                        {c.note}
                      </span>
                    </span>
                    <span className="font-black text-lg sm:text-xl tabular-nums"
                      style={{ fontFamily: "var(--font-heading), sans-serif", color: c.isUs ? "#E8601C" : "#061E3A", opacity: c.isUs ? 1 : 0.85 }}>
                      {c.outcome}
                    </span>
                  </div>
                  {/* Bar track */}
                  <div className="relative h-3 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(6,30,58,0.06)" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                      className={`relative h-full rounded-full ${c.isUs ? "shimmer" : ""}`}
                      style={{
                        background: c.isUs
                          ? "linear-gradient(90deg, #E8601C 0%, #F5A623 50%, #FDE68A 100%)"
                          : "linear-gradient(90deg, #085041 0%, #0D9488 100%)",
                        boxShadow: c.isUs ? "0 0 20px rgba(232,96,28,0.5)" : undefined,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Market stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: "$30B+", label: "Children's media market", sub: "Global and growing" },
              { value: "$3B", label: "Moonbug acquisition", sub: "CoComelon + Blippi — 2021" },
              { value: "Gen β", label: "The generation we're built for", sub: "First fully AI-integrated generation" },
            ].map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-3xl p-8"
                style={{ backgroundColor: "#F0F9F4", boxShadow: "0 2px 0 0 rgba(8,80,65,0.15), 0 8px 32px rgba(6,30,58,0.06)" }}>
                <div className="text-4xl font-black mb-2"
                  style={{ fontFamily: "var(--font-heading), sans-serif", color: "#085041" }}>
                  {s.value}
                </div>
                <div className="font-bold text-sm mb-1"
                  style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                  {s.label}
                </div>
                <div className="text-xs opacity-50"
                  style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                  {s.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F0F9F4" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 opacity-50"
              style={{ color: "#085041", fontFamily: "var(--font-body), sans-serif" }}>
              The window
            </p>
            <h2 className="text-3xl sm:text-4xl font-black"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
              Why now is the moment.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "◈",
                color: "#E8601C",
                title: "Gen Beta is being born",
                body: "The first cohort of Gen Beta — born 2025 onward — are arriving now. The IP that captures this generation will define the next decade of children's media. The window to be first is open for a very short time.",
              },
              {
                icon: "✦",
                color: "#0D9488",
                title: "Parents want something better",
                body: "The backlash against algorithmically-optimised, overstimulating children's content is real and growing. Parents are actively seeking alternatives. Shrempies is the alternative — emotionally honest, developmentally grounded, actually beautiful.",
              },
              {
                icon: "♡",
                color: "#F5A623",
                title: "The IP is already built",
                body: "Most children's media startups are pre-content. Shrempies has 36 original songs, 16 episode scripts, 13 characters, and published books. The foundation is done. This raise is about production and distribution — not development.",
              },
            ].map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl p-9"
                style={{ backgroundColor: "#FBF8F3", boxShadow: `0 2px 0 0 ${item.color}30, 0 8px 32px rgba(6,30,58,0.06)` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-black mb-3"
                  style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-65"
                  style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we've built — dark */}
      <section className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(160deg, #061E3A 0%, #0a3052 50%, #085041 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 opacity-40"
              style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
              The IP
            </p>
            <h2 className="text-3xl sm:text-4xl font-black"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}>
              What we've already built
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {assets.map((a, i) => (
              <motion.div key={a.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl p-6 flex flex-col gap-3 overflow-hidden transition-shadow duration-300"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(214,245,234,0.1)" }}>
                {/* Hover accent glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(245,166,35,0.18) 0%, transparent 70%)" }}
                />
                <div className="relative text-2xl" style={{ color: "#F5A623" }}>{a.icon}</div>
                <div className="relative text-3xl font-black" style={{ fontFamily: "var(--font-heading), sans-serif", color: "#F5A623", textShadow: "0 0 24px rgba(245,166,35,0.35)" }}>
                  {a.static ? a.static : <CountUp value={a.num ?? 0} duration={1600} />}
                </div>
                {/* Gold underline that draws in */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.08 }}
                  className="relative h-0.5 rounded-full"
                  style={{ background: "linear-gradient(90deg, #F5A623, transparent)" }}
                />
                <div className="relative font-bold text-sm" style={{ color: "#fff", fontFamily: "var(--font-body), sans-serif" }}>
                  {a.label}
                </div>
                <div className="relative text-xs opacity-60" style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
                  {a.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The raise + form */}
      <section id="deck-request" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Left: raise info */}
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-50"
                style={{ color: "#085041", fontFamily: "var(--font-body), sans-serif" }}>
                The raise
              </p>
              <h2 className="text-3xl sm:text-4xl font-black mb-6"
                style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
                Pre-seed.<br />Strategic partners only.
              </h2>
              <p className="text-base leading-relaxed opacity-70 mb-8"
                style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                We're looking for investors who understand the children's media space and want to be part of something early and real. Full terms in the investor deck.
              </p>
              <div className="space-y-3">
                {[
                  "Full IP library — songs, scripts, characters",
                  "Market analysis and competitive landscape",
                  "Revenue model and licensing strategy",
                  "Team credentials and music partnerships",
                  "Roadmap to content production",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#085041" }} />
                    <span className="text-sm opacity-70"
                      style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="rounded-3xl p-10 text-center"
                  style={{ background: "linear-gradient(135deg, #061E3A 0%, #085041 100%)" }}>
                  <div className="text-5xl mb-4">◉</div>
                  <p className="text-2xl font-black mb-2"
                    style={{ fontFamily: "var(--font-heading), sans-serif", color: "#F5A623" }}>
                    Request received.
                  </p>
                  <p className="text-sm opacity-60"
                    style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
                    We'll be in touch shortly with the investor deck.
                  </p>
                </motion.div>
              ) : (
                <div className="rounded-3xl p-8"
                  style={{ background: "linear-gradient(135deg, #061E3A 0%, #0a3052 100%)",
                    boxShadow: "0 24px 80px rgba(6,30,58,0.25)" }}>
                  <h3 className="text-xl font-black mb-2"
                    style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}>
                    Request the investor deck
                  </h3>
                  <p className="text-xs opacity-40 mb-6"
                    style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
                    Strategic partners only. We review every request personally.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="px-5 py-4 rounded-xl text-sm outline-none transition-colors"
                      style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#fff",
                        border: "1px solid rgba(214,245,234,0.15)", fontFamily: "var(--font-body), sans-serif" }} />
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      className="px-5 py-4 rounded-xl text-sm outline-none"
                      style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#fff",
                        border: "1px solid rgba(214,245,234,0.15)", fontFamily: "var(--font-body), sans-serif" }} />
                    <input type="text" placeholder="Company / fund (optional)"
                      className="px-5 py-4 rounded-xl text-sm outline-none"
                      style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#fff",
                        border: "1px solid rgba(214,245,234,0.15)", fontFamily: "var(--font-body), sans-serif" }} />
                    <button type="submit" disabled={loading}
                      className="shimmer px-6 py-4 rounded-xl font-black text-sm transition-all hover:scale-105 disabled:opacity-60"
                      style={{ backgroundColor: "#E8601C", color: "#fff",
                        fontFamily: "var(--font-heading), sans-serif",
                        boxShadow: "0 8px 32px rgba(232,96,28,0.4)" }}>
                      {loading ? "Sending..." : "Request the Deck →"}
                    </button>
                  </form>
                  <p
                    className="mt-5 text-[11px] leading-relaxed opacity-40 text-center"
                    style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}
                  >
                    Reviewed personally within 48 hours · NDA available on request
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
