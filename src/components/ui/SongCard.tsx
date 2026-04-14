"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categoryColors } from "@/lib/data";

interface SongCardProps {
  title: string;
  category: string;
  hook: string;
  lyric: string;
}

export default function SongCard({ title, category, hook, lyric }: SongCardProps) {
  const [expanded, setExpanded] = useState(false);
  const color = categoryColors[category] ?? "#085041";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="rounded-2xl overflow-hidden flex flex-col cursor-pointer"
      style={{ backgroundColor: "white", border: `1.5px solid ${color}25` }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Top color bar */}
      <div className="h-1.5 w-full" style={{ backgroundColor: color }} />

      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Category badge */}
        <span
          className="self-start px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white"
          style={{ backgroundColor: color, fontFamily: "var(--font-body), sans-serif" }}
        >
          {category}
        </span>

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
        <div className="flex items-center justify-between mt-auto pt-2">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white opacity-80 hover:opacity-100 transition-opacity"
            style={{ backgroundColor: color, fontFamily: "var(--font-body), sans-serif" }}
            onClick={(e) => { e.stopPropagation(); }}
          >
            <PlayIcon />
            Preview
          </button>
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
