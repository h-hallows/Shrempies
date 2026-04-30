import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Meet the Shrempies — 13 original characters";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OG() {
  return ogImage({
    eyebrow: "The cast",
    title: "Meet the Shrempies.",
    subtitle: "Thirteen original characters, each with a different way of being in the world. Each with a place in the reef.",
    accent: "#5EEAD4",
  });
}
