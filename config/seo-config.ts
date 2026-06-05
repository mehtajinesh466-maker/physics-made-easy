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
 *
 * PRE-DEPLOY CHECKLIST
 * ─────────────────────────────────────────────────────────────────────
 *   □ Add OG images under /public/og/ (home.png, about.png, etc.)
 *   □ Fill in bingVerification (bing.com/webmasters → Meta tag)
 *   □ Add live Facebook / LinkedIn / YouTube URLs to sameAs when ready
 *   □ Create /privacy page if not live yet (footer already links to it)
 * ─────────────────────────────────────────────────────────────────────
 */

export const SITE_CONFIG = {
  name: "Physics Made Easy",
  tagline: "Master Physics Through Logic, Not Memorisation",
  domain: "https://www.makephysicseasy.com",
  locale: "en_SG",
  twitterHandle: "",
  defaultOgImage: "/og/default.png",
  themeColor: "#0d9488",
  googleVerification: "QYUm0yBJfsoy9OOV0OkQguoz_ME6vAHST6CPIVaV9ZU",
  bingVerification: "", // ← FILL IN: bing.com/webmasters → Add site → Meta tag
} as const;

export interface PageSeoEntry {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
  canonical?: string;
}

/**
 * Page-by-page meta tags. Keys are URL paths.
 * Title rules:   ≤56 chars. Include primary keyword. Brand optional.
 * Desc rules:    ≤155 chars. Include a CTA where possible.
 */
export const PAGE_SEO: Record<string, PageSeoEntry> = {
  "/": {
    title: "Physics Tuition Singapore | O-Level, A-Level & IB",
    description:
      "Ex-MOE scholar Mr. Chew teaches O-Level, A-Level & IB Physics in Singapore. Multiple Intelligences method, proven A/B results. Book a trial lesson.",
    keywords: [
      "physics tuition singapore",
      "O level physics tutor",
      "A level H2 physics tuition",
      "IB physics tutor singapore",
      "physics made easy",
      "Mr Chew physics tutor",
      "physics tuition Toa Payoh",
      "online physics tuition singapore",
      "IGCSE physics tutor",
      "physics and chess coaching singapore",
    ],
    ogImage: "/og/home.png",
  },

  "/about": {
    title: "About Mr. Chew | Ex-MOE Physics Tutor Singapore",
    description:
      "Meet Mr. Chew Kok Mun — Ex-MOE scholar, FIDE instructor, and founder of Physics Made Easy. Learn our teaching philosophy and track record.",
    keywords: [
      "Mr Chew physics tutor",
      "physics tutor biography singapore",
      "MOE scholar physics tuition",
      "physics made easy about",
    ],
    ogImage: "/og/about.png",
  },

  "/courses": {
    title: "Physics & Chess Courses | O-Level, IB, A-Level",
    description:
      "Structured programmes for GCE O-Level, A-Level H2, IB HL/SL Physics, plus FIDE-certified chess coaching. Small groups and 1-to-1 options in Singapore.",
    keywords: [
      "O level physics course singapore",
      "IB HL physics tuition",
      "A level H2 physics class",
      "chess coaching singapore",
      "physics tuition packages",
    ],
    ogImage: "/og/courses.png",
    canonical: "https://www.makephysicseasy.com/courses",
  },

  "/curriculum": {
    title: "Physics Curriculum | Structured Exam Preparation",
    description:
      "See how Physics Made Easy maps topics from foundations to exam mastery for O-Level, A-Level, and IB — with clear milestones and practice focus.",
    keywords: [
      "physics curriculum singapore",
      "O level physics syllabus coverage",
      "IB physics topic plan",
    ],
    ogImage: "/og/curriculum.png",
  },

  "/multiple": {
    title: "Multiple Intelligences Method | Physics Made Easy",
    description:
      "How Howard Gardner's Multiple Intelligences theory powers our Physics, Math, and logic teaching — tailored to how each student learns best.",
    keywords: [
      "multiple intelligences tuition",
      "differentiated physics learning",
      "Cornelius Chew teaching method",
    ],
    ogImage: "/og/multiple.png",
  },

  "/science": {
    title: "Science Understanding | Beyond Formulas",
    description:
      "Build real conceptual understanding in Physics — vocabulary, models, and problem-solving — so exam questions make sense, not just memorised steps.",
    keywords: [
      "physics conceptual understanding",
      "science tuition singapore",
      "lower secondary science tutor",
    ],
    ogImage: "/og/science.png",
  },

  "/achievements": {
    title: "Student Results & Achievements | Physics Made Easy",
    description:
      "95% of O-Level students score A/B; strong IB Grade 7 outcomes. View success stories and results from Physics Made Easy students in Singapore.",
    keywords: [
      "physics tuition results singapore",
      "O level physics grades",
      "IB physics grade 7 tutor",
    ],
    ogImage: "/og/achievements.png",
  },

  "/gallery": {
    title: "Gallery | Physics Classes & Student Moments",
    description:
      "Photos from Physics Made Easy classes, workshops, and student achievements at our Toa Payoh centre and online sessions.",
    keywords: [
      "physics tuition centre photos",
      "physics class singapore gallery",
    ],
    ogImage: "/og/gallery.png",
  },

  "/blog": {
    title: "Physics Blog | Tips, Exams & Study Guides",
    description:
      "Exam strategies, concept explainers, and study tips from Mr. Chew for O-Level, A-Level, and IB Physics students in Singapore.",
    keywords: [
      "physics blog singapore",
      "O level physics tips",
      "IB physics study guide",
      "A level physics revision",
    ],
    ogImage: "/og/blog.png",
  },

  "/study": {
    title: "Free Study Material | Physics Made Easy",
    description:
      "Download free Physics notes, practice questions, and revision resources curated by Mr. Chew for Singapore syllabus students.",
    keywords: [
      "free physics notes singapore",
      "O level physics resources",
      "physics study material download",
    ],
    ogImage: "/og/study.png",
  },

  "/contact": {
    title: "Contact Physics Made Easy | Book a Trial",
    description:
      "Book a trial lesson or ask about O-Level, A-Level, and IB Physics tuition. Toa Payoh centre and online lessons. WhatsApp +65 9727 7419.",
    keywords: [
      "book physics tuition singapore",
      "physics tutor contact Toa Payoh",
      "trial physics lesson singapore",
    ],
    ogImage: "/og/contact.png",
  },

  "/terms": {
    title: "Terms of Service | Physics Made Easy",
    description:
      "Terms and conditions for using Physics Made Easy tuition services, website, and learning materials.",
    canonical: "https://www.makephysicseasy.com/terms",
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
    noIndex: true,
  },

  "/admin": {
    title: "Admin | Physics Made Easy",
    description: "Physics Made Easy administration portal.",
    noIndex: true,
  },
};

