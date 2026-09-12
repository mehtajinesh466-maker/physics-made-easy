import { buildMetadata } from "@/lib/seo";
import AboutBanner from "@/components/ui/AboutBanner";

export const metadata = buildMetadata("/about");
import AboutSection from "@/components/ui/AboutSection";
import FaqSection from "@/components/stats-section";
import CoachCtaSection from "@/components/ui/CoachCtaSection";
import TestimonialsSection from "@/components/testimonials-section";
import AchievementsSection from "@/components/ui/achievements";
import TeamSection from "@/components/ui/team-section";
import FinalCTASection from "@/components/ui/final-cta-section";
import DemoBookingCTA from "@/components/demo-booking-cta";

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mr. Chew Kok Mun",
    "jobTitle": "Lead Physics Instructor & Founder",
    "worksFor": {
      "@type": "EducationalOrganization",
      "name": "Physics Made Easy",
      "sameAs": "https://www.makephysicseasy.com"
    },
    "description": "Ex-MOE PSC Scholar, NIE-trained physics educator with NUS Mathematics & English minors and Edinburgh Business School Master's degree.",
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "National University of Singapore (NUS)"
      },
      {
        "@type": "EducationalOrganization",
        "name": "National Institute of Education (NIE Singapore)"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Edinburgh Business School / Heriot-Watt University"
      }
    ],
    "award": [
      "MOE PSC Teaching Scholarship",
      "FIDE International Chess Instructor Certification",
      "Ex-MOE Senior Physics Educator Recognition"
    ],
    "knowsAbout": [
      "Physics Pedagogy",
      "GCE O-Level Physics",
      "GCE A-Level H2 Physics",
      "IB Physics HL & SL",
      "Multiple Intelligences Teaching Methodology"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <AboutBanner />
      <AboutSection />
      <AchievementsSection />
      <TeamSection />
      <CoachCtaSection />
      <TestimonialsSection />
      <FaqSection />
      <DemoBookingCTA />
    </div>
  );
}
