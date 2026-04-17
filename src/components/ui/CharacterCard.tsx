"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CharacterCardProps {
  name: string;
  color: string;
  species?: string;
  personality: string;
  trait: string;
  size?: "large" | "small";
}

function isLightColor(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 200;
}

export default function CharacterCard({ name, color, species, personality, trait, size = "large" }: CharacterCardProps) {
  const isLarge = size === "large";
  const light = isLightColor(color);
  // For very light chars (Mimi), use a darker display color for text/accents
  const displayColor = light ? "#8a7d6a" : color;
  const bgColor = light ? "#F0EBE3" : `${color}18`;
  const borderColor = light ? "#d4c9bc" : `${color}30`;
  const chipBg = light ? "#E8E0D5" : `${color}20`;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-3xl overflow-hidden flex flex-col h-full"
      style={{
        backgroundColor: bgColor,
        border: `2px solid ${borderColor}`,
      }}
    >
      {/* Character illustration */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundColor: light ? "#E8E0D580" : `${color}15`,
          aspectRatio: "1 / 1",
        }}
      >
        <motion.div
          className="w-full h-full"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={`/characters/${name.toLowerCase()}.png`}
            alt={name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-5 flex-1 flex flex-col gap-2">
        <div>
          <h3
            className="font-black text-xl"
            style={{ fontFamily: "var(--font-heading), sans-serif", color: displayColor }}
          >
            {name}
          </h3>
          {species && (
            <p
              className="text-xs opacity-50 mt-0.5"
              style={{ color: "#042C53", fontFamily: "var(--font-body), sans-serif" }}
            >
              {species}
            </p>
          )}
        </div>
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "#042C53", fontFamily: "var(--font-body), sans-serif", opacity: 0.8 }}
        >
          {personality}
        </p>
        <div
          className="mt-2 px-3 py-2 rounded-xl text-xs font-semibold"
          style={{ backgroundColor: chipBg, color: displayColor, fontFamily: "var(--font-body), sans-serif" }}
        >
          ✦ {trait}
        </div>
      </div>
    </motion.div>
  );
}
