import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Parents",
  description:
    "An age-by-age guide (0–36 months), four pillars, a privacy pledge, and a co-viewing primer. Built for babies, not algorithms — zero ads, zero data, zero tracking.",
  alternates: { canonical: "https://shrempies.com/parents" },
  openGraph: {
    title: "For Parents | Shrempies",
    description: "Age-by-age guide, privacy pledge, and co-viewing tips.",
    url: "https://shrempies.com/parents",
    type: "website",
  },
};

export default function ParentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
