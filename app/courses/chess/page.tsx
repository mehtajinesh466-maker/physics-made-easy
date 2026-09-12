"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Award,
  Crown,
  BookOpen,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Users,
  Compass,
  CheckCircle,
  Brain,
  Home,
  ChevronRight,
  Atom,
  Target
} from "lucide-react";
import { getCourseSchema } from "@/config/seo-config";
import ChessClassroomSection from "@/components/chess-classroom";

const benefits = [
  { title: "Working Memory", desc: "Holding and manipulating multiple pieces of information simultaneously (directly relevant to multi-step Physics problems)." },
  { title: "Attention & Focus", desc: "The ability to sustain concentration for extended periods (critical for 2.5-hour exam papers)." },
  { title: "Pattern Recognition", desc: "Identifying familiar structures in unfamiliar contexts (the foundation of exam technique)." },
  { title: "Planning & Foresight", desc: "Thinking several steps ahead before committing to an action in exams or positions." },
  { title: "Resilience", desc: "Recovering from mistakes methodically rather than emotionally under stress." }
];

const tiers = [
  { title: "For Beginners", desc: "We start from the rules, moving logically through piece value, tactical patterns, and basic endgames. The goal is mathematical fluency and strategic confidence." },
  { title: "For Intermediates", desc: "Tactical training using puzzles (forks, pins, skewers, discovered attacks), opening principles, and middle-game planning. Tournament preparation is introduced." },
  { title: "For Advanced / Competitive", desc: "Detailed game analysis, opening repertoire development, deep endgame technique, and psychological preparation for school or open competition." }
];

const faqs = [
  {
    question: "Does my child need to know how to play chess to join?",
    answer: "No. Complete beginners are welcome. We start from the very beginning if needed."
  },
  {
    question: "Can chess coaching improve my child's Physics results?",
    answer: "Based on our experience, yes — consistently. Students who train chess alongside Physics show measurably faster improvement in problem-solving speed and accuracy. This is why we integrate both in our teaching philosophy."
  },
  {
    question: "Is chess coaching only available alongside Physics tuition?",
    answer: "No. Chess coaching is available as a standalone programme. However, many families find the combined Physics + Chess approach delivers the strongest all-round cognitive development."
  },
  {
    question: "Are there competitions Mr. Chew's students participate in?",
    answer: "Yes. Students who develop to a competitive level are prepared for school-level and open tournaments in Singapore."
  }
];

