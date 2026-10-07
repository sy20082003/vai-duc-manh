import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/san-pham", "/bang-gia", "/gioi-thieu", "/lien-he"].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: path === "/san-pham" || path === "/bang-gia" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
