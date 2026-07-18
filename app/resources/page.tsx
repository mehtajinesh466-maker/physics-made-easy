"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Video,
  FileText,
  TrendingUp,
  Award,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  BookOpen,
  Layers,
  Sparkles,
  Lock,
  Globe,
  CheckCircle,
  Home,
  ChevronRight,
  Atom,
  Target
} from "lucide-react";

const resources = [
  {
    title: "Video Masterclasses",
    desc: "HD video walkthroughs deconstructing complex topics from first principles (Kinematics, Waves, Electromagnetism, Quantum, Thermal). Uniquely focuses on why concepts work, not just mathematical steps.",
    icon: Video,
    color: "bg-teal-50 text-teal-600 border-teal-100",
    actionText: "Watch Masterclasses"
  },
  {
    title: "Strategic Concept PDFs",
    desc: "One-page logical diagrams that synthesize dense physics syllabuses. These maps teach students how to connect topics together, allowing them to derive complex rules from basic principles under 10 seconds.",
    icon: FileText,
    color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    actionText: "Download Concept PDFs"
  },
  {
    title: "Exam Trend Analysis Videos",
    desc: "Past-decade analysis of MOE and Cambridge exam trends. Learn which topics recur in Paper 1 MCQs, spot Paper 2 examiner traps, and discover mathematical shortcuts for complex problems.",
    icon: TrendingUp,
    color: "bg-cyan-50 text-cyan-600 border-cyan-100",
    actionText: "Access Exam Analysis"
  },
  {
    title: "Chess Strategy Tutorials",
    desc: "A special video coaching series linking chess calculation to academic problem solving under high-pressure exam conditions. No prior chess experience is needed.",
    icon: Award,
    color: "bg-amber-50 text-amber-600 border-amber-100",
    actionText: "Access Chess Tutorials"
  }
];

const topics = [
  "Kinematics and Dynamics",
  "Forces and Newton's Laws",
  "Energy, Work, and Power",
  "Waves and Superposition",
  "Electricity and DC Circuits",
  "Electromagnetism and Faraday's Law",
  "Quantum Physics (A-Level/IB)",
  "Thermal Physics & Thermodynamics",
  "Nuclear Physics"
];

const faqs = [
  {
    question: "Are these resources really free?",
    answer: "Yes, completely. No sign-up or credit card is required to access the main resource library. We believe high-quality physics education should not be locked behind a paywall."
  },
  {
    question: "Are the resources aligned to the Singapore syllabus?",
    answer: "Yes. All content is aligned to the current MOE O-Level Physics (6091), H1/H2 A-Level Physics (9749/8867), IB Physics HL/SL, and IGCSE Physics (0625) syllabuses."
  },
  {
    question: "How often is new content added?",
    answer: "Mr. Chew adds new content weekly — typically one new video and one concept PDF per week, timed around the school calendar and major exam periods."
  },
  {
    question: "Can I share these resources with classmates?",
    answer: "Yes. We encourage sharing. The more students benefit from better Physics understanding in Singapore, the better."
  }
];

export default function ResourcesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="bg-slate-50 min-h-screen font-sans pb-20">
      
      {/* Hero Banner */}
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
            <span>Study Portal Library</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight relative"
          >
            Free Physics <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Resources</span>
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
            Access free high-quality physics notes, video masterclasses, exam trend analysis, and chess strategy guides curated by ex-MOE scholar Mr. Chew.
          </motion.p>

          {/* Breadcrumbs */}
          <nav className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm">
            <Link href="/" className="text-slate-500 hover:text-teal-600 transition-colors flex items-center gap-1.5 text-sm font-semibold">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            
            <ChevronRight className="w-4 h-4 text-slate-300" strokeWidth={2.5} />
            
            <span className="text-slate-900 font-bold text-sm">
              Resources
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

      {/* Grid of Resources */}
      <section className="py-16 container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((res, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className={`p-4 rounded-xl w-fit ${res.color}`}>
                  <res.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{res.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{res.desc}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-50">
                <Link
                  href="/study"
                  className="inline-flex items-center gap-1.5 font-bold text-sm text-teal-600 hover:text-teal-700"
                >
                  {res.actionText} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Concept PDF List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-950 mb-4">Strategic Concept PDFs</h2>
            <p className="text-slate-600">Downloadable one-page logic maps covering crucial topics in local syllabuses</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {topics.map((topic, idx) => (
              <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3">
                <FileText className="text-indigo-600 shrink-0" size={18} />
                <span className="text-slate-700 text-sm font-semibold">{topic}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/study"
              className="px-6 py-3 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-teal-600 transition-all inline-flex items-center gap-2"
            >
              Download Concept PDFs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Free Resources */}
      <section className="py-16 container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="bg-indigo-900 rounded-[2.5rem] text-white p-8 md:p-12">
          <h2 className="text-3xl font-black mb-8 text-center">Why We Offer Free Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Independent Learning", text: "Some students improve best independently — they need quality material, not another classroom." },
              { title: "Build Trust", text: "Resources build trust — if our free content helps you, you can be confident our teaching is even better." },
              { title: "Syllabus Access", text: "Physics education in Singapore deserves to be more accessible than it currently is." }
            ].map((reason, i) => (
              <div key={i} className="space-y-2">
                <h3 className="font-bold text-teal-400 text-lg">{reason.title}</h3>
                <p className="text-slate-200 text-sm leading-relaxed">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrolled Students Exclusive Portal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-slate-900 rounded-[2rem] text-white p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-xl">
                <span className="px-3 py-1 rounded bg-teal-600/25 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider inline-block">
                  Enrolled Students Only
                </span>
                <h2 className="text-3xl font-bold">Currently Enrolled Study Portal</h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Students currently enrolled in our Physics tuition enjoy full access to premium resources including:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Mr. Chew's Master Notes",
                    "Annotated TYS Question Banks",
                    "Step-by-step Model Answers",
                    "24/7 WhatsApp Homework Support"
                  ].map((p, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle className="text-teal-400 w-4 h-4 shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="shrink-0 w-full md:w-auto">
                <Link
                  href="/contact"
                  className="px-6 py-4 rounded-xl bg-teal-600 hover:bg-teal-500 font-bold text-slate-950 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Lock size={16} /> Unlock Full Portal
                </Link>
              </div>
            </div>
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

      {/* CTAs */}
      <section className="py-12 bg-slate-50 text-center">
        <div className="container mx-auto px-6 max-w-xl space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Get in Touch</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/study"
              className="px-6 py-3 rounded-full text-white bg-teal-600 font-bold hover:bg-teal-500 shadow-md flex items-center gap-2 transition-all"
            >
              Access Study Portal <ArrowRight size={16} />
            </Link>
            <Link
              href="/courses"
              className="px-6 py-3 rounded-full text-teal-700 bg-white border border-teal-200 font-bold hover:border-teal-600 transition-all"
            >
              Enrol in a Course
            </Link>
            <Link
              href="https://wa.me/6597277419"
              target="_blank"
              className="px-6 py-3 rounded-full text-slate-700 bg-slate-200 font-bold hover:bg-slate-300 transition-all"
            >
              Contact Mr. Chew
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
