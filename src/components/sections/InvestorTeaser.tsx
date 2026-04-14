"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: "$30B+", label: "Children's media market" },
  { value: "$3B",   label: "Moonbug acquisition (2021)" },
  { value: "Gen β", label: "The generation we're built for" },
];

export default function InvestorTeaser() {
  return (
    <section
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #061E3A 0%, #0a3052 50%, #085041 100%)" }}
    >
      {/* Animated glow orbs */}
      {[
        { c: "#E8601C", x: "10%",  y: "20%", size: 300 },
        { c: "#4AABDB", x: "75%",  y: "60%", size: 400 },
        { c: "#7B4FBF", x: "50%",  y: "90%", size: 250 },
      ].map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-glow pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, ${orb.c}20 0%, transparent 70%)`,
            animationDelay: `${i * 1.1}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-50"
            style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}
          >
            For Investors
          </p>
          <h2
            className="display-lg font-black mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}
          >
            The next great children's brand<br />
            <span style={{ color: "#F5A623" }}>is being built right now.</span>
          </h2>
          <p
            className="text-lg leading-relaxed opacity-80 max-w-2xl mx-auto"
            style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}
          >
            Moonbug — home of CoComelon and Blippi — was acquired for $3 billion. The next generational brand hasn't been built yet. Shrempies has the IP, the content, and the mission.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-14 max-w-2xl mx-auto"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl py-6 px-4 text-center glass"
            >
              <div
                className="text-3xl font-black mb-1"
                style={{ fontFamily: "var(--font-heading), sans-serif", color: "#F5A623" }}
              >
                {s.value}
              </div>
              <div
                className="text-xs opacity-60 leading-snug"
                style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/invest"
            className="shimmer px-9 py-4 rounded-full font-black text-base transition-transform hover:scale-105 active:scale-95"
            style={{
              backgroundColor: "#E8601C",
              color: "#fff",
              fontFamily: "var(--font-heading), sans-serif",
              boxShadow: "0 8px 32px rgba(232,96,28,0.4)",
            }}
          >
            Request the Investor Deck
          </Link>
          <Link
            href="/about"
            className="px-9 py-4 rounded-full font-black text-base glass transition-transform hover:scale-105 active:scale-95"
            style={{ color: "#fff", fontFamily: "var(--font-heading), sans-serif" }}
          >
            Learn More →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
