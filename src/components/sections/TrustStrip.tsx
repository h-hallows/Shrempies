"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import {
  StarIcon, NoteIcon, SparkleIcon, ShieldIcon, WaveIcon, HeartIcon, EyeIcon, BubbleIcon, PlayIcon,
} from "@/components/ui/Icons";

type IconCmp = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

const ITEMS: { Icon: IconCmp; text: string }[] = [
  { Icon: StarIcon,    text: "13 original characters" },
  { Icon: NoteIcon,    text: "36 songs" },
  { Icon: SparkleIcon, text: "0 villains" },
  { Icon: ShieldIcon,  text: "0 ads to children. Ever." },
  { Icon: WaveIcon,    text: "Built for Gen Beta" },
  { Icon: HeartIcon,   text: "Emotionally intelligent" },
  { Icon: EyeIcon,     text: "Developmentally grounded" },
  { Icon: BubbleIcon,  text: "Actually beautiful" },
  { Icon: ShieldIcon,  text: "Zero data collection" },
  { Icon: PlayIcon,    text: "16 episode scripts" },
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
          <div key={i} className="group flex items-center gap-3 px-6 transition-opacity">
            <span className="transition-transform group-hover:scale-110" style={{ color: "#5EEAD4" }}>
              <item.Icon size={16} />
            </span>
            <span
              className="text-xs font-bold uppercase tracking-[0.18em] transition-colors"
              style={{ color: "rgba(225,245,238,0.82)", fontFamily: "var(--font-body), sans-serif" }}
            >
              {item.text}
            </span>
            <span
              aria-hidden="true"
              className="ml-3"
              style={{
                display: "inline-block",
                width: 4,
                height: 4,
                borderRadius: 9999,
                backgroundColor: "rgba(94,234,212,0.45)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
