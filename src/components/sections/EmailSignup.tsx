"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Spinner from "@/components/ui/Spinner";

const PEEK_CHARS = [
  { name: "pip",     color: "#F5A623" },
  { name: "coral",   color: "#E8601C" },
  { name: "zippy",   color: "#06B6D4" },
  { name: "bubbles", color: "#5EEAD4" },
  { name: "rara",    color: "#A78BFA" },
];

// Confetti burst particles — decorative only, deterministic trajectories
const CONFETTI = Array.from({ length: 14 }, (_, i) => {
  const angle = (i / 14) * Math.PI * 2;
  const dist = 80 + (i % 3) * 30;
  return {
    color: ["#F5A623", "#E8601C", "#5EEAD4", "#06B6D4", "#FDE68A"][i % 5],
    cx: Math.cos(angle) * 12,
    cy: Math.sin(angle) * 12 - 10,
    cxEnd: Math.cos(angle) * dist,
    cyEnd: Math.sin(angle) * dist + 60,
    size: 8 + (i % 3) * 3,
    delay: (i % 5) * 30,
  };
});

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID;

    // If no endpoint is configured, fall back to a mailto so addresses are
    // never silently lost while the site is freshly live.
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent("Shrempies newsletter signup");
      const body = encodeURIComponent(`Please add ${email} to the Shrempies newsletter.`);
      window.location.href = `mailto:hello@shrempies.com?subject=${subject}&body=${body}`;
      setLoading(false);
      setSubmitted(true);
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, type: "early-access" }),
      });
      if (!res.ok) throw new Error("submit failed");
    } catch {
      // Keep UX optimistic — list manager can dedupe later.
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
        <svg aria-hidden="true" viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-full">
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
              className="py-8 relative"
            >
              {/* Confetti burst — absolutely positioned around the emoji */}
              <div className="absolute left-1/2 top-10 -translate-x-1/2 w-0 h-0 pointer-events-none">
                {CONFETTI.map((p, i) => (
                  <span
                    key={i}
                    className="absolute rounded-sm"
                    style={{
                      width: p.size,
                      height: p.size,
                      backgroundColor: p.color,
                      left: "-4px",
                      top: "-4px",
                      animation: `confetti-burst 1.2s ${p.delay}ms cubic-bezier(0.22,1,0.36,1) forwards`,
                      // CSS custom props consumed by the keyframe
                      ["--cx" as string]: `${p.cx}px`,
                      ["--cy" as string]: `${p.cy}px`,
                      ["--cx-end" as string]: `${p.cxEnd}px`,
                      ["--cy-end" as string]: `${p.cyEnd}px`,
                    }}
                  />
                ))}
              </div>
              <motion.div
                initial={{ scale: 0.5, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="text-5xl mb-4"
              >
                🦐
              </motion.div>
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
                aria-required="true"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                aria-label="Email address"
                className="focus-ring flex-1 px-5 py-4 rounded-full text-sm font-medium outline-none transition-all"
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
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-black text-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-60 shrink-0"
                style={{
                  backgroundColor: "#F5A623",
                  color: "#042C53",
                  fontFamily: "var(--font-heading), sans-serif",
                  boxShadow: "0 4px 20px rgba(245,166,35,0.4)",
                }}
              >
                {loading ? <><Spinner size={14} color="#042C53" /> Sending&hellip;</> : <>Join the reef →</>}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
