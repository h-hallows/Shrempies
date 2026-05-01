import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lost in the reef",
  description: "This page wandered off into the deep. Let's get you back to the surface.",
};

export default function NotFound() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8 overflow-hidden text-center"
      style={{ background: "linear-gradient(175deg, #042c53 0%, #061E3A 50%, #053d2e 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          width: 700,
          height: 700,
          borderRadius: 9999,
          background: "radial-gradient(circle, rgba(245,166,35,0.18) 0%, transparent 60%)",
          left: "50%",
          top: "30%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Floating Pip */}
      <div
        className="relative mb-8"
        style={{
          width: 160,
          height: 160,
          animation: "float 5s ease-in-out infinite",
        }}
      >
        <div
          className="relative w-full h-full rounded-full overflow-hidden"
          style={{
            border: "3px solid rgba(245,166,35,0.6)",
            boxShadow: "0 12px 48px rgba(232,96,28,0.45), 0 0 0 6px rgba(255,255,255,0.06)",
            backgroundColor: "#E8601C",
          }}
        >
          <Image
            src="/characters/pip.png"
            alt=""
            fill
            sizes="160px"
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      <p
        className="text-xs font-bold uppercase tracking-[0.28em] mb-5 opacity-65"
        style={{ color: "#FDE68A", fontFamily: "var(--font-body), sans-serif" }}
      >
        404 · This page wandered off
      </p>

      <h1
        className="display-lg font-black mb-5 leading-tight max-w-2xl"
        style={{ fontFamily: "var(--font-heading), sans-serif", color: "#FBF8F3" }}
      >
        Pip looked everywhere.
        <br className="hidden sm:block" />
        <span style={{ color: "#FDE68A" }}>This shell wasn&rsquo;t there.</span>
      </h1>

      <p
        className="text-base sm:text-lg mb-10 max-w-md leading-relaxed"
        style={{ color: "rgba(214,245,234,0.78)", fontFamily: "var(--font-body), sans-serif" }}
      >
        The page you&rsquo;re looking for has drifted into the deep. Let&rsquo;s swim back somewhere familiar.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-block px-7 py-3.5 rounded-full font-black text-sm transition-transform hover:scale-105"
          style={{
            backgroundColor: "#E8601C",
            color: "#fff",
            fontFamily: "var(--font-heading), sans-serif",
            boxShadow: "0 8px 32px rgba(232,96,28,0.4)",
          }}
        >
          Back to the surface
        </Link>
        <Link
          href="/characters"
          className="inline-block px-7 py-3.5 rounded-full font-bold text-sm transition-transform hover:scale-105 glass focus-ring"
          style={{ color: "#fff", fontFamily: "var(--font-heading), sans-serif" }}
        >
          Meet the cast →
        </Link>
      </div>
    </section>
  );
}
