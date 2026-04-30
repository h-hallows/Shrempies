import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Shrempies — A World of Wonder for the Newest Generation";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OG() {
  return ogImage({
    eyebrow: "Shrempies",
    title: "A world of wonder, for the newest generation.",
    subtitle: "Songs, characters, and stories built for babies and toddlers — emotionally honest, developmentally grounded, actually beautiful.",
    accent: "#F5A623",
  });
}
