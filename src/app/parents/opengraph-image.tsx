import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "For parents — built for babies, not algorithms";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OG() {
  return ogImage({
    eyebrow: "For parents",
    title: "Built for babies, not algorithms.",
    subtitle: "An age-by-age guide, a privacy pledge, and a co-viewing primer. Zero ads, zero data, zero tracking.",
    accent: "#5EEAD4",
  });
}
