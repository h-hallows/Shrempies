import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Songs",
  description:
    "36 original songs for babies and toddlers — lullabies, dance and movement, adventure and story, learning, emotional regulation, and character introductions. Two volumes, hundreds more in development.",
  alternates: { canonical: "https://shrempies.com/songs" },
  openGraph: {
    title: "Songs | Shrempies",
    description: "Lullabies, movement songs, and emotional learning — written for 0–3.",
    url: "https://shrempies.com/songs",
    type: "website",
  },
};

export default function SongsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
