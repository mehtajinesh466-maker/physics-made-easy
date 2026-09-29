"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Navigation, 
  Building2, 
  CheckCircle2, 
  Sparkles,
  Compass,
  Phone
} from 'lucide-react';

const locations = [
  {
    id: "toa-payoh",
    badge: "Central Singapore · Flagship Hub",
    title: "Toa Payoh Central",
    subtitle: "Main Flagship Studio",
    description: "Our flagship physics & chess studio equipped with interactive experiment kits, demonstration setups, and multi-intelligence resources.",
    address: "186 Toa Payoh Central, Lobby H #02-430, Singapore 310186",
    landmark: "Lobby H (Level 2) · Next to Toa Payoh MRT",
    phone: "+65 9727 7419",
    whatsappHref: "https://wa.me/6597277419?text=Hello!%20I'm%20interested%20in%20Physics/Chess%20classes%20at%20Toa%20Payoh%20Central.",
    ctaText: "Book Trial (Toa Payoh)",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=186+Toa+Payoh+Central+Lobby+H+Singapore+310186",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.742385960416!2d103.8474811!3d1.3323069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da10e206085555%3A0x7d287010f384a83e!2s186%20Toa%20Payoh%20Central%2C%20Singapore%20310186!5e0!3m2!1sen!2ssg!4v1700000000000!5m2!1sen!2ssg",
    features: [
      "Full Physics & Chess class facilities",
      "Hands-on experiment & demonstration kits",
      "1-min walk from Toa Payoh MRT & Bus Interchange"
    ]
  },
  {
    id: "beauty-world",
    badge: "West Singapore · New Classroom Studio",
    title: "Beauty World Shopping Centre",
    subtitle: "West Branch Studio",
    description: "Serving students across Bukit Timah, Clementi, and the West. Fully air-conditioned classroom studio for focused small group lessons.",
    address: "Beauty World Shopping Centre, Upper Bukit Timah Road, Singapore",
    landmark: "Directly accessible via Beauty World MRT (Downtown Line)",
    phone: "+65 9727 7419",
    whatsappHref: "https://wa.me/6597277419?text=Hello!%20I'm%20interested%20in%20Physics/Chess%20classes%20at%20Beauty%20World%20Shopping%20Centre.",
    ctaText: "Book Trial (Beauty World)",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Beauty+World+Centre+Singapore",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.723145025974!2d103.7745778!3d1.3424164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da10631dcaaaab%3A0x6b77ecb47639f408!2sBeauty%20World%20Centre!5e0!3m2!1sen!2ssg!4v1700000000000!5m2!1sen!2ssg",
    features: [
      "Convenient West location for Bukit Timah & Jurong students",
      "Air-conditioned, high-speed Wi-Fi & large display screen",
      "Small group coaching for O-Level, A-Level & IB Physics"
    ]
  }
];

