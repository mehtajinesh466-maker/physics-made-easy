"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Brain,
  Calculator,
  Compass,
  BookOpen,
  Eye,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  Award,
  Users,
  Target,
  ArrowRight,
  TrendingUp,
  MessageSquare,
  Shield,
  Layers,
  Home,
  ChevronRight,
  Atom,
  Sparkles
} from "lucide-react";
import { getFAQSchema } from "@/config/seo-config";

// FAQ Data
const faqs = [
  {
    question: "Does MI theory really work for Physics exams?",
    answer: "Yes. The Singapore O-Level and A-Level Physics papers consistently reward students who understand why — not just how. MI-based teaching builds exactly this kind of layered understanding. Our 95% A/B rate at O-Level reflects this."
  },
  {
    question: "How is this different from other tuition centres?",
    answer: "Most centres teach to the exam: past-year papers, formulae, mnemonics. We build the cognitive architecture first, then apply it to the syllabus. Students find that exam technique becomes natural because the underlying thinking is solid."
  },
  {
    question: "Does my child need to be interested in Chess to benefit?",
    answer: "No. Chess training is offered alongside Physics coaching but is not compulsory for Physics students. However, students who join both consistently outperform peers in problem-solving speed."
  },
  {
    question: "Is this methodology suitable for weaker students?",
    answer: "Especially so. The MI approach identifies which cognitive pathway is strongest for each student, and starts there. Students labelled as 'weak' in Physics are often just students who have only been taught through one channel."
  },
  {
    question: "How quickly do students see results?",
    answer: "Most students see measurable improvement within one school term. Transformation case studies — such as the ACSI student who went from failing to UCLA entry — typically reflect 6–12 months of consistent work."
  }
];

const intelligences = [
  {
    name: "Logical-Mathematical",
    desc: "Reasoning, pattern recognition, and structured abstract thinking.",
    color: "text-blue-600 border-blue-100 bg-blue-50"
  },
  {
    name: "Visual-Spatial",
    desc: "Visualising objects and field relationships in three dimensions.",
    color: "text-teal-600 border-teal-100 bg-teal-50"
  },
  {
    name: "Linguistic",
    desc: "Communicating precisely and decoding exam question phrasing.",
    color: "text-indigo-600 border-indigo-100 bg-indigo-50"
  },
  {
    name: "Bodily-Kinaesthetic",
    desc: "Learning through physical experiments, model-building, and movement.",
    color: "text-rose-600 border-rose-100 bg-rose-50"
  },
  {
    name: "Musical",
    desc: "Recognising rhythm, repeating patterns, and logical wave structures.",
    color: "text-purple-600 border-purple-100 bg-purple-50"
  },
  {
    name: "Interpersonal",
    desc: "Understanding others and collaborative scientific reasoning.",
    color: "text-orange-600 border-orange-100 bg-orange-50"
  },
  {
    name: "Intrapersonal",
    desc: "Self-awareness, self-correction, and metacognitive reflection.",
    color: "text-emerald-600 border-emerald-100 bg-emerald-50"
  },
  {
    name: "Naturalistic",
    desc: "Recognising systems and patterns in the natural physical world.",
    color: "text-green-600 border-green-100 bg-green-50"
  }
];

