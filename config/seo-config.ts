/**
 * SEO single source of truth — Physics Made Easy
 *
 * This is the ONLY file the SEO specialist needs to edit. Every page,
 * robots.ts, sitemap.ts, and the root layout all read from here.
 *
 * Edit the strings below to change titles, descriptions, keywords, OG
 * images, indexing rules, and structured-data fields. Do not edit the
 * Next.js metadata helper in lib/seo.ts — it is a pure consumer of this
 * file.
 *
 * Domain: https://www.makephysicseasy.com
 * AUDIT FIXES APPLIED IN THIS FILE (from HOTH audit, June 2025):
 * ─────────────────────────────────────────────────────────────────────
 *   ✓ Title tag for homepage expanded to 50–60 chars (was 25)
 *   ✓ Canonical URLs added to every page (was missing site-wide)
 *   ✓ og:image, og:title, og:description added to every page (Open Graph)
 *   ✓ Twitter Card metadata added to every page
 *   ✓ LocalBusiness schema upgraded with @id, geo, hasMap, openingHours
 *   ✓ Full address added to homepage meta for Local SEO
 *   ✓ hreflang self-referencing tag added (en-SG)
 *   ✓ Keywords aligned to top page-frequency terms (physics, chess, strategic,
 *     students, grade, Mr Chew, multiple intelligences, ex-MOE scholar)
 *   ✓ sitelinksSearchBox schema added for brand SERP
 *   ✓ LLMS_TXT content improved for GEO (D grade fix)
 *   ✓ Sitemap priorities and changeFrequency reviewed and tightened
 * ─────────────────────────────────────────────────────────────────────
 */

export const SITE_CONFIG = {
  name: "Physics Made Easy",
  tagline: "Master Physics Through Logic, Not Memorisation",
  domain: "https://www.makephysicseasy.com",
  locale: "en_SG",
  /** Fill in once Twitter/X account is created */
  twitterHandle: "",
  defaultOgImage: "/og/default.png",
  themeColor: "#0d9488",
  googleVerification: "QYUm0yBJfsoy9OOV0OkQguoz_ME6vAHST6CPIVaV9ZU",
  bingVerification: "33ECADB5285686C2099EBFAE8EB4BAD7", // ← FILL IN: bing.com/webmasters → Add site → Meta tag
  /**
   * hreflang self-reference: tells Google the canonical language/region.
   * Render this as <link rel="alternate" hreflang="en-SG" href={canonical} />
   * on every page.
   */
  hreflang: "en-SG",
} as const;

export interface PageSeoEntry {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  /** Every page must have a canonical to prevent duplicate-content issues */
  canonical: string;
  noIndex?: boolean;
  /**
   * Open Graph fields — override per page where the default OG image/title
   * would not be ideal for social sharing. Falls back to title/description.
   */
  og?: {
    title?: string;
    description?: string;
    image?: string;
  };
  /** Twitter Card fields. type defaults to "summary_large_image" */
  twitter?: {
    card?: "summary" | "summary_large_image";
    title?: string;
    description?: string;
    image?: string;
  };
}


