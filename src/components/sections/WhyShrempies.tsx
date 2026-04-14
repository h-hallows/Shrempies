"use client";

import { motion } from "framer-motion";

const props = [
  {
    icon: "♡",
    title: "Emotionally intelligent",
    body: "Every song, story, and character is built around naming feelings — not hiding them. Children deserve content that takes their inner life seriously.",
    color: "#C0192E",
    bg: "#fff0f0",
  },
  {
    icon: "◎",
    title: "Developmentally grounded",
    body: "From lullabies that regulate to movement songs that address the activity deficit — everything is designed around how young minds actually grow.",
    color: "#085041",
    bg: "#f0faf5",
  },
  {
    icon: "✦",
    title: "Actually beautiful",
    body: "Children deserve beauty, not noise. Shrempies is ocean-rich, warm, textured, and full of wonder — a world you'll want to visit with them.",
    color: "#B87A00",
    bg: "#fffbf0",
  },
];

export default function WhyShrempies() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F0F9F4" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#085041", fontFamily: "var(--font-body), sans-serif" }}
          >
            Why Shrempies
          </p>
          <h2
            className="display-lg font-black"
            style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}
          >
            Built different,<br />on purpose
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {props.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl p-9 flex flex-col gap-5"
              style={{ backgroundColor: p.bg, boxShadow: `0 2px 0 0 ${p.color}22, 0 12px 40px rgba(6,30,58,0.06)` }}
            >
              <div
                className="text-3xl w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${p.color}15`, color: p.color }}
              >
                {p.icon}
              </div>
              <h3
                className="text-2xl font-black"
                style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}
              >
                {p.title}
              </h3>
              <p
                className="text-base leading-relaxed opacity-75"
                style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Hero quote block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden px-10 py-14 text-center"
          style={{ background: "linear-gradient(135deg, #061E3A 0%, #085041 100%)" }}
        >
          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(74,171,219,0.2) 0%, transparent 65%)",
            }}
          />
          <p
            className="relative text-2xl sm:text-3xl md:text-4xl font-black leading-snug max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}
          >
            "Built for the first generation<br className="hidden sm:block" />
            <span style={{ color: "#F5A623" }}> to grow up alongside AI."</span>
          </p>
          <p
            className="relative mt-5 text-base opacity-55"
            style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}
          >
            Gen Beta deserves content that meets them where the world actually is.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
