"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Star,
  CheckCircle,
  TrendingUp,
  Award,
  Users,
  Compass,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Shield,
  BookOpen,
  Target,
  Briefcase,
  GraduationCap,
  Home,
  ChevronRight,
  Atom,
  Sparkles
} from "lucide-react";

const caseStudies = [
  {
    title: "HCIS IB Physics — From Humanities Thinking to IB Grade 7",
    student: "IB HL Physics Student",
    tags: ["Humanities Background", "Grade Transformation", "Storytelling Method"],
    bg: "From humanities background, excelling in literature and languages but convinced he was 'not a science person.' Entering IB HL Physics, he was struggling to bridge the gap between narrative thinking and abstract physical reasoning.",
    whatWeDid: "Mr. Chew applied the Multiple Intelligences framework — identifying this student's strong linguistic intelligence and using it as an entry point into Physics reasoning. Concepts like electromagnetic induction were first explained through storytelling structures, then formalised mathematically.",
    result: "He achieved IB Grade 7 — the highest possible score — and went on to pursue Architecture at UNSW Australia. His words: 'Mr. Chew showed me that Physics isn't about memorising — it's about seeing patterns. Once I saw the patterns, the rest came naturally.'"
  },
  {
    title: "NJC H2 Physics — Fragmented Knowledge to A-Level Distinction",
    student: "Junior College Student",
    tags: ["National Junior College", "Synthesis", "Advanced Topics"],
    bg: "A Junior College student at National Junior College preparing for H2 Physics A-Levels. She had solid foundational knowledge but struggled to link disparate topics — particularly Electromagnetism and Modern Physics — into a coherent understanding.",
    whatWeDid: "Mr. Chew rebuilt her mental map of the subject, showing how Quantum Physics, Electromagnetism, and Thermal topics share underlying logical structures. Through structured problem-solving sessions and targeted past-year drills, she developed the ability to approach unseen questions with a clear framework.",
    result: "She achieved an A-Level Distinction and secured a place on a top-tier medical track. Her parents noted: 'In just months, she learned to link diverse topics like Electromagnetism and Quantum Physics, turning confusion into a cohesive A grade.'"
  },
  {
    title: "ACSI IP Physics — Academic Dropout to UCLA",
    student: "Integrated Programme Student",
    tags: ["Motivation Shift", "Chess Integration", "Fast Progress"],
    bg: "This student was described as 'laid-back' — a student with potential who had disengaged from academic work. In the first session, he was failing his IP Physics modules and showed little motivation to improve.",
    whatWeDid: "Chess coaching was introduced alongside Physics — not as a distraction, but as a vehicle to re-engage him through strategic thinking. As his chess game developed, his approach to Physics problems changed. He stopped looking for shortcuts and started thinking several steps ahead.",
    result: "In under a year, he went from failing grades to securing a place at UCLA in the United States. He has since described the chess-Physics combination as the turning point in his academic journey."
  }
];

const reviews = [
  {
    quote: "Mr Chew taught me Additional Mathematics for O-levels and is a kind and patient teacher. He managed to make the subject a lot more manageable for me, helping me to improve from a C6 to an A1.",
    author: "Lex",
    role: "A-Level Physics Student"
  },
  {
    quote: "Mr Chew is an exceedingly patient and kind tutor who went above and beyond to help me in physics. He made asking questions really easy, which in turn made it significantly less tedious and more fun.",
    author: "Ethan Lau",
    role: "Physics Student"
  },
  {
    quote: "He is able to answer any questions I might have very well and in a way that's easy to understand. He also gives good materials such as notes and practice questions!",
    author: "Yu Tao",
    role: "Regular Student"
  },
  {
    quote: "I didn't like Physics to begin with but Mr Chew opened my eyes. Leading up to my exams, he never failed to answer my queries. My Physics grade improved tremendously in the A-levels.",
    author: "Renee Fong",
    role: "A-Level Physics Student"
  }
];

const faqData = [
  {
    question: "Are these results typical for all students?",
    answer: "These are verified results across students who committed to the programme consistently. Students who attend regularly and complete assigned practice see the strongest improvement. We recommend a minimum of one term to assess genuine progress."
  },
  {
    question: "How long does it take to see improvement?",
    answer: "Most students notice a difference within 4–6 weeks. Meaningful grade improvement typically occurs within one school term (3–4 months). The case studies above reflect longer-term transformation over 6–12 months."
  },
  {
    question: "Do you teach students who are already doing well?",
    answer: "Yes. A significant portion of our students are already passing but want to reach A1 or Grade 7. The MI and Chess methodology is particularly effective at the top end, where marginal improvements in reasoning speed and exam technique make the difference between B and A."
  },
  {
    question: "What is the class size?",
    answer: "Mr. Chew teaches small groups to ensure every student receives personal attention. Custom 1-on-1 tracks are available on request."
  }
];