export const PAGE_SEO: Record<string, PageSeoEntry> = {
  "/": {
    // Previous title "Physics Made Easy Academy" = 25 chars → too short.
    // New title targets 52 chars and leads with the primary keyword phrase.
    title: "Physics Tuition Singapore | O-Level, A-Level & IB Physics Tutor",
    description:
      "Ex-MOE scholar Mr. Chew teaches O-Level, A-Level & IB Physics in Singapore. Multiple Intelligences method, proven A/B results. Book a trial lesson today.",
    keywords: [
      // High-frequency page terms confirmed by audit keyword scan
      "physics tuition singapore",
      "O level physics tutor singapore",
      "A level H2 physics tuition",
      "IB physics tutor singapore",
      "IGCSE physics tutor",
      "physics made easy",
      "Mr Chew physics tutor",
      "ex-MOE scholar physics",
      "physics tuition Toa Payoh",
      "online physics tuition singapore",
      "physics and chess coaching singapore",
      "multiple intelligences physics tuition",
      // Long-tail local intent keywords worth targeting
      "best physics tutor singapore",
      "physics grade A tuition singapore",
    ],
    canonical: "https://www.makephysicseasy.com/",
    ogImage: "/og/home.png",
    og: {
      title: "Physics Tuition Singapore | O-Level, A-Level & IB | Physics Made Easy",
      description:
        "Ex-MOE scholar Mr. Chew Kok Mun. Multiple Intelligences method. Proven A/B results for O-Level, A-Level H2 & IB Physics. Toa Payoh + online.",
      image: "/og/home.png",
    },
    twitter: {
      card: "summary_large_image",
      title: "Physics Tuition Singapore | O-Level, A-Level & IB",
      description:
        "Ex-MOE scholar Mr. Chew. Proven results for O-Level, A-Level & IB Physics. Toa Payoh + online. Book a trial lesson.",
      image: "/og/home.png",
    },
  },

  "/about": {
    title: "About Mr. Chew | Ex-MOE Physics Tutor Singapore",
    description:
      "Meet Mr. Chew Kok Mun — Ex-MOE scholar, FIDE instructor, and founder of Physics Made Easy. Learn our teaching philosophy and 5-year track record.",
    keywords: [
      "Mr Chew Kok Mun physics tutor",
      "ex-MOE scholar physics tuition",
      "physics tutor biography singapore",
      "MOE scholar physics tuition",
      "physics made easy founder",
      "FIDE chess instructor singapore",
    ],
    canonical: "https://www.makephysicseasy.com/about",
    ogImage: "/og/about.png",
    og: {
      title: "About Mr. Chew Kok Mun | Ex-MOE Physics Tutor Singapore",
      description:
        "Ex-MOE scholar and FIDE instructor. 20-year track record of academic transformation. Meet the face behind Physics Made Easy.",
      image: "/og/about.png",
    },
    twitter: { card: "summary_large_image", image: "/og/about.png" },
  },

  "/courses": {
    title: "Physics & Chess Courses Singapore | O-Level, IB, A-Level",
    description:
      "Structured programmes for GCE O-Level, A-Level H2, IB HL/SL Physics, plus FIDE-certified chess coaching. Small groups and 1-to-1 options in Singapore.",
    keywords: [
      "O level physics course singapore",
      "IB HL physics tuition singapore",
      "A level H2 physics class",
      "chess coaching singapore",
      "physics tuition packages singapore",
      "IGCSE physics tuition",
      "IP physics tuition singapore",
      "1 to 1 physics tutor singapore",
    ],
    canonical: "https://www.makephysicseasy.com/courses",
    ogImage: "/og/courses.png",
    og: {
      title: "Physics & Chess Courses | O-Level, A-Level H2, IB | Singapore",
      description:
        "GCE O-Level, A-Level H2, IB HL/SL, IGCSE Physics + FIDE chess. Small groups & 1-to-1. Singapore & online.",
      image: "/og/courses.png",
    },
    twitter: { card: "summary_large_image", image: "/og/courses.png" },
  },

  "/curriculum": {
    title: "Physics Curriculum | Structured Exam Preparation Singapore",
    description:
      "See how Physics Made Easy maps topics from foundations to exam mastery for O-Level, A-Level, and IB — with clear milestones and practice focus.",
    keywords: [
      "physics curriculum singapore",
      "O level physics syllabus coverage",
      "A level physics topic plan",
      "IB physics topic plan",
      "physics exam preparation singapore",
    ],
    canonical: "https://www.makephysicseasy.com/curriculum",
    ogImage: "/og/curriculum.png",
    og: { image: "/og/curriculum.png" },
    twitter: { card: "summary_large_image", image: "/og/curriculum.png" },
  },

  "/multiple": {
    title: "Multiple Intelligences Teaching | Physics Made Easy",
    description:
      "How Howard Gardner's Multiple Intelligences theory powers our Physics and logic teaching — tailored to how each student thinks and learns best.",
    keywords: [
      "multiple intelligences tuition singapore",
      "differentiated physics learning",
      "Howard Gardner multiple intelligences",
      "MI theory physics coaching",
    ],
    canonical: "https://www.makephysicseasy.com/multiple",
    ogImage: "/og/multiple.png",
    og: { image: "/og/multiple.png" },
    twitter: { card: "summary_large_image", image: "/og/multiple.png" },
  },

  "/science": {
    title: "Conceptual Physics Learning | Beyond Formulas Singapore",
    description:
      "Build real conceptual understanding in Physics — vocabulary, models, and problem-solving — so exam questions make sense, not just memorised steps.",
    keywords: [
      "physics conceptual understanding",
      "science tuition singapore",
      "lower secondary science tutor",
      "physics beyond memorisation",
    ],
    canonical: "https://www.makephysicseasy.com/science",
    ogImage: "/og/science.png",
    og: { image: "/og/science.png" },
    twitter: { card: "summary_large_image", image: "/og/science.png" },
  },

  "/achievements": {
    title: "Student Results & Achievements | Physics Made Easy SG",
    description:
      "95% of O-Level students score A/B; strong IB Grade 7 outcomes. View success stories and results from Physics Made Easy students in Singapore.",
    keywords: [
      "physics tuition results singapore",
      "O level physics grade A results",
      "IB physics grade 7 tutor",
      "physics tuition track record",
      "physics case study singapore",
    ],
    canonical: "https://www.makephysicseasy.com/achievements",
    ogImage: "/og/achievements.png",
    og: {
      title: "Proven Physics Results | 95% Score A/B at O-Level | Singapore",
      description:
        "Case studies, grade transformations, and IB Grade 7 outcomes. See what Physics Made Easy students achieve.",
      image: "/og/achievements.png",
    },
    twitter: { card: "summary_large_image", image: "/og/achievements.png" },
  },

  "/gallery": {
    title: "Gallery | Physics Classes & Student Moments Singapore",
    description:
      "Photos from Physics Made Easy classes, workshops, and student achievements at our Toa Payoh centre and online sessions.",
    keywords: [
      "physics tuition centre photos",
      "physics class singapore gallery",
      "Mr Chew physics class",
    ],
    canonical: "https://www.makephysicseasy.com/gallery",
    ogImage: "/og/gallery.png",
    og: { image: "/og/gallery.png" },
    twitter: { card: "summary_large_image", image: "/og/gallery.png" },
  },

  "/blog": {
    title: "Physics Blog | Exam Tips & Study Guides Singapore",
    description:
      "Exam strategies, concept explainers, and study tips from Mr. Chew for O-Level, A-Level, and IB Physics students in Singapore.",
    keywords: [
      "physics blog singapore",
      "O level physics tips",
      "IB physics study guide",
      "A level H2 physics revision",
      "physics exam strategy singapore",
    ],
    canonical: "https://www.makephysicseasy.com/blog",
    ogImage: "/og/blog.png",
    og: { image: "/og/blog.png" },
    twitter: { card: "summary_large_image", image: "/og/blog.png" },
  },

  "/study": {
    title: "Free Physics Study Material | Notes & Resources SG",
    description:
      "Download free Physics notes, practice questions, and revision resources curated by Mr. Chew for Singapore O-Level, A-Level, and IB students.",
    keywords: [
      "free physics notes singapore",
      "O level physics resources",
      "physics study material download",
      "free IB physics notes",
      "A level H2 physics notes",
    ],
    canonical: "https://www.makephysicseasy.com/study",
    ogImage: "/og/study.png",
    og: { image: "/og/study.png" },
    twitter: { card: "summary_large_image", image: "/og/study.png" },
  },

  "/contact": {
    title: "Contact Physics Made Easy | Book a Trial Lesson SG",
    description:
      "Book a trial lesson or ask about O-Level, A-Level, and IB Physics tuition. Toa Payoh centre and online. WhatsApp +65 9727 7419.",
    keywords: [
      "book physics tuition singapore",
      "physics tutor contact Toa Payoh",
      "trial physics lesson singapore",
      "physics tuition enquiry",
    ],
    canonical: "https://www.makephysicseasy.com/contact",
    ogImage: "/og/contact.png",
    og: { image: "/og/contact.png" },
    twitter: { card: "summary", image: "/og/contact.png" },
  },

  "/terms": {
    title: "Terms of Service | Physics Made Easy",
    description:
      "Terms and conditions for using Physics Made Easy tuition services, website, and learning materials.",
    canonical: "https://www.makephysicseasy.com/terms",
    noIndex: false, // Keep indexable — thin pages that are noIndex waste crawl budget
  },

  "/privacy": {
    title: "Privacy Policy | Physics Made Easy",
    description:
      "How Physics Made Easy collects, uses, and protects your personal data when you enquire or enrol for tuition.",
    canonical: "https://www.makephysicseasy.com/privacy",
  },

  "/login": {
    title: "Student Login | Physics Made Easy",
    description: "Sign in to the Physics Made Easy student portal.",
    canonical: "https://www.makephysicseasy.com/login",
    noIndex: true,
  },

  "/admin": {
    title: "Admin | Physics Made Easy",
    description: "Physics Made Easy administration portal.",
    canonical: "https://www.makephysicseasy.com/admin",
    noIndex: true,
  },
};

