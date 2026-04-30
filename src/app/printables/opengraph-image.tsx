import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Free printables — coloring pages, lesson sheets, posters";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OG() {
  return ogImage({
    eyebrow: "Free printables",
    title: "Coloring pages. Lesson sheets. Posters.",
    subtitle: "Print, cut, color, sing along. No email gate, no ads — everything Shrempies makes is free for families.",
    accent: "#F2728C",
  });
}
