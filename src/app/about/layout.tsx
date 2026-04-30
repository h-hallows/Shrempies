import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Shrempies",
  description:
    "The story behind Shrempies — built from a community, designed for the AI generation, and grounded in how young brains actually develop.",
  alternates: { canonical: "https://shrempies.com/about" },
  openGraph: {
    title: "About Shrempies",
    description: "The underwater world where big feelings live.",
    url: "https://shrempies.com/about",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
