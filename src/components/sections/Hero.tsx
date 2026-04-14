"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PlatformLinks from "@/components/ui/PlatformLinks";

interface Bubble {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
}

function BubbleField() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  useEffect(() => {
    setBubbles(
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 24 + 6,
        duration: Math.random() * 12 + 10,
        delay: Math.random() * 15,
      }))
    );
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute bottom-0 rounded-full animate-bubble"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            border: `1.5px solid rgba(255,255,255,0.35)`,
            backgroundColor: "rgba(255,255,255,0.04)",
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// Real character faces floating in hero
const FLOATERS = [
  { name: "pip",     x: "7%",  y: "62%", size: 130, delay: 0 },
  { name: "zippy",   x: "17%", y: "44%", size: 90,  delay: 1.4 },
  { name: "coral",   x: "80%", y: "58%", size: 125, delay: 0.7 },
  { name: "rara",    x: "72%", y: "36%", size: 85,  delay: 2.1 },
  { name: "blaze",   x: "88%", y: "70%", size: 75,  delay: 0.3 },
  { name: "bubbles", x: "26%", y: "72%", size: 68,  delay: 1.8 },
  { name: "noir",    x: "64%", y: "72%", size: 72,  delay: 1.1 },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #061E3A 0%, #0a3a6b 30%, #085041 70%, #0d5a48 100%)",
      }}
    >
      <BubbleField />

      {/* Luminescent light rays from above */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 30% -10%, rgba(74,171,219,0.22) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 75% -5%,  rgba(232,96,28,0.14) 0%, transparent 55%),
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(8,80,65,0.6) 0%, transparent 60%)
          `,
        }}
      />

      {/* Floating character images — desktop only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {FLOATERS.map((f, i) => (
          <motion.div
            key={f.name}
            className="absolute"
            animate={{ y: [0, -(12 + i * 2), 0], rotate: [0, i % 2 === 0 ? 3 : -3, 0] }}
            transition={{ duration: 5 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: f.delay }}
            style={{ left: f.x, top: f.y, width: f.size, height: f.size }}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl"
              style={{ border: "3px solid rgba(255,255,255,0.25)" }}>
              <Image
                src={`/characters/${f.name}.jpg`}
                alt={f.name}
                fill
                className="object-cover object-top"
                sizes="130px"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#FBF8F3" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] mb-6 opacity-60"
            style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}
          >
            An original children's world
          </p>
          <h1
            className="display-xl font-black mb-6"
            style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}
          >
            A world of wonder<br />
            <span style={{ color: "#F5A623" }}>for the newest</span><br />
            generation.
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed mb-10 opacity-85 max-w-2xl mx-auto"
            style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}
          >
            Shrempies is music, stories, and characters built for babies and toddlers — emotionally honest, developmentally grounded, and actually beautiful.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/characters"
              className="shimmer px-8 py-4 rounded-full font-black text-lg transition-transform hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "#E8601C",
                color: "#fff",
                fontFamily: "var(--font-heading), sans-serif",
                boxShadow: "0 8px 32px rgba(232,96,28,0.45)",
              }}
            >
              Meet the Shrempies
            </Link>
            <Link
              href="/invest"
              className="px-8 py-4 rounded-full font-black text-lg transition-transform hover:scale-105 active:scale-95 glass"
              style={{
                color: "#fff",
                fontFamily: "var(--font-heading), sans-serif",
              }}
            >
              For Investors →
            </Link>
          </div>

          {/* Platform links */}
          <div className="flex flex-col items-center gap-2">
            <p
              className="text-xs font-bold uppercase tracking-widest opacity-35"
              style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}
            >
              Stream everywhere
            </p>
            <PlatformLinks variant="icons" dark />
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          {[
            { value: "36", label: "Original Songs" },
            { value: "16", label: "Episode Scripts" },
            { value: "13", label: "Characters" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-4xl font-black"
                style={{ color: "#F5A623", fontFamily: "var(--font-heading), sans-serif" }}
              >
                {s.value}
              </div>
              <div
                className="text-sm font-semibold mt-1 opacity-65"
                style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
