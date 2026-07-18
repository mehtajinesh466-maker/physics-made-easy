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
  Award,
  Layers,
  Home,
  ChevronRight,
  Atom,
  Target
} from "lucide-react";
import { getCourseSchema } from "@/config/seo-config";

const syllabus = [
  { topic: "Measurement and Kinematics", desc: "Extends well beyond O-Level — projectile motion, relative velocity, and vector decomposition tested heavily in Paper 1." },
  { topic: "Dynamics and Circular Motion", desc: "Centripetal force, banked tracks, conical pendulums. One of the most tested topics in H2 Paper 2 structured questions." },
  { topic: "Oscillations and Waves", desc: "SHM, resonance, damping, superposition, diffraction, interference. Requires mathematical treatment of phase and path difference." },
  { topic: "Thermal Physics and Ideal Gases", desc: "Kinetic theory, first law of thermodynamics, heat engines. Concept-heavy and frequently misunderstood." },
  { topic: "Gravitational, Electric, and Magnetic Fields", desc: "Mr. Chew teaches the unifying logic of field theory — how gravity, electric fields, and magnetic fields share mathematical structures." },
  { topic: "Electromagnetic Induction", desc: "Faraday's law, Lenz's law, AC generators and transformers. Appears in virtually every A-Level paper and is disproportionately important." },
  { topic: "Quantum Physics", desc: "Photoelectric effect, wave-particle duality, atomic spectra, nuclear physics. Conceptual understanding matters more than simple calculation." },
  { topic: "Modern Physics (H3 supplement)", desc: "For students aiming for H3 Physics, or those applying to top global universities requiring a stronger theoretical background." }
];

const faqs = [
  {
    question: "Is this suitable for both JC1 and JC2 students?",
    answer: "Yes. JC1 students benefit most from early foundation-building. JC2 students, especially those preparing for Prelims and A-Levels, benefit from intensive past-paper strategy and topic consolidation."
  },
  {
    question: "Do you also teach H1 Physics?",
    answer: "Yes. H1 Physics students are accommodated within the programme. The H1 syllabus is a subset of H2, and H1 students attend the same core sessions with adjusted problem sets."
  },
  {
    question: "What if my child is already attending school lectures but still not improving?",
    answer: "This is the most common situation we encounter. School lectures are designed for a class of 30 students with one intelligence style assumed. Our small-group MI-based approach gives each student the cognitive angle they need to actually internalise the material."
  }
];

export default function ALevelCoursePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = getCourseSchema({
    title: "H2 Physics Tuition Singapore — A-Level JC Physics Specialist",
    description: "H2 Physics tuition Singapore for JC1 and JC2 students. Led by ex-MOE PSC Scholar Mr. Chew. Covers Quantum, EM Induction, Field Theory. 80% A/B track record.",
    level: "GCE A-Level (H1 & H2)",
    url: "/courses/a-level",
    price: "110",
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
            <Sparkles size={12} className="fill-cyan-500" />
            <span>80% Grade A or B Track Record</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight relative"
          >
            H2 Physics <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">Tuition</span>
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
            The H2 Physics A-Level is the gateway to STEM degrees in Singapore. It requires students to move fluidly between mathematical rigour and conceptual understanding.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-505 font-bold mb-8">
            <span className="flex items-center gap-1.5"><MapPin size={16} className="text-cyan-650" /> Toa Payoh / Online</span>
            <span className="flex items-center gap-1.5"><Clock size={16} className="text-cyan-655" /> SG$110 / 2-Hour Session</span>
            <span className="flex items-center gap-1.5"><Laptop size={16} className="text-cyan-655" /> JC1 & JC2 Focus</span>
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
              A-Level H2
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
            <p className="text-2xl font-black text-slate-900">SG$110 / session</p>
            <p className="text-slate-500 text-xs leading-relaxed">Advanced small group 2-hour coaching sessions.</p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase">Academic Level</span>
            <p className="text-base font-bold text-slate-900">JC1 & JC2 (H1 / H2)</p>
            <p className="text-slate-500 text-xs leading-relaxed">Tailored syllabus support mapped to local JC lecture schedules.</p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase">Track Record</span>
            <p className="text-base font-bold text-slate-900">80% Distinction rate</p>
            <p className="text-slate-500 text-xs leading-relaxed">Students regularly score A or B in GCE A-Levels.</p>
          </div>
        </div>
      </section>

      {/* What We Cover - Syllabus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              What We Cover — H2 Physics (9749) A-Level
            </h2>
            <p className="text-slate-600">Specialist topics taught from first principles rather than lists to memorise</p>
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

      {/* Why H2 Needs a Different Approach */}
      <section className="py-16 bg-indigo-950 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center space-y-6">
          <span className="text-cyan-400 font-bold uppercase tracking-wider text-xs block">Key Distinction</span>
          <h2 className="text-3xl font-black">Why H2 Physics Students Need a Different Approach</h2>
          <p className="text-slate-350 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            The H2 Physics paper is not harder because the topics are more complex. It is harder because the questions are more precise. A student who understands a concept at 80% will lose marks to a student who understands it at 95% — because the exam is designed to distinguish between them.
          </p>
          <p className="text-slate-350 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-semibold">
            Mr. Chew's teaching pushes every student toward the 95% level of understanding. Not to memorise more, but to understand more deeply — so that even questions they have never seen before are solvable from first principles.
          </p>
          <div className="pt-4">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 font-bold text-cyan-400 hover:text-cyan-300"
            >
              See Our Verified Testimonials <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4 flex items-center justify-center gap-2">
              <HelpCircle className="text-cyan-600" />
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

      {/* CTA Section */}
      <section className="py-16 bg-slate-50 text-center">
        <div className="container mx-auto px-6 max-w-xl space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Experience H2 Physics Mastery</h2>
          <p className="text-slate-600">
            Book a free trial lesson to see how we build the cognitive architecture to score distinctions in A-levels.
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
