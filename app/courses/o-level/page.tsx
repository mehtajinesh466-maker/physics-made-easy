"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  MapPin,
  Clock,
  Laptop,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Users,
  Compass,
  FileText,
  Home,
  ChevronRight,
  Atom,
  Target
} from "lucide-react";
import { getCourseSchema } from "@/config/seo-config";

const syllabus = [
  { topic: "Measurements and Kinematics", desc: "Distance, displacement, velocity, acceleration. We spend more time here because a shaky foundation causes problems all the way to A-Levels." },
  { topic: "Dynamics and Newton's Laws", desc: "Free body diagrams, net force analysis, friction, and terminal velocity. Crucial for MCQ success." },
  { topic: "Mass, Weight, and Density", desc: "Including fluid pressure and atmospheric pressure — simple concepts regularly misapplied under exam conditions." },
  { topic: "Energy, Work, and Power", desc: "Deconstruct tricky conservation-of-energy questions to spot where energy is 'hidden' in the problem." },
  { topic: "Thermal Physics", desc: "Kinetic model of matter, specific heat capacity, latent heat, and gas laws. Heavily conceptual." },
  { topic: "Waves — Light and Sound", desc: "Reflection, refraction, diffraction, and interference. We use visual models to make wave behavior intuitive." },
  { topic: "Electricity and Magnetism", desc: "Series & parallel circuits, electrostatics, electromagnetism, and electromagnetic induction." },
  { topic: "Radioactivity & Nuclear Physics", desc: "(Pure Physics only) Alpha, beta, gamma radiation; half-life; nuclear equations. Conceptually rich." }
];

const inclusions = [
  { title: "Mr. Chew's Master Notes", desc: "Curated distillation of exactly what the examiner is testing and how to answer it." },
  { title: "TYS Topic Drilling", desc: "Past-year Cambridge questions organised by concept, not by year, so students see patterns." },
  { title: "Exam Technique Training", desc: "How to read questions, where to show working, and how to score even when unsure." },
  { title: "WhatsApp Support", desc: "Direct access to Mr. Chew for follow-up questions outside class hours." }
];

const faqs = [
  {
    question: "Is this tuition for Pure Physics, Combined Science, or both?",
    answer: "Both. Mr. Chew teaches Pure Physics (6091) and the Physics component of Combined Science (5116). Students from both tracks attend the same core sessions, with differentiated practice materials where the syllabuses diverge."
  },
  {
    question: "When should my child start O-Level Physics tuition?",
    answer: "Ideally at the start of Secondary 3, when the physics syllabus begins. Students who join at the start of Sec 4 also see strong results, but the foundation-building phase is more compressed."
  },
  {
    question: "Is the tuition based at Toa Payoh or online?",
    answer: "We are based at Toa Payoh Central. Online synchronous lessons (live, interactive, not recorded) are available for students who cannot commute. The teaching quality is identical."
  },
  {
    question: "How many students are in each class?",
    answer: "Small groups — typically 4 to 8 students. This ensures Mr. Chew can give meaningful individual attention in every session. 1-on-1 intensive sessions are available on request."
  },
  {
    question: "My child is currently failing. Is it too late?",
    answer: "No. The ACSI student featured on our testimonials page went from failing to university entry within one academic year. The earlier you start, the more margin you have — but improvement at any stage is absolutely achievable with this methodology."
  },
  {
    question: "Is there a trial lesson available?",
    answer: "Yes. We offer a free trial session so you can experience the teaching before committing. WhatsApp Mr. Chew to arrange."
  }
];

