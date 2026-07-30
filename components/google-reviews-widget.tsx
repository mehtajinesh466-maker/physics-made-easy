"use client";

import React, { useEffect, useRef } from "react";

interface GoogleReviewsProps {
  /** Free Trustindex script loader URL */
  trustindexScript?: string;
}

export default function GoogleReviewsWidget({
  trustindexScript = "https://cdn.trustindex.io/loader.js?351328e78efe065f0c46084ef79",
}: GoogleReviewsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Clear any existing children to prevent duplicate widgets on hot-reload/re-renders
      containerRef.current.innerHTML = "";

      const script = document.createElement("script");
      script.src = trustindexScript;
      script.defer = true;
      script.async = true;
      containerRef.current.appendChild(script);
    }
  }, [trustindexScript]);

  return (
    <section className="py-16 bg-white border-t border-slate-200 min-h-[150px]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div ref={containerRef} className="trustindex-widget-container" />
      </div>
    </section>
  );
}

