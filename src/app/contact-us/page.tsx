"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,

  ShieldCheck,
  ChevronDown,
  MessageSquare,
} from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    purpose: "League Partnership / Sponsorship",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const contactItems = [
    {
      icon: MapPin,
      label: "Address",
      color: "#1B2A5E",
      bg: "bg-[#1B2A5E]/10",
      content: (
        <span>
          Team 7 Sports Management Private Limited<br />
          Plot No. 42, Jubilee Hills / Madhapur Sports Enclave,<br />
          Hyderabad, Telangana, India – 500033
        </span>
      ),
    },
    {
      icon: Mail,
      label: "Email Queries",
      color: "#D8232A",
      bg: "bg-[#D8232A]/10",
      content: (
        <span>
          <strong className="text-slate-800">General &amp; Business:</strong>{" "}
          <a href="mailto:info@team7sports.com" className="text-[#D8232A] hover:underline">info@team7sports.com</a><br />
          <strong className="text-slate-800">Sponsorships &amp; Media:</strong>{" "}
          <a href="mailto:partner@team7sports.com" className="text-[#D8232A] hover:underline">partner@team7sports.com</a>
        </span>
      ),
    },
    {
      icon: Phone,
      label: "Call Us",
      color: "#1B2A5E",
      bg: "bg-[#1B2A5E]/10",
      content: <span>+91 98765 43210 &nbsp;|&nbsp; +91 91234 56789</span>,
    },
    {
      icon: Clock,
      label: "Hours of Operation",
      color: "#D8232A",
      bg: "bg-[#D8232A]/10",
      content: (
        <span>
          <strong className="text-slate-800">Monday – Saturday:</strong> 10:00 AM – 6:30 PM (IST)<br />
          <strong className="text-slate-800">Sunday:</strong> Closed (except on match days!)
        </span>
      ),
    },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: "var(--bg)" }}>
      
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO BANNER (CLEAN & HIGH IMAGE VISIBILITY)
         ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center text-white overflow-hidden bg-[#0a1128]">
        {/* Full-Bleed Background Image (/84d29c7e-fa9a-4196-9689-0ff120c00758.jpg) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/84d29c7e-fa9a-4196-9689-0ff120c00758.jpg"
            alt="Team 7 Sports Executive Line"
            fill
            className="object-cover opacity-85 filter brightness-95 contrast-105"
            priority
          />
          {/* Subtle Light Gradients so the Image is Clearly Visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/35 to-[#0a1128]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128]/30 via-transparent to-[#0a1128]/30" />
        </div>

        {/* Hero Banner Content - Clean White Text "Contact Us" */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10 text-center flex flex-col items-center justify-center my-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {/* Main White Text Title */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white font-heading uppercase drop-shadow-xl">
              Contact Us
            </h1>

            {/* Subtle Subline / Accent */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="h-1 w-12 bg-[#D8232A] rounded-full" />
              <p className="text-gray-200 text-xs sm:text-sm font-extrabold uppercase tracking-widest drop-shadow">
                Team 7 Sports Management
              </p>
              <div className="h-1 w-12 bg-[#D8232A] rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-xs font-bold text-gray-200 uppercase tracking-widest pointer-events-none drop-shadow">
          <span>Get In Touch</span>
          <ChevronDown className="w-4 h-4 text-white animate-bounce" />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: SEPARATE CONTACT DETAILS & FORM SECTION
         ───────────────────────────────────────────────────────────── */}
      <section id="contact-form" className="relative w-full py-16 sm:py-24 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[#D8232A] border border-red-200/80 shadow-md text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4">
              <MessageSquare className="w-4 h-4 text-[#D8232A]" />
              <span>Direct Channels</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-black text-[#1B2A5E] tracking-tight leading-tight mb-4">
              Let&apos;s Collaborate and{" "}
              <span className="bg-gradient-to-r from-[#D8232A] to-red-600 bg-clip-text text-transparent">
                Create Sporting History
              </span>
            </h2>
            
            <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
              Fill out the form below or connect directly via our Hyderabad headquarters. Our executive team will respond within 24 business hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

            {/* Left Column: Office Headquarters Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <div className="bg-white/85 backdrop-blur-xl rounded-[2rem] p-6 sm:p-8 border border-white/70 shadow-xl shadow-slate-900/5 h-full">
                <h3 className="text-xl font-black text-[#1B2A5E] mb-6 pb-4 border-b border-slate-100 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-[#D8232A]" />
                  <span>Office Headquarters</span>
                </h3>

                <div className="space-y-6">
                  {contactItems.map((ci, i) => {
                    const IconComp = ci.icon;
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div className={`w-11 h-11 rounded-2xl ${ci.bg} flex items-center justify-center flex-shrink-0 mt-1 shadow-sm`}>
                          <IconComp className="w-5 h-5" style={{ color: ci.color }} />
                        </div>
                        <div>
                          <div className="font-extrabold text-xs uppercase tracking-wider mb-1" style={{ color: ci.color }}>
                            {ci.label}
                          </div>
                          <div className="text-slate-600 text-sm leading-relaxed font-normal">
                            {ci.content}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Direct Message Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col"
            >
              <div className="bg-white/85 backdrop-blur-xl rounded-[2rem] p-6 sm:p-8 md:p-10 border border-white/70 shadow-xl shadow-slate-900/5 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-black text-[#1B2A5E]">
                      Send Us a Direct Message
                    </h3>
                    <span className="text-xs font-bold text-[#D8232A] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
                      24h Response
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mb-6 font-medium">
                    Fill out your inquiry details and our management team will reach out shortly.
                  </p>

                  {submitted ? (
                    <div className="p-8 rounded-3xl bg-green-50 border border-green-200 text-center space-y-4 my-8 shadow-sm">
                      <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto animate-bounce" />
                      <h4 className="text-2xl font-black text-green-900">Message Received!</h4>
                      <p className="text-green-800 text-base font-medium max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out to Team 7 Sports. Our management team will review your inquiry and contact you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="fullName" className="block text-xs font-black uppercase tracking-wider text-[#1B2A5E] mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            id="fullName" value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="John Doe"
                            className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1B2A5E] text-sm font-medium transition-all shadow-sm"
                          />
                        </div>

                        <div>
                          <label htmlFor="companyName" className="block text-xs font-black uppercase tracking-wider text-[#1B2A5E] mb-2">
                            Company / Brand
                          </label>
                          <input
                            type="text"
                            id="companyName" value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            placeholder="Organization Name"
                            className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1B2A5E] text-sm font-medium transition-all shadow-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-xs font-black uppercase tracking-wider text-[#1B2A5E] mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            id="email" value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1B2A5E] text-sm font-medium transition-all shadow-sm"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-xs font-black uppercase tracking-wider text-[#1B2A5E] mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone" value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1B2A5E] text-sm font-medium transition-all shadow-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="purpose" className="block text-xs font-black uppercase tracking-wider text-[#1B2A5E] mb-2">
                          Primary Purpose
                        </label>
                        <select
                          id="purpose" value={formData.purpose}
                          onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1B2A5E] text-sm font-medium transition-all shadow-sm"
                        >
                          <option value="League Partnership / Sponsorship">League Partnership / Sponsorship</option>
                          <option value="Franchise Ownership Query">Franchise Ownership Query</option>
                          <option value="Event / Tournament Execution">Event / Tournament Execution</option>
                          <option value="Athlete / Player Registration">Athlete / Player Registration</option>
                          <option value="Media & Press Inquiry">Media & Press Inquiry</option>
                          <option value="General Query">General Query</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-black uppercase tracking-wider text-[#1B2A5E] mb-2">
                          Your Message *
                        </label>
                        <textarea
                          required
                          rows={4}
                          id="message" value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your project, goals, or inquiry..."
                          className="w-full px-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1B2A5E] text-sm font-medium transition-all resize-none shadow-sm"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#D8232A] to-red-600 text-white font-black text-base shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
                      >
                        {submitting ? (
                          <span>Sending Message...</span>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Legal Links Bar */}
          <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 font-medium">
            <div>© {new Date().getFullYear()} Team 7 Sports Management Private Limited. All Rights Reserved.</div>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-[#D8232A] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-[#D8232A] transition-colors">
                Terms &amp; Conditions
              </Link>
              <Link href="/" className="hover:text-[#D8232A] transition-colors">
                Home Page
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
