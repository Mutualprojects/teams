"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Scale, ArrowLeft, Gavel, FileCheck } from "lucide-react";

export default function TermsAndConditionsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing or utilizing the services, tournament entries, or digital platforms of Team 7 Sports Management Private Limited ('Team 7'), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any portion of these terms, you must refrain from participating in our sports properties.",
    },
    {
      title: "2. Player & Franchise Eligibility",
      content:
        "All players, team owners, franchise managers, and event participants must strictly adhere to the official rules set forth for each respective league (e.g., Telangana Premier Kabaddi, UBA Basketball, Corporate Sports Olympiad). Falsification of age, identity, or medical fitness documents will lead to immediate disqualification and forfeiture of registration fees.",
    },
    {
      title: "3. Registration Fees & Payment Policy",
      content:
        "All league entry fees, franchise security deposits, and sponsorship installments are non-refundable unless a tournament is cancelled indefinitely by Team 7 management without rescheduling. All payments must be routed through official Team 7 bank channels.",
    },
    {
      title: "4. Code of Conduct & Anti-Doping Guidelines",
      content:
        "Team 7 maintains zero tolerance towards match-fixing, unsportsmanlike behavior, verbal/physical violence, or usage of banned performance-enhancing substances. Violations will result in lifetime bans and potential referral to legal authorities.",
    },
    {
      title: "5. Intellectual Property Rights",
      content:
        "All logos, branding assets, tournament names, video footage, photography, and digital collateral associated with Team 7 properties remain the exclusive intellectual property of Team 7 Sports Management Private Limited. Unauthorized commercial use is strictly prohibited.",
    },
    {
      title: "6. Limitation of Liability & Medical Disclaimer",
      content:
        "Participation in athletic events carries inherent physical risks. Team 7 provides on-field emergency medical assistance; however, Team 7 is not liable for long-term injuries or pre-existing medical conditions exacerbated during play. Participants are required to maintain personal medical insurance.",
    },
    {
      title: "7. Governing Law & Jurisdiction",
      content:
        "These terms shall be governed by and construed in accordance with the laws of India. Any legal disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.",
    },
  ];

  return (
    <main className="relative min-h-screen w-full pt-24 pb-16 overflow-x-hidden" style={{ backgroundColor: "var(--bg)" }}>
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D8232A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1B2A5E]/10 rounded-full blur-3xl pointer-events-none" />

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D8232A]/10 text-[#D8232A] text-xs font-extrabold uppercase tracking-wider mb-4">
            <Scale size={14} className="text-[#D8232A]" />
            <span>Governance &amp; Terms</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1B2A5E] tracking-tight leading-tight mb-3 font-heading">
            Terms &amp; Conditions
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
                <Gavel size={20} className="text-[#D8232A]" />
                <span>{sec.title}</span>
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                {sec.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Legal Desk */}
        <div className="mt-10 p-6 rounded-2xl bg-[#1B2A5E] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <FileCheck className="w-8 h-8 text-[#D8232A] shrink-0" />
            <div>
              <div className="font-extrabold text-sm uppercase tracking-wider">Legal Inquiries?</div>
              <div className="text-xs text-gray-300">Reach out to our legal department at legal@team7sports.com</div>
            </div>
          </div>
          <Link href="/contact-us" className="btn btn-primary !px-4 !py-2 !text-xs shrink-0">
            Contact Legal Team
          </Link>
        </div>

      </div>
    </main>
  );
}
