"use client";

import { motion } from "framer-motion";

interface EpisodeCardProps {
  number: number;
  title: string;
  lesson: string;
  description: string;
  characters: string[];
}

export default function EpisodeCard({ number, title, lesson, description, characters }: EpisodeCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="rounded-2xl p-5 flex flex-col gap-3 h-full"
      style={{
        backgroundColor: "white",
        border: "1.5px solid #E1F5EE",
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black shrink-0"
          style={{ backgroundColor: "#085041", color: "white", fontFamily: "var(--font-heading), sans-serif" }}
        >
          {number}
        </div>
        <span
          className="px-3 py-1 rounded-full text-xs font-bold"
          style={{
            backgroundColor: "#E1F5EE",
            color: "#085041",
            fontFamily: "var(--font-body), sans-serif",
          }}
        >
          Coming Soon
        </span>
      </div>

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

      <div className="flex items-center justify-between mt-auto pt-2 border-t" style={{ borderColor: "#E1F5EE" }}>
        <span
          className="text-xs font-semibold opacity-60"
          style={{ color: "#085041", fontFamily: "var(--font-body), sans-serif" }}
        >
          {lesson}
        </span>
        <div className="flex -space-x-1">
          {characters.slice(0, 3).map((c) => (
            <div
              key={c}
              className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-white text-[9px] font-bold"
              style={{ backgroundColor: "#1D9E75" }}
              title={c}
            >
              {c[0]}
            </div>
          ))}
          {characters.length > 3 && (
            <div
              className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-white text-[9px] font-bold"
              style={{ backgroundColor: "#085041" }}
            >
              +{characters.length - 3}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
