"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const beliefs = [
  {
    number: "01",
    title: "Children deserve beauty, not noise.",
    body: "Most children's content is loud, frantic, and algorithmically optimised for watch time. We optimise for something else: wonder, calm, and genuine delight.",
    color: "#F5A623",
  },
  {
    number: "02",
    title: "Feelings are meant to be named, not avoided.",
    body: "Shrempies talks about the grumps, the scared feelings, the 'I don't know what I'm feeling' feelings. Naming feelings is one of the most important things a young child can learn.",
    color: "#4AABDB",
  },
  {
    number: "03",
    title: "Wonder is not optional — it's developmental.",
    body: "Curiosity, awe, and the deep sense that the world is bigger and stranger than you first thought — these aren't luxuries. They're what childhood is for.",
    color: "#D6F5EA",
  },
];

const credentials = [
  { label: "Award-winning musicians", icon: "♪", detail: "Professional composers and producers on board" },
  { label: "Published children's books", icon: "◎", detail: "Already in market" },
  { label: "Multi-year IP history", icon: "♡", detail: "A community-built universe with real roots" },
  { label: "36 original songs", icon: "◈", detail: "Volumes 1 & 2, with hundreds in development" },
  { label: "16 episode scripts", icon: "✦", detail: "7–11 min short-form, fully written" },
  { label: "13 named characters", icon: "◉", detail: "Each with full personality arcs" },
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#FBF8F3" }}>
      {/* Hero */}
      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #061E3A 0%, #0a3a6b 30%, #085041 70%, #0d5a48 100%)" }}
      >
        {/* Glow orbs */}
        {[
          { c: "#4AABDB", x: "15%", y: "30%", size: 400 },
          { c: "#F5A623", x: "80%", y: "70%", size: 300 },
        ].map((orb, i) => (
          <div key={i} className="absolute rounded-full pointer-events-none animate-glow"
            style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y,
              transform: "translate(-50%,-50%)",
              background: `radial-gradient(circle, ${orb.c}18 0%, transparent 70%)`,
              animationDelay: `${i * 1.5}s` }} />
        ))}

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-6 opacity-50"
              style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
              Our story
            </p>
            <h1 className="display-lg font-black mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}>
              The underwater world<br />
              <span style={{ color: "#F5A623" }}>where big feelings live.</span>
            </h1>
            <p className="text-lg opacity-70 max-w-xl"
              style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
              We're building the first children's brand truly designed for the AI generation — emotionally intelligent, developmentally grounded, and actually beautiful.
            </p>
          </motion.div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z" fill="#FBF8F3" />
          </svg>
        </div>
      </section>

      {/* Origin story — editorial layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-50"
                style={{ color: "#085041", fontFamily: "var(--font-body), sans-serif" }}>
                Where it began
              </p>
              <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight"
                style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
                Built from community.<br />Built for a generation.
              </h2>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-5 text-base leading-relaxed"
              style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif", opacity: 0.75 }}>
              <p>
                Shrempies grew out of a community that built something together over years — a world of shrimp characters that people genuinely loved. The affection was real, the characters had depth, and the universe had roots.
              </p>
              <p>
                As that community evolved, it became clear the Shrempies world had potential far beyond its origins. So we started building properly. Songs with award-winning musicians. Story scripts. Characters with real emotional arcs.
              </p>
              <p>
                A content library that now spans 36 original songs, 16 episode scripts, and 13 named characters — all part of the same coherent, beautiful universe. With hundreds more in development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission — full-bleed dark */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #061E3A 0%, #085041 100%)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(74,171,219,0.15) 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-40"
              style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
              Our mission
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 leading-tight"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}>
              Building for the generation that will<br />
              <span style={{ color: "#F5A623" }}>grow up alongside AI.</span>
            </h2>
            <p className="text-base leading-relaxed opacity-70 max-w-2xl mx-auto mb-5"
              style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
              Gen Beta is the first generation to grow up fully AI-integrated. They face real pressures no generation has faced before: overstimulation, anxiety, less physical activity, a world engineered to remove uncertainty.
            </p>
            <p className="text-base leading-relaxed opacity-70 max-w-2xl mx-auto"
              style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
              Shrempies is designed to meet them where they are — content that names feelings, songs that regulate, stories that celebrate boredom and the joy of not knowing. A brand that takes the emotional life of a young child seriously.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three beliefs — large editorial numbers */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FBF8F3" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-50"
              style={{ color: "#085041", fontFamily: "var(--font-body), sans-serif" }}>
              What we believe
            </p>
            <h2 className="text-3xl sm:text-4xl font-black"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
              Three things Shrempies<br />knows to be true.
            </h2>
          </motion.div>

          <div className="flex flex-col">
            {beliefs.map((b, i) => (
              <motion.div key={b.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className="flex gap-8 sm:gap-12 py-10"
                style={{ borderBottom: i < beliefs.length - 1 ? "1px solid rgba(6,30,58,0.08)" : "none" }}>
                <div className="shrink-0 text-5xl sm:text-6xl font-black leading-none opacity-15"
                  style={{ fontFamily: "var(--font-heading), sans-serif", color: b.color }}>
                  {b.number}
                </div>
                <div className="pt-1">
                  <h3 className="text-xl sm:text-2xl font-black mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
                    {b.title}
                  </h3>
                  <p className="text-base leading-relaxed opacity-65"
                    style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                    {b.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we've built — flowing grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F0F9F4" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 opacity-50"
                style={{ color: "#085041", fontFamily: "var(--font-body), sans-serif" }}>
                The work
              </p>
              <h2 className="text-3xl sm:text-4xl font-black"
                style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
                What we've already built
              </h2>
            </div>
            <Link href="/invest"
              className="self-start px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{ backgroundColor: "#E8601C", color: "#fff", fontFamily: "var(--font-heading), sans-serif",
                boxShadow: "0 4px 16px rgba(232,96,28,0.3)" }}>
              See the investor deck →
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ backgroundColor: "rgba(8,80,65,0.08)", borderRadius: 24, overflow: "hidden" }}>
            {credentials.map((c, i) => (
              <motion.div key={c.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-8 flex flex-col gap-3"
                style={{ backgroundColor: "#FBF8F3" }}>
                <div className="text-2xl" style={{ color: "#085041" }}>{c.icon}</div>
                <div className="font-black text-lg" style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
                  {c.label}
                </div>
                <div className="text-sm opacity-55" style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                  {c.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, #061E3A 0%, #085041 100%)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-black mb-4"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}>
              Want to be part of it?
            </h2>
            <p className="text-base opacity-60 mb-8"
              style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
              We're talking to strategic partners, investors, and collaborators who believe in what we're building.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/invest"
                className="shimmer px-8 py-4 rounded-full font-black text-base transition-transform hover:scale-105"
                style={{ backgroundColor: "#E8601C", color: "#fff", fontFamily: "var(--font-heading), sans-serif",
                  boxShadow: "0 8px 32px rgba(232,96,28,0.4)" }}>
                Request the Investor Deck
              </Link>
              <Link href="/contact"
                className="px-8 py-4 rounded-full font-black text-base glass transition-transform hover:scale-105"
                style={{ color: "#fff", fontFamily: "var(--font-heading), sans-serif" }}>
                Get in touch →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
