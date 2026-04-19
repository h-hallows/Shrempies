"use client";

import { motion } from "framer-motion";

const ITEMS = [
  { icon: "🦐", text: "13 original characters" },
  { icon: "🎵", text: "36 songs" },
  { icon: "✦",  text: "0 villains" },
  { icon: "🚫", text: "0 ads to children. Ever." },
  { icon: "🌊", text: "Built for Gen Beta" },
  { icon: "❤️", text: "Emotionally intelligent" },
  { icon: "🧠", text: "Developmentally grounded" },
  { icon: "✨", text: "Actually beautiful" },
  { icon: "🔒", text: "Zero data collection" },
  { icon: "🎬", text: "16 episode scripts" },
];

// Duplicate for seamless loop
const TRACK = [...ITEMS, ...ITEMS];

export default function TrustStrip() {
  return (
    <div
      className="relative overflow-hidden py-3"
      style={{
        background: "linear-gradient(90deg, #042c53 0%, #061E3A 50%, #053d2e 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #061E3A, transparent)" }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #061E3A, transparent)" }}
      />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-0 whitespace-nowrap"
        style={{ width: "max-content" }}
      >
        {TRACK.map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-6">
            <span className="text-base">{item.icon}</span>
            <span
              className="text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: "rgba(214,245,234,0.65)", fontFamily: "var(--font-body), sans-serif" }}
            >
              {item.text}
            </span>
            <span style={{ color: "rgba(94,234,212,0.25)", fontSize: 8 }}>◆</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