/* ---------------- Structured data templates ---------------- */

export const ORGANIZATION_SCHEMA: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  name: "Physics Made Easy",
  url: "https://www.makephysicseasy.com",
  logo: "https://www.makephysicseasy.com/android-chrome-512x512.png",
  description:
    "Singapore physics tuition for O-Level, A-Level, and IB using Multiple Intelligences methodology. Led by Ex-MOE scholar Mr. Chew Kok Mun, with optional FIDE-certified chess coaching.",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "14:00",
      closes: "21:00",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "186 Toa Payoh Central, Lobby H 02-430",
    addressLocality: "Singapore",
    postalCode: "310186",
    addressCountry: "SG",
  },
  telephone: "+65-9727-7419",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+65-9727-7419",
    email: "chewkm2001@yahoo.com",
    availableLanguage: ["English", "Chinese"],
    areaServed: "SG",
  },
  sameAs: [
    // Add live profile URLs when available:
    // "https://www.facebook.com/...",
    // "https://www.linkedin.com/...",
    // "https://www.youtube.com/...",
  ],
};

export function getCourseSchema(course: {
  title: string;
  description: string;
  level: string;
  url: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain,
    },
    educationalLevel: course.level,
    url: course.url.startsWith("http")
      ? course.url
      : `${SITE_CONFIG.domain}${course.url}`,
    inLanguage: "en",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["onsite", "online"],
      courseWorkload: "PT2H",
      location: {
        "@type": "Place",
        name: "Physics Made Easy — Toa Payoh",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Singapore",
          addressCountry: "SG",
        },
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
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.domain}/android-chrome-512x512.png`,
      },
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

/* ---------------- Homepage FAQs (rich results) ---------------- */

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
      "In-person classes run at our Toa Payoh Central centre (Lobby H). We also offer high-quality online lessons for students who prefer learning from home or are based overseas — same structured curriculum and feedback.",
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
];

/* ---------------- llms.txt — AI crawler guidance ---------------- */

export const LLMS_TXT = `# Physics Made Easy
> Singapore physics tuition for O-Level, A-Level, and IB. Ex-MOE scholar Mr. Chew Kok Mun. Multiple Intelligences methodology. Toa Payoh centre and online lessons.

## Pages

- [Home](https://www.makephysicseasy.com): Overview, programmes, trial booking
- [About](https://www.makephysicseasy.com/about): Mr. Chew's profile and teaching philosophy
- [Courses](https://www.makephysicseasy.com/courses): O-Level, A-Level, IB Physics and chess coaching
- [Curriculum](https://www.makephysicseasy.com/curriculum): Topic coverage and learning path
- [Multiple Intelligences](https://www.makephysicseasy.com/multiple): Our differentiated teaching method
- [Science Understanding](https://www.makephysicseasy.com/science): Concept-first approach beyond formulas
- [Achievements](https://www.makephysicseasy.com/achievements): Student results and success stories
- [Blog](https://www.makephysicseasy.com/blog): Exam tips and Physics explainers
- [Study Material](https://www.makephysicseasy.com/study): Free notes and resources
- [Contact](https://www.makephysicseasy.com/contact): Book a trial, location, WhatsApp

## Key facts

- Tutor: Mr. Chew Kok Mun (Ex-MOE scholar, FIDE instructor)
- Location: 186 Toa Payoh Central, Lobby H 02-430, Singapore 310186
- Syllabuses: O-Level, A-Level H2, IB HL/SL, IP, IGCSE Physics
- Also offers: FIDE-certified chess coaching
- Trial: Paid trial lesson available — contact via WhatsApp +65 9727 7419

## Contact

- Email: chewkm2001@yahoo.com
- Phone / WhatsApp: +65 9727 7419
- Website: https://www.makephysicseasy.com
`;

/* ---------------- Crawl rules ---------------- */

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
};

/* ---------------- Sitemap static pages ---------------- */

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
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/courses", changeFrequency: "weekly", priority: 0.9 },
  { path: "/curriculum", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.9 },
  { path: "/multiple", changeFrequency: "monthly", priority: 0.7 },
  { path: "/science", changeFrequency: "monthly", priority: 0.7 },
  { path: "/achievements", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/study", changeFrequency: "weekly", priority: 0.7 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.5 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
];
