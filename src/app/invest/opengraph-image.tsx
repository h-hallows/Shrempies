import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Shrempies for investors — pre-seed children's IP";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OG() {
  return ogImage({
    eyebrow: "For investors · Pre-seed",
    title: "The next generationally beloved brand.",
    subtitle: "36 songs, 16 episode scripts, 13 characters. The IP is built. This raise is about production and distribution.",
    accent: "#E8601C",
  });
}