export default function MethodologyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Structured Data
  const schema = getFAQSchema(faqs);

  return (
    <main className="bg-slate-50 min-h-screen font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

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
            <Brain size={14} />
            <span>Multiple Intelligences + Physics + Chess</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight relative"
          >
            Our Teaching <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Methodology</span>
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
            Most physics tuition follows the same formula: memorise the formula, drill past-year papers, repeat.
            We take a path grounded in cognitive science, cross-domain thinking, and over 20 years of proven results.
          </motion.p>

          {/* Breadcrumbs */}
          <nav className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm">
            <Link href="/" className="text-slate-500 hover:text-teal-600 transition-colors flex items-center gap-1.5 text-sm font-semibold">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            
            <ChevronRight className="w-4 h-4 text-slate-300" strokeWidth={2.5} />
            
            <span className="text-slate-900 font-bold text-sm">
              Methodology
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

      {/* Main Philosophy Introduction */}
      <section className="py-16 container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Teach to the Cognitive Profile
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our methodology is built on Howard Gardner's Theory of Multiple Intelligences (MI Theory) — the idea that every student has a unique cognitive profile, and that teaching to only one type of intelligence (typically logical-mathematical) leaves most students behind.
              </p>
              <p className="text-slate-600 leading-relaxed font-semibold text-indigo-600">
                When you teach Physics through multiple cognitive channels, understanding becomes lasting. When you train the same thinking muscles through Chess strategy, those skills carry across every subject and career.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center">
              <div className="relative p-6 bg-indigo-50 rounded-full border border-indigo-100">
                <Brain className="w-20 h-20 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 8 Intelligences Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              What Is Multiple Intelligences Theory?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Proposed in 1983 by Howard Gardner (Harvard), human intelligence is a spectrum of distinct abilities. Traditional tuition leans entirely on logical-mathematical. We engage them all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {intelligences.map((intel, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-md ${intel.color}`}
              >
                <h3 className="font-bold text-slate-900 text-lg mb-2">{intel.name}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{intel.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center max-w-3xl mx-auto">
            <p className="text-slate-700 text-sm italic">
              "Mr. Chew's insight, backed by 20 years of teaching, is that students who struggle in physics are victims of a pedagogical failure, not a student failure."
            </p>
          </div>
        </div>
      </section>

      {/* How MI Applies inside Lessons */}
      <section className="py-16 container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">
            How MI Theory Applies to Physics at Our Centre
          </h2>
          <p className="text-slate-600">
            Here is how MI Theory manifests in a typical Physics lesson with Mr. Chew:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Spatial Learning",
              desc: "Instead of describing Kinematics abstractly, we draw velocity-time graphs as visual stories. The area under a graph is not a formula to memorise — it is a picture you can read.",
              icon: Eye,
              color: "border-teal-100 bg-teal-50 text-teal-700"
            },
            {
              title: "Linguistic Deconstruction",
              desc: "Singapore Physics exam questions are precisely worded. We teach students to read questions the way a lawyer reads a contract: every word is intentional, every qualifier matters.",
              icon: BookOpen,
              color: "border-indigo-100 bg-indigo-50 text-indigo-700"
            },
            {
              title: "Logical Sequencing",
              desc: "Rather than jumping to the answer, we build reasoning chains. A student who can articulate why a circuit behaves a certain way will never blank on a variant question they have not seen before.",
              icon: Calculator,
              color: "border-blue-100 bg-blue-50 text-blue-700"
            },
            {
              title: "Metacognitive Reflection",
              desc: "After every problem set, students ask: 'What went wrong in your first approach? What would you do differently?' Tracing error patterns builds self-correction skills.",
              icon: Compass,
              color: "border-emerald-100 bg-emerald-50 text-emerald-700"
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className={`p-3 rounded-xl h-fit ${item.color}`}>
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Chess Connection */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-teal-400 font-bold uppercase tracking-wider text-xs block mb-2">Cognitive Training Tool</span>
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                The Chess Connection: <br />
                Why We Teach Physics & Chess Together
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Most parents are surprised to learn that Mr. Chew is also a FIDE-certified International Chess Instructor — the same certification body that governs world-level chess coaching.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                Chess is, at its core, a system for training exactly the cognitive skills that Physics demands:
              </p>
              <ul className="space-y-3">
                {[
                  "Foresight — anticipating consequences several steps ahead (mechanics, circuits)",
                  "Pattern recognition — identifying recurring structures in new exam questions",
                  "Decision-making under constraints — choosing the best move under limited exam time",
                  "Resilience & self-correction — analysing errors without giving up"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle className="text-teal-400 w-5 h-5 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-teal-500/10 rounded-3xl blur-xl" />
              <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-3xl">
                <span className="text-sm font-bold text-teal-400 block mb-2">COGNITIVE IMPACT</span>
                <p className="text-slate-300 leading-relaxed mb-4">
                  At Physics Made Easy, chess is not a hobby. Students who train chess alongside Physics consistently show faster improvement in problem-solving speed and accuracy in their Physics papers.
                </p>
                <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-xs text-slate-400">
                  <span>95% A/B Grade Rate</span>
                  <span>FIDE Certified Instructor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Mr. Chew Difference */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              The Mr. Chew Difference: Credentials That Matter
            </h2>
            <p className="text-slate-600">
              Our methodology is supported by Mr. Chew Kok Mun's unique combination of credentials.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Ex-MOE & NIE Trained",
                desc: "PSC Teaching Scholar and NIE-trained educator with NUS Minors in Math and English Linguistics for precise communication.",
                icon: Award
              },
              {
                title: "International Chess Coach",
                desc: "FIDE International Chess Instructor certificate with competitive experience at national schools level.",
                icon: Compass
              },
              {
                title: "20+ Years Track Record",
                desc: "Over 1000+ students mentored. Audited 2001–2025 results: 95% O-Level A1/A2, 95% IB Grade 7, 80% A-Level H2 A/B.",
                icon: Users
              }
            ].map((card, i) => (
              <div key={i} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
                  <card.icon size={24} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits Most */}
      <section className="py-16 container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="bg-indigo-900 rounded-[2.5rem] text-white p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-6 text-center">Who Benefits Most From This Approach</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Students who have tried standard tuition and stalled",
                "International school students (IB, IGCSE) demanding deep conceptual mastery",
                "Students who feel physics is 'not for them' because of single-channel instruction",
                "High-achieving students aiming for Grade 7/A1 who need a metacognitive edge"
              ].map((item, i) => (
                <div key={i} className="flex gap-3 bg-indigo-955 p-4 rounded-xl border border-indigo-800">
                  <CheckCircle className="text-teal-400 shrink-0 mt-0.5" size={18} />
                  <p className="text-slate-200 text-sm">{item}</p>
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

      {/* Bottom CTA Options */}
      <section className="py-12 bg-slate-50 text-center">
        <div className="container mx-auto px-6 max-w-xl space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Explore Further</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full text-white bg-teal-600 font-bold hover:bg-teal-500 shadow-md flex items-center gap-2 transition-all"
            >
              Book a Free Trial Lesson <ArrowRight size={16} />
            </Link>
            <Link
              href="/courses"
              className="px-6 py-3 rounded-full text-teal-700 bg-white border border-teal-200 font-bold hover:border-teal-600 transition-all"
            >
              Explore Our Courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
