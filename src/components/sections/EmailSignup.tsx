"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Formspree integration — replace YOUR_FORM_ID with actual ID
    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: "early-access" }),
      });
    } catch {
      // fail silently for now
    }
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(135deg, #085041 0%, #042C53 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4 opacity-60"
            style={{ color: "#E1F5EE", fontFamily: "var(--font-body), sans-serif" }}
          >
            For Parents
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black mb-4 leading-tight"
            style={{ fontFamily: "var(--font-heading), sans-serif", color: "#FAF7F2" }}
          >
            Be first to know<br />when Shrempies launches.
          </h2>
          <p
            className="text-base mb-10 opacity-75"
            style={{ color: "#E1F5EE", fontFamily: "var(--font-body), sans-serif" }}
          >
            Songs, episodes, and characters — coming soon. Drop your email and we'll tell you first.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6"
            >
              <p
                className="text-2xl font-black"
                style={{ fontFamily: "var(--font-heading), sans-serif", color: "#EF9F27" }}
              >
                You're on the list! 🦐
              </p>
              <p
                className="mt-2 opacity-70 text-sm"
                style={{ color: "#E1F5EE", fontFamily: "var(--font-body), sans-serif" }}
              >
                We'll be in touch as soon as Shrempies is ready.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-4 rounded-full text-sm font-medium outline-none focus:ring-2"
                style={{
                  backgroundColor: "rgba(255,255,255,0.12)",
                  color: "#FAF7F2",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-4 rounded-full font-bold text-sm transition-opacity hover:opacity-90 disabled:opacity-60 shrink-0"
                style={{
                  backgroundColor: "#EF9F27",
                  color: "#042C53",
                  fontFamily: "var(--font-heading), sans-serif",
                }}
              >
                {loading ? "..." : "Join the waitlist"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
