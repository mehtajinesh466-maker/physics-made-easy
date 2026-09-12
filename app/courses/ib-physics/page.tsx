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
  ShieldAlert,
  Home,
  ChevronRight,
  Atom,
  Target
} from "lucide-react";
import { getCourseSchema } from "@/config/seo-config";

const coreTopics = [
  "Measurements and Uncertainties (the IA foundation)",
  "Mechanics and Kinematics",
  "Thermal Physics",
  "Waves and Optics",
  "Electricity and Magnetism",
  "Circular Motion and Gravitation",
  "Atomic, Nuclear, and Particle Physics",
  "Energy Production"
];

const ahlTopics = [
  "Wave Phenomena (double slit, diffraction ratings, resolution)",
  "Fields (gravitational, electric, magnetic)",
  "Electromagnetic Induction",
  "Quantum and Nuclear Physics (extended treatment)"
];

const faqs = [
  {
    question: "Does Mr. Chew teach both HL and SL IB Physics?",
    answer: "Yes. HL and SL students are taught together for core topics, with HL students receiving additional coaching on AHL material and more rigorous problem-solving challenges."
  },
  {
    question: "My school is not in Singapore. Can we do online lessons?",
    answer: "Yes. Mr. Chew offers synchronous online sessions. We have students from Malaysia, Indonesia, and other countries who access IB Physics tuition through online lessons."
  },
  {
    question: "Can you help with the Physics Extended Essay?",
    answer: "Yes. Mr. Chew provides EE mentorship including research question refinement, source evaluation, structure, and physics-specific analysis guidance."
  },
  {
    question: "When should IB students start tuition?",
    answer: "Year 1 of the IB (Grade 11) is ideal for building the conceptual foundation. Year 2 students preparing for final exams benefit most from intensive Paper 2/3 strategy and past-paper drilling."
  }
];

