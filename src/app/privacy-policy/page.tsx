"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowLeft, Lock, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "Team 7 Sports Management Private Limited ('Team 7', 'we', 'us', or 'our') collects personal information when you register for leagues, submit partnership forms, apply as an athlete, or interact with our web platform. This includes full name, contact number, email address, organization/brand details, and event participation records.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "We utilize collected data strictly to facilitate sports tournament registrations, coordinate media broadcasts, manage corporate sponsorship agreements, send tournament schedules, and fulfill legal compliance requirements under applicable Indian laws.",
    },
    {
      title: "3. Media, Photography & Broadcast Consent",
      content:
        "By participating in or attending any Team 7 organized league, tournament, or event, participants and audience members grant Team 7 the right to capture photography, video recording, and audio for television broadcasts, promotional highlights, and digital media publishing without monetary compensation.",
    },
    {
      title: "4. Data Sharing & Third-Party Services",
      content:
        "We do not sell, rent, or trade your personal information. We may share necessary data with trusted sports federation partners, authorized venue operators, insurance providers, and broadcast partners solely for operational execution.",
    },
    {
      title: "5. Data Security & Storage",
      content:
        "Team 7 implements enterprise-grade encryption, secure socket layer (SSL) protocols, and access control policies to safeguard your data against unauthorized access, loss, or alteration.",
    },
    {
      title: "6. Your Rights & Choices",
      content:
        "You have the right to request access to your stored personal data, request correction of inaccurate details, or request deletion of non-essential registration records by contacting our compliance desk at info@team7sports.com.",
    },
    {
      title: "7. Updates to This Policy",
      content:
        "Team 7 reserves the right to amend this Privacy Policy at any time. Updated versions will be published on this page with an updated effective date.",
    },
  ];

  return (
    <main className="relative min-h-screen w-full pt-24 pb-16 overflow-x-hidden" style={{ backgroundColor: "var(--bg)" }}>
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1B2A5E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D8232A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B2A5E] hover:text-[#D8232A] transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white/80 shadow-xl shadow-slate-900/5 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B2A5E]/10 text-[#1B2A5E] text-xs font-extrabold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} className="text-[#D8232A]" />
            <span>Legal &amp; Privacy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1B2A5E] tracking-tight leading-tight mb-3 font-heading">
            Privacy Policy
          </h1>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            Effective Date: January 1, 2026 • Team 7 Sports Management Private Limited
          </p>
        </motion.div>

        {/* Content Sections Stack */}
        <div className="space-y-6">
          {sections.map((sec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white/85 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/70 shadow-md shadow-slate-900/5"
            >
              <h2 className="text-xl sm:text-2xl font-black text-[#1B2A5E] mb-3 flex items-center gap-2">
                <FileText size={20} className="text-[#D8232A]" />
                <span>{sec.title}</span>
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                {sec.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Footer Note */}
        <div className="mt-10 p-6 rounded-2xl bg-[#1B2A5E] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <Lock className="w-8 h-8 text-[#D8232A] shrink-0" />
            <div>
              <div className="font-extrabold text-sm uppercase tracking-wider">Privacy Concerns?</div>
              <div className="text-xs text-gray-300">Reach our compliance team directly at info@team7sports.com</div>
            </div>
          </div>
          <Link href="/contact-us" className="btn btn-primary !px-4 !py-2 !text-xs shrink-0">
            Contact Compliance
          </Link>
        </div>

      </div>
    </main>
  );
}
