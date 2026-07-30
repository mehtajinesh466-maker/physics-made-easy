"use client";

import React from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  Sparkles, 
  Users, 
  ArrowRight, 
  MessageCircle,
  Calculator,
  Target,
  Brain,
  FileCheck,
  Globe,
  Lock,
  ShieldCheck
} from "lucide-react";

export default function AEISMathsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "AEIS Mathematics Preparation Programme",
    "description": "Structured AEIS Mathematics Preparation Programme designed specifically for international students seeking admission to Singapore primary and secondary schools.",
    "provider": {
      "@type": "Organization",
      "name": "Physics Made Easy",
      "sameAs": "https://www.makephysicseasy.com"
    }
  };

  return (
    <main className="bg-slate-50 min-h-screen font-sans selection:bg-teal-100 selection:text-teal-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 text-white overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        {/* Background Gradients & Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-900/60 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} className="text-teal-400" />
                <span>New International Offering</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
                AEIS Mathematics <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-indigo-300">
                  Preparation Programme
                </span>
              </h1>

              <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Preparing to enter a Singapore government school through the AEIS examination? Physics Made Easy now offers a structured AEIS Mathematics Preparation Programme designed specifically for international students seeking admission to local primary and secondary schools.
              </p>

              {/* Online Global Availability & Payment Reassurance Badge */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-300 bg-teal-950/80 px-4 py-2 rounded-full border border-teal-800">
                  <Globe size={14} />
                  <span>Online Lessons for Malaysia, Indonesia, HK & Global Students</span>
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700">
                  <Lock size={14} className="text-emerald-400" />
                  <span>256-Bit SSL Encrypted Global Payments</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link href="/contact?subject=AEIS+Maths+Enrolment" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black rounded-xl text-base shadow-lg shadow-teal-500/25 transition-all flex items-center justify-center gap-2">
                    SIGN UP NOW
                    <ArrowRight size={18} />
                  </button>
                </Link>
                <Link href="https://wa.me/6597277419?text=Hi!%20I'd%20like%20to%20book%20a%20free%20consultation%20for%20AEIS%20Mathematics%20Preparation." target="_blank" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-base border border-slate-700 transition-all flex items-center justify-center gap-2">
                    <MessageCircle size={18} className="text-teal-400" />
                    BOOK FREE CONSULTATION
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Student Image Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-slate-800/80 shadow-2xl bg-slate-800">
                <img 
                  src="/student.webp" 
                  alt="Student preparing for AEIS Mathematics Examination in Singapore" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-500/90 backdrop-blur-md rounded-full text-[11px] font-bold uppercase tracking-wider text-slate-950">
                    <ShieldCheck size={12} /> Singapore Syllabus Aligned
                  </div>
                  <p className="text-xl font-bold">Structured AEIS Maths</p>
                  <p className="text-xs text-slate-300">P2 to S3 Level Admission Readiness</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- WHAT YOU'LL LEARN (3-COLUMN GRID WITH ICONS) --- */}
      <section className="py-20 container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            What You&apos;ll Learn
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            Master the exact mathematical competencies tested in the Singapore Ministry of Education AEIS examination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
                <Calculator size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Concepts & Strategies
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-teal-500 shrink-0 mt-0.5" />
                  <span>Singapore Mathematics concepts aligned strictly with the latest AEIS syllabus framework.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-teal-500 shrink-0 mt-0.5" />
                  <span>Critical problem-solving techniques and time-management exam strategies.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Intensive Practice
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-indigo-500 shrink-0 mt-0.5" />
                  <span>Intensive practice with authentic AEIS-style questions and timed mock test papers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-indigo-500 shrink-0 mt-0.5" />
                  <span>Step-by-step explanations to build exam confidence and mathematical accuracy.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                <FileCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Assessments & Feedback
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" />
                  <span>Regular progress assessments and mock evaluations with detailed individual diagnostic reports.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" />
                  <span>Personalised guidance to eliminate weak spots and target high-yield exam topics.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* --- SIDE-BY-SIDE BULLET LISTS: SUITABLE FOR & WHY LEARN WITH US --- */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left Column: Suitable For */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-200 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                  Suitable For
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  "Primary and Secondary AEIS candidates (P2–S3 levels)",
                  "International students planning to study in Singapore government schools",
                  "Students who need to strengthen their Singapore Mathematics foundation"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm font-semibold text-slate-700 text-base">
                    <CheckCircle2 size={20} className="text-teal-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Why Learn With Us? */}
            <div className="bg-slate-900 text-white p-8 md:p-10 rounded-[2.5rem] shadow-xl space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-teal-500 text-slate-950 flex items-center justify-center font-bold">
                  <Brain size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white">
                  Why Learn With Us?
                </h3>
              </div>

              <ul className="space-y-4 relative z-10">
                {[
                  "Lessons based strictly on the Singapore Mathematics curriculum framework",
                  "Small-group and one-to-one online classes for maximum individual attention",
                  "Clear, structured teaching approach that simplifies complex word problems",
                  "Comprehensive notes and curated AEIS practice materials",
                  "Individual support tailored to address each student's unique learning needs"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-800/90 p-4 rounded-xl border border-slate-700 text-slate-200 text-base font-medium">
                    <CheckCircle2 size={20} className="text-teal-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA BOX SECTION --- */}
      <section className="py-20 container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 rounded-[2.5rem] overflow-hidden p-8 md:p-14 shadow-2xl border border-slate-800 text-white text-center space-y-8">
          
          {/* Urgency Trust Signal */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={14} className="text-amber-400" />
            <span>Limited slots available for small-group sessions</span>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              Start Your AEIS Math Journey Today
            </h2>
            <p className="text-slate-300 text-base md:text-lg font-medium">
              We&apos;ll assess your child&apos;s current mathematical proficiency and recommend the most suitable preparation pathway for AEIS success.
            </p>
          </div>

          {/* Split CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto pt-2">
            <Link href="/contact?subject=AEIS+Maths+Enrolment" className="w-full sm:w-auto flex-1">
              <button className="w-full py-4 px-6 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black rounded-xl text-base shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2">
                SIGN UP NOW
                <ArrowRight size={18} />
              </button>
            </Link>

            <Link href="https://wa.me/6597277419?text=Hi!%20I'd%20like%20to%20book%20a%20free%20consultation%20for%20AEIS%20Mathematics%20Preparation." target="_blank" className="w-full sm:w-auto flex-1">
              <button className="w-full py-4 px-6 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-base border border-slate-700 transition-all flex items-center justify-center gap-2">
                BOOK FREE CONSULTATION
              </button>
            </Link>
          </div>

          {/* International Payment Security Reassurance */}
          <div className="pt-6 border-t border-slate-800/80 max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 font-semibold text-emerald-400">
              <Lock size={14} />
              <span>International Payment Safety Guarantee</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Secure Checkout via Stripe, PayPal & Wise (256-bit SSL)</span>
          </div>

        </div>
      </section>

    </main>
  );
}
