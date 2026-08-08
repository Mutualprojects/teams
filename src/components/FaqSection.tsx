"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageSquare, ArrowRight, Sparkles } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqs: FaqItem[] = [
  {
    id: "faq-1",
    category: "Leagues & IP",
    question: "What flagship sports properties and leagues does Team 7 Sports manage?",
    answer:
      "Team 7 Sports conceives, manages, and executes premier sports properties across India—including the Telangana Premier Kabaddi (TPK), UBA Basketball League, Disabled Cricket Tournaments, Floodlight Football Championships, American Football Leagues, and Corporate Sports Olympiads.",
  },
  {
    id: "faq-2",
    category: "Sponsorship",
    question: "How can brands and corporate sponsors partner with Team 7 Sports?",
    answer:
      "We design customized high-ROI partnership tiers—ranging from Title & Presenting Sponsorships to arena branding, broadcast graphics integration, digital activations, and VIP hospitality. Reach out to our executive desk to download our current sponsorship deck.",
  },
  {
    id: "faq-3",
    category: "Talent Scouting",
    question: "How does Team 7 scout and develop grassroots athletic talent?",
    answer:
      "We operate dedicated scouting networks and regional open trials across tier-2 and tier-3 cities. Selected athletes gain access to professional coaching, athletic conditioning, structured league competition, and direct pathways into national professional circuits.",
  },
  {
    id: "faq-4",
    category: "Broadcast & Media",
    question: "Are Team 7 Sports tournaments broadcasted live to TV and OTT platforms?",
    answer:
      "Yes! All major Team 7 league matches feature broadcast-grade, multi-camera live production streaming to television channels, regional networks, and digital OTT platforms reaching millions of viewers nationwide.",
  },
  {
    id: "faq-5",
    category: "Partnerships & Franchise",
    question: "How can federations or investors launch a new sports league with Team 7?",
    answer:
      "We partner with federations, state associations, and private investors to build turnkey league IPs. We handle end-to-end execution—including tournament sanctioning, venue logistics, officiating, team franchise sales, broadcast rights, and brand monetization.",
  },
  {
    id: "faq-6",
    category: "Headquarters & Contact",
    question: "Where are Team 7 Sports corporate headquarters located?",
    answer:
      "Our central executive desk is situated in Jubilee Hills / Madhapur Sports Enclave, Hyderabad, Telangana. You can reach out directly via our Contact page or schedule an in-person executive briefing with our management team.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative w-full py-16 sm:py-24 bg-transparent overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/3 -left-24 w-96 h-96 bg-[#1B2A5E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-24 w-96 h-96 bg-[#D8232A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[#D8232A] border border-red-200/80 shadow-md shadow-red-900/5 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4 text-[#D8232A]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#1B2A5E] tracking-tight leading-tight mb-4 font-heading">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#D8232A] to-red-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
            Everything you need to know about Team 7 Sports leagues, corporate partnerships, grassroots scouting, and broadcast execution.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#D8232A]/40 shadow-xl shadow-slate-900/5 ring-1 ring-[#D8232A]/20"
                    : "bg-white/80 hover:bg-white border-slate-200/80 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3.5 pr-2">
                    <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-red-50 text-[#D8232A] font-black text-xs flex items-center justify-center border border-red-100">
                      0{index + 1}
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-[#1B2A5E] leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "bg-[#D8232A] text-white rotate-180" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100/80 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                        <div className="pt-4 flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D8232A] mt-2 flex-shrink-0" />
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Contact CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1B2A5E] to-[#0a1128] text-white text-center shadow-2xl relative overflow-hidden flex flex-col items-center justify-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D8232A]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-black uppercase tracking-wider text-amber-300 mb-4">
            <Sparkles size={14} />
            <span>Still Have Questions?</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 font-heading">
            Need Detailed League Proposals or Media Assets?
          </h3>

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mb-6 leading-relaxed">
            Our executive team is available to discuss custom league sponsorships, media partnerships, and event management inquiries.
          </p>

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#D8232A] to-red-600 text-white font-black text-sm sm:text-base shadow-xl shadow-red-950/50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Contact Executive Desk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
