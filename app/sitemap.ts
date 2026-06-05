import type { MetadataRoute } from "next";
import { SITE_CONFIG, SITEMAP_STATIC_PAGES } from "@/config/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.domain.replace(/\/$/, "");

  return SITEMAP_STATIC_PAGES.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? `${base}/` : `${base}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
