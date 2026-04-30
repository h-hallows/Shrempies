"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PlatformLinks from "@/components/ui/PlatformLinks";
import CountUp from "@/components/ui/CountUp";

interface Bubble {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

function BubbleField() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  useEffect(() => {
    const colors = [
      "rgba(255,255,255,0.45)",
      "rgba(125,211,252,0.35)",
      "rgba(94,234,212,0.30)",
      "rgba(165,243,252,0.40)",
      "rgba(255,255,255,0.30)",
    ];
    setBubbles(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 20 + 5,
        duration: Math.random() * 10 + 9,
        delay: Math.random() * 18,
        color: colors[Math.floor(Math.random() * colors.length)],
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
            border: `1.5px solid ${b.color}`,
            backgroundColor: b.color.replace(/[\d.]+\)$/, "0.08)"),
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function LightShafts() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[
        { left: "12%", width: "80px",  height: "70%", delay: "0s",    opacity: 0.18 },
        { left: "28%", width: "140px", height: "85%", delay: "1.2s",  opacity: 0.12 },
        { left: "48%", width: "100px", height: "90%", delay: "0.5s",  opacity: 0.16 },
        { left: "63%", width: "60px",  height: "65%", delay: "2.1s",  opacity: 0.14 },
        { left: "79%", width: "120px", height: "80%", delay: "0.8s",  opacity: 0.13 },
        { left: "91%", width: "50px",  height: "55%", delay: "1.7s",  opacity: 0.10 },
      ].map((ray, i) => (
        <div
          key={i}
          className="absolute top-0 animate-light-ray"
          style={{
            left: ray.left,
            width: ray.width,
            height: ray.height,
            background: `linear-gradient(180deg, rgba(186,230,253,${ray.opacity + 0.08}) 0%, rgba(125,211,252,${ray.opacity}) 40%, transparent 100%)`,
            transform: "skewX(-8deg)",
            transformOrigin: "top center",
            animationDelay: ray.delay,
            borderRadius: "0 0 50% 50%",
          }}
        />
      ))}
    </div>
  );
}

