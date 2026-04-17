"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PEEK_CHARS = [
  { name: "pip",     color: "#F5A623" },
  { name: "coral",   color: "#E8601C" },
  { name: "zippy",   color: "#06B6D4" },
  { name: "bubbles", color: "#5EEAD4" },
  { name: "rara",    color: "#A78BFA" },
];

export default function EmailSignup() {
  const [email, setEmail] = useState("");
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
        body: JSON.stringify({ email, type: "early-access" }),
      });
    } catch {
      // fail silently for now
    }
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #042c53 0%, #061E3A 50%, #053d2e 100%)",
      }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full"
          style={{ width: 400, height: 400, left: "5%", top: "-10%",
            background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)" }} />
        <div className="absolute rounded-full"
          style={{ width: 350, height: 350, right: "5%", bottom: "-10%",
            background: "radial-gradient(circle, rgba(8,80,65,0.25) 0%, transparent 70%)" }} />
      </div>

      {/* Floating character peeks — desktop */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {PEEK_CHARS.map((char, i) => {
          const positions = [
            { left: "3%",  bottom: "10%" },
            { left: "10%", bottom: "55%" },
            { right: "3%", bottom: "10%" },
            { right: "10%", bottom: "55%" },
            { right: "20%", bottom: "5%" },
          ];
          const pos = positions[i];
          const size = i % 2 === 0 ? 80 : 64;
          return (
            <motion.div
              key={char.name}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
              className="absolute"
              style={{ ...pos, width: size, height: size, opacity: 0.55 }}
            >
              <div className="relative w-full h-full rounded-full overflow-hidden"
                style={{ border: `2px solid ${char.color}55`, backgroundColor: char.color }}>
                <Image src={`/characters/${char.name}.png`} alt={char.name} fill
                  className="object-cover object-top" sizes="80px" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Subtle wave top */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,24 C360,48 720,0 1080,24 C1260,36 1380,12 1440,24 L1440,0 L0,0 Z" fill="#FBF8F3" />
        </svg>
      </div>

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Emoji cluster */}
          <div className="flex items-center justify-center gap-1 mb-6">
            {["🦐", "🎵", "🌊", "✨", "🦐"].map((e, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                className="text-2xl"
              >
                {e}
              </motion.span>
            ))}
          </div>

          <h2
            className="text-4xl sm:text-5xl font-black mb-4 leading-tight"
            style={{ fontFamily: "var(--font-heading), sans-serif", color: "#FAF7F2" }}
          >
            Stay in the reef.
          </h2>
          <p
            className="text-base mb-3 leading-relaxed"
            style={{ color: "rgba(225,245,238,0.75)", fontFamily: "var(--font-body), sans-serif" }}
          >
            New songs, printables, and episode updates — direct to your inbox. Be the first family to discover what's coming next.
          </p>
          <p
            className="text-xs mb-10 opacity-40"
            style={{ color: "#E1F5EE", fontFamily: "var(--font-body), sans-serif" }}
          >
            Zero ads · Zero data selling · Unsubscribe any time
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8"
            >
              <div className="text-5xl mb-4">🦐</div>
              <p
                className="text-2xl font-black mb-2"
                style={{ fontFamily: "var(--font-heading), sans-serif", color: "#F5A623" }}
              >
                You're in the reef!
              </p>
              <p
                className="opacity-60 text-sm"
                style={{ color: "#E1F5EE", fontFamily: "var(--font-body), sans-serif" }}
              >
                Welcome to the Shrempies world. We'll be in touch soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-4 rounded-full text-sm font-medium outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.10)",
                  color: "#FAF7F2",
                  border: "1.5px solid rgba(255,255,255,0.20)",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-4 rounded-full font-black text-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-60 shrink-0"
                style={{
                  backgroundColor: "#F5A623",
                  color: "#042C53",
                  fontFamily: "var(--font-heading), sans-serif",
                  boxShadow: "0 4px 20px rgba(245,166,35,0.4)",
                }}
              >
                {loading ? "..." : "Join the reef →"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
