"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

export default function SponsorshipSection() {
  const tiers = [
    {
      title: "Title & Presenting Sponsors",
      badge: "Maximum Brand Dominance",
      desc: "Own the narrative. Maximum brand dominance across every league promotion, trophy, broadcast graphics, and digital asset.",
      deliverables: ["Naming Rights on Trophy & Logo", "100% Broadcast Overlay Integration", "Press & Media Center Branding", "Exclusive VIP Hospitality Suite"],
      accent: "#1B2A5E",
      lightBg: "bg-[#1B2A5E]/10",
      textColor: "text-[#1B2A5E]",
      borderColor: "border-[#1B2A5E]/20",
    },
    {
      title: "Associate & Powered-By Sponsors",
      badge: "High-Visibility Impact",
      desc: "High-visibility integration into key match moments, boundary boards, player uniforms, and man-of-the-match awards.",
      deliverables: ["Uniform Sleeve & Chest Branding", "Boundary Perimeter LED Boards", "Match Moment Ownership (Super Over, Powerplay)", "Digital Social Media Features"],
      accent: "#D8232A",
      lightBg: "bg-[#D8232A]/10",
      textColor: "text-[#D8232A]",
      borderColor: "border-[#D8232A]/20",
    },
    {
      title: "Grassroots & Inclusivity Partners",
      badge: "CSR & Social Good",
      desc: "Back our Disabled Cricket and youth development tournaments, and put your brand's commitment to social good on full display.",
      deliverables: ["Para-Athlete Scholarship Sponsorship", "Community Outreach Branding", "CSR Impact & Sustainability Reports", "National Inclusion PR Spotlight"],
      accent: "#1B2A5E",
      lightBg: "bg-[#1B2A5E]/10",
      textColor: "text-[#1B2A5E]",
      borderColor: "border-[#1B2A5E]/20",
    },
    {
      title: "Category Partners",
      badge: "Exclusive Industry Rights",
      desc: "Exclusive rights as our Official Logistics, Apparel, Beverage, Media, Technology, or Medical Partner.",
      deliverables: ["Category Exclusivity Rights", "On-Ground Product Sampling", "Official Supplier Status", "Direct B2B Network Access"],
      accent: "#D8232A",
      lightBg: "bg-[#D8232A]/10",
      textColor: "text-[#D8232A]",
      borderColor: "border-[#D8232A]/20",
    },
  ];

  return (
    <section id="sponsorship" className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[#D8232A] border border-red-200/80 shadow-md shadow-red-900/5 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-[#D8232A]" />
            <span>Sponsorship & Commercials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-black text-[#1B2A5E] tracking-tight leading-tight mb-4 font-heading">
            Sponsorship &{" "}
            <span className="bg-gradient-to-r from-[#D8232A] to-red-600 bg-clip-text text-transparent">
              Partnership Avenues
            </span>
          </h2>

          <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
            We understand that Indian brands don&apos;t just want visibility — they want to be part of a story
            fans actually care about. Our partnership tiers are built for real, measurable ROI.
          </p>
        </motion.div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white/80 backdrop-blur-xl rounded-[1.5rem] p-6 sm:p-7 border border-white/70 shadow-xl shadow-slate-900/5 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-2 rounded-t-[1.5rem]" style={{ backgroundColor: tier.accent }} />

              <div>
                <span className={`inline-block text-[11px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full border mb-3 ${tier.lightBg} ${tier.textColor} ${tier.borderColor}`}>
                  {tier.badge}
                </span>

                <h3 className="text-lg sm:text-xl font-black text-[#1B2A5E] mb-2 leading-snug font-heading">
                  {tier.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4 font-normal">
                  {tier.desc}
                </p>

                <ul className="space-y-2 pt-4 border-t border-slate-100">
                  {tier.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: tier.accent }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}