// Each character floater gets its own glow color
const FLOATERS = [
  { name: "pip",     x: "6%",  y: "60%", size: 130, delay: 0,   glow: "rgba(245,166,35,0.7)",  ring: "#F5A623" },
  { name: "zippy",   x: "16%", y: "42%", size: 95,  delay: 1.4, glow: "rgba(6,182,212,0.7)",   ring: "#06B6D4" },
  { name: "coral",   x: "79%", y: "56%", size: 128, delay: 0.7, glow: "rgba(232,96,28,0.6)",   ring: "#E8601C" },
  { name: "rara",    x: "71%", y: "34%", size: 90,  delay: 2.1, glow: "rgba(167,139,250,0.6)", ring: "#A78BFA" },
  { name: "blaze",   x: "87%", y: "68%", size: 78,  delay: 0.3, glow: "rgba(251,146,60,0.6)",  ring: "#FB923C" },
  { name: "bubbles", x: "25%", y: "70%", size: 72,  delay: 1.8, glow: "rgba(94,234,212,0.6)",  ring: "#5EEAD4" },
  { name: "noir",    x: "62%", y: "70%", size: 76,  delay: 1.1, glow: "rgba(99,102,241,0.6)",  ring: "#6366F1" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(175deg, #0EA5E9 0%, #06B6D4 22%, #0D9488 52%, #065F46 80%, #047857 100%)",
      }}
    >
      {/* Ambient glow layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% -5%, rgba(186,230,253,0.55) 0%, transparent 65%),
            radial-gradient(ellipse 45% 35% at 15% 20%, rgba(125,211,252,0.30) 0%, transparent 55%),
            radial-gradient(ellipse 40% 30% at 85% 15%, rgba(94,234,212,0.25) 0%, transparent 55%),
            radial-gradient(ellipse 60% 40% at 50% 110%, rgba(4,120,87,0.7) 0%, transparent 60%)
          `,
        }}
      />

      {/* Light shafts from surface */}
      <LightShafts />

      {/* Bubbles */}
      <BubbleField />

      {/* Floating character images — desktop only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {FLOATERS.map((f, i) => (
          <motion.div
            key={f.name}
            className="absolute"
            animate={{ y: [0, -(10 + i * 2), 0], rotate: [0, i % 2 === 0 ? 2.5 : -2.5, 0] }}
            transition={{ duration: 5 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: f.delay }}
            style={{ left: f.x, top: f.y, width: f.size, height: f.size }}
          >
            {/* Glow halo behind circle */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: `0 0 20px 6px ${f.glow}, 0 0 40px 10px ${f.glow.replace(/[\d.]+\)$/, "0.35)")}`,
                borderRadius: "50%",
              }}
            />
            <div
              className="relative w-full h-full rounded-full overflow-hidden"
              style={{
                border: `2.5px solid ${f.ring}`,
                boxShadow: `0 0 0 1px rgba(255,255,255,0.25), inset 0 0 8px rgba(255,255,255,0.10)`,
              }}
            >
              <Image
                src={`/characters/${f.name}.png`}
                alt=""
                fill
                className="object-cover object-top"
                sizes="130px"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sparkle dots scattered */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {[
          { x: "35%", y: "25%", delay: "0s" },
          { x: "55%", y: "18%", delay: "0.8s" },
          { x: "42%", y: "48%", delay: "1.6s" },
          { x: "70%", y: "30%", delay: "0.4s" },
          { x: "20%", y: "35%", delay: "2.1s" },
        ].map((s, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: s.x,
              top: s.y,
              animationDelay: s.delay,
              width: 10,
              height: 10,
            }}
          >
            <svg viewBox="0 0 20 20" fill="rgba(186,230,253,0.9)">
              <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
        <svg aria-hidden="true" viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-full">
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
            className="text-xs font-bold uppercase tracking-[0.25em] mb-6"
            style={{ color: "rgba(186,230,253,0.85)", fontFamily: "var(--font-body), sans-serif" }}
          >
            An original children's world
          </p>
          <h1
            className="display-xl font-black mb-6"
            style={{
              fontFamily: "var(--font-heading), sans-serif",
              color: "#fff",
              textShadow: "0 2px 40px rgba(0,0,0,0.20), 0 0 80px rgba(186,230,253,0.25)",
            }}
          >
            A world of wonder<br className="hidden sm:block" />
            <span style={{ color: "#FDE68A", textShadow: "0 0 40px rgba(251,191,36,0.6), 0 0 80px rgba(251,191,36,0.3)" }}>
              for the newest
            </span><br className="hidden sm:block" />
            generation.
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: "rgba(224,242,254,0.90)", fontFamily: "var(--font-body), sans-serif" }}
          >
            Shrempies is music, stories, and characters built for babies and toddlers — emotionally honest, developmentally grounded, and actually beautiful.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/characters"
              className="shimmer cta-pulse px-8 py-4 rounded-full font-black text-lg transition-transform hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "#E8601C",
                color: "#fff",
                fontFamily: "var(--font-heading), sans-serif",
              }}
            >
              Meet the Shrempies
            </Link>
            <Link
              href="/invest"
              className="px-8 py-4 rounded-full font-black text-lg transition-transform hover:scale-105 active:scale-95"
              style={{
                color: "#fff",
                fontFamily: "var(--font-heading), sans-serif",
                background: "rgba(255,255,255,0.15)",
                border: "1.5px solid rgba(255,255,255,0.35)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.20)",
              }}
            >
              For Investors →
            </Link>
          </div>

          {/* Platform links */}
          <div className="flex flex-col items-center gap-2">
            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "rgba(186,230,253,0.50)", fontFamily: "var(--font-body), sans-serif" }}
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
            { value: 36, label: "Original Songs" },
            { value: 16, label: "Episode Scripts" },
            { value: 13, label: "Characters" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-4xl font-black"
                style={{
                  color: "#FDE68A",
                  fontFamily: "var(--font-heading), sans-serif",
                  textShadow: "0 0 30px rgba(251,191,36,0.7)",
                }}
              >
                <CountUp value={s.value} duration={1700} />
              </div>
              <div
                className="text-sm font-semibold mt-1"
                style={{ color: "rgba(186,230,253,0.70)", fontFamily: "var(--font-body), sans-serif" }}
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
