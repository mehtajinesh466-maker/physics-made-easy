import type { Metadata } from "next";
import {
  PAGE_SEO,
  SITE_CONFIG,
  type PageSeoEntry,
} from "@/config/seo-config";

function absoluteUrl(path: string): string {
  const base = SITE_CONFIG.domain.replace(/\/$/, "");
  if (path.startsWith("http")) return path;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

function resolveCanonical(path: string, entry: PageSeoEntry): string {
  if (entry.canonical) return entry.canonical;
  return absoluteUrl(path === "/" ? "/" : path);
}

export function getPageSeo(path: string): PageSeoEntry {
  return PAGE_SEO[path] ?? PAGE_SEO["/"];
}

export function buildMetadata(path: string): Metadata {
  const entry = getPageSeo(path);
  const canonical = resolveCanonical(path, entry);
  const ogImagePath = entry.ogImage ?? SITE_CONFIG.defaultOgImage;
  const ogImage = absoluteUrl(ogImagePath);

  const metadata: Metadata = {
    title: entry.title,
    description: entry.description,
    keywords: entry.keywords,
    alternates: { canonical },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: canonical,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      images: [{ url: ogImage, alt: entry.title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
      images: [ogImage],
    },
  };

  if (entry.noIndex) {
    metadata.robots = { index: false, follow: false };
  }

  if (SITE_CONFIG.twitterHandle) {
    metadata.twitter = {
      ...metadata.twitter,
      site: SITE_CONFIG.twitterHandle,
    };
  }

  return metadata;
}

export function buildBlogPostMetadata(post: {
  title: string;
  excerpt?: string | null;
  slug: string;
  image?: string | null;
}): Metadata {
  const title = `${post.title} | ${SITE_CONFIG.name}`;
  const description =
    post.excerpt?.trim() ||
    `Read ${post.title} — exam tips and Physics insights from Mr. Chew at ${SITE_CONFIG.name}.`;
  const canonical = absoluteUrl(`/blog/${post.slug}`);
  const ogImage = post.image
    ? post.image.startsWith("http")
      ? post.image
      : absoluteUrl(post.image)
    : absoluteUrl(SITE_CONFIG.defaultOgImage);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "article",
      images: [{ url: ogImage, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/** Root layout defaults — icons, verification, metadataBase */
export function getRootMetadata(): Metadata {
  const home = buildMetadata("/");

  return {
    ...home,
    metadataBase: new URL(SITE_CONFIG.domain),
    applicationName: SITE_CONFIG.name,
    verification: {
      google: SITE_CONFIG.googleVerification || undefined,
      ...(SITE_CONFIG.bingVerification
        ? { other: { "msvalidate.01": SITE_CONFIG.bingVerification } }
        : {}),
    },
    themeColor: SITE_CONFIG.themeColor,
    icons: {
      apple: "/apple-touch-icon.png",
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
    },
    manifest: "/site.webmanifest",
  };
}