export default function TestimonialsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Structured Rating Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Physics Made Easy",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "4",
      "bestRating": "5"
    }
  };

  return (
    <main className="bg-slate-50 min-h-screen font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Header */}
      <section className="relative w-full bg-slate-50 overflow-hidden pt-32 pb-20 lg:pt-10 lg:pb-12 font-sans text-center">
        {/* 1. Scientific Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        {/* 2. Soft Scientific Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[100px] opacity-60 pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            <Shield size={12} />
            <span>Audited & Verified Track Record (2001-2025)</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight relative"
          >
            Real Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">Results</span>
            {/* Decorative Underline */}
            <svg className="absolute w-32 h-3 -bottom-2 left-1/2 -translate-x-1/2 text-cyan-400 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 25 10 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 font-medium"
          >
            At Physics Made Easy, results are not a marketing claim. They are an audited track record built over 24 years, across hundreds of students from Singapore's most demanding schools.
          </motion.p>

          {/* Breadcrumbs */}
          <nav className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm">
            <Link href="/" className="text-slate-500 hover:text-cyan-600 transition-colors flex items-center gap-1.5 text-sm font-semibold">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            
            <ChevronRight className="w-4 h-4 text-slate-300" strokeWidth={2.5} />
            
            <span className="text-slate-900 font-bold text-sm">
              Testimonials
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

      {/* Stats Counter Section */}
      <section className="py-12 -mt-8 relative z-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "O-Level A1 or A2", value: "95%" },
              { label: "IB HL Physics Grade 7", value: "95%" },
              { label: "A-Level H2 Grade A/B", value: "80%" },
              { label: "Pass Rate Across Levels", value: "100%" }
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl text-center">
                <div className="text-3xl md:text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="py-16 container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">
            Student Transformation Case Studies
          </h2>
          <p className="text-slate-600">
            Real stories of cognitive breakthrough and structural grade improvement
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-[2rem] p-6 md:p-10 shadow-sm flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">{study.title}</h3>
              
              <div className="grid md:grid-cols-12 gap-6 pt-4 border-t border-slate-100">
                <div className="md:col-span-6 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Background Context</span>
                  <p className="text-slate-600 text-sm leading-relaxed">{study.bg}</p>
                </div>
                <div className="md:col-span-6 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">What Mr. Chew Did</span>
                  <p className="text-slate-600 text-sm leading-relaxed">{study.whatWeDid}</p>
                </div>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-cyan-50 border border-cyan-100 flex gap-3 items-start">
                <CheckCircle className="text-cyan-600 shrink-0 mt-0.5" size={18} />
                <div>
                  <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider block">Outcome Result</span>
                  <p className="text-slate-800 text-sm font-medium leading-relaxed">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Google Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-2">What Students & Parents Say</h2>
              <p className="text-slate-500 text-sm">All reviews verified on Google Business profile</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-1 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <span className="text-xs font-bold text-slate-700">5.0 Star Rating (Verified reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((rev, i) => (
              <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col justify-between">
                <p className="text-slate-700 italic text-sm leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-xs uppercase">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{rev.author}</h4>
                    <span className="text-slate-500 text-xs font-semibold">{rev.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools List */}
      <section className="py-16 container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <h2 className="text-2xl font-bold text-slate-950 mb-8">Schools Our Students Come From</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Raffles Institution (RI)",
            "Hwa Chong Institution (HCIS)",
            "National Junior College (NJC)",
            "Anglo-Chinese School (International) — ACSI",
            "Singapore American School (SAS)",
            "French International School (FIS)",
            "Local & International schools across Singapore"
          ].map((school, i) => (
            <span key={i} className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-700 text-sm font-semibold">
              {school}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4 flex items-center justify-center gap-2">
              <HelpCircle className="text-cyan-600" />
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:text-cyan-700 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${openFaq === i ? "rotate-180 text-cyan-600" : ""}`}
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

      {/* Book a Trial CTA */}
      <section className="py-16 bg-cyan-950 text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl space-y-6">
          <h2 className="text-3xl font-black">Book Your Trial Lesson</h2>
          <p className="text-slate-300">
            If you want to experience the teaching that produced these results, start with a free trial lesson. Mr. Chew will assess your child's current level, identify specific gaps, and explain the plan to close them.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="https://wa.me/6597277419"
              target="_blank"
              className="px-8 py-4 bg-teal-500 hover:bg-teal-400 font-bold rounded-xl text-slate-950 shadow-md flex items-center justify-center gap-2 transition-all"
            >
              WhatsApp Mr. Chew: +65 9727 7419
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-slate-900 border border-slate-800 font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              Book a Free Trial Lesson <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
