"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle2, MessageSquare, Sparkles, ShieldCheck } from "lucide-react";

export default function ContactSection() {
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
    <section id="contact" className="relative w-full py-14 sm:py-20 md:py-24 overflow-hidden bg-transparent">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#1B2A5E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#D8232A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[#D8232A] border border-red-200/80 shadow-md shadow-red-900/5 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4">
            <MessageSquare className="w-4 h-4 text-[#D8232A]" />
            <span>Get In Touch</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-black text-[#1B2A5E] tracking-tight leading-tight mb-4">
            Let&apos;s Collaborate and{" "}
            <span className="bg-gradient-to-r from-[#D8232A] to-red-600 bg-clip-text text-transparent">
              Create Sporting History
            </span>
          </h2>
          
          <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
            Have a league idea brewing? Want to sponsor a movement, not just a match? Or are you an
            athlete who just needs one real platform? The Team 7 family is one message away.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* Left Side: Featured Contact Image Card + Office Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Featured Image Card with 84d29c7e-fa9a-4196-9689-0ff120c00758.jpg */}
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border border-white/40 group min-h-[260px] sm:min-h-[300px]">
              <Image
                src="/84d29c7e-fa9a-4196-9689-0ff120c00758.jpg"
                alt="Team 7 Contact & Partnerships"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Image Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A5E]/60 to-transparent" />

              {/* Floating Badge & Text on Image */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10 text-white">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-black uppercase tracking-wider w-fit">
                  <Sparkles size={14} className="text-amber-400" />
                  <span>Direct Executive Line</span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                    Team 7 Headquarters
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-200 font-medium">
                    Hyderabad • Jubilee Hills Sports Enclave
                  </p>
                </div>
              </div>
            </div>

            {/* Office Info Card */}
            <div className="bg-white/85 backdrop-blur-xl rounded-[2rem] p-6 sm:p-8 border border-white/70 shadow-xl shadow-slate-900/5 flex-1">
              <h3 className="text-xl font-black text-[#1B2A5E] mb-6 pb-4 border-b border-slate-100 flex items-center gap-2">
                <ShieldCheck size={20} className="text-[#D8232A]" />
                <span>Contact Channels</span>
              </h3>

              <div className="space-y-5">
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

          {/* Right Side: Interactive Contact Form */}
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
                  Fill out the details below and our executive team will reach out to you within 24 business hours.
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
      </div>
    </section>
  );
}
