import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "About Shrempies";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OG() {
  return ogImage({
    eyebrow: "About",
    title: "The underwater world where big feelings live.",
    subtitle: "Built from a community. Designed for the AI generation. Grounded in how young brains actually develop.",
    accent: "#FDE68A",
  });
}
