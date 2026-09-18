"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPostContentProps {
  content: string;
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
  if (!content) return null;

  // Check if content is HTML (from ReactQuill or HTML input)
  const isHtml = /<[a-z][\s\S]*>/i.test(content);

  if (isHtml) {
    // Process HTML to wrap tables in a responsive scroll container if not already wrapped
    const processedHtml = content.replace(
      /(<table[\s\S]*?<\/table>)/gi,
      '<div class="table-wrapper">$1</div>'
    );

    return (
      <div 
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: processedHtml }} 
      />
    );
  }

  // Render Markdown with GFM (supports Markdown tables, lists, etc.)
  return (
    <div className="blog-content">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ node, ...props }) => (
            <div className="table-wrapper">
              <table {...props} />
            </div>
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
