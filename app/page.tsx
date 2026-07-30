import { getFAQSchema, HOME_FAQS } from "@/config/seo-config"
import  HeroSection  from "@/components/hero-section"
import  CoursesSection  from "@/components/events-preview"
import  DemoBookingCTA  from "@/components/demo-booking-cta"
import  TestimonialsSection  from "@/components/testimonials-section"
import  FaqSection  from "@/components/stats-section"
import  FeaturesSection  from "@/components/features-section"
import AchievementsSection from "@/components/ui/AchievementsSection"
import WhyChooseUsSection from "@/components/why-choose"
import LearningEnvironment from "@/components/ui/learning"
import PhilosophySection from "@/components/philoshophy"
import LeadInstructorSection from "@/components/lead"
import ResultsSection from "@/components/result"
import ResourcesSection from "@/components/material"
import GallerySection from "@/components/gallery"
import SuccessStories from "@/components/sucess"
import CareerGuidance from "@/components/carrier"
import CareerCompass from "@/components/carrierCompass"
import PeterLohMentorProfile from "@/components/advisor"


import AlumniSpotlight from "@/components/alumni-spotlight"
import GoogleReviewsWidget from "@/components/google-reviews-widget"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema(HOME_FAQS)),
        }}
      />
      <main>
        <HeroSection />
        <ResultsSection />
        <WhyChooseUsSection />
        <PhilosophySection />
        <LeadInstructorSection />
        <CoursesSection />
        <SuccessStories />
        <AlumniSpotlight />
        <TestimonialsSection />
        <GoogleReviewsWidget trustindexScript="https://cdn.trustindex.io/loader.js?351328e78efe065f0c46084ef79" />
        <ResourcesSection />
        <GallerySection />
        <FaqSection />
        <DemoBookingCTA />
      </main>
    </div>
  )
}
