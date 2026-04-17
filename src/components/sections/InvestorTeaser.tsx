"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "$30B+", label: "Children's media market" },
  { value: "$3B",   label: "Moonbug acquisition (2021)" },
  { value: "Gen β", label: "The generation we're built for" },
  { value: "0",     label: "Ads. Ever." },
];

const TEASE_CHARS = [
  { name: "pip",   x: "left-6",   y: "top-16",    size: 72,  delay: 0 },
  { name: "coral", x: "right-6",  y: "top-12",    size: 80,  delay: 1.2 },
  { name: "zippy", x: "left-10",  y: "bottom-10", size: 60,  delay: 0.6 },
  { name: "rara",  x: "right-10", y: "bottom-8",  size: 64,  delay: 1.8 },
];

export default function InvestorTeaser() {
  return (
    <section
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #042c53 0%, #061E3A 40%, #0a2a1a 70%, #085041 100%)" }}
    >
      {/* Animated glow orbs */}
      {[
        { c: "#E8601C", x: "10%",  y: "20%", size: 360 },
        { c: "#4AABDB", x: "75%",  y: "60%", size: 450 },
        { c: "#7B4FBF", x: "50%",  y: "95%", size: 300 },
      ].map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-glow pointer-events-none"
          style={{
            width: orb.size, height: orb.size,
            left: orb.x, top: orb.y,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, ${orb.c}22 0%, transparent 70%)`,
            animationDelay: `${i * 1.1}s`,
          }}
        />
      ))}

      {/* Floating character silhouettes — desktop only */}
      <div className="hidden xl:block absolute inset-0 pointer-events-none">
        {TEASE_CHARS.map((char) => (
          <motion.div
            key={char.name}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: char.delay }}
            className={`absolute ${char.x} ${char.y} opacity-20`}
            style={{ width: char.size, height: char.size }}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={`/characters/${char.name}.png`}
                alt=""
                fill
                className="object-cover object-top"
                sizes="80px"
              />
            </div>
          </motion.div>
        ))}
      </div>

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
            <span style={{ color: "#F5A623", textShadow: "0 0 40px rgba(245,166,35,0.5)" }}>
              is being built right now.
            </span>
          </h2>
          <p
            className="text-lg leading-relaxed opacity-80 max-w-2xl mx-auto mb-6"
            style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}
          >
            Moonbug — home of CoComelon and Blippi — was acquired for $3 billion. The next generational brand hasn't been built yet. Shrempies has the IP, the content, and the mission.
          </p>
          <p
            className="text-sm opacity-50 max-w-xl mx-auto"
            style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}
          >
            36 original songs · 16 episode scripts · 13 original characters · Pre-seed stage
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14 max-w-2xl mx-auto"
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
              boxShadow: "0 8px 32px rgba(232,96,28,0.45)",
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
