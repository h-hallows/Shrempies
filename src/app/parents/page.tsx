"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, type ComponentType, type SVGProps } from "react";
import { EyeIcon, SparkleIcon, HeartIcon, DiamondIcon, NoteIcon, ShieldIcon } from "@/components/ui/Icons";

type IconCmp = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

const AGE_STAGES: {
  range: string; label: string; color: string; bg: string;
  Icon: IconCmp; what: string; why: string; songs: string[];
}[] = [
  {
    range: "0 – 6 months",
    label: "Newborn",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.10)",
    Icon: EyeIcon,
    what: "Gentle lullabies that calm the nervous system. Soft melodies and warm vocals for sensory comfort during feeds, naps, and settling.",
    why: "At this stage, repetition and rhythm are everything. Simple melodic patterns become familiar anchors — giving your baby something predictable in a huge new world.",
    songs: ["Floating with the Tide", "The Shrempy Hum", "Little Lights Go Dim"],
  },
  {
    range: "6 – 12 months",
    label: "Baby",
    color: "#0D9488",
    bg: "rgba(13,148,136,0.10)",
    Icon: SparkleIcon,
    what: "Movement songs that invite wiggling, clapping, and kicking. Call-and-response patterns that develop listening and anticipation.",
    why: "Babies begin to connect cause and effect. Songs with predictable 'what comes next' moments give them the thrill of being right — a crucial developmental win.",
    songs: ["Wiggle Like a Shrempy", "The Bubble Bounce", "Swim Swim Swim"],
  },
  {
    range: "12 – 18 months",
    label: "Early Walker",
    color: "#085041",
    bg: "rgba(8,80,65,0.10)",
    Icon: HeartIcon,
    what: "Simple character songs that introduce names, personalities, and feelings. Stories about recognisable emotions like frustration, excitement, and missing someone.",
    why: "Language is exploding. Songs with clear, repeated vocabulary — especially feeling words — dramatically expand emotional literacy during the most rapid developmental window.",
    songs: ["This Is Shrempy", "Even Shrempies Get the Grumps", "Happy Feels Like Bubbles"],
  },
  {
    range: "18 – 36 months",
    label: "Toddler",
    color: "#E8601C",
    bg: "rgba(232,96,28,0.10)",
    Icon: DiamondIcon,
    what: "Full narrative episodes and character arcs. Songs about big feelings, social situations, and the joy of just being. Imaginative worlds to enter and explore.",
    why: "Toddlers are building theory of mind — starting to understand that others have different feelings. Character-driven stories with emotional honesty directly support this leap.",
    songs: ["I Don't Know and That's Okay", "Two Shrempies", "Across the Coral Reef"],
  },
];

const PILLARS: { Icon: IconCmp; title: string; body: string; color: string }[] = [
  {
    Icon: HeartIcon,
    title: "Emotional intelligence first",
    body: "Every song, story, and character is designed around naming feelings — not hiding them. We treat your child's inner life as the most important thing.",
    color: "#E8601C",
  },
  {
    Icon: EyeIcon,
    title: "Developmentally grounded",
    body: "From nervous system regulation to language acquisition — each piece of content is built around how young brains actually develop, not what's most engaging to an algorithm.",
    color: "#0D9488",
  },
  {
    Icon: SparkleIcon,
    title: "Genuinely beautiful",
    body: "Children deserve beauty, not noise. Shrempies is ocean-rich, warm, and full of real wonder — a world you'll actually enjoy visiting with them.",
    color: "#F5A623",
  },
  {
    Icon: ShieldIcon,
    title: "Zero data. Zero ads. Zero tracking.",
    body: "Shrempies was built for babies, not algorithms. We collect nothing. No cookies for kids, no behavioural tracking, no advertising to children. Period.",
    color: "#06B6D4",
  },
];

const COVIEWING = [
  {
    step: "01",
    title: "Name what you see",
    tip: "\"Look — Pip looks worried. Can you see his face?\" Pointing to emotion in a character helps your child start to recognise it in themselves.",
  },
  {
    step: "02",
    title: "Move together",
    tip: "When a movement song comes on, join in. Even at 6 months, watching a trusted adult respond to music builds neural connections and trust.",
  },
  {
    step: "03",
    title: "Pause and wonder",
    tip: "\"I wonder why Coral feels that way?\" You don't need an answer. The wondering itself is the developmental moment — curiosity is the goal.",
  },
  {
    step: "04",
    title: "Bring it into the day",
    tip: "\"Remember when Bubbles didn't want to stop playing? I think you feel like that right now.\" Connecting the show to real moments doubles the learning.",
  },
];

