import React from "react";
import { getBlogPosts } from "@/app/actions/adminActions";
import { getBlogListSchema } from "@/config/seo-config";
import BlogListClient from "@/components/blog/blog-list-client";

export const revalidate = 60; // revalidate every 60 seconds or on-demand

export default async function BlogPage() {
  let posts: any[] = [];
  try {
    posts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts on server:", error);
  }

  const listSchema = getBlogListSchema(posts);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />
      <BlogListClient initialPosts={posts} />
    </>
  );
}