export default function OLevelCoursePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = getCourseSchema({
    title: "GCE O-Level Physics Tuition Singapore",
    description: "Small group O-Level Physics tuition for Sec 3 and Sec 4 students in Singapore. Covers Pure Physics and Combined Science (Physics). Led by ex-MOE PSC Scholar Mr. Chew Kok Mun.",
    level: "Secondary 3 and Secondary 4",
    url: "/courses/o-level",
    price: "90",
    priceCurrency: "SGD"
  });

  return (
    <main className="bg-slate-50 min-h-screen font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="relative w-full bg-slate-50 overflow-hidden pt-32 pb-20 lg:pt-10 lg:pb-12 font-sans text-center">
        {/* 1. Scientific Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        {/* 2. Soft Scientific Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[100px] opacity-60 pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-[100px] opacity-70 pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

        {/* 3. Floating Icons */}
        <div className="absolute top-24 left-10 md:left-20 opacity-10 text-teal-600 animate-[spin_20s_linear_infinite]">
          <Atom className="w-16 h-16" strokeWidth={1.5} />
        </div>
        <div className="absolute top-1/3 right-10 md:right-32 opacity-10 text-indigo-500 transform rotate-12 hidden md:block">
          <BookOpen className="w-20 h-20" />
        </div>
        <div className="absolute bottom-20 left-1/4 text-teal-500 opacity-20 animate-bounce-slow">
          <Target className="w-8 h-8" />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            <Sparkles size={12} className="fill-teal-500" />
            <span>Pure & Combined Science Specialists</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight relative"
          >
            O-Level Physics <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Tuition</span>
            {/* Decorative Underline */}
            <svg className="absolute w-32 h-3 -bottom-2 left-1/2 -translate-x-1/2 text-teal-400 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 25 10 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 font-medium"
          >
            A strong O-Level Physics result opens pathways to Junior College sciences, Polytechnic engineering, and competitive university programmes. We deliver a 95% A1/A2 track record.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-bold mb-8">
            <span className="flex items-center gap-1.5"><MapPin size={16} className="text-teal-600" /> Toa Payoh Central</span>
            <span className="flex items-center gap-1.5"><Clock size={16} className="text-teal-600" /> SG$90 / 2-Hour Session</span>
            <span className="flex items-center gap-1.5"><Laptop size={16} className="text-teal-600" /> Online Available</span>
          </div>

          {/* Breadcrumbs */}
          <nav className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm">
            <Link href="/" className="text-slate-500 hover:text-teal-600 transition-colors flex items-center gap-1.5 text-sm font-semibold">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            
            <ChevronRight className="w-4 h-4 text-slate-300" strokeWidth={2.5} />
            
            <Link href="/courses" className="text-slate-500 hover:text-teal-600 transition-colors text-sm font-semibold">
              Courses
            </Link>

            <ChevronRight className="w-4 h-4 text-slate-300" strokeWidth={2.5} />

            <span className="text-slate-900 font-bold text-sm">
              O-Level
            </span>
          </nav>
        </div>

        <style jsx>{`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 4s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Main Details Panel */}
      <section className="py-12 container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase">Fee Structure</span>
            <p className="text-2xl font-black text-slate-900">SG$90 / session</p>
            <p className="text-slate-500 text-xs leading-relaxed">Small group 2-hour sessions. Custom 1-on-1 tracks available.</p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase">Physical Location</span>
            <p className="text-base font-bold text-slate-900">186 Toa Payoh Central</p>
            <p className="text-slate-500 text-xs leading-relaxed">Lobby H #02-430, Singapore 310186. Near MRT station.</p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase">Class Intake</span>
            <p className="text-base font-bold text-slate-900">Sec 3 & Sec 4 Students</p>
            <p className="text-slate-500 text-xs leading-relaxed">Pure Physics (6091) & Combined Science (Physics component).</p>
          </div>
        </div>
      </section>

      {/* What We Cover - Syllabus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              What We Cover — O-Level Physics Syllabus (6091)
            </h2>
            <p className="text-slate-600">Comprehensive instruction mapping the entire MOE exam requirements</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {syllabus.map((item, idx) => (
              <div key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="font-bold text-slate-900 text-base mb-2">{item.topic}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">What's Included in Every Lesson</h2>
          <p className="text-slate-600">Differentiated learning tools designed to optimize physics understanding</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {inclusions.map((inc, i) => (
            <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm space-y-3">
              <CheckCircle className="text-teal-600 w-6 h-6" />
              <h3 className="font-bold text-slate-900 text-base">{inc.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{inc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lex Journey Case Study */}
      <section className="py-16 bg-indigo-950 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center space-y-6">
          <span className="text-teal-400 font-bold uppercase tracking-wider text-xs block">Student Success Timeline</span>
          <h2 className="text-3xl font-black">A Student's Journey: From C6 to A1</h2>
          <p className="text-slate-350 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            One of our O-Level students joined at the start of Secondary 4, scoring a C6 in the school's mid-year examination. She was not a weak student — she had strong linguistic skills — but she had never been taught to translate those skills into physics reasoning.
          </p>
          <p className="text-slate-350 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-semibold">
            Within two months, she could decode any O-Level MCQ question by identifying what the examiner was actually testing. By the end of the year, she achieved A1 in O-Level Physics.
          </p>
          <div className="pt-4">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 font-bold text-teal-400 hover:text-teal-300"
            >
              Read More Student Testimonials <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4 flex items-center justify-center gap-2">
              <HelpCircle className="text-teal-600" />
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:text-teal-700 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${openFaq === i ? "rotate-180 text-teal-600" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="p-5 pt-0 text-slate-600 border-t border-slate-200 bg-white leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50 text-center">
        <div className="container mx-auto px-6 max-w-xl space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Experience the Methodology</h2>
          <p className="text-slate-600">
            Secure a free trial session to see how Mr. Chew adapts his teaching approach to your child's intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-teal-600 hover:bg-teal-500 font-bold rounded-xl text-white shadow-md transition-all"
            >
              Book a Free Trial
            </Link>
            <Link
              href="https://wa.me/6597277419"
              target="_blank"
              className="px-8 py-4 bg-white border border-slate-200 font-bold rounded-xl text-slate-700 hover:border-teal-600 hover:text-teal-600 transition-all"
            >
              WhatsApp Mr. Chew
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
