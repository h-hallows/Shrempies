import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Characters",
  description:
    "Thirteen original Shrempies — Pip, Zippy, Coral, Bubbles, Rara, Dash, Mimi, Blaze, Sandy, Dot, Glimmer, Rex, and Noir. Each with a different way of being in the world.",
  alternates: { canonical: "https://shrempies.com/characters" },
  openGraph: {
    title: "Meet the Characters | Shrempies",
    description: "13 original characters, each with a different way of being in the world.",
    url: "https://shrempies.com/characters",
    type: "website",
  },
};

export default function CharactersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