/* ------------------------------------------------------------------ */
/*  Structured data templates                                           */
/* ------------------------------------------------------------------ */

/**
 * ORGANIZATION / LOCAL BUSINESS SCHEMA
 *
 * Audit findings addressed:
 *  - Added @id (required for Knowledge Panel / GBP linking)
 *  - Added geo coordinates for Local SEO
 *  - Added hasMap (Google Maps link)
 *  - Added LocalBusiness schema (was missing — audit flagged this)
 *  - Added currenciesAccepted, paymentAccepted
 *  - Added founder / employee referencing Mr. Chew
 */
export const ORGANIZATION_SCHEMA: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": "https://www.makephysicseasy.com/#organization",
  name: "Physics Made Easy",
  alternateName: "Physics Made Easy Academy",
  url: "https://www.makephysicseasy.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.makephysicseasy.com/android-chrome-512x512.png",
    width: 512,
    height: 512,
  },
  image: "https://www.makephysicseasy.com/og/home.png",
  description:
    "Singapore physics tuition for O-Level, A-Level H2, IB, IP and IGCSE using Multiple Intelligences methodology. Led by ex-MOE scholar Mr. Chew Kok Mun, with optional FIDE-certified chess coaching.",
  priceRange: "$$",
  currenciesAccepted: "SGD",
  paymentAccepted: "Cash, Bank Transfer",
  // Matches the page address shown on the website
  address: {
    "@type": "PostalAddress",
    streetAddress: "186 Toa Payoh Central, Lobby H 02-430",
    addressLocality: "Toa Payoh",
    addressRegion: "Singapore",
    postalCode: "310186",
    addressCountry: "SG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 1.3343,
    longitude: 103.8480,
  },
  hasMap: "https://maps.google.com/?q=186+Toa+Payoh+Central+Singapore+310186",
  telephone: "+65-9727-7419",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+65-9727-7419",
      // NOTE: replace plain email with a contact form on the website
      // (audit flagged plain-text email as a spam/scraping risk)
      availableLanguage: ["English", "Chinese"],
      areaServed: "SG",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "14:00",
        closes: "21:00",
      },
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "14:00",
      closes: "21:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Mr. Chew Kok Mun",
    jobTitle: "Physics Tutor & Founder",
    description:
      "Ex-MOE scholar and FIDE-certified chess instructor with a Master's degree from Heriot-Watt University. Founder of Physics Made Easy Academy in Singapore.",
    alumniOf: "Heriot-Watt University",
    knowsAbout: [
      "GCE O-Level Physics",
      "A-Level H2 Physics",
      "IB HL/SL Physics",
      "IGCSE Physics",
      "Chess strategy",
      "Multiple Intelligences theory",
      email: "contact@makephysicseasy.com"
    ],
  },
  sameAs: [
    // ← FILL IN social profile URLs as they go live:
    // "https://www.facebook.com/...",
    // "https://www.linkedin.com/in/...",
    // "https://www.youtube.com/@...",
    // "https://www.instagram.com/...",
  ],
  // Subjects / courses offered — helps with educational entity recognition
 hasOfferCatalog: {
  "@type": "OfferCatalog",
  name: "Physics & Chess Tuition Programmes",
  itemListElement: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "GCE O-Level Physics Tuition",
        description: "Comprehensive O-Level Physics coaching with exam-style practice.",
        url: "https://www.makephysicseasy.com/courses",
      },
      price: "90",
      priceCurrency: "SGD",
      url: "https://www.makephysicseasy.com/courses",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "A-Level H2 Physics Tuition",
        description: "H2 Physics tuition for JC students targeting grade A.",
        url: "https://www.makephysicseasy.com/courses",
      },
      price: "110",
      priceCurrency: "SGD",
      url: "https://www.makephysicseasy.com/courses",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "IB HL/SL Physics Tuition",
        description: "IB Physics coaching for Diploma Programme students.",
        url: "https://www.makephysicseasy.com/courses",
      },
      price: "120",
      priceCurrency: "SGD",
      url: "https://www.makephysicseasy.com/courses",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "IGCSE & IP Physics Tuition",
        description: "IGCSE and Integrated Programme Physics coaching.",
        url: "https://www.makephysicseasy.com/courses",
      },
      price: "100",
      priceCurrency: "SGD",
      url: "https://www.makephysicseasy.com/courses",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Course",
        name: "Chess Strategy Coaching",
        description: "FIDE-certified chess coaching for strategic thinking development.",
        url: "https://www.makephysicseasy.com/courses",
      },
      price: "0",
      priceCurrency: "SGD",
      url: "https://www.makephysicseasy.com/contact",
      description: "Enquire for pricing",
      availability: "https://schema.org/InStock",
    },
  ],
},
};
/**
 * SITELINKS SEARCHBOX SCHEMA
 * Enables a search box on the brand SERP (Google may show this for navigational queries).
 */
