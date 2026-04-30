import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shrempies — A World of Wonder for the Newest Generation",
    short_name: "Shrempies",
    description: "Original songs, characters, and stories for babies and toddlers.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#FBF8F3",
    theme_color: "#085041",
    categories: ["music", "entertainment", "education"],
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
