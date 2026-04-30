import type { MetadataRoute } from "next";

const BASE = "https://shrempies.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "",            priority: 1.0,  changeFrequency: "weekly"  },
    { path: "/characters", priority: 0.9,  changeFrequency: "monthly" },
    { path: "/songs",      priority: 0.9,  changeFrequency: "monthly" },
    { path: "/episodes",   priority: 0.8,  changeFrequency: "monthly" },
    { path: "/parents",    priority: 0.85, changeFrequency: "monthly" },
    { path: "/printables", priority: 0.7,  changeFrequency: "monthly" },
    { path: "/about",      priority: 0.8,  changeFrequency: "monthly" },
    { path: "/invest",     priority: 0.7,  changeFrequency: "monthly" },
    { path: "/contact",    priority: 0.6,  changeFrequency: "yearly"  },
  ];
  return pages.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
