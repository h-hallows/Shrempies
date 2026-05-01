import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import FadeIn from "@/components/ui/FadeIn";
import { HeartIcon, EyeIcon, SparkleIcon, ShieldIcon } from "@/components/ui/Icons";

type IconCmp = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

const PARENT_POINTS: { Icon: IconCmp; color: string; title: string; body: string }[] = [
  {
    Icon: HeartIcon,
    color: "#E8601C",
    title: "Emotionally honest",
    body: "Every Shrempies song names a real feeling. Grumpy. Scared. \"I don't know what I'm feeling.\" This is the vocabulary that matters most.",
  },
  {
    Icon: EyeIcon,
    color: "#0D9488",
    title: "Developmentally grounded",
    body: "From lullabies that regulate to movement songs that address the activity gap — built around how young brains actually grow.",
  },
  {
    Icon: SparkleIcon,
    color: "#F5A623",
    title: "Beautiful by design",
    body: "An ocean world full of real wonder. Not frantic. Not noisy. A place you'll actually want to visit together.",
  },
  {
    Icon: ShieldIcon,
    color: "#06B6D4",
    title: "Zero ads, zero data",
    body: "Built for babies, not algorithms. No tracking. No advertising to children. No data collected from your child. Period.",
  },
];

const AGE_TAGS = [
  { label: "0–6 months", desc: "Lullabies & sensory calm", color: "#06B6D4" },
  { label: "6–12 months", desc: "Movement & anticipation", color: "#0D9488" },
  { label: "12–18 months", desc: "Feelings & character songs", color: "#085041" },
  { label: "18–36 months", desc: "Stories & big emotions", color: "#E8601C" },
];

export default function ForParents() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "#061E3A" }}>
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{
        height: 600,
        background: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(6,182,212,0.10) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(8,80,65,0.12) 0%, transparent 60%)",
      }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "rgba(94,234,212,0.70)", fontFamily: "var(--font-body), sans-serif" }}
            >
              For parents
            </p>
            <h2
              className="display-lg font-black leading-tight"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}
            >
              Why parents<br className="hidden sm:block" />
              <span style={{ color: "#FDE68A" }}>choose Shrempies.</span>
            </h2>
          </div>
          <Link
            href="/parents"
            className="self-start sm:self-auto shrink-0 btn btn-ghost"
          >
            Parent guide →
          </Link>
        </FadeIn>

        {/* Four pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {PARENT_POINTS.map((p, i) => (
            <FadeIn
              key={p.title}
              delay={i * 100}
              className="group rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1.5"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${p.color}25`, color: p.color }}
              >
                <p.Icon size={22} />
              </div>
              <h3
                className="text-lg font-black mb-3"
                style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(214,245,234,0.65)", fontFamily: "var(--font-body), sans-serif" }}
              >
                {p.body}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* Age guide strip */}
        <FadeIn
          delay={200}
          className="rounded-3xl p-8 sm:p-10"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "rgba(94,234,212,0.70)", fontFamily: "var(--font-body), sans-serif" }}>
                Age guide
              </p>
              <h3 className="text-2xl font-black" style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}>
                Right content for every stage.
              </h3>
            </div>
            <Link
              href="/parents"
              className="shrink-0 btn btn-amber btn-sm"
            >
              Full parent guide →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {AGE_TAGS.map((tag, i) => (
              <FadeIn
                key={tag.label}
                delay={300 + i * 80}
                className="rounded-2xl p-5"
                style={{ backgroundColor: `${tag.color}15`, border: `1.5px solid ${tag.color}30` }}
              >
                <div className="text-sm font-black mb-1" style={{ color: tag.color, fontFamily: "var(--font-heading), sans-serif" }}>
                  {tag.label}
                </div>
                <div className="text-xs opacity-70" style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
                  {tag.desc}
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
