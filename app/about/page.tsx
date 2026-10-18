import { buildMetadata } from "@/lib/seo";
import AboutBanner from "@/components/ui/AboutBanner";

export const metadata = buildMetadata("/about");
import AboutSection from "@/components/ui/AboutSection";
import TeachingExperienceSection from "@/components/ui/teaching-experience";
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
    "jobTitle": "Lead Physics Instructor, NTU Undergraduate Physics Instructor & Founder",
    "worksFor": [
      {
        "@type": "EducationalOrganization",
        "name": "Physics Made Easy",
        "sameAs": "https://www.makephysicseasy.com"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "Nanyang Technological University (NTU)",
        "sameAs": "https://www.ntu.edu.sg"
      }
    ],
    "description": "Ex-MOE PSC Scholar, NIE-trained physics educator currently teaching first-year undergraduate Physics at Nanyang Technological University (NTU) and pursuing a Master's in Education (M.Ed.) from the University of the People (USA) certified by the International Baccalaureate (headquartered in Geneva, Switzerland), with NUS Mathematics & English minors and Edinburgh Business School Master's degree.",
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "University of the People (USA) - Master of Education (IB Certified)"
      },
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
      "International Baccalaureate (IB) Educator Certification",
      "FIDE International Chess Instructor Certification",
      "Ex-MOE Senior Physics Educator Recognition"
    ],
    "knowsAbout": [
      "Undergraduate Physics (NTU)",
      "Physics Pedagogy",
      "International Baccalaureate (IB) HL & SL Physics",
      "GCE O-Level Physics",
      "GCE A-Level H2 Physics",
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
      <TeachingExperienceSection />
      <AchievementsSection />
      <TeamSection />
      <CoachCtaSection />
      <TestimonialsSection />
      <FaqSection />
      <DemoBookingCTA />
    </div>
  );
}