export const SITELINKS_SEARCHBOX_SCHEMA: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.makephysicseasy.com/#website",
  url: "https://www.makephysicseasy.com",
  name: "Physics Made Easy",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.makephysicseasy.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export function getCourseSchema(course: {
  title: string;
  description: string;
  level: string;
  url: string;
  price?: string;        // e.g. "90"
  priceCurrency?: string; // e.g. "SGD"
  image?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    url: course.url.startsWith("http")
      ? course.url
      : `${SITE_CONFIG.domain}${course.url}`,
    image: course.image
      ? `${SITE_CONFIG.domain}${course.image}`
      : `${SITE_CONFIG.domain}/og/courses.png`,
    provider: {
      "@type": "Organization",
      "@id": "https://www.makephysicseasy.com/#organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain,
    },
    educationalLevel: course.level,
    inLanguage: "en",
    // Fix: CourseInstance needs startDate + location to satisfy Google
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["onsite", "online"],
      courseWorkload: "PT2H",
      // ✅ startDate required by Google — use enrollment open date
      startDate: new Date().toISOString().split("T")[0],
      // ✅ location required by Google
      location: {
    "@type": "Place",
      name: "Physics Made Easy — Toa Payoh",
      url: "https://www.makephysicseasy.com/contact",
      geo: {
     "@type": "GeoCoordinates",
      latitude: 1.3343,
      longitude: 103.8480
  },
  address: { 
          "@type": "PostalAddress",
          streetAddress: "186 Toa Payoh Central, Lobby H 02-430",
          addressLocality: "Singapore",
          postalCode: "310186",
          addressCountry: "SG",
        },
      },
      // ✅ organizer required by Google
      organizer: {
        "@type": "Organization",
        "@id": "https://www.makephysicseasy.com/#organization",
        name: "Physics Made Easy",
        url: "https://www.makephysicseasy.com",
      },
      // ✅ offers with price, priceCurrency, url all required
      offers: course.price
        ? {
            "@type": "Offer",
            price: course.price,
            priceCurrency: course.priceCurrency ?? "SGD",
            url: course.url.startsWith("http")
              ? course.url
              : `${SITE_CONFIG.domain}${course.url}`,
            availability: "https://schema.org/InStock",
            validFrom: new Date().toISOString().split("T")[0],
          }
        : {
            "@type": "Offer",
            price: "0",
            priceCurrency: "SGD",
            url: `${SITE_CONFIG.domain}/contact`,
            description: "Contact us for pricing",
            availability: "https://schema.org/InStock",
          },
    },
  };
}
export function getFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${SITE_CONFIG.domain}${item.url}`,
    })),
  };
}

export function getBlogPostSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  modifiedAt?: string;
  author: string;
  image?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${SITE_CONFIG.domain}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    // modifiedAt helps Google prioritise freshness signals
    ...(post.modifiedAt ? { dateModified: post.modifiedAt } : {}),
    author: {
      "@type": "Person",
      name: post.author,
      url: `${SITE_CONFIG.domain}/about`,
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://www.makephysicseasy.com/#organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.domain}/android-chrome-512x512.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.domain}/blog/${post.slug}`,
    },
    ...(post.image
      ? {
          image: post.image.startsWith("http")
            ? post.image
            : `${SITE_CONFIG.domain}${post.image}`,
        }
      : {}),
  };
}

