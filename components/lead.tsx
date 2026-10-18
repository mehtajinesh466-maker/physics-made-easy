"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Optimization for SEO/Performance
import { 
  ArrowRight, 
  Award, 
  CheckCircle2, 
  MessageSquare, 
  Globe,
  Calculator,
  ChevronRight,
  ShieldCheck,
  Star
} from "lucide-react";

export default function LeadInstructorSection() {
  
  // JSON-LD for SEO: Directs search engines to treat this as a verified Person profile
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mr. Chew Kok Mun",
    "jobTitle": "Lead Physics Instructor & NTU Undergraduate Physics Faculty",
    "description": "Ex-MOE PSC Scholar, currently teaching first-year undergraduate Physics at Nanyang Technological University (NTU) and pursuing an IB-certified Master's in Education from University of the People (USA).",
    "worksFor": [
      {
        "@type": "EducationalOrganization",
        "name": "Physics Made Easy"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "Nanyang Technological University (NTU)"
      }
    ]
  };

  const credentials = [
    "Undergraduate Physics Instructor (NTU)",
    "M.Ed. Candidate (IB-Certified, Geneva)",
    "Ex-MOE & NIE-trained Scholar",
    "NUS Math & English Minors",
    "Edinburgh Business School Cert",
    "FIDE International Chess Instructor"
  ];

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-white font-sans overflow-hidden">
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* Modern Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#f1f5f9_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- LEFT: Image Composition with Floating UI --- */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[420px] lg:w-5/12 group"
          >
            {/* Main Image Wrapper */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[8px] border-white aspect-[4/5] z-10">
              <Image 
                src="/chewsir.jpeg" 
                alt="Mr. Chew Kok Mun - NTU Physics Instructor & Ex-MOE Scholar" 
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-black tracking-tight">Mr. Chew — NTU Physics Instructor, Ex-MOE Scholar</h3>
                <div className="flex items-center gap-2 mt-1">
                  <ShieldCheck size={16} className="text-teal-400" />
                  <p className="text-xs font-bold text-teal-400 uppercase tracking-widest">PSC Scholar & NTU Faculty</p>
                </div>
              </div>
            </div>

            {/* Premium Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-slate-900 text-white p-5 rounded-3xl shadow-2xl z-20 flex items-center gap-4 border border-slate-800"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400">
                <Award size={28} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em] mb-0.5">Experience</p>
                <p className="text-xl font-black leading-none">20+ Years</p>
              </div>
            </motion.div>
            
            {/* Background Accent */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-teal-50 -z-10 rounded-[2.5rem]"></div>
          </motion.div>

          {/* --- RIGHT: Content Orchestration --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-7/12"
          >
            {/* Headline Block */}
            <motion.div variants={itemVariants} className="space-y-4 mb-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest border border-slate-200">
                <Star size={12} className="text-amber-500 fill-amber-500" />
                Trusted by 1000+ Students • Active NTU Faculty
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                A-Level & IB Physics Tuition Singapore <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600">
                  — Rigorous, Strategic, Proven
                </span>
              </h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl">
                Master the <strong>Physics syllabus</strong> and <strong>analytical logic</strong> with an educator currently teaching <strong>first-year undergraduate Physics at NTU</strong> and pursuing an <strong>IB-certified Master&apos;s in Education</strong> (University of the People, USA).
              </p>
            </motion.div>

            {/* The "Edge" Action Cards (2x2 Grid) */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {/* Card 1: NTU University Teaching */}
              <div className="group p-6 rounded-3xl bg-slate-50 border border-transparent hover:border-teal-200 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award size={24} />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">University Rigor (NTU)</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Currently teaching <span className="text-slate-900 font-semibold">1st year undergraduate Physics at NTU</span>, infusing high-level problem-solving standards.
                </p>
              </div>

              {/* Card 2: IB Geneva Pedagogy */}
              <div className="group p-6 rounded-3xl bg-slate-50 border border-transparent hover:border-indigo-200 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe size={24} />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">IB-Certified Pedagogy</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Pursuing <span className="text-slate-900 font-semibold">M.Ed. (UoPeople USA)</span> certified by the <span className="text-slate-900 font-semibold">International Baccalaureate (Geneva)</span>.
                </p>
              </div>

              {/* Card 3: NUS Minors */}
              <div className="group p-6 rounded-3xl bg-slate-50 border border-transparent hover:border-teal-200 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">Communication Edge</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Minors in <span className="text-slate-900 font-semibold">Math & English (NUS)</span> allow for crystal-clear explanation of abstract concepts.
                </p>
              </div>

              {/* Card 4: Edinburgh & Logic */}
              <div className="group p-6 rounded-3xl bg-slate-50 border border-transparent hover:border-indigo-200 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calculator size={24} />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">Applied Strategy</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  <span className="text-slate-900 font-semibold">Edinburgh Master&apos;s</span> and FIDE Chess coaching ensure real-world problem-solving and foresight.
                </p>
              </div>
            </motion.div>

            {/* Professional Tag Cloud */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-12 justify-center lg:justify-start">
              {credentials.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-700 text-xs font-bold border border-slate-100 shadow-sm hover:border-teal-200 transition-colors">
                  <CheckCircle2 size={14} className="text-teal-600" />
                  {item}
                </div>
              ))}
            </motion.div>

            {/* Interaction Footer */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start">
              <Link href="/about" className="w-full sm:w-auto">
                <button className="w-full group bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-teal-600 transition-all shadow-xl shadow-slate-200 active:scale-95">
                  View Full Profile 
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <div className="flex items-center gap-3 text-slate-400 text-xs font-black uppercase tracking-[0.2em]">
                <Globe size={18} className="text-teal-500" />
                <span>Global Teaching Standard</span>
                <ChevronRight size={14} />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