export default function ChessCoursePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = getCourseSchema({
    title: "Chess Coaching Singapore — FIDE Certified | Strategic Thinking for Students",
    description: "Chess coaching in Singapore by FIDE-certified International Instructor Mr. Chew. Develop tactical thinking, focus, and problem-solving skills for academic and competitive success.",
    level: "All levels (Beginner to Competitive)",
    url: "/courses/chess",
    price: "0",
    priceCurrency: "SGD"
  });

  return (
    <main className="bg-slate-50 min-h-screen font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="relative w-full bg-slate-50 overflow-hidden pt-28 pb-14 lg:pt-10 lg:pb-12 font-sans text-center">
        {/* 1. Scientific Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        {/* 2. Soft Scientific Blobs */}
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-100/40 rounded-full blur-[80px] sm:blur-[100px] opacity-60 pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-indigo-100/40 rounded-full blur-[80px] sm:blur-[100px] opacity-70 pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

        {/* 3. Floating Icons */}
        <div className="absolute top-24 left-6 md:left-20 opacity-10 text-teal-600 animate-[spin_20s_linear_infinite] hidden sm:block">
          <Atom className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1.5} />
        </div>
        <div className="absolute top-1/3 right-6 md:right-32 opacity-10 text-indigo-500 transform rotate-12 hidden md:block">
          <BookOpen className="w-16 h-16 md:w-20 md:h-20" />
        </div>
        <div className="absolute bottom-20 left-1/4 text-teal-500 opacity-20 animate-bounce-slow hidden sm:block">
          <Target className="w-6 h-6 md:w-8 md:h-8" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest mb-4 sm:mb-6 shadow-sm"
          >
            <Crown size={14} className="text-amber-500 shrink-0" />
            <span>FIDE Certified International Instructor</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight relative"
          >
            Chess <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-indigo-600">Coaching</span>
            {/* Decorative Underline */}
            <svg className="absolute w-24 sm:w-32 h-2 sm:h-3 -bottom-2 left-1/2 -translate-x-1/2 text-amber-400 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 25 10 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 font-medium px-2 sm:px-0"
          >
            Chess is not a game. It is a training system for the mind. We apply it to build working memory, logical resilience, and structural foresight transferable to academic success.
          </motion.p>

          {/* Breadcrumbs */}
          <nav className="inline-flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm max-w-full">
            <Link href="/" className="text-slate-500 hover:text-teal-600 transition-colors flex items-center gap-1 text-xs sm:text-sm font-semibold">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" strokeWidth={2.5} />
            
            <Link href="/courses" className="text-slate-500 hover:text-teal-600 transition-colors text-xs sm:text-sm font-semibold">
              Courses
            </Link>

            <ChevronRight className="w-3.5 h-3.5 text-slate-300" strokeWidth={2.5} />

            <span className="text-slate-900 font-bold text-xs sm:text-sm">
              Chess
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

      {/* Why Chess - Cognitive Case */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
              Why Chess — The Cognitive Case
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
              Research shows chess builds capacities that transfer directly to performance in STEM subjects
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {benefits.map((b, idx) => (
              <div key={idx} className="p-5 sm:p-6 bg-slate-50 border border-slate-200/80 rounded-2xl text-center space-y-2.5 shadow-xs">
                <Brain className="w-7 h-7 sm:w-8 sm:h-8 text-amber-600 mx-auto" />
                <h3 className="font-bold text-slate-950 text-base">{b.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Classroom Experience Section */}
      <ChessClassroomSection />

      {/* Program Levels */}
      <section className="py-12 sm:py-16 container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">What Our Coaching Looks Like</h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">Differentiated training adapted to the student's level</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {tiers.map((t, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 border border-slate-200/70 shadow-sm rounded-2xl flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded bg-amber-50 border border-amber-200/60 text-amber-800 text-[11px] sm:text-xs font-bold uppercase inline-block">
                  Level {idx + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">{t.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 sm:p-6 bg-amber-50 border border-amber-200/80 rounded-2xl text-center max-w-3xl mx-auto shadow-xs">
          <p className="text-slate-800 text-xs sm:text-sm font-semibold leading-relaxed">
            The MI Integration: Every lesson includes a reflection component: &ldquo;What did your thinking look like during that position?&rdquo; Metacognition is the bridge from board to grades.
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-12 sm:py-16 bg-indigo-950 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4">
              <span className="text-amber-400 font-bold uppercase tracking-wider text-xs block">Qualifications</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
                Mr. Chew&apos;s Chess Credentials
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                FIDE (International Chess Federation) certified International Chess Instructor, bringing high-level competitive coaching directly to students.
              </p>
              <ul className="space-y-2.5 pt-2">
                {[
                  "FIDE International Chess Instructor certification",
                  "Former National Schools Under-16 Champion",
                  "Coaching at Tao Nan, Nan Hua, Queenstown Sec, HCIS, CHIJ, JPJC",
                  "MOE-recognised national chess coaching syllabus"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle className="text-amber-400 w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl space-y-3">
              <span className="text-xs sm:text-sm font-bold text-amber-400 block uppercase tracking-wide">WHY CERTIFICATION MATTERS</span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Many chess coaches in Singapore are hobbyists. Mr. Chew holds world-body certified credentials, ensuring structured lesson plans and professional pedagogical standards.
              </p>
              <div className="pt-4 border-t border-slate-800 flex flex-wrap justify-between items-center gap-2 text-[11px] sm:text-xs text-slate-400 font-medium">
                <span>FIDE Certified</span>
                <span>National Champion Background</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 flex items-center justify-center gap-2">
              <HelpCircle className="text-amber-600 w-6 h-6 sm:w-7 sm:h-7" />
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5 sm:space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-slate-800 hover:text-amber-700 transition-colors text-sm sm:text-base gap-3"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${openFaq === i ? "rotate-180 text-amber-600" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="p-4 sm:p-5 pt-0 text-slate-600 border-t border-slate-200 bg-white leading-relaxed text-xs sm:text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-slate-50 text-center">
        <div className="container mx-auto px-4 sm:px-6 max-w-xl space-y-5 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Enquire About Chess Coaching</h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Enquire today for scheduling, group/individual slots, and program details.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-amber-600 hover:bg-amber-500 font-bold rounded-xl text-white shadow-md transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Enquire About Chess Coaching <ArrowRight size={16} />
            </Link>
            <Link
              href="/methodology"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white border border-slate-200 font-bold rounded-xl text-slate-700 hover:border-amber-600 hover:text-amber-600 transition-all text-sm sm:text-base"
            >
              Learn Our Methodology
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
