"use client";

import { useState } from "react";

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
  const [paused, setPaused] = useState(false);
  return (
    <div
      className="relative overflow-hidden py-3"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
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

      <div
        className="animate-track flex items-center gap-0 whitespace-nowrap"
        data-paused={paused ? "true" : "false"}
        style={{ width: "max-content" }}
      >
        {TRACK.map((item, i) => (
          <div key={i} className="group flex items-center gap-6 px-6 transition-opacity">
            <span className="text-base transition-transform group-hover:scale-125">{item.icon}</span>
            <span
              className="text-xs font-bold uppercase tracking-[0.18em] transition-colors"
              style={{ color: "rgba(225,245,238,0.82)", fontFamily: "var(--font-body), sans-serif" }}
            >
              {item.text}
            </span>
            <span style={{ color: "rgba(94,234,212,0.35)", fontSize: 8 }}>◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
