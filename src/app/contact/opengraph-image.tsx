import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Contact Shrempies";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OG() {
  return ogImage({
    eyebrow: "Get in touch",
    title: "Say hello.",
    subtitle: "Partners, press, investors, or just curious — every message is read by a real person.",
    accent: "#F2728C",
  });
}
