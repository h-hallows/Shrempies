import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Printables",
  description:
    "Free coloring pages, lesson sheets, activity cards, sing-along lyrics, and posters from the Shrempies world. No email gate, no ads.",
  alternates: { canonical: "https://shrempies.com/printables" },
  openGraph: {
    title: "Free Printables | Shrempies",
    description: "Coloring pages, lesson sheets, activity cards, posters — free.",
    url: "https://shrempies.com/printables",
    type: "website",
  },
};

export default function PrintablesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
