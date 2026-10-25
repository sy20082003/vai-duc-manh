import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";
import { POSTS } from "@/lib/news";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = ["", "/san-pham", "/phu-kien", "/bang-gia", "/tin-tuc", "/gioi-thieu", "/lien-he"].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/san-pham" || path === "/bang-gia" || path === "/tin-tuc" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
  const posts: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${SITE.url}/tin-tuc/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...pages, ...posts];
}
