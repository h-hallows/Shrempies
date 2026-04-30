import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "36 original songs for babies and toddlers";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OG() {
  return ogImage({
    eyebrow: "Songs · Vol. 1 & 2",
    title: "36 songs, written for the smallest ears.",
    subtitle: "Lullabies, dance and movement, emotional learning, adventure — and songs that name the feelings nobody else does.",
    accent: "#F5A623",
  });
}
