"use client";

import React from "react";
import { 
  Users, 
  Sparkles, 
  Brain, 
  Trophy, 
  ShieldCheck,
  Target
} from "lucide-react";

export default function ChessClassroomSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden font-sans">
      {/* Subtle Scientific Background Pattern & Blobs */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Header Row */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={14} className="text-amber-400" />
            <span>Interactive Learning Environment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Inside Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200">Chess Classroom</span>
          </h2>

          <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed">
            Where focus meets strategy. Our structured small-group sessions foster deep concentration, sportsmanship, and analytical thinking in a supportive classroom setting.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Image Container with Modern Frame & Floating Badges */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-2xl group">
              
              {/* Decorative Accent Glow Behind Frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-indigo-600 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
              
              {/* Main Image Box */}
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-slate-700/80 shadow-2xl bg-slate-950">
                <img 
                  src="/chess-classroom.jpg" 
                  alt="Students engaged in strategic chess classroom training session" 
                  className="w-full h-auto object-cover max-h-[500px] transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay for Text Readability at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                {/* Bottom Overlay Info Banner */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                      <Users size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Live Classroom Sessions</p>
                      <p className="text-xs text-slate-300">Small Group Interactive Gameplay & Analysis</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-300 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-700/60">
                    FIDE Aligned
                  </span>
                </div>
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -top-4 -left-4 bg-slate-800 text-amber-300 text-xs font-bold px-4 py-2 rounded-xl border border-slate-600 shadow-lg flex items-center gap-2 hidden sm:flex">
                <Trophy size={16} className="text-amber-400" />
                <span>Active Strategic Thinking</span>
              </div>
            </div>
          </div>

          {/* Right Column: Feature Highlights */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">
                How Our Classroom Training Works
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                Every session combines structured tactical instruction with live paired board play, allowing students to apply theoretical opening and endgame concepts immediately.
              </p>
            </div>

            <div className="space-y-4">
              
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-4 hover:border-amber-400/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Brain size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Pattern Recognition & Spatial Foresight</h4>
                  <p className="text-slate-300 text-xs leading-relaxed mt-1">
                    Students analyze tactical patterns (forks, pins, skewers) on physical boards, training working memory directly applicable to STEM and Physics reasoning.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-4 hover:border-amber-400/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Attentive Mentor Coaching</h4>
                  <p className="text-slate-300 text-xs leading-relaxed mt-1">
                    Instructors walk the classroom floor to observe decision-making, correct calculation errors, and guide post-game analysis in real time.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-4 hover:border-amber-400/50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Tournament & Exam Temperament</h4>
                  <p className="text-slate-300 text-xs leading-relaxed mt-1">
                    Playing under friendly timed conditions builds resilience, emotional calm, and decision discipline under exam-like pressure.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
