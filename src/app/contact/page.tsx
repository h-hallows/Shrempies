"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PlatformLinks from "@/components/ui/PlatformLinks";
import { EyeIcon, DiamondIcon, SparkleIcon, HeartIcon, PlayIcon, StarIcon } from "@/components/ui/Icons";

type IconCmp = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

const HERO_FRIENDS = [
  { name: "Pip",     color: "#E8601C", size: 96,  top: "18%", right: "6%",  delay: 0 },
  { name: "Coral",   color: "#F2728C", size: 72,  top: "62%", right: "14%", delay: 1.1 },
  { name: "Bubbles", color: "#4AABDB", size: 60,  top: "38%", right: "26%", delay: 2.2 },
];

type InquiryType = "general" | "investment" | "partnership" | "press";

const types: { value: InquiryType; label: string; Icon: IconCmp; description: string }[] = [
  { value: "general", label: "General", Icon: EyeIcon, description: "Questions, ideas, or anything else" },
  { value: "investment", label: "Investment", Icon: DiamondIcon, description: "Pre-seed / strategic partnership" },
  { value: "partnership", label: "Partnership", Icon: SparkleIcon, description: "Streaming, toys, publishing, music" },
  { value: "press", label: "Press", Icon: HeartIcon, description: "Media inquiries and features" },
];