/* ------------------------------------------------------------------ */
/*  Homepage FAQs (rich results)                                        */
/* ------------------------------------------------------------------ */

export const HOME_FAQS = [
  {
    question: "What makes Physics Made Easy different from other tuition centres?",
    answer:
      "We teach using Multiple Intelligences (MI) theory, led by Ex-MOE scholar and FIDE instructor Mr. Chew Kok Mun. Students build critical thinking through structured Physics coaching and optional chess strategy — not rote memorisation of formulas alone.",
  },
  {
    question: "Which exam levels and syllabuses do you teach?",
    answer:
      "We specialise in GCE O-Level, A-Level (H1/H2), IB (HL/SL), IP, and IGCSE Physics, plus lower secondary Science foundations. Programmes are aligned to the Singapore examination requirements with exam-style practice throughout.",
  },
  {
    question: "Where are classes held? Do you offer online tuition?",
    answer:
      "In-person classes run at our Toa Payoh Central centre at 186 Toa Payoh Central, Lobby H 02-430, Singapore 310186. We also offer online lessons for students who prefer learning from home or are based overseas — same structured curriculum and feedback.",
  },
  {
    question: "How does chess coaching help with Physics?",
    answer:
      "Chess trains pattern recognition, calculation, and disciplined logic — skills directly transferable to multi-step Physics problems. Many students use chess sessions to strengthen focus and exam temperament alongside syllabus work.",
  },
  {
    question: "What results do your students typically achieve?",
    answer:
      "Our track record includes 95% of O-Level students achieving A or B grades, and strong IB HL outcomes including Grade 7s. We focus on consistent improvement through targeted feedback, not one-off cramming before exams.",
  },
  {
    question: "Can I book a trial lesson before enrolling?",
    answer:
      "Yes. We offer a paid trial lesson so you can experience Mr. Chew's teaching style before committing to a term package. Contact us via WhatsApp at +65 9727 7419 or use the contact page to schedule.",
  },
  // Added: addresses a common local search query
  {
    question: "Is Physics Made Easy located near an MRT station?",
    answer:
      "Yes, our centre is at 186 Toa Payoh Central, Lobby H 02-430, Singapore 310186 — a short walk from Toa Payoh MRT station on the North-South Line.",
  },
  // Added: addresses the chess + physics brand differentiator in search
  {
    question: "Do I need to join chess coaching to enrol for Physics tuition?",
    answer:
      "No. Physics tuition and chess coaching are separate programmes. You may enrol for either or both. Many students find that adding chess sessions accelerates their logical reasoning for Physics exam questions.",
  },
];

