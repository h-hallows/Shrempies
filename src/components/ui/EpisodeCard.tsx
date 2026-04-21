"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { characters } from "@/lib/data";

interface EpisodeCardProps {
  number: number;
  title: string;
  lesson: string;
  description: string;
  characters: string[];
  /** Optional accent color; defaults to first character's color or teal */
  accent?: string;
}

function charColor(name: string): string {
  const found = characters.featured.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );
  return found?.color ?? "#085041";
}

export default function EpisodeCard({
  number,
  title,
  lesson,
  description,
  characters: charList,
  accent,
}: EpisodeCardProps) {
  const color = accent ?? charColor(charList[0] ?? "") ?? "#085041";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group rounded-2xl flex flex-col h-full overflow-hidden"
      style={{
        backgroundColor: "white",
        border: `1.5px solid ${color}25`,
        boxShadow: "0 2px 0 0 rgba(6,30,58,0.04), 0 8px 24px rgba(6,30,58,0.07)",
      }}
    >
      {/* Colored strip with big faded episode number + abstract shapes */}
      <div
        className="relative overflow-hidden"
        style={{
          height: 80,
          background: `linear-gradient(135deg, ${color}28 0%, ${color}10 100%)`,
        }}
      >
        <svg
          viewBox="0 0 400 80"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <circle cx="80"  cy="20"  r="30" fill={color} opacity="0.10" />
          <circle cx="340" cy="55"  r="22" fill={color} opacity="0.14" />
          <circle cx="220" cy="10"  r="14" fill={color} opacity="0.08" />
        </svg>

        {/* Large faded episode number */}
        <div
          className="absolute right-4 bottom-0 leading-none font-black select-none transition-transform duration-500 group-hover:scale-110"
          style={{
            fontFamily: "var(--font-heading), sans-serif",
            fontSize: 76,
            color,
            opacity: 0.18,
            transform: "translateY(18px)",
          }}
        >
          {String(number).padStart(2, "0")}
        </div>

        {/* Episode badge */}
        <div
          className="absolute top-3 left-4 flex items-center gap-2"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black"
            style={{ backgroundColor: color, color: "white", fontFamily: "var(--font-heading), sans-serif", boxShadow: `0 4px 12px ${color}55` }}
          >
            {number}
          </div>
          <span
            className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
            style={{ backgroundColor: "rgba(255,255,255,0.85)", color, fontFamily: "var(--font-body), sans-serif", backdropFilter: "blur(4px)" }}
          >
            Coming Soon
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3
          className="font-black text-base leading-snug"
          style={{ fontFamily: "var(--font-heading), sans-serif", color: "#042C53" }}
        >
          {title}
        </h3>

        <p
          className="text-sm leading-relaxed opacity-70 flex-1"
          style={{ color: "#042C53", fontFamily: "var(--font-body), sans-serif" }}
        >
          {description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t" style={{ borderColor: `${color}18` }}>
          <span
            className="text-xs font-semibold opacity-65"
            style={{ color, fontFamily: "var(--font-body), sans-serif" }}
          >
            {lesson}
          </span>
          <div className="flex -space-x-2">
            {charList.slice(0, 3).map((c) => {
              const cc = charColor(c);
              return (
                <div
                  key={c}
                  className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white"
                  style={{ backgroundColor: cc }}
                  title={c}
                >
                  <Image
                    src={`/characters/${c.toLowerCase()}.png`}
                    alt=""
                    fill
                    className="object-cover object-top"
                    sizes="28px"
                  />
                </div>
              );
            })}
            {charList.length > 3 && (
              <div
                className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-[9px] font-bold"
                style={{ backgroundColor: color }}
              >
                +{charList.length - 3}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
