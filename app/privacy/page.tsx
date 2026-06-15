"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  UserCheck, 
  ArrowLeft, 
  Mail, 
  MapPin, 
  Phone,
  FileText,
  Database,
  Globe,
  CheckCircle
} from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "June 15, 2024"; // You can update this date manually

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] selection:bg-teal-100 selection:text-teal-900 pb-20">
      {/* Subtle Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-teal-50/50 to-transparent" />
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'radial-gradient(#0f172a 0.5px, transparent 0.5px)', 
            backgroundSize: '40px 40px' 
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 pt-12 md:pt-20">
        
        {/* Back Button */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 font-bold transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Learning
          </Link>
        </motion.div>

        {/* Main Document Card */}
        <motion.div 
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden"
        >
          {/* Header Header */}
          <div className="bg-slate-900 p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold uppercase tracking-widest mb-4">
                  <ShieldCheck size={14} /> PDPA Compliant
                </div>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight">Privacy Policy</h1>
                <p className="text-slate-400 mt-2 font-medium">Physics Made Easy</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-slate-400 text-sm uppercase font-bold tracking-tighter">Last Updated</p>
                <p className="text-teal-400 font-black text-lg">{lastUpdated}</p>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-8 md:p-16">
            <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-headings:text-slate-900 prose-headings:font-black">
              
              <p className="text-lg font-medium text-slate-700 italic">
                Physics Made Easy (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting the privacy of visitors to our website and students/parents who enquire about or enrol in our tuition programmes. 
              </p>
              
              <p>
                This Privacy Policy explains how we collect, use, disclose, and protect your personal data in accordance with Singapore&apos;s <strong>Personal Data Protection Act (PDPA)</strong>.
              </p>

              <hr className="my-10 border-slate-100" />

              {/* Section 1 */}
              <div className="space-y-4 mb-12">
                <h2 className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-teal-50 text-teal-600 rounded-lg"><Database size={20}/></div>
                  1. Information We Collect
                </h2>
                <p>We may collect the following types of personal data:</p>
                <ul className="grid gap-3 list-none pl-0">
                  {[
                    "Contact information (name, email address, phone/WhatsApp number) when submitting enquiries",
                    "Student information (name, age, school, exam level — O-Level, A-Level, IB, IGCSE, IP)",
                    "Usage data automatically via Google Analytics (pages visited, device/browser type, location)",
                    "Communication records via WhatsApp, email, or our contact forms"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl text-slate-600 border border-slate-100">
                      <CheckCircle size={18} className="text-teal-500 mt-0.5 shrink-0" />
                      <span className="text-sm font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 2 */}
              <div className="space-y-4 mb-12">
                <h2 className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Eye size={20}/></div>
                  2. How We Use Your Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Respond to enquiries and schedule trial lessons",
                    "Communicate child progress and scheduling",
                    "Improve our teaching strategies and website",
                    "Send updates about our services (with consent)",
                    "Comply with legal obligations"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-amber-50 rounded-2xl p-6 md:p-8 border border-amber-100 mb-12">
                <h2 className="flex items-center gap-3 text-2xl text-amber-900 mt-0">
                  <div className="p-2 bg-amber-100 text-amber-600 rounded-lg"><UserCheck size={20}/></div>
                  3. Children&apos;s Information
                </h2>
                <p className="text-amber-800 font-medium mb-0">
                  As a tuition service for secondary and pre-university students, we may collect personal data relating to minors (students under 18). Such data is provided to us by a <strong>parent or legal guardian</strong>, who consents to its collection on the student&apos;s behalf. We only use this information for the purposes of providing tuition services.
                </p>
              </div>

              {/* Remaining Sections Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="flex items-center gap-2 text-lg font-black"><Globe size={18} className="text-teal-600"/> 4. Disclosure</h3>
                  <p className="text-sm">We do not sell or rent your data. We share only with service providers (hosting/analytics) or government authorities when required by law.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="flex items-center gap-2 text-lg font-black"><Lock size={18} className="text-teal-600"/> 5. Data Security</h3>
                  <p className="text-sm">We use SSL encryption (HTTPS) and technical measures to protect your data against unauthorised access or disclosure.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="flex items-center gap-2 text-lg font-black"><FileText size={18} className="text-teal-600"/> 6. Cookies</h3>
                  <p className="text-sm">We use Google Analytics to understand site traffic. You can control or disable cookies through your browser settings.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="flex items-center gap-2 text-lg font-black"><UserCheck size={18} className="text-teal-600"/> 7. Your Rights</h3>
                  <p className="text-sm">You have the right to access, correct, or withdraw consent for your personal data by contacting us directly.</p>
                </div>
              </div>

              {/* Section 10 - Contact Box */}
              <div className="mt-16 p-8 md:p-12 bg-slate-50 rounded-[2rem] border border-slate-200 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl font-black mb-6 mt-0">10. Contact Us</h2>
                  <p className="mb-8 font-medium text-slate-500">If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please reach out:</p>
                  
                  <div className="grid gap-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white shadow-sm rounded-xl text-teal-600 border border-slate-100"><MapPin size={24}/></div>
                      <div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Office Address</p>
                        <p className="font-bold text-slate-900">186 Toa Payoh Central, Lobby H 02-430, Singapore 310186</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-8">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white shadow-sm rounded-xl text-teal-600 border border-slate-100"><Phone size={24}/></div>
                        <div>
                          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">WhatsApp / Phone</p>
                          <a href="tel:+6597277419" className="font-bold text-slate-900 hover:text-teal-600 transition-colors">+65 9727 7419</a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white shadow-sm rounded-xl text-teal-600 border border-slate-100"><Mail size={24}/></div>
                        <div>
                          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Support</p>
                          <a href="mailto:contact@makephysicseasy.com" className="font-bold text-slate-900 hover:text-teal-600 transition-colors">contact@makephysicseasy.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Background Decoration */}
                <ShieldCheck size={200} className="absolute -right-20 -bottom-20 text-slate-200/50" />
              </div>

            </div>
          </div>
        </motion.div>

        {/* Footer info */}
        <div className="mt-12 text-center text-slate-400 text-sm font-medium">
          <p>© {new Date().getFullYear()} Physics Made Easy by Cornelius Chew. All rights reserved.</p>
          <p className="mt-1">Singapore PDPA Registered Business</p>
        </div>
      </div>
    </main>
  );
}