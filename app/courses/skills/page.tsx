"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Award,
  BookOpen,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Users,
  Compass,
  CheckCircle,
  Briefcase,
  Layers,
  GraduationCap,
  Home,
  ChevronRight,
  Atom,
  Target
} from "lucide-react";
import { getCourseSchema } from "@/config/seo-config";

const phases = [
  {
    title: "Phase 1 — Academic Mastery + Career Vision",
    desc: "Students build the technical foundation: strong O/A-Level or IB Physics results combined with early exposure to target sectors. We use the WEF 2026 Skills Framework and Singapore's national STEM strategy documents to map academic skills to career trajectories."
  },
  {
    title: "Phase 2 — STEM Portfolio Development",
    desc: "University applications increasingly require evidence of intellectual engagement beyond grades. This phase includes: introduction to Computational Physics (Python/MATLAB basics for Physics), guidance on applying to research programmes at A*STAR, and portfolio projects connecting Physics to finance, green energy, or quantum tech."
  },
  {
    title: "Phase 3 — Career Entry Preparation",
    desc: "For graduating students or those in final year: CV and application preparation for internships at A*STAR, Dyson, and Singapore's FinTech hubs, interview prep for technical roles, and industry network introductions through Peter Loh's MNC connections."
  }
];

const landscape = [
  { sector: "Quantum Technology", roles: "Quantum Developer, Cryptography Specialist", pay: "S$131k+ global median" },
  { sector: "Green Energy", roles: "Solar Engineer, Grid Analyst", pay: "S$5k–8k/month" },
  { sector: "Quant/FinTech", roles: "Risk Quant, HFT Developer", pay: "S$120k+ base" },
  { sector: "Space & Aerospace", roles: "Satellite Technology, Avionics", pay: "Senior Lead Engineer" }
];

const faqs = [
  {
    question: "Is this a tuition programme or a career counselling programme?",
    answer: "It is both. The academic component ensures the technical foundation is solid. The mentorship component ensures students know what to do with that foundation. The two reinforce each other."
  },
  {
    question: "Is this only for top students?",
    answer: "No. It is most relevant for students who have a genuine interest in STEM careers and want to understand the direct path from their current studies to those roles — regardless of their current grade level."
  },
  {
    question: "What role does Peter Loh play?",
    answer: "Peter Loh brings real-world industry perspective from 20+ years in global MNCs. He focuses on professional skills, regional leadership thinking, and the intersection of technology with business — complementing Mr. Chew's academic and pedagogical expertise."
  },
  {
    question: "Is this available online?",
    answer: "Yes. The mentorship programme is available fully online and has served students from Singapore and the region."
  }
];

export default function SkillsCoursePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = getCourseSchema({
    title: "STEM Skills Mentorship Singapore — Future-Proofing Your Career",
    description: "STEM career mentorship for Singapore students. Prepare for roles in Quantum Technology, FinTech, Green Energy, and Space with guidance from ex-MOE scholar Mr. Chew and industry mentor Peter Loh.",
    level: "Secondary, JC & University Students",
    url: "/courses/skills",
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
      <section className="relative w-full bg-slate-50 overflow-hidden pt-32 pb-20 lg:pt-10 lg:pb-12 font-sans text-center">
        {/* 1. Scientific Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        {/* 2. Soft Scientific Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[100px] opacity-60 pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-100/40 rounded-full blur-[100px] opacity-70 pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            <Briefcase size={12} className="text-indigo-650" />
            <span>Future-Proofing Your Career</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight relative"
          >
            STEM Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-600">Mentorship</span>
            {/* Decorative Underline */}
            <svg className="absolute w-32 h-3 -bottom-2 left-1/2 -translate-x-1/2 text-indigo-400 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 25 10 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 font-medium"
          >
            Singapore's economy is undergoing the fastest structural shift in a generation. We bridge the gap between what you learn in school and what the world's most competitive employers want.
          </motion.p>

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
              STEM Skills
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

      {/* Program Facilitators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Programme Facilitators</h2>
            <p className="text-slate-600">Cross-domain academic coaching meets industry-wide strategic guidance</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <span className="font-bold text-teal-600 text-xs uppercase tracking-wider block">Academic Director</span>
              <h3 className="text-xl font-bold text-slate-900">Mr. Chew Kok Mun</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ex-MOE scholar, NIE-trained educator with NUS Minors in Math and English Linguistics. Coordinates technical, mathematical, and concept-building elements of the program.
              </p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <span className="font-bold text-indigo-650 text-xs uppercase tracking-wider block">Industry Mentor</span>
              <h3 className="text-xl font-bold text-slate-900">Peter Loh</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Creative strategist and industry disruptor with 20+ years at HP, Motorola, and Shell. Specialises in IoT, Big Data, and Sustainability portfolios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Phases */}
      <section className="py-16 container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Course Structure & Phases</h2>
          <p className="text-slate-600">A step-by-step roadmap from conceptual mastery to professional placement</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((p, idx) => (
            <div key={idx} className="bg-white p-8 border border-slate-100 shadow-sm rounded-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase inline-block">
                  Phase {idx + 1}
                </span>
                <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Salary Landscape Table */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">The STEM Career Landscape in Singapore</h2>
            <p className="text-slate-400 text-sm">Audited starting salaries & high-weightage career sectors (2025–2030)</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-slate-800 text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="p-4 font-bold border border-slate-850">Sector</th>
                  <th className="p-4 font-bold border border-slate-850">Key Roles</th>
                  <th className="p-4 font-bold border border-slate-850">Starting Pay</th>
                </tr>
              </thead>
              <tbody>
                {landscape.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-slate-900" : "bg-slate-950"}>
                    <td className="p-4 border border-slate-800 font-bold text-teal-400">{item.sector}</td>
                    <td className="p-4 border border-slate-800 text-slate-300">{item.roles}</td>
                    <td className="p-4 border border-slate-800 font-semibold">{item.pay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-slate-500 text-center text-xs">
            Data sourced from WEF Future of Jobs 2025 and Singapore Ministry of Manpower workforce reports.
          </div>
        </div>
      </section>

      {/* Who This is For */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-indigo-900 rounded-[2.5rem] text-white p-8 md:p-12 text-center">
            <h2 className="text-3xl font-black mb-8">Who This Programme Is For</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "JC2 and final-year IB students mapping university direction",
                "University students in Physics, Engineering, or Computing",
                "Parents wanting to see the real-world destination of Physics",
                "Students exploring interdisciplinary paths (Physics + CS/Finance)"
              ].map((p, idx) => (
                <div key={idx} className="flex gap-2 items-center bg-indigo-950 p-4 rounded-xl">
                  <CheckCircle className="text-teal-400 w-5 h-5 shrink-0" />
                  <p className="text-slate-200 text-sm">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4 flex items-center justify-center gap-2">
              <HelpCircle className="text-indigo-600" />
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
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:text-indigo-700 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${openFaq === i ? "rotate-180 text-indigo-650" : ""}`}
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
          <h2 className="text-3xl font-black text-slate-900">Enquire About STEM Mentorship</h2>
          <p className="text-slate-600">
            Submit an enquiry today to arrange a strategy consultation session.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 font-bold rounded-xl text-white shadow-md transition-all flex items-center gap-2"
            >
              Enquire About STEM Mentorship <ArrowRight size={16} />
            </Link>
            <Link
              href="/courses"
              className="px-8 py-4 bg-white border border-slate-200 font-bold rounded-xl text-slate-700 hover:border-indigo-650 hover:text-indigo-600 transition-all"
            >
              Explore Other Courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
