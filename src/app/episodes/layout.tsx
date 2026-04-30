import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Episodes & Videos",
  description:
    "16 episode scripts ready, plus music videos coming to YouTube. Character-driven stories about feelings, friendship, bravery, and the joy of not knowing.",
  alternates: { canonical: "https://shrempies.com/episodes" },
  openGraph: {
    title: "Episodes & Videos | Shrempies",
    description: "16 episode scripts ready. Music videos coming to YouTube.",
    url: "https://shrempies.com/episodes",
    type: "website",
  },
};

export default function EpisodesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