export default function ParentsPage() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div style={{ backgroundColor: "#FBF8F3" }}>
      {/* Hero */}
      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          background: "linear-gradient(170deg, #FDB892 0%, #F0958C 25%, #C76D78 55%, #7E5887 80%, #3F4870 100%)",
        }}
      >
        {/* Light ambient */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(186,230,253,0.5) 0%, transparent 65%)",
        }} />
        {/* Sparkle dots */}
        {[{ x:"15%",y:"30%" },{ x:"80%",y:"20%" },{ x:"60%",y:"60%" }].map((s,i) => (
          <div key={i} className="absolute animate-sparkle hidden lg:block" style={{ left:s.x, top:s.y, width:12, height:12, animationDelay:`${i*0.8}s` }}>
            <svg viewBox="0 0 20 20" fill="rgba(186,230,253,0.8)">
              <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z" />
            </svg>
          </div>
        ))}

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-6" style={{ color: "rgba(186,230,253,0.85)", fontFamily: "var(--font-body), sans-serif" }}>
              For parents & caregivers
            </p>
            <h1 className="display-lg font-black mb-6 leading-tight" style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff", textShadow: "0 2px 40px rgba(0,0,0,0.15)" }}>
              Made for your little one.<br className="hidden sm:block" />
              <span style={{ color: "#FDE68A", textShadow: "0 0 40px rgba(251,191,36,0.5)" }}>Designed for you.</span>
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed max-w-2xl" style={{ color: "rgba(224,242,254,0.90)", fontFamily: "var(--font-body), sans-serif" }}>
              Everything we create at Shrempies is grounded in child development, emotionally honest, and built to make your time together richer — not to maximise screen time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {["0–3 years", "Zero ads", "Zero data", "Co-viewing friendly"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-xs font-bold"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(8px)",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden pointer-events-none">
          <svg aria-hidden="true" viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,32 C360,64 720,0 1080,32 C1260,48 1380,24 1440,32 L1440,64 L0,64 Z" fill="#FBF8F3" />
          </svg>
        </div>
      </section>

      {/* Age-stage guide */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#085041", fontFamily: "var(--font-body), sans-serif" }}>
              Age-by-age guide
            </p>
            <h2 className="display-lg font-black leading-tight" style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
              Right content,<br className="hidden sm:block" />right time.
            </h2>
          </motion.div>

          {/* Stage timeline */}
          <div className="relative mb-12 pt-2">
            {/* Connecting rail */}
            <div
              className="absolute left-0 right-0 top-[34px] h-1 rounded-full"
              style={{
                background: `linear-gradient(to right, ${AGE_STAGES.map(s => s.color).join(", ")})`,
                opacity: 0.25,
              }}
            />
            {/* Active progress fill */}
            <motion.div
              className="absolute left-0 top-[34px] h-1 rounded-full"
              initial={false}
              animate={{
                width: `${(activeStage / (AGE_STAGES.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                background: `linear-gradient(to right, ${AGE_STAGES.slice(0, activeStage + 1).map(s => s.color).join(", ")})`,
                boxShadow: `0 0 12px ${AGE_STAGES[activeStage].color}66`,
              }}
            />

            <div className="relative grid grid-cols-4 gap-2">
              {AGE_STAGES.map((s, i) => {
                const isActive = activeStage === i;
                const isPast = i < activeStage;
                return (
                  <button
                    key={s.range}
                    onClick={() => setActiveStage(i)}
                    className="group flex flex-col items-center gap-3 focus:outline-none"
                    aria-label={`Stage ${s.label}, ${s.range}`}
                    aria-pressed={isActive}
                  >
                    <div className="relative flex items-center justify-center" style={{ width: 72, height: 72 }}>
                      {/* Outer pulse ring — active only */}
                      {isActive && (
                        <span
                          className="absolute rounded-full animate-ping-slow"
                          style={{
                            inset: 6,
                            border: `2px solid ${s.color}`,
                          }}
                        />
                      )}
                      <motion.div
                        initial={false}
                        animate={{
                          scale: isActive ? 1 : 0.52,
                        }}
                        transition={{ type: "spring", stiffness: 340, damping: 22 }}
                        className="relative rounded-full flex items-center justify-center"
                        style={{
                          width: 56,
                          height: 56,
                          backgroundColor: isActive || isPast ? s.color : "#FBF8F3",
                          color: isActive || isPast ? "#fff" : s.color,
                          border: `3px solid ${s.color}`,
                          boxShadow: isActive ? `0 8px 24px ${s.color}55, 0 0 0 4px ${s.color}22` : "none",
                        }}
                      >
                        <s.Icon size={22} />
                      </motion.div>
                    </div>
                    <div className="text-center min-h-[52px]">
                      <div
                        className="text-sm font-black transition-colors"
                        style={{
                          color: isActive ? s.color : "#061E3A",
                          fontFamily: "var(--font-heading), sans-serif",
                          opacity: isActive ? 1 : 0.75,
                        }}
                      >
                        {s.label}
                      </div>
                      <div
                        className="text-[11px] font-semibold mt-0.5"
                        style={{
                          color: "#061E3A",
                          fontFamily: "var(--font-body), sans-serif",
                          opacity: isActive ? 0.7 : 0.45,
                        }}
                      >
                        {s.range}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active stage content */}
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div
              className="rounded-3xl p-10"
              style={{
                backgroundColor: AGE_STAGES[activeStage].bg,
                border: `2px solid ${AGE_STAGES[activeStage].color}30`,
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${AGE_STAGES[activeStage].color}20`, color: AGE_STAGES[activeStage].color }}
              >
                {(() => { const I = AGE_STAGES[activeStage].Icon; return <I size={26} />; })()}
              </div>
              <h3 className="text-2xl font-black mb-3" style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
                What Shrempies offers at {AGE_STAGES[activeStage].range}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "#061E3A", opacity: 0.75, fontFamily: "var(--font-body), sans-serif" }}>
                {AGE_STAGES[activeStage].what}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {AGE_STAGES[activeStage].songs.map((song) => (
                  <span
                    key={song}
                    className="px-3 py-1.5 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: `${AGE_STAGES[activeStage].color}15`,
                      color: AGE_STAGES[activeStage].color,
                      fontFamily: "var(--font-body), sans-serif",
                    }}
                  >
                    <span className="inline-flex items-center gap-1.5"><NoteIcon size={12} />{song}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl p-10" style={{ backgroundColor: "#F0F9F4" }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-5 opacity-50" style={{ color: "#085041", fontFamily: "var(--font-body), sans-serif" }}>
                Why it matters at this stage
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                {AGE_STAGES[activeStage].why}
              </p>

              <div className="mt-8 pt-8 border-t" style={{ borderColor: "rgba(8,80,65,0.10)" }}>
                <p className="text-sm font-bold mb-3" style={{ color: "#085041", fontFamily: "var(--font-body), sans-serif" }}>
                  Developmental goals at this stage:
                </p>
                <div className="space-y-2">
                  {(() => {
                    const goals = [
                      ["Sensory regulation", "Familiar voice recognition", "Sleep association"],
                      ["Cause and effect understanding", "Listening and anticipation", "Gross motor movement"],
                      ["Vocabulary explosion", "Emotional recognition", "Social referencing"],
                      ["Theory of mind", "Narrative understanding", "Emotional regulation"],
                    ][activeStage];
                    const Icon = AGE_STAGES[activeStage].Icon;
                    return goals.map((g) => (
                      <div key={g} className="flex items-center gap-2 text-sm" style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif", opacity: 0.75 }}>
                        <span style={{ color: AGE_STAGES[activeStage].color }}><Icon size={14} /></span>
                        {g}
                      </div>
                    ));
                  })()}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F0F9F4" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#085041", fontFamily: "var(--font-body), sans-serif" }}>
              How we're different
            </p>
            <h2 className="display-lg font-black" style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
              Built for babies,<br className="hidden sm:block" />not algorithms.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl p-9"
                style={{ backgroundColor: "#FBF8F3", boxShadow: "0 2px 24px rgba(6,30,58,0.06)" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${p.color}15`, color: p.color }}
                >
                  <p.Icon size={26} />
                </div>
                <h3 className="text-xl font-black mb-3" style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
                  {p.title}
                </h3>
                <p className="text-base leading-relaxed opacity-70" style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy pledge */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #061E3A 0%, #0D9488 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 70% at 50% 120%, rgba(6,182,212,0.20) 0%, transparent 60%)",
        }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold mb-8"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                fontFamily: "var(--font-body), sans-serif",
              }}
            >
              <span style={{ color: "#5EEAD4" }}><ShieldIcon size={16} /></span> Privacy Pledge
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}
            >
              Zero data.<br className="hidden sm:block" />
              <span style={{ color: "#5EEAD4" }}>Zero ads. Zero tracking.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(214,245,234,0.80)", fontFamily: "var(--font-body), sans-serif" }}>
              Shrempies collects no data from children. No advertising to under-3s. No behavioural tracking. No cookies served to your child. We built this for babies, and babies deserve a different standard.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "No ads to children" },
                { label: "No data collection" },
                { label: "No behavioural tracking" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative rounded-2xl py-5 px-4 text-center overflow-hidden group"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  {/* Pulsing ring */}
                  <span
                    className="absolute rounded-full animate-ping-slow pointer-events-none"
                    style={{
                      top: 12,
                      left: "50%",
                      marginLeft: -22,
                      width: 44,
                      height: 44,
                      border: "1.5px solid rgba(94,234,212,0.55)",
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                  <div
                    className="relative mx-auto mb-3 rounded-full flex items-center justify-center"
                    style={{
                      width: 44,
                      height: 44,
                      background: "rgba(94,234,212,0.15)",
                      border: "1.5px solid rgba(94,234,212,0.5)",
                    }}
                  >
                    <motion.svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#5EEAD4" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <motion.path
                        d="M5 12.5 L10 17.5 L19 7.5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: "easeOut" }}
                      />
                    </motion.svg>
                  </div>
                  <div className="text-sm font-bold" style={{ color: "#fff", fontFamily: "var(--font-body), sans-serif" }}>
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Co-viewing guide */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FBF8F3" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#085041", fontFamily: "var(--font-body), sans-serif" }}>
              Watch together
            </p>
            <h2 className="display-lg font-black leading-tight" style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
              Co-viewing<br className="hidden sm:block" />makes it count.
            </h2>
            <p className="mt-5 text-lg max-w-xl opacity-65" style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
              Research shows watching together — not just letting them watch — doubles the developmental benefit. Here's how to make it easy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COVIEWING.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 p-8 rounded-3xl"
                style={{ backgroundColor: "#F0F9F4" }}
              >
                <div
                  className="shrink-0 text-3xl font-black opacity-20 leading-none"
                  style={{ fontFamily: "var(--font-heading), sans-serif", color: "#085041" }}
                >
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-black mb-3" style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed opacity-70" style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                    {item.tip}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, #085041 0%, #042C53 100%)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50" style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
              Parent newsletter
            </p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4" style={{ fontFamily: "var(--font-heading), sans-serif", color: "#FAF7F2" }}>
              The best of Shrempies,<br className="hidden sm:block" />in your inbox.
            </h2>
            <p className="text-base mb-3 opacity-75" style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
              Age-calibrated activity ideas, new songs, co-viewing tips, and character updates — curated for the age your child is right now.
            </p>
            <p className="text-sm mb-10 opacity-50" style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
              No spam. No data sharing. Unsubscribe any time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-4 rounded-full text-sm font-medium outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.12)",
                  color: "#FAF7F2",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              />
              <button
                className="px-6 py-4 rounded-full font-bold text-sm shrink-0"
                style={{ backgroundColor: "#F5A623", color: "#042C53", fontFamily: "var(--font-heading), sans-serif" }}
              >
                Get updates
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom nav */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FBF8F3" }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black mb-2" style={{ fontFamily: "var(--font-heading), sans-serif", color: "#061E3A" }}>
              Ready to explore together?
            </h3>
            <p className="text-base opacity-60" style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
              Songs, characters, printables, and more.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/characters"
              className="px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{ backgroundColor: "#061E3A", color: "#fff", fontFamily: "var(--font-body), sans-serif" }}
            >
              Meet the characters →
            </Link>
            <Link
              href="/songs"
              className="px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{ backgroundColor: "#F0F9F4", color: "#085041", border: "1.5px solid #085041", fontFamily: "var(--font-body), sans-serif" }}
            >
              Listen to songs →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