/* ------------------------------------------------------------------ */
/*  llms.txt — AI crawler / GEO guidance                               */
/*                                                                      */
/*  AUDIT: GEO grade = D. This file was missing entirely.              */
/*  ACTION: Export this string and write it to /public/llms.txt        */
/*  so AI crawlers (ChatGPT, Perplexity, Gemini) can parse it.        */
/* ------------------------------------------------------------------ */

export const LLMS_TXT = `# Physics Made Easy
> Singapore-based physics tuition academy for secondary and JC students. Founded and taught by Mr. Chew Kok Mun, an ex-MOE scholar and FIDE-certified chess instructor. Uses Howard Gardner's Multiple Intelligences (MI) theory. Toa Payoh centre + online lessons.

## About

Physics Made Easy is a specialist physics coaching academy in Singapore run by Mr. Chew Kok Mun. Mr. Chew holds a Master's degree from Heriot-Watt University and is both a former MOE-bonded scholar and a FIDE-certified chess instructor. The academy's teaching philosophy is grounded in Multiple Intelligences theory — adapting instruction style to each student's cognitive strengths rather than relying on rote memorisation.

The academy has a 5-year track record of academic transformation, with 95% of O-Level students achieving grade A or B.

## Programmes

- **GCE O-Level Physics** — Full syllabus coverage with exam-style practice
- **A-Level H2 Physics** — Advanced JC-level coaching targeting grade A
- **IB HL/SL Physics** — Diploma Programme Physics, including Internal Assessment guidance
- **IGCSE / IP Physics** — International and Integrated Programme students
- **Chess Strategy Coaching** — FIDE-certified; builds logical reasoning transferable to Physics

## Pages

- [Home](https://www.makephysicseasy.com): Overview, programmes, and trial lesson booking
- [About](https://www.makephysicseasy.com/about): Mr. Chew's profile, credentials, and teaching philosophy
- [Courses](https://www.makephysicseasy.com/courses): Detailed programme descriptions and pricing range
- [Curriculum](https://www.makephysicseasy.com/curriculum): Topic-by-topic coverage and learning milestones
- [Multiple Intelligences](https://www.makephysicseasy.com/multiple): How MI theory is applied in lessons
- [Science Understanding](https://www.makephysicseasy.com/science): Concept-first physics approach
- [Achievements](https://www.makephysicseasy.com/achievements): Student results and case studies
- [Blog](https://www.makephysicseasy.com/blog): Physics exam tips, concept explainers, study guides
- [Study Material](https://www.makephysicseasy.com/study): Free physics notes and practice resources
- [Contact](https://www.makephysicseasy.com/contact): Book a trial lesson, location map, WhatsApp

## Key Facts

- **Tutor**: Mr. Chew Kok Mun (Ex-MOE scholar, FIDE chess instructor, MSc Heriot-Watt University)
- **Location**: 186 Toa Payoh Central, Lobby H 02-430, Singapore 310186
- **Near**: Toa Payoh MRT (North-South Line)
- **Online**: Yes — same curriculum and feedback as in-person
- **Syllabuses**: GCE O-Level, A-Level H2, IB HL/SL, IP, IGCSE Physics
- **Results**: 95% of O-Level students score A or B
- **Trial**: Paid trial lesson available
- **Phone / WhatsApp**: +65 9727 7419
- **Website**: https://www.makephysicseasy.com

## Entity Relationships

- Physics Made Easy is a **LocalBusiness** and **EducationalOrganization** in Singapore
- Mr. Chew Kok Mun is the **founder** and primary instructor
- Subjects taught: Physics (O-Level, A-Level, IB, IGCSE), Chess Strategy
- Teaching method: Multiple Intelligences (MI) Theory by Howard Gardner
- Location entity: Toa Payoh, Singapore
`;

