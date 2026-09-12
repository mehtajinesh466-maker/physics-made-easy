"use client";

import React from "react";
import { 
  GraduationCap, 
  CheckCircle2, 
  HeartHandshake,
  Sparkles
} from "lucide-react";

export default function AlumniSpotlight() {
  return (
    <section className="py-10 md:py-14 bg-slate-50 relative overflow-hidden border-y border-slate-200/80 font-sans">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-100/40 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100/40 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/4" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        
        {/* Compact Featured Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden p-6 md:p-8">
          
          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
                <GraduationCap size={14} className="text-teal-600" />
                Special Alumni Spotlight
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-slate-500">
                <HeartHandshake size={14} className="text-indigo-600" /> Inspired to Teach
              </span>
            </div>
            
            <h2 className="text-lg md:text-xl font-black text-slate-900 tracking-tight">
              From Physics Student to <span className="text-teal-600">NUS PhD & Educator</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-center">
            
            {/* Left: WhatsApp Screenshot Image Container (Compact & Constrained) */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group w-full max-w-[220px] sm:max-w-[240px] rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md bg-slate-950 transition-transform hover:scale-[1.02]">
                <img 
                  src="/dr-m-testimonial.png" 
                  alt="WhatsApp testimonial from Dr Marie to Mr. Chew" 
                  className="w-full max-h-[300px] object-contain bg-slate-950"
                />
                <div className="absolute inset-x-0 bottom-0 bg-slate-950/80 backdrop-blur-xs px-2.5 py-1 flex items-center justify-between text-[10px] text-teal-300 font-bold">
                  <span className="flex items-center gap-1"><CheckCircle2 size={10} /> Verified Note</span>
                  <span>Dr Marie (NUS PhD)</span>
                </div>
              </div>
            </div>

            {/* Right: Compact Content */}
            <div className="md:col-span-8 space-y-4">
              
              {/* Main Quote */}
              <blockquote className="text-slate-800 text-base md:text-lg font-bold leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/70">
                &ldquo;You are a great tutor and your patient explanation helps a lot in my understanding of Physics concepts. I completed my PhD in Mechanical Engineering from NUS...&rdquo;
                <footer className="mt-2 text-xs font-semibold text-teal-700 not-italic">
                  &mdash; Message from former student Dr Marie to Mr. Chew
                </footer>
              </blockquote>

              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                After mastering Physics under Mr. Chew, Dr Marie spent <strong>10 years at NUS</strong> (4 yrs UG, 2 yrs Master&apos;s, 4 yrs PhD in Mechanical Engineering) and she is now following in his footsteps as an educator.
              </p>

              {/* 3 Compact Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-1">
                <div className="p-2.5 rounded-xl bg-teal-50/80 border border-teal-100 text-center">
                  <span className="block text-lg font-black text-teal-700 leading-tight">10 Years</span>
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">NUS Higher Ed</span>
                </div>

                <div className="p-2.5 rounded-xl bg-indigo-50/80 border border-indigo-100 text-center">
                  <span className="block text-lg font-black text-indigo-700 leading-tight">MechEng PhD</span>
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">NUS Doctorate</span>
                </div>

                <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-100 text-center">
                  <span className="block text-lg font-black text-amber-700 leading-tight">Educator</span>
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">Following Footsteps</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
