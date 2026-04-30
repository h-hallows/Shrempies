"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { characters } from "@/lib/data";

const slug = (name: string) => `char-${name.toLowerCase()}`;

function CharacterNavigator() {
  const [active, setActive] = useState<string>(characters.featured[0].name);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const id = visible.target.getAttribute("data-char");
          if (id) setActive(id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    characters.featured.forEach((c) => {
      const el = document.getElementById(slug(c.name));
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Auto-scroll strip to keep active centered
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const btn = strip.querySelector<HTMLElement>(`[data-navchar="${active}"]`);
    if (btn) {
      const offset = btn.offsetLeft - strip.clientWidth / 2 + btn.clientWidth / 2;
      strip.scrollTo({ left: offset, behavior: "smooth" });
    }
  }, [active]);

  return (
    <div
      className="sticky top-0 z-40 backdrop-blur-md border-b"
      style={{
        backgroundColor: "rgba(251,248,243,0.88)",
        borderColor: "rgba(6,30,58,0.08)",
      }}
    >
      <div
        ref={stripRef}
        className="flex gap-3 overflow-x-auto px-4 sm:px-6 lg:px-8 py-3 scrollbar-none"
        style={{ scrollBehavior: "smooth" }}
      >
        {characters.featured.map((c) => {
          const isActive = c.name === active;
          return (
            <button
              key={c.name}
              data-navchar={c.name}
              onClick={() => {
                const el = document.getElementById(slug(c.name));
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              aria-label={`Jump to ${c.name}`}
              className="relative shrink-0 transition-transform hover:scale-110 active:scale-95"
              style={{ width: 44, height: 44 }}
            >
              <div
                className="relative w-full h-full rounded-full overflow-hidden transition-all"
                style={{
                  border: `2.5px solid ${isActive ? c.color : "transparent"}`,
                  boxShadow: isActive ? `0 0 0 3px ${c.color}33, 0 4px 12px ${c.color}55` : "none",
                  backgroundColor: c.color,
                  opacity: isActive ? 1 : 0.75,
                }}
              >
                <Image
                  src={`/characters/${c.name.toLowerCase()}.png`}
                  alt=""
                  fill
                  sizes="44px"
                  className="object-cover object-top"
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CharacterPanel({
  char,
  index,
}: {
  char: (typeof characters.featured)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const isEven = index % 2 === 0;

  // Derive a lightened version for bg
  const panelBg = char.color;

  return (
    <motion.div
      ref={ref}
      id={slug(char.name)}
      data-char={char.name}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="relative flex flex-col md:flex-row min-h-[90vw] md:min-h-[72vh] overflow-hidden scroll-mt-20"
    >
      {/* Image side */}
      <div
        className={`relative w-full md:w-[55%] overflow-hidden ${isEven ? "order-1" : "order-1 md:order-2"}`}
        style={{ minHeight: "60vw", maxHeight: "85vh" }}
      >
        <motion.div className="absolute inset-0 scale-110" style={{ y: imgY }}>
          <Image
            src={`/characters/${char.name.toLowerCase()}.png`}
            alt={char.name}
            fill
            className="object-cover object-center"
            sizes="55vw"
          />
        </motion.div>
        {/* Gradient fade into info panel */}
        <div
          className={`absolute inset-y-0 w-1/3 ${isEven ? "right-0" : "left-0"}`}
          style={{
            background: `linear-gradient(${isEven ? "to right" : "to left"}, transparent, ${panelBg})`,
          }}
        />
        {/* Number badge */}
        <div
          className="absolute top-6 left-6 w-12 h-12 rounded-full flex items-center justify-center font-black text-sm"
          style={{
            backgroundColor: "rgba(0,0,0,0.35)",
            color: "rgba(255,255,255,0.9)",
            fontFamily: "var(--font-heading), sans-serif",
            backdropFilter: "blur(8px)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Info side */}
      <div
        className={`relative w-full md:w-[45%] flex flex-col justify-center px-8 md:px-14 py-12 md:py-16 ${isEven ? "order-2" : "order-2 md:order-1"}`}
        style={{ backgroundColor: panelBg }}
      >
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at ${isEven ? "0% 50%" : "100% 50%"}, rgba(255,255,255,0.18) 0%, transparent 70%)`,
          }}
        />

        <div className="relative z-10 max-w-sm">
          {/* Species */}
          <p
            className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-70"
            style={{ color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-body), sans-serif" }}
          >
            {char.species}
          </p>

          {/* Name */}
          <h2
            className="display-lg font-black mb-5"
            style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}
          >
            {char.name}
          </h2>

          {/* Personality */}
          <p
            className="text-base md:text-lg leading-relaxed mb-8 opacity-90"
            style={{ color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-body), sans-serif" }}
          >
            {char.personality}
          </p>

          {/* Trait chip */}
          <div
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold"
            style={{
              backgroundColor: "rgba(0,0,0,0.2)",
              color: "rgba(255,255,255,0.95)",
              fontFamily: "var(--font-body), sans-serif",
              backdropFilter: "blur(8px)",
            }}
          >
            <span style={{ opacity: 0.7 }}>✦</span>
            {char.trait}
          </div>

          {/* Cross-links */}
          <div className="mt-7 flex flex-wrap gap-2">
            <Link
              href="/songs"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all hover:scale-105"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.25)",
                fontFamily: "var(--font-body), sans-serif",
                backdropFilter: "blur(8px)",
              }}
            >
              <span>♪</span>
              <span>Hear the songs</span>
              <span className="opacity-70">→</span>
            </Link>
            <Link
              href="/episodes"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all hover:scale-105"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.25)",
                fontFamily: "var(--font-body), sans-serif",
                backdropFilter: "blur(8px)",
              }}
            >
              <span>✦</span>
              <span>See the episodes</span>
              <span className="opacity-70">→</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CharactersPage() {
  return (
    <div style={{ backgroundColor: "#FBF8F3" }}>
      {/* Hero */}
      <section
        className="relative py-24 px-4 text-center overflow-hidden"
        style={{ background: "linear-gradient(175deg, #0EA5E9 0%, #06B6D4 22%, #0D9488 52%, #065F46 80%, #047857 100%)" }}
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(186,230,253,0.50) 0%, transparent 65%)",
        }} />
        {/* Character color orbs */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-glow pointer-events-none"
            style={{
              width: `${120 + i * 60}px`,
              height: `${120 + i * 60}px`,
              left: `${10 + i * 20}%`,
              top: `${20 + (i % 2) * 40}%`,
              background: `radial-gradient(circle, ${["#E8601C","#F5C300","#06B6D4","#A78BFA","#5EEAD4"][i]}30 0%, transparent 70%)`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] mb-6 opacity-60"
            style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}
          >
            The cast · 13 original characters
          </p>
          <h1
            className="display-xl font-black mb-6"
            style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}
          >
            Meet the<br />
            <span style={{ color: "#F5A623" }}>Shrempies</span>
          </h1>
          <p
            className="text-xl leading-relaxed opacity-80 max-w-lg mx-auto"
            style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}
          >
            Every one of them has a different way of being in the world. Every one of them has a place in the reef.
          </p>
        </motion.div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg aria-hidden="true" viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,32 C360,64 720,0 1080,32 C1260,48 1380,24 1440,32 L1440,64 L0,64 Z" fill="#FBF8F3" />
          </svg>
        </div>
      </section>

      {/* Character intro video */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ border: "2px solid #D6F5EA" }}
          >
            <video
              src="/characters-intro.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full block"
            />
          </motion.div>
        </div>
      </section>

      {/* Sticky character navigator */}
      <CharacterNavigator />

      {/* Cinematic character panels */}
      <section>
        {characters.featured.map((char, i) => (
          <CharacterPanel key={char.name} char={char} index={i} />
        ))}
      </section>
    </div>
  );
}
