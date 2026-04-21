import Link from "next/link";
import Image from "next/image";
import PlatformLinks from "@/components/ui/PlatformLinks";

const navLinks = [
  { href: "/characters",  label: "Characters" },
  { href: "/songs",       label: "Songs" },
  { href: "/episodes",    label: "Episodes & Videos" },
  { href: "/printables",  label: "Free Printables" },
  { href: "/parents",     label: "For Parents" },
  { href: "/about",       label: "About" },
];

const audienceLinks = [
  { href: "/invest", label: "For Investors" },
  { href: "/contact", label: "Contact Us" },
  { href: "https://youtube.com/@shrempies", label: "@shrempies on YouTube", external: true },
  { href: "https://shrempies.myshopify.com", label: "Shop Shrempies", external: true },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#061E3A", color: "#D6F5EA" }}>
      {/* Wave divider */}
      <div className="overflow-hidden h-14 w-full" style={{ backgroundColor: "#FBF8F3" }}>
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,28 C360,56 720,0 1080,28 C1260,42 1380,14 1440,28 L1440,56 L0,56 Z" fill="#061E3A" />
        </svg>
      </div>

      {/* Platform bar */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(214,245,234,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-1 opacity-40"
              style={{ fontFamily: "var(--font-body), sans-serif" }}
            >
              Stream everywhere
            </p>
            <p className="text-sm opacity-60" style={{ fontFamily: "var(--font-body), sans-serif" }}>
              Shrempies music is live on all major platforms
            </p>
          </div>
          <PlatformLinks variant="pills" dark className="flex-wrap" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/shrempies-logo.webp"
              alt="Shrempies"
              width={160}
              height={54}
              className="h-12 w-auto mb-5"
              style={{ mixBlendMode: "luminosity", opacity: 0.85 }}
            />
            <p
              className="text-sm leading-relaxed opacity-60 max-w-xs mb-6"
              style={{ fontFamily: "var(--font-body), sans-serif" }}
            >
              A world of wonder for the newest generation. Music, stories, and characters built for babies and toddlers — emotionally honest, developmentally grounded, and actually beautiful.
            </p>
            <Link
              href="https://youtube.com/@shrempies"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold transition-opacity hover:opacity-100 opacity-70"
              style={{ color: "#FF4444", fontFamily: "var(--font-body), sans-serif" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
              </svg>
              @shrempies
            </Link>
          </div>

          {/* Explore */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-[0.2em] mb-5 opacity-40"
              style={{ fontFamily: "var(--font-body), sans-serif" }}
            >
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm font-medium transition-opacity hover:opacity-100 opacity-60"
                    style={{ fontFamily: "var(--font-body), sans-serif" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-[0.2em] mb-5 opacity-40"
              style={{ fontFamily: "var(--font-body), sans-serif" }}
            >
              Connect
            </h4>
            <ul className="space-y-3">
              {audienceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm font-medium transition-opacity hover:opacity-100 opacity-60"
                    style={{ fontFamily: "var(--font-body), sans-serif" }}
                  >
                    {l.label}
                    {l.external && <span className="ml-1 opacity-40">↗</span>}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/invest"
                className="inline-block px-5 py-2.5 rounded-full text-sm font-black text-white transition-all hover:scale-105"
                style={{
                  backgroundColor: "#E8601C",
                  fontFamily: "var(--font-heading), sans-serif",
                  boxShadow: "0 4px 16px rgba(232,96,28,0.35)",
                }}
              >
                Request the Deck →
              </Link>
            </div>
          </div>
        </div>

        {/* Tagline — treated as brand signature, not footer fine print */}
        <div
          className="mt-14 pt-8 text-center border-t"
          style={{ borderColor: "rgba(214,245,234,0.10)" }}
        >
          <p
            className="text-lg sm:text-xl italic opacity-80"
            style={{
              fontFamily: "var(--font-heading), sans-serif",
              color: "#FDE68A",
              textShadow: "0 0 24px rgba(251,191,36,0.25)",
            }}
          >
            Where every feeling has a name.
          </p>
        </div>

        <div
          className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-40"
          style={{ fontFamily: "var(--font-body), sans-serif" }}
        >
          <span>© {new Date().getFullYear()} Shrempies. All rights reserved.</span>
          <span>Built for Gen Beta · Zero ads, zero data collection</span>
        </div>
      </div>
    </footer>
  );
}
