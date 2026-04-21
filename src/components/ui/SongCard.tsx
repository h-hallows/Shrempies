"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { categoryColors } from "@/lib/data";

interface SongCardProps {
  title: string;
  category: string;
  hook: string;
  lyric: string;
  character?: string;
}

export default function SongCard({ title, category, hook, lyric, character }: SongCardProps) {
  const [expanded, setExpanded] = useState(false);
  const color = categoryColors[category] ?? "#085041";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group rounded-2xl overflow-hidden flex flex-col cursor-pointer relative"
      style={{ backgroundColor: "white", border: `1.5px solid ${color}25`, boxShadow: "0 2px 0 0 rgba(6,30,58,0.04), 0 6px 20px rgba(6,30,58,0.06)" }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Top color bar */}
      <div className="h-1.5 w-full" style={{ backgroundColor: color }} />

      {/* Faded character portrait — top right */}
      {character && (
        <div className="absolute top-1.5 right-0 w-28 h-28 overflow-hidden pointer-events-none opacity-15 group-hover:opacity-28 transition-opacity duration-500">
          <Image
            src={`/characters/${character.toLowerCase()}.png`}
            alt=""
            fill
            className="object-cover object-top"
            sizes="112px"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to left, transparent 0%, white 90%)" }}
          />
        </div>
      )}

      <div className="relative p-5 flex flex-col gap-3 flex-1">
        {/* Category badge + character chip */}
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white"
            style={{ backgroundColor: color, fontFamily: "var(--font-body), sans-serif" }}
          >
            {category}
          </span>
          {character && (
            <div className="flex items-center gap-1.5">
              <div className="relative w-5 h-5 rounded-full overflow-hidden" style={{ border: `1.5px solid ${color}` }}>
                <Image
                  src={`/characters/${character.toLowerCase()}.png`}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="20px"
                />
              </div>
              <span
                className="text-[10px] font-bold uppercase tracking-wider opacity-60"
                style={{ color: "#042C53", fontFamily: "var(--font-body), sans-serif" }}
              >
                {character}
              </span>
            </div>
          )}
        </div>

        <h3
          className="font-black text-base leading-snug"
          style={{ fontFamily: "var(--font-heading), sans-serif", color: "#042C53" }}
        >
          {title}
        </h3>

        <p
          className="text-sm opacity-70"
          style={{ color: "#042C53", fontFamily: "var(--font-body), sans-serif" }}
        >
          {hook}
        </p>

        {/* Lyric preview */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div
                className="mt-1 p-4 rounded-xl text-sm leading-relaxed italic border-l-4"
                style={{
                  backgroundColor: `${color}10`,
                  borderColor: color,
                  color: "#042C53",
                  fontFamily: "var(--font-body), sans-serif",
                  whiteSpace: "pre-line",
                }}
              >
                {lyric}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex items-center justify-between mt-auto pt-2 gap-2">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white opacity-85 hover:opacity-100 transition-opacity"
            style={{ backgroundColor: color, fontFamily: "var(--font-body), sans-serif" }}
            onClick={(e) => { e.stopPropagation(); }}
          >
            <PlayIcon />
            Preview
          </button>

          {/* Equalizer bars — show on card hover */}
          <div className="hidden sm:flex items-end gap-0.5 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                className="w-0.5 rounded-full"
                style={{
                  backgroundColor: color,
                  height: `${[55, 100, 40, 75][bar - 1]}%`,
                  animation: `eq-bar-${bar} ${0.6 + bar * 0.15}s ease-in-out infinite alternate`,
                }}
              />
            ))}
          </div>

          <button
            className="text-xs font-semibold opacity-50 hover:opacity-80 transition-opacity"
            style={{ color, fontFamily: "var(--font-body), sans-serif" }}
            onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
          >
            {expanded ? "Hide lyrics ↑" : "See lyrics ↓"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
      <path d="M2 1.5L10 6L2 10.5V1.5Z" />
    </svg>
  );
}
