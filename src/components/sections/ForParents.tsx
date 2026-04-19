"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const PARENT_POINTS = [
  {
    icon: "♡",
    color: "#E8601C",
    title: "Emotionally honest",
    body: "Every Shrempies song names a real feeling. Grumpy. Scared. \"I don't know what I'm feeling.\" This is the vocabulary that matters most.",
  },
  {
    icon: "◎",
    color: "#0D9488",
    title: "Developmentally grounded",
    body: "From lullabies that regulate to movement songs that address the activity gap — built around how young brains actually grow.",
  },
  {
    icon: "✦",
    color: "#F5A623",
    title: "Beautiful by design",
    body: "An ocean world full of real wonder. Not frantic. Not noisy. A place you'll actually want to visit together.",
  },
  {
    icon: "◉",
    color: "#06B6D4",
    title: "Zero ads, zero data",
    body: "Built for babies, not algorithms. No tracking. No advertising to children. No data collected from your child. Period.",
  },
];

const AGE_TAGS = [
  { label: "0–6 months", desc: "Lullabies & sensory calm", color: "#06B6D4" },
  { label: "6–12 months", desc: "Movement & anticipation", color: "#0D9488" },
  { label: "12–18 months", desc: "Feelings & character songs", color: "#085041" },
  { label: "18–36 months", desc: "Stories & big emotions", color: "#E8601C" },
];

export default function ForParents() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "#061E3A" }}>
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        height: 600,
        background: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(6,182,212,0.10) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(8,80,65,0.12) 0%, transparent 60%)",
      }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "rgba(94,234,212,0.70)", fontFamily: "var(--font-body), sans-serif" }}
            >
              For parents
            </p>
            <h2
              className="display-lg font-black leading-tight"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}
            >
              Why parents<br />
              <span style={{ color: "#FDE68A" }}>choose Shrempies.</span>
            </h2>
          </div>
          <Link
            href="/parents"
            className="self-start sm:self-auto shrink-0 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.10)",
              border: "1.5px solid rgba(255,255,255,0.20)",
              color: "#fff",
              fontFamily: "var(--font-body), sans-serif",
              backdropFilter: "blur(8px)",
            }}
          >
            Parent guide →
          </Link>
        </motion.div>

        {/* Four pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {PARENT_POINTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl p-8 transition-shadow duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${p.color}25`, color: p.color, boxShadow: `0 0 0 0 ${p.color}00` }}
              >
                {p.icon}
              </div>
              <h3
                className="text-lg font-black mb-3"
                style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(214,245,234,0.65)", fontFamily: "var(--font-body), sans-serif" }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Age guide strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl p-8 sm:p-10"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "rgba(94,234,212,0.70)", fontFamily: "var(--font-body), sans-serif" }}>
                Age guide
              </p>
              <h3 className="text-2xl font-black" style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}>
                Right content for every stage.
              </h3>
            </div>
            <Link
              href="/parents"
              className="shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105"
              style={{ backgroundColor: "#F5A623", color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}
            >
              Full parent guide →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {AGE_TAGS.map((tag, i) => (
              <motion.div
                key={tag.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="rounded-2xl p-5"
                style={{ backgroundColor: `${tag.color}15`, border: `1.5px solid ${tag.color}30` }}
              >
                <div className="text-sm font-black mb-1" style={{ color: tag.color, fontFamily: "var(--font-heading), sans-serif" }}>
                  {tag.label}
                </div>
                <div className="text-xs opacity-70" style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
                  {tag.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
