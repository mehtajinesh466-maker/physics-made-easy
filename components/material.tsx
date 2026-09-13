"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  PlayCircle,     
  FileText,       
  Brain,          
  Youtube,        
  ArrowRight,
  Zap,
  Globe,
  Video,
  ExternalLink
} from "lucide-react";

const TikTokIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.47V13a8.28 8.28 0 0 0 5.73 2.25V11.8a4.84 4.84 0 0 1-3.77-1.34 4.8 4.8 0 0 1-1.23-3.77V6.69z"/>
  </svg>
);

export default function ResourcesSection() {
  
  // SEO: CreativeWork Schema for Free Educational Resources
  const resourcesSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWorkSeries",
    "name": "Physics & Strategy Free Resource Library",
    "description": "Access free high-quality physics video lectures and strategic conceptual PDFs for O/A Level & IB mastery.",
    "educationalLevel": ["Secondary", "Junior College", "IB DP"],
    "interactivityType": "active",
    "learningResourceType": ["Video Lecture", "Concept Map", "Practice Guide"]
  };

  const resourceLibrary = [
    {
      id: "video-mastery",
      title: "Video Masterclasses",
      description: "High-definition walkthroughs of complex Kinematics & Quantum laws. Visualize the invisible.",
      icon: PlayCircle,
      type: "Video Series",
      cta: "Watch Now",
      color: "text-red-600",
      bg: "bg-red-50",
      accent: "border-red-100"
    },
    {
      id: "concept-pdfs",
      title: "Strategic Concept PDFs",
      description: "Dense, one-page logic maps for O/A Level & IB revision. Cut the fluff, keep the marks.",
      icon: FileText,
      type: "Knowledge Maps",
      cta: "View PDF",
      color: "text-teal-600",
      bg: "bg-teal-50",
      accent: "border-teal-100"
    },
    {
      id: "exam-analysis",
      title: "Exam Trend Analysis",
      description: "Video breakdowns of common exam 'trap' questions and high-weightage topics.",
      icon: Video,
      type: "Strategy Guide",
      cta: "Access Library",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      accent: "border-indigo-100"
    },
    {
      id: "chess-logic",
      title: "Cognitive Tutorials",
      description: "FIDE-standard chess strategy videos to sharpen logical foresight and exam focus.",
      icon: Brain,
      type: "Tutorials",
      cta: "Study Strategy",
      color: "text-amber-600",
      bg: "bg-amber-50",
      accent: "border-amber-100"
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative py-16 lg:py-24 bg-white font-sans overflow-hidden" id="resources">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesSchema) }} />
      
      {/* Background Micro-Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-50/50 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- Responsive Header --- */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-16">
          <div className="max-w-2xl text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-slate-900/10"
            >
              <Zap size={14} className="text-teal-400 fill-teal-400" /> Community Open Access
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Free Physics Resources for <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600">Singapore O-Level & A-Level Students</span>
            </h2>
            <p className="mt-6 text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
              We believe in democratizing high-level STEM education. Access our curated library of <strong>video lectures</strong> and <strong>conceptual deconstructions</strong> at no cost.
            </p>
          </div>

          <div className="hidden xl:flex flex-col items-center gap-4 text-center">
             <div className="p-4 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-4">
                <Youtube className="text-red-600" size={32} />
                <div className="text-left">
                   <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Global Reach</p>
                   <p className="text-sm font-bold text-slate-900">10k+ Video Views</p>
                </div>
             </div>
             <p className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
               <Globe size={14} /> Knowledge without borders
             </p>
          </div>
        </div>

        {/* --- Featured TikTok Video Card --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 md:p-8 rounded-[2.5rem] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-pink-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-cyan-500/20">
              <TikTokIcon className="w-8 h-8" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-pink-500/10 text-pink-400 text-[10px] font-black uppercase tracking-widest border border-pink-500/20 mb-2">
                <PlayCircle size={12} /> Featured Video Resource
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white">
                Teaching & Physics Insights on TikTok
              </h3>
              <p className="text-slate-400 text-sm md:text-base font-medium mt-1 max-w-xl">
                &ldquo;Teaching is one of the few careers where your values become your daily actions. You don&rsquo;t wait years to matter—you matter immediately.&rdquo;
              </p>
            </div>
          </div>
          <a
            href="https://vt.tiktok.com/ZSqHPNHgN/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white font-black text-xs uppercase tracking-widest flex items-center gap-2 shrink-0 transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            <span>Watch on TikTok</span>
            <ExternalLink size={16} />
          </a>
        </motion.div>

        {/* --- High-Density Content Grid --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {resourceLibrary.map((res) => (
            <motion.article
              key={res.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`group relative bg-white border ${res.accent} rounded-[2.5rem] p-8 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 flex flex-col h-full`}
            >
              {/* Category & Icon */}
              <div className="flex justify-between items-start mb-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:rotate-6 ${res.bg} ${res.color}`}>
                  <res.icon size={28} strokeWidth={2} />
                </div>
                <span className="text-[10px] font-black bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase tracking-widest">
                  {res.type}
                </span>
              </div>

              {/* Text Body */}
              <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                {res.title}
              </h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-10 flex-grow">
                {res.description}
              </p>

              {/* Action Area - Mobile Friendly */}
              <div className="pt-6 border-t border-slate-50 mt-auto flex items-center justify-between">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${res.color}`}>
                  {res.cta}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${res.bg} ${res.color} group-hover:bg-slate-900 group-hover:text-white`}>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              
              {/* Invisible Link for SEO & Accessibility */}
              <Link href={`/study`} className="absolute inset-0 focus:outline-none" aria-label={`Go to ${res.title}`}>
                <span className="sr-only">Access {res.title}</span>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* --- Footer Context --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center space-y-6"
        >
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">
             New Strategic Content Added Weekly
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-slate-900/20 transition-all hover:bg-teal-600 hover:scale-105 active:scale-95">
                Enter Free Portal
             </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}