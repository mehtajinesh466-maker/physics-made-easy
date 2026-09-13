"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Sparkles, HeartHandshake } from "lucide-react";

export default function MissionStatement({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 md:p-12 text-white shadow-2xl border border-slate-800/80 ${className}`}
    >
      {/* Decorative backdrop glow & patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />
      <Quote className="absolute right-6 bottom-4 text-white/5 w-40 h-40 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center shrink-0 text-teal-400 shadow-lg shadow-teal-500/10">
          <HeartHandshake className="w-8 h-8 md:w-10 md:h-10" />
        </div>

        <div className="space-y-3 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-300 text-[11px] font-black uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            Our Mission Statement
          </div>
          <blockquote className="text-xl md:text-2xl font-semibold leading-relaxed text-slate-100 italic tracking-tight">
            &ldquo;Teaching is one of the few careers where your values become your daily actions. You don&rsquo;t wait years to matter—you matter immediately.&rdquo;
          </blockquote>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 pt-1">
            — Core Educational Philosophy
          </p>
        </div>
      </div>
    </motion.div>
  );
}
