import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Episodes & videos coming to YouTube";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OG() {
  return ogImage({
    eyebrow: "Episodes & videos",
    title: "16 stories, in production.",
    subtitle: "Character-driven episodes about feelings, friendship, bravery, and the joy of not knowing. Coming to YouTube.",
    accent: "#06B6D4",
  });
}
