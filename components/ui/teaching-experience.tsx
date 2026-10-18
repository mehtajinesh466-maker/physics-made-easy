"use client";

import React from "react";
import { 
  GraduationCap, 
  Globe2, 
  Award, 
  BookOpenCheck, 
  Building2, 
  CheckCircle2, 
  Sparkles, 
  Atom, 
  ShieldCheck, 
  Brain,
  ArrowUpRight
} from "lucide-react";

export default function TeachingExperienceSection() {
  const experiences = [
    {
      title: "First-Year Undergraduate Physics Instructor",
      institution: "Nanyang Technological University (NTU)",
      location: "Singapore",
      period: "Currently Teaching",
      status: "Active Higher Education Role",
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      accentBorder: "border-teal-500",
      iconBg: "bg-teal-500/10 text-teal-600",
      icon: <GraduationCap className="w-7 h-7" />,
      description:
        "Currently teaching first-year undergraduate Physics at Nanyang Technological University (NTU) — consistently ranked among the world's top universities for engineering and science. Delivers university-level instruction in fundamental physics, bridging higher education analytical rigor with real-world applications.",
      highlights: [
        "First-Year Undergraduate Physics Curriculum Instruction",
        "Higher education mechanics, electromagnetism & physical laws",
        "Bridges secondary, JC (A-Level H2) & IB foundations into university readiness",
        "Direct insight into university examination standards & problem-solving expectations"
      ],
      linkText: "Nanyang Technological University, Singapore",
      linkUrl: "https://www.ntu.edu.sg"
    },
    {
      title: "Master of Education (M.Ed.) Candidate",
      institution: "University of the People (USA)",
      location: "Headquartered in Pasadena, California, USA",
      period: "Currently Pursuing",
      status: "IB-Certified Global Pedagogy",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      accentBorder: "border-indigo-500",
      iconBg: "bg-indigo-500/10 text-indigo-600",
      icon: <Globe2 className="w-7 h-7" />,
      description:
        "Pursuing an advanced Master of Education (M.Ed.) from the University of the People (USA), formally certified by the International Baccalaureate (IB) — the premier global non-profit educational foundation headquartered in Geneva, Switzerland. This brings cutting-edge international pedagogical research, inquiry-based frameworks, and curriculum mastery directly into our classroom.",
      highlights: [
        "Certified by the International Baccalaureate (IB, Geneva, Switzerland)",
        "Advanced inquiry-based pedagogy and differentiated curriculum design",
        "Specialized alignment with IB Diploma Programme (HL & SL) standards",
        "Integration of international educational best practices with Singapore's syllabus"
      ],
      linkText: "Certified by International Baccalaureate (Geneva)",
      linkUrl: "https://www.ibo.org"
    },
    {
      title: "Ex-MOE PSC Teaching Scholar & NIE-Trained Educator",
      institution: "Ministry of Education (MOE) & National Institute of Education (NIE)",
      location: "Singapore",
      period: "20+ Years in Education",
      status: "Premier Singapore Credentials",
      badgeColor: "bg-slate-100 text-slate-800 border-slate-300",
      accentBorder: "border-slate-800",
      iconBg: "bg-slate-900/10 text-slate-900",
      icon: <ShieldCheck className="w-7 h-7" />,
      description:
        "Awarded the prestigious Public Service Commission (PSC) Teaching Scholarship by the Singapore Ministry of Education. Professionally trained at the National Institute of Education (NIE) with over two decades of demonstrated mastery across O-Level, A-Level H2, and IP Physics syllabi.",
      highlights: [
        "Public Service Commission (PSC) Teaching Scholar",
        "NIE-trained certified educator for Singapore national curriculum",
        "Over 20+ years of proven track record mentoring 1,000+ students",
        "Audited 95% A/B grades in O-Levels & 95% Grade 7 in IB HL Physics"
      ],
      linkText: "Singapore MOE & NIE Heritage",
      linkUrl: null
    },
    {
      title: "Multidisciplinary Foundations & Strategic Pedagogy",
      institution: "NUS • Edinburgh Business School • FIDE",
      location: "Singapore & United Kingdom",
      period: "Continuous Professional Excellence",
      status: "Strategic & Analytical Pedagogy",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      accentBorder: "border-amber-500",
      iconBg: "bg-amber-500/10 text-amber-600",
      icon: <Brain className="w-7 h-7" />,
      description:
        "Unique cross-disciplinary profile combining NUS Minors in Mathematics and English for exceptional clarity in communicating abstract concepts, an Edinburgh Business School Master's degree for real-world application, and official FIDE International Chess Instructor certification.",
      highlights: [
        "NUS Minors in Mathematics & English for precise, clear conceptual delivery",
        "Edinburgh Business School / Heriot-Watt University Master's Degree",
        "FIDE International Chess Instructor — Developing cognitive stamina & foresight",
        "Pioneer of Multiple Intelligences (MI) Theory tailored to each student's profile"
      ],
      linkText: "Cross-Disciplinary Pedagogy",
      linkUrl: null
    }
  ];

  return (
    <section id="experience" className="relative py-20 lg:py-28 bg-white font-sans overflow-hidden">
      {/* Decorative Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Academic Credentials & Teaching Experience</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            Higher Education Rigor, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600">
              Global IB Pedagogical Excellence.
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Our lead instructor, <strong className="text-slate-900">Mr. Chew Kok Mun</strong>, combines active university teaching at one of Asia&apos;s top technological institutions with internationally certified graduate pedagogy from Geneva-accredited frameworks.
          </p>
        </div>

        {/* Current Active Roles Feature Spotlight */}
        <div className="mb-12 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-slate-800 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-400">
                  <Atom className="w-6 h-6 animate-[spin_12s_linear_infinite]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-400">Current Academic Appointments</span>
                  <h3 className="text-xl md:text-2xl font-black text-white">Active Teaching & Ongoing Graduate Research</h3>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/20 text-teal-300 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                Active in 2026 Academic Year
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Highlight 1: NTU */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-teal-400/40 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-400/20 text-teal-300 border border-teal-400/30">
                    University Faculty
                  </span>
                  <span className="text-xs text-slate-400">Undergraduate Level</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Teaching 1st Year Undergraduate Physics at NTU
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Currently teaching first-year undergraduate Physics at <strong className="text-white">Nanyang Technological University (NTU)</strong>, Singapore. NTU is globally renowned for STEM excellence, ranking among the world's best technological institutions.
                </p>
                <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Deepens student preparation for university engineering & STEM majors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Teaches advanced calculus-based mechanics and electromagnetic concepts</span>
                  </div>
                </div>
              </div>

              {/* Highlight 2: Master's in Education (IB Certified) */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-indigo-400/40 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-400/20 text-indigo-300 border border-indigo-400/30">
                    IB-Certified M.Ed.
                  </span>
                  <span className="text-xs text-slate-400">Geneva, Switzerland</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Pursuing M.Ed. from People&apos;s University (USA)
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Pursuing a Master&apos;s in Education (M.Ed.) from the <strong className="text-white">University of the People (USA)</strong>, formally certified by the <strong className="text-white">International Baccalaureate (IB)</strong>, a global non-profit educational foundation headquartered in <strong className="text-white">Geneva, Switzerland</strong>.
                </p>
                <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Certified under the International Baccalaureate (IB) global educator framework</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Specialized training in IB DP inquiry, Internal Assessments (IA) & Extended Essays (EE)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/40 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between`}
            >
              {/* Top Accent Strip */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${index % 2 === 0 ? 'from-teal-500 to-emerald-400' : 'from-indigo-600 to-purple-500'}`} />

              <div>
                {/* Header with Icon and Badges */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100 ${exp.iconBg}`}>
                    {exp.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${exp.badgeColor}`}>
                      {exp.status}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Role and Institution */}
                <h3 className="text-2xl font-black text-slate-900 mb-1 leading-snug">
                  {exp.title}
                </h3>
                <p className="text-base font-bold text-slate-700 mb-1">
                  {exp.institution}
                </p>
                <p className="text-xs font-medium text-slate-500 mb-4 flex items-center gap-1">
                  <span>📍 {exp.location}</span>
                </p>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Highlights Bulleted */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer info / link */}
              {exp.linkText && (
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>{exp.linkText}</span>
                  {exp.linkUrl && (
                    <a 
                      href={exp.linkUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1 text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      Visit <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Trust Quote */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium">
            <span className="flex items-center gap-2 font-bold text-slate-900">
              <BookOpenCheck className="w-5 h-5 text-teal-600" />
              Comprehensive Teaching Spectrum:
            </span>
            <span>Secondary O-Levels • IP • Junior College A-Level H2 • IB Diploma (HL/SL) • NTU Undergraduate Physics</span>
          </div>
        </div>

      </div>
    </section>
  );
}
