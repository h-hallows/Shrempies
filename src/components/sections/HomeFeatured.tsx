"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const FEATURED_SONGS = [
  {
    title: "The Grumpy Feeling",
    character: "Pip",
    characterColor: "#E8601C",
    desc: "When you feel grumpy and you don't know why — and that's okay.",
    tag: "Big Feelings",
    tagColor: "#E8601C",
    new: true,
  },
  {
    title: "Float Away",
    character: "Rara",
    characterColor: "#7B4FBF",
    desc: "A dreamy lullaby for the big feelings that need to drift away at bedtime.",
    tag: "Bedtime",
    tagColor: "#7B4FBF",
    new: false,
  },
  {
    title: "Wriggle & Jiggle",
    character: "Zippy",
    characterColor: "#F5C300",
    desc: "The movement song that makes your whole body want to join in.",
    tag: "Dance & Move",
    tagColor: "#F5C300",
    new: true,
  },
];

const WHAT_IS_NEW = [
  {
    icon: "♪",
    color: "#0D9488",
    label: "Volume 2 songs",
    desc: "18 new tracks now streaming",
  },
  {
    icon: "◎",
    color: "#06B6D4",
    label: "Episode scripts",
    desc: "16 full episodes written",
  },
  {
    icon: "✦",
    color: "#F5A623",
    label: "Characters expanded",
    desc: "All 13 cast members profiled",
  },
  {
    icon: "◈",
    color: "#E8601C",
    label: "Printables coming",
    desc: "Activity packs in production",
  },
];

export default function HomeFeatured() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FBF8F3" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span
                className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider"
                style={{ backgroundColor: "#E8601C", color: "#fff", fontFamily: "var(--font-body), sans-serif" }}
              >
                New
              </span>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#085041", fontFamily: "var(--font-body), sans-serif" }}
              >
                Spotlight
              </p>
            </div>
            <h2
              className="display-lg font-black leading-none"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}
            >
              Fresh from<br />the reef.
            </h2>
          </div>
          <Link
            href="/songs"
            className="self-start sm:self-auto shrink-0 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
            style={{
              backgroundColor: "#F0F9F4",
              color: "#085041",
              border: "1.5px solid #085041",
              fontFamily: "var(--font-body), sans-serif",
            }}
          >
            All songs →
          </Link>
        </motion.div>

        {/* Featured songs — horizontal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {FEATURED_SONGS.map((song, i) => (
            <motion.div
              key={song.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.10 }}
              whileHover={{ y: -4 }}
              className="relative rounded-3xl overflow-hidden cursor-pointer group"
              style={{
                background: `linear-gradient(145deg, ${song.characterColor}18 0%, ${song.characterColor}08 100%)`,
                border: `1.5px solid ${song.characterColor}25`,
              }}
            >
              {song.new && (
                <div
                  className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-black"
                  style={{ backgroundColor: song.characterColor, color: "#fff", fontFamily: "var(--font-body), sans-serif" }}
                >
                  NEW
                </div>
              )}

              <div className="p-8">
                {/* Character indicator */}
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: song.characterColor }}
                  />
                  <span
                    className="text-xs font-bold uppercase tracking-wider opacity-60"
                    style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}
                  >
                    {song.character}
                  </span>
                </div>

                {/* Play button + title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: song.characterColor }}
                  >
                    <svg viewBox="0 0 20 20" fill="white" className="w-5 h-5 ml-0.5">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-black leading-snug pt-1"
                    style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}
                  >
                    {song.title}
                  </h3>
                </div>

                <p
                  className="text-sm leading-relaxed mb-5 opacity-65"
                  style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}
                >
                  {song.desc}
                </p>

                <span
                  className="inline-block px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: `${song.tagColor}15`,
                    color: song.tagColor,
                    fontFamily: "var(--font-body), sans-serif",
                  }}
                >
                  {song.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What's new strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl px-8 py-7"
          style={{
            background: "linear-gradient(135deg, #061E3A 0%, #085041 100%)",
          }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-1 opacity-40" style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
                What we've built
              </p>
              <h3 className="text-xl font-black" style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}>
                A whole world, already built.
              </h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {WHAT_IS_NEW.map((w) => (
                <div key={w.label} className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0"
                    style={{ backgroundColor: `${w.color}20`, color: w.color }}
                  >
                    {w.icon}
                  </div>
                  <div>
                    <div className="text-xs font-black leading-tight" style={{ color: "#fff", fontFamily: "var(--font-heading), sans-serif" }}>
                      {w.label}
                    </div>
                    <div className="text-xs opacity-50" style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
                      {w.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
