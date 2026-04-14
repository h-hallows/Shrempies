"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const assets = [
  { label: "Original Songs", value: "36", icon: "◈", detail: "Volumes 1 & 2, with hundreds in development" },
  { label: "Episode Scripts", value: "16", icon: "◉", detail: "Short-form stories, 7–11 min, fully written" },
  { label: "Original Characters", value: "13", icon: "★", detail: "Named, with backstories and personality arcs" },
  { label: "Children's Books", value: "Live", icon: "◎", detail: "Already published and in market" },
  { label: "Music Partnerships", value: "Active", icon: "♪", detail: "Award-winning musicians on board" },
  { label: "Community History", value: "Multi-year", icon: "♡", detail: "IP universe built over years with real community" },
];

const comparisons = [
  { brand: "Cocomelon", outcome: "$3B", note: "Moonbug acquisition, 2021" },
  { brand: "Blippi", outcome: "$3B", note: "Part of same Moonbug deal" },
  { brand: "Bluey", outcome: "$2B+", note: "BBC Studios licensing, 2024" },
  { brand: "Shrempies", outcome: "Now", note: "Pre-seed · the next one" },
];

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
        style={{ background: "linear-gradient(160deg, #061E3A 0%, #0a1f3a 40%, #0a3052 70%, #085041 100%)" }}
      >
        {/* Animated orbs */}
        {[
          { c: "#E8601C", x: "5%",  y: "20%", size: 500 },
          { c: "#4AABDB", x: "85%", y: "70%", size: 400 },
          { c: "#F5A623", x: "50%", y: "110%", size: 350 },
        ].map((orb, i) => (
          <div key={i} className="absolute rounded-full pointer-events-none animate-glow"
            style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y,
              transform: "translate(-50%,-50%)",
              background: `radial-gradient(circle, ${orb.c}20 0%, transparent 70%)`,
              animationDelay: `${i * 1.3}s` }} />
        ))}

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-6 opacity-50"
              style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
              Pre-seed raise · Strategic partners only
            </p>
            <h1 className="display-lg font-black mb-6 leading-tight max-w-3xl"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}>
              We're building the next generation's
              <span style={{ color: "#F5A623" }}> first beloved brand.</span>
            </h1>
            <p className="text-xl leading-relaxed opacity-75 max-w-2xl mb-10"
              style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
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
                className="inline-block px-9 py-4 rounded-full font-black text-base glass transition-transform hover:scale-105"
                style={{ color: "#fff", fontFamily: "var(--font-heading), sans-serif" }}>
                About Shrempies →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full h-full">
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

          {/* Comparison rows */}
          <div className="mb-14">
            {comparisons.map((c, i) => {
              const isLast = i === comparisons.length - 1;
              return (
                <motion.div key={c.brand}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-6 py-5"
                  style={{
                    borderBottom: "1px solid rgba(6,30,58,0.07)",
                    backgroundColor: isLast ? "transparent" : undefined,
                  }}>
                  <div className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: isLast ? "#E8601C" : "rgba(6,30,58,0.2)" }} />
                  <div className="flex-1">
                    <span className="font-black text-lg"
                      style={{ fontFamily: "var(--font-heading), sans-serif",
                        color: isLast ? "#E8601C" : "#061E3A" }}>
                      {c.brand}
                    </span>
                    <span className="text-sm opacity-50 ml-3"
                      style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                      {c.note}
                    </span>
                  </div>
                  <div className={`font-black text-2xl`}
                    style={{ fontFamily: "var(--font-heading), sans-serif",
                      color: isLast ? "#E8601C" : "#061E3A",
                      opacity: isLast ? 1 : 0.3 }}>
                    {c.outcome}
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
                className="rounded-2xl p-6 flex flex-col gap-3"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(214,245,234,0.1)" }}>
                <div className="text-2xl" style={{ color: "#F5A623" }}>{a.icon}</div>
                <div className="text-3xl font-black" style={{ fontFamily: "var(--font-heading), sans-serif", color: "#F5A623" }}>
                  {a.value}
                </div>
                <div className="font-bold text-sm" style={{ color: "#fff", fontFamily: "var(--font-body), sans-serif" }}>
                  {a.label}
                </div>
                <div className="text-xs opacity-50" style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
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
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