export default function IBPhysicsCoursePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = getCourseSchema({
    title: "IB Physics Tutor Singapore — HL & SL Specialist",
    description: "IB Physics tuition in Singapore by ex-MOE scholar Mr. Chew. 95% Grade 7 HL track record. IA and Extended Essay mentorship. Small groups and 1-on-1.",
    level: "IB Diploma Programme (HL & SL)",
    url: "/courses/ib-physics",
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
            <span>95% Grade 7 HL Track Record</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight relative"
          >
            IB Physics <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">Tuition</span>
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
            The IB Physics program is highly demanding. IB HL Physics in particular requires students to think like physicists — performing calculations while constructing scientific arguments with rigor.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-bold mb-8">
            <span className="flex items-center gap-1.5"><MapPin size={16} className="text-cyan-650" /> Toa Payoh / Online</span>
            <span className="flex items-center gap-1.5"><Clock size={16} className="text-cyan-655" /> 2-Hour Sessions</span>
            <span className="flex items-center gap-1.5"><Laptop size={16} className="text-cyan-655" /> IA & EE Mentorship Included</span>
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
              IB Physics
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
            <span className="text-xs font-bold text-slate-400 uppercase">Class Mode</span>
            <p className="text-base font-bold text-slate-900">Specialist Group / 1-to-1</p>
            <p className="text-slate-500 text-xs leading-relaxed">Custom 1-on-1 tracks available upon request.</p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase">Target Audience</span>
            <p className="text-base font-bold text-slate-900">IB HL & SL Students</p>
            <p className="text-slate-500 text-xs leading-relaxed">Mentorship for local & international school pupils (HCIS, SAS, FIS).</p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase">Portfolio Deliverables</span>
            <p className="text-base font-bold text-slate-900">IA & EE Mentorship</p>
            <p className="text-slate-500 text-xs leading-relaxed">Research design, error analysis, uncertainty propagation.</p>
          </div>
        </div>
      </section>

      {/* Why IB Physics is Different */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">
              Why IB Physics Is Different — And Why That Matters for Tuition
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Most physics tuition centres are built around the local MOE syllabus. Mr. Chew's depth in IB Physics comes from years of teaching to this specific structure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Command Terms Focus", desc: "IB examiners use terms like describe, explain, evaluate, and deduce differently. We teach students exactly how to decode them." },
              { title: "Internal Assessment (IA)", desc: "Guided formulation of research questions, experimental design, uncertainty propagation, and evaluation writing." },
              { title: "Paper 3 Specialisation", desc: "Specialist coaching for Advanced Higher Level options and mathematical data analysis requirements." }
            ].map((p, idx) => (
              <div key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <CheckCircle className="text-cyan-600 mb-4 w-6 h-6" />
                <h3 className="font-bold text-slate-950 text-base mb-2">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus Breakdown */}
      <section className="py-16 container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-slate-950 flex items-center gap-2">
              <BookOpen className="text-cyan-600" />
              Core Topics (HL & SL)
            </h2>
            <ul className="space-y-3">
              {coreTopics.map((topic, i) => (
                <li key={i} className="flex gap-2 items-start text-slate-600 text-sm">
                  <CheckCircle className="text-teal-500 w-4 h-4 shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-black text-slate-950 flex items-center gap-2">
              <Layers className="text-cyan-600" />
              Additional Higher Level (AHL)
            </h2>
            <ul className="space-y-3">
              {ahlTopics.map((topic, i) => (
                <li key={i} className="flex gap-2 items-start text-slate-600 text-sm">
                  <CheckCircle className="text-teal-500 w-4 h-4 shrink-0 mt-0.5" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Schools We Serve Section */}
      <section className="py-16 bg-slate-100 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full">
              Targeted School Support
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-3 mb-3">
              Schools We Serve
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base font-medium">
              We provide tailored IB Physics tuition matching the internal assessment pacing and practical exam requirements of leading IB World Schools across Singapore:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Hwa Chong International School", code: "HCIS" },
              { name: "Singapore American School", code: "SAS" },
              { name: "Furen International School", code: "FIS" },
              { name: "United World College SEA", code: "UWC" },
              { name: "Anglo-Chinese School (Independent)", code: "ACSI" },
              { name: "St. Joseph's Institution", code: "SJI" },
              { name: "SOTA & Overseas IB Schools", code: "IB DP" },
              { name: "Global Online IB Students", code: "Worldwide" }
            ].map((school, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between hover:border-cyan-400 transition-colors">
                <span className="text-xs font-black text-cyan-600 uppercase tracking-wider">{school.code}</span>
                <p className="font-bold text-slate-800 text-sm mt-1">{school.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated IA & EE Mentorship Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Specialised Portfolio Guidance: IA & EE Mentorship
            </h2>
            <p className="text-slate-600 font-medium">
              The Physics Internal Assessment (IA) and Extended Essay (EE) account for critical portions of your IB diploma score. We guide students through a structured, examiner-compliant process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* IB Internal Assessment (IA) Mentorship */}
            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
                20% of IB Diploma Grade
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                IB Internal Assessment (IA) Mentorship
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our IA mentorship framework takes students from initial brainstorm to final submission, ensuring full alignment with IB criterion markschemes.
              </p>
              <ul className="space-y-3 text-slate-700 text-sm font-semibold">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-cyan-600 w-5 h-5 shrink-0 mt-0.5" />
                  <span><strong>Research Question Formulation:</strong> Crafting focused, original physics questions that allow for deep analytical evaluation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-cyan-600 w-5 h-5 shrink-0 mt-0.5" />
                  <span><strong>Experimental Design & Data Collection:</strong> Designing controlled variables, apparatus setup, and high-precision data gathering.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-cyan-600 w-5 h-5 shrink-0 mt-0.5" />
                  <span><strong>Uncertainty Propagation & Graphing:</strong> Error analysis, percentage uncertainties, max/min slope gradient calculations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-cyan-600 w-5 h-5 shrink-0 mt-0.5" />
                  <span><strong>Evaluation & Conclusion Writing:</strong> Addressing systematic errors, methodological limitations, and realistic physics extensions.</span>
                </li>
              </ul>
            </div>

            {/* Extended Essay (EE) Support */}
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-700">
                Core Diploma Requirement
              </div>
              <h3 className="text-2xl font-black text-white">
                Extended Essay (EE) Support in Physics
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Writing a 4,000-word Physics Extended Essay requires rigorous theoretical framing and academic methodology.
              </p>
              <ul className="space-y-3 text-slate-200 text-sm font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-teal-400 w-5 h-5 shrink-0 mt-0.5" />
                  <span><strong>Topic Selection & Feasibility Analysis:</strong> Choosing viable physics research areas with accessible data models.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-teal-400 w-5 h-5 shrink-0 mt-0.5" />
                  <span><strong>Literature Review & Secondary Data Modeling:</strong> Academic paper synthesis, simulation modeling, and theoretical derivation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-teal-400 w-5 h-5 shrink-0 mt-0.5" />
                  <span><strong>Structural & Academic Rigor:</strong> Organizing complex physics derivations, vector diagrams, and formal citations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="text-teal-400 w-5 h-5 shrink-0 mt-0.5" />
                  <span><strong>Viva Voce & Defense Preparation:</strong> Reflection sessions to help students confidently defend their EE research methodology.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* The MI Advantage in IB Physics */}
      <section className="py-16 bg-indigo-950 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center space-y-6">
          <span className="text-cyan-400 font-bold uppercase tracking-wider text-xs block">Methodology Fit</span>
          <h2 className="text-3xl font-black">The MI Advantage in IB Physics</h2>
          <p className="text-slate-350 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            IB Physics is where the Multiple Intelligences approach shows its clearest advantage. The IB assessment philosophy already demands multi-dimensional thinking — a student who can only follow algorithmic steps will cap out at Grade 5 or 6. Grade 7 requires genuine conceptual ownership.
          </p>
          <p className="text-slate-350 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-semibold">
            Mr. Chew's MI methodology ensures students build that ownership from the first lesson, not as a last-minute revision strategy.
          </p>
          <div className="pt-4">
            <Link
              href="/methodology"
              className="inline-flex items-center gap-2 font-bold text-cyan-400 hover:text-cyan-300"
            >
              Explore Our Teaching Methodology <ArrowRight size={16} />
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
          <h2 className="text-3xl font-black text-slate-900">Experience IB Physics Mastery</h2>
          <p className="text-slate-600">
            Book a free trial lesson to see how we tackle IB Physics conceptually, helping you achieve a Grade 7.
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
