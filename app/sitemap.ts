import type { MetadataRoute } from "next";
import { SITE_CONFIG, SITEMAP_STATIC_PAGES } from "@/config/seo-config";
import { getBlogPostSummaries, getCourses } from "@/app/actions/adminActions";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE_CONFIG.domain.replace(/\/$/, "");

  const staticEntries: MetadataRoute.Sitemap = SITEMAP_STATIC_PAGES.map(
    ({ path, changeFrequency, priority }) => ({
      url: path === "/" ? `${base}/` : `${base}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })
  );

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await getBlogPostSummaries();
    blogEntries = posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Failed to fetch blog posts for dynamic sitemap:", error);
  }

  let courseEntries: MetadataRoute.Sitemap = [];
  try {
    const courses = await getCourses();
    courseEntries = courses
      .filter((course) => !SITEMAP_STATIC_PAGES.some((p) => p.path === `/courses/${course.slug}`))
      .map((course) => ({
        url: `${base}/courses/${course.slug}`,
        lastModified: course.createdAt ? new Date(course.createdAt) : new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }));
  } catch (error) {
    console.error("Failed to fetch courses for dynamic sitemap:", error);
  }

  return [...staticEntries, ...blogEntries, ...courseEntries];
}

