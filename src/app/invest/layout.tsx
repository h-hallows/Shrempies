import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Investors",
  description:
    "Pre-seed children's IP company, building the first generationally beloved brand for Gen Beta. Full creative library already built — 36 songs, 16 episode scripts, 13 characters.",
  alternates: { canonical: "https://shrempies.com/invest" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "For Investors | Shrempies",
    description: "Pre-seed children's IP. Library built. Reviewed within 48 hours.",
    url: "https://shrempies.com/invest",
    type: "website",
  },
};

export default function InvestLayout({ children }: { children: React.ReactNode }) {
  return children;
}