const quickLinks: { label: string; sub: string; href: string; Icon: IconCmp }[] = [
  { label: "YouTube", sub: "@shrempies", href: "https://youtube.com/@shrempies", Icon: PlayIcon },
  { label: "Investor Deck", sub: "Request access", href: "/invest", Icon: DiamondIcon },
  { label: "Characters", sub: "Meet the cast", href: "/characters", Icon: StarIcon },
];

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("general");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    // If the form endpoint isn't configured, fall back to mailto so messages
    // are never silently dropped on the live site.
    if (!FORMSPREE_ID) {
      const subject = encodeURIComponent(`[${inquiryType}] from ${name || "Shrempies site"}`);
      const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
      window.location.href = `mailto:hello@shrempies.com?subject=${subject}&body=${body}`;
      setLoading(false);
      setSubmitted(true);
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, name, message, inquiryType }),
      });
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      setSubmitted(true);
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again or email hello@shrempies.com directly."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ backgroundColor: "#FBF8F3" }}>
      {/* Hero */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "linear-gradient(165deg, #FFB088 0%, #F2728C 35%, #E8601C 75%, #B8412A 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(186,230,253,0.50) 0%, transparent 65%)" }} />

        {/* Floating character friends */}
        {HERO_FRIENDS.map((f) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 + f.delay * 0.15 }}
            className="absolute pointer-events-none hidden md:block"
            style={{
              top: f.top,
              right: f.right,
              width: f.size,
              height: f.size,
              animation: `float ${5 + f.delay}s ease-in-out infinite`,
              animationDelay: `${f.delay}s`,
            }}
            aria-hidden
          >
            <div
              className="relative w-full h-full rounded-full overflow-hidden"
              style={{
                border: `3px solid ${f.color}aa`,
                boxShadow: `0 12px 32px ${f.color}55, 0 0 0 4px rgba(255,255,255,0.12)`,
                backgroundColor: f.color,
              }}
            >
              <Image
                src={`/characters/${f.name.toLowerCase()}.png`}
                alt=""
                fill
                className="object-cover object-top"
                sizes="96px"
              />
            </div>
          </motion.div>
        ))}

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em] mb-5 opacity-50"
              style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
              Say hello
            </p>
            <h1 className="display-lg font-black mb-4"
              style={{ fontFamily: "var(--font-heading), sans-serif", color: "#fff" }}>
              Get in touch.
            </h1>
            <p className="text-lg opacity-65 max-w-md"
              style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
              Partners, press, investors, or just curious — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-14 overflow-hidden">
          <svg aria-hidden="true" viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,14 1440,28 L1440,56 L0,56 Z" fill="#FBF8F3" />
          </svg>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 pb-28">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">

            {/* Left: info */}
            <motion.div className="lg:col-span-2 flex flex-col gap-10"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-5 opacity-50"
                  style={{ color: "#085041", fontFamily: "var(--font-body), sans-serif" }}>
                  Quick links
                </p>
                <div className="flex flex-col gap-3">
                  {quickLinks.map((l) => (
                    <Link key={l.label} href={l.href}
                      {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center gap-4 p-4 rounded-2xl transition-all hover:-translate-y-0.5 group"
                      style={{ backgroundColor: "white", boxShadow: "0 2px 12px rgba(6,30,58,0.07)" }}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "#F0F9F4", color: "#085041" }}>
                        <l.Icon size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-sm"
                          style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                          {l.label}
                        </div>
                        <div className="text-xs opacity-50"
                          style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                          {l.sub}
                        </div>
                      </div>
                      <div className="ml-auto text-xs opacity-30"
                        style={{ color: "#061E3A" }}>→</div>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-50"
                  style={{ color: "#085041", fontFamily: "var(--font-body), sans-serif" }}>
                  Find us everywhere
                </p>
                <PlatformLinks variant="icons" />
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>

              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="rounded-3xl p-14 text-center"
                  style={{ background: "linear-gradient(135deg, #061E3A 0%, #085041 100%)" }}>
                  <div className="text-5xl mb-5 opacity-80">◉</div>
                  <p className="text-3xl font-black mb-3"
                    style={{ fontFamily: "var(--font-heading), sans-serif", color: "#F5A623" }}>
                    Message received!
                  </p>
                  <p className="opacity-55 text-sm"
                    style={{ color: "#D6F5EA", fontFamily: "var(--font-body), sans-serif" }}>
                    We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Inquiry type — pill buttons */}
                  <div>
                    <label className="block text-sm font-bold mb-4"
                      style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                      What's this about?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {types.map((t) => {
                        const isActive = inquiryType === t.value;
                        return (
                          <button key={t.value} type="button" onClick={() => setInquiryType(t.value)}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all"
                            style={{
                              backgroundColor: isActive ? "#061E3A" : "white",
                              color: isActive ? "#fff" : "#061E3A",
                              border: `1.5px solid ${isActive ? "#061E3A" : "rgba(6,30,58,0.12)"}`,
                              fontFamily: "var(--font-body), sans-serif",
                              boxShadow: isActive ? "0 4px 16px rgba(6,30,58,0.2)" : "none",
                            }}>
                            <t.Icon size={14} />
                            <span>{t.label}</span>
                          </button>
                        );
                      })}
                    </div>
                    <p className="text-xs opacity-40 mt-2"
                      style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                      {types.find(t => t.value === inquiryType)?.description}
                    </p>
                  </div>

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold mb-2 opacity-60"
                        style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                        Name
                      </label>
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-5 py-4 rounded-xl text-sm outline-none"
                        style={{ backgroundColor: "white", color: "#061E3A",
                          border: "1.5px solid rgba(6,30,58,0.1)", fontFamily: "var(--font-body), sans-serif" }} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold mb-2 opacity-60"
                        style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                        Email *
                      </label>
                      <input type="email" required aria-required="true" value={email} onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-5 py-4 rounded-xl text-sm outline-none"
                        style={{ backgroundColor: "white", color: "#061E3A",
                          border: "1.5px solid rgba(6,30,58,0.1)", fontFamily: "var(--font-body), sans-serif" }} />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold mb-2 opacity-60"
                      style={{ color: "#061E3A", fontFamily: "var(--font-body), sans-serif" }}>
                      Message
                    </label>
                    <textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what's on your mind..."
                      className="w-full px-5 py-4 rounded-xl text-sm outline-none resize-none"
                      style={{ backgroundColor: "white", color: "#061E3A",
                        border: "1.5px solid rgba(6,30,58,0.1)", fontFamily: "var(--font-body), sans-serif" }} />
                  </div>

                  <button type="submit" disabled={loading}
                    className="px-8 py-4 rounded-full font-black text-base text-white transition-all hover:scale-105 disabled:opacity-60"
                    style={{ backgroundColor: "#085041", fontFamily: "var(--font-heading), sans-serif",
                      boxShadow: "0 8px 32px rgba(8,80,65,0.3)" }}>
                    {loading ? "Sending..." : "Send Message →"}
                  </button>

                  {errorMsg && (
                    <div
                      role="alert"
                      aria-live="polite"
                      className="rounded-2xl px-5 py-4 text-sm"
                      style={{
                        backgroundColor: "rgba(192,25,46,0.08)",
                        border: "1px solid rgba(192,25,46,0.25)",
                        color: "#C0192E",
                        fontFamily: "var(--font-body), sans-serif",
                      }}
                    >
                      {errorMsg} You can also reach us directly at{" "}
                      <a href="mailto:hello@shrempies.com" className="underline font-bold">
                        hello@shrempies.com
                      </a>
                      .
                    </div>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