const VisitCampusCTA: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("toa-payoh");
  const activeLocation = locations.find((loc) => loc.id === activeTab) || locations[0];

  return (
    <section className="py-10 md:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 font-sans">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* --- Header with compact toggle --- */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/60 text-teal-700 text-xs font-bold uppercase tracking-wider mb-1.5">
              <Building2 size={13} />
              <span>Our Learning Studios</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Visit Us in <span className="text-teal-600">Central</span> & <span className="text-indigo-600">West Singapore</span>
            </h2>
          </div>

          {/* Location Toggle Tabs */}
          <div className="inline-flex p-1 bg-slate-100 border border-slate-200 rounded-2xl shadow-inner">
            {locations.map((loc) => {
              const isActive = activeTab === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => setActiveTab(loc.id)}
                  className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all flex items-center gap-1.5 ${
                    isActive 
                      ? loc.id === "toa-payoh"
                        ? "bg-white text-teal-700 shadow-sm border border-slate-200/80 font-black"
                        : "bg-white text-indigo-700 shadow-sm border border-slate-200/80 font-black"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  <Compass size={14} className={isActive ? (loc.id === "toa-payoh" ? "text-teal-600" : "text-indigo-600") : "text-slate-400"} />
                  <span>{loc.id === "toa-payoh" ? "Central (Toa Payoh)" : "West (Beauty World)"}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- Compact Main Card --- */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeLocation.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* --- LEFT: Info Details --- */}
              <div className="lg:col-span-6 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg mb-3">
                    <Sparkles size={12} className={activeLocation.id === "beauty-world" ? "text-indigo-500" : "text-teal-500"} />
                    <span>{activeLocation.badge}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-1 tracking-tight">
                    {activeLocation.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-500 mb-3 flex items-center gap-1">
                    <MapPin size={13} className="text-slate-400 shrink-0" />
                    {activeLocation.landmark}
                  </p>

                  <p className="text-xs md:text-sm text-slate-600 mb-4 leading-relaxed">
                    {activeLocation.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-1.5 mb-6 bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100">
                    {activeLocation.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 size={14} className={activeLocation.id === "beauty-world" ? "text-indigo-500 shrink-0" : "text-teal-500 shrink-0"} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compact Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                  <Link href={activeLocation.whatsappHref} target="_blank" className="flex-1">
                    <button className={`w-full font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs md:text-sm text-white transition-all shadow-md active:scale-95 ${
                      activeLocation.id === "beauty-world"
                        ? "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200"
                        : "bg-teal-600 hover:bg-teal-700 shadow-teal-200"
                    }`}>
                      <Calendar size={14} />
                      {activeLocation.ctaText}
                      <ArrowRight size={14} />
                    </button>
                  </Link>

                  <Link href={activeLocation.directionsUrl} target="_blank" className="sm:w-auto">
                    <button className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 text-xs md:text-sm border border-slate-200">
                      <Navigation size={14} className="text-slate-500" />
                      Directions
                    </button>
                  </Link>
                </div>
              </div>

              {/* --- RIGHT: Clean Light Google Map --- */}
              <div className="lg:col-span-6 relative min-h-[260px] lg:min-h-[340px] border-t lg:border-t-0 lg:border-l border-slate-100">
                <iframe 
                  src={activeLocation.mapEmbedUrl}
                  className="w-full h-full min-h-[260px] lg:min-h-[340px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Location map - ${activeLocation.title}`}
                />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm border border-slate-200 px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-2 text-[11px] font-bold text-slate-700">
                  <MapPin size={13} className="text-teal-600" />
                  <span className="truncate max-w-[200px] sm:max-w-none">{activeLocation.address}</span>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* --- Bottom Compact Address Cards --- */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <div className="bg-white border border-slate-200/80 p-4 rounded-2xl flex items-start gap-3 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center shrink-0 mt-0.5">
              <Building2 size={18} />
            </div>
            <div className="text-xs">
              <p className="font-bold text-slate-900">Central Hub — Toa Payoh Central</p>
              <p className="text-slate-500 mt-0.5">186 Toa Payoh Central, Lobby H #02-430, S(310186)</p>
              <p className="text-slate-400 mt-1">
                <span className="font-semibold text-slate-600">WhatsApp / Call:</span> <a href="tel:+6597277419" className="text-teal-600 font-bold hover:underline">+65 9727 7419</a>
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 p-4 rounded-2xl flex items-start gap-3 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
              <Building2 size={18} />
            </div>
            <div className="text-xs">
              <p className="font-bold text-slate-900">West Branch — Beauty World</p>
              <p className="text-slate-500 mt-0.5">Beauty World Shopping Centre, Upper Bukit Timah Road</p>
              <p className="text-slate-400 mt-1">
                <span className="font-semibold text-slate-600">WhatsApp / Call:</span> <a href="tel:+6597277419" className="text-indigo-600 font-bold hover:underline">+65 9727 7419</a> 
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisitCampusCTA;