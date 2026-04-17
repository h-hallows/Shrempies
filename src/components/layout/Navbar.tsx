"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/characters",  label: "Characters" },
  { href: "/songs",       label: "Songs" },
  { href: "/episodes",    label: "Episodes" },
  { href: "/printables",  label: "Printables" },
  { href: "/parents",     label: "Parents" },
  { href: "/about",       label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(251,248,243,0.92)" : "#FBF8F3",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(8,80,65,0.10)" : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 24px rgba(6,30,58,0.07)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/shrempies-logo.webp"
            alt="Shrempies"
            width={180}
            height={60}
            className="h-14 w-auto"
            style={{ mixBlendMode: "multiply" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-full text-sm font-bold transition-all"
              style={{
                fontFamily: "var(--font-body), sans-serif",
                color: pathname === l.href ? "#085041" : "#061E3A",
                backgroundColor: pathname === l.href ? "#D6F5EA" : "transparent",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/invest"
            className="ml-2 px-4 py-2 rounded-full text-sm font-bold transition-all hover:opacity-90"
            style={{
              fontFamily: "var(--font-body), sans-serif",
              color: pathname === "/invest" ? "#085041" : "#061E3A",
              backgroundColor: pathname === "/invest" ? "#D6F5EA" : "transparent",
            }}
          >
            Invest
          </Link>
          <Link
            href="/contact"
            className="ml-2 px-4 py-2 rounded-full text-sm font-bold transition-all hover:opacity-90"
            style={{
              fontFamily: "var(--font-body), sans-serif",
              color: pathname === "/contact" ? "#085041" : "#061E3A",
              backgroundColor: pathname === "/contact" ? "#D6F5EA" : "transparent",
            }}
          >
            Contact
          </Link>
          <Link
            href="/invest"
            className="ml-3 px-5 py-2.5 rounded-full text-sm font-black text-white transition-all hover:scale-105 active:scale-95"
            style={{
              backgroundColor: "#E8601C",
              fontFamily: "var(--font-heading), sans-serif",
              boxShadow: "0 4px 16px rgba(232,96,28,0.35)",
            }}
          >
            For Investors
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-xl transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: "#061E3A", backgroundColor: open ? "#D6F5EA" : "transparent" }}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {open ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden border-t"
            style={{ borderColor: "rgba(8,80,65,0.10)", backgroundColor: "#FBF8F3" }}
          >
            <div className="px-4 pb-5 pt-2 flex flex-col gap-1">
              {[...links, { href: "/invest", label: "Invest" }, { href: "/contact", label: "Contact" }].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl font-bold text-sm"
                  style={{
                    color: pathname === l.href ? "#085041" : "#061E3A",
                    backgroundColor: pathname === l.href ? "#D6F5EA" : "transparent",
                    fontFamily: "var(--font-body), sans-serif",
                  }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/invest"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-3.5 rounded-xl font-black text-sm text-white text-center"
                style={{ backgroundColor: "#E8601C", fontFamily: "var(--font-heading), sans-serif" }}
              >
                For Investors
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