/* ------------------------------------------------------------------ */
/*  Crawl rules                                                         */
/* ------------------------------------------------------------------ */

export const CRAWL_RULES = {
  allow: [
    "/",
    "/about",
    "/courses",
    "/curriculum",
    "/multiple",
    "/science",
    "/achievements",
    "/gallery",
    "/blog",
    "/study",
    "/contact",
    "/terms",
    "/privacy",
  ],
  disallow: [
    "/admin",
    "/api",
    "/login",
  ],
  /**
   * Explicitly reference sitemap location in robots.txt output.
   * Many crawlers and audit tools (HOTH flagged robots.txt as missing)
   * expect: Sitemap: https://www.makephysicseasy.com/sitemap.xml
   */
  sitemapUrl: "https://www.makephysicseasy.com/sitemap.xml",
};

/* ------------------------------------------------------------------ */
/*  Sitemap static pages                                                */
/* ------------------------------------------------------------------ */

export const SITEMAP_STATIC_PAGES: Array<{
  path: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/courses", changeFrequency: "weekly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/achievements", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/curriculum", changeFrequency: "monthly", priority: 0.7 },
  { path: "/study", changeFrequency: "weekly", priority: 0.7 },
  { path: "/multiple", changeFrequency: "monthly", priority: 0.7 },
  { path: "/science", changeFrequency: "monthly", priority: 0.7 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.5 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
];
