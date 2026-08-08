"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function WhyUsSection() {
  const pillars = [
    {
      num: "01",
      title: "A Track Record, Not Just a Promise",
      desc: "Our leadership has already delivered major regional and national leagues successfully — 14 years of battle-tested operational playbook.",
      accent: "#1B2A5E",
    },
    {
      num: "02",
      title: "A Genuinely Diverse Portfolio",
      desc: "Few sports management firms in India give Cricket, Olympic sports, and Non-Olympic formats equal, serious investment. We do.",
      accent: "#D8232A",
    },
    {
      num: "03",
      title: "Inclusivity Isn't a Slogan for Us",
      desc: "Our history with Disabled Cricket and Para-sports isn't a CSR checkbox; it's part of how this company was built from day one.",
      accent: "#1B2A5E",
    },
    {
      num: "04",
      title: "On-Ground Professionalism",
      desc: "Strategic brand partnerships and flawless execution, backed by an athlete-first philosophy — because leagues exist for the players first.",
      accent: "#D8232A",
    },
  ];

  return (
    <section id="why-us" className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[#1B2A5E] border border-slate-200 shadow-md shadow-slate-900/5 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-[#1B2A5E]" />
            <span>The Team 7 Advantage</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-black text-[#1B2A5E] tracking-tight leading-tight mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#D8232A] to-red-600 bg-clip-text text-transparent">
              Team 7 Sports?
            </span>
          </h2>
          
          <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
            Here is why brands, athletes, and franchise owners trust us to lead India&apos;s next sporting revolution.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white/70 backdrop-blur-xl rounded-[1.5rem] p-6 sm:p-7 border border-white/60 shadow-lg shadow-slate-900/5 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div 
                  className="text-4xl sm:text-5xl font-black mb-3 leading-none opacity-20 group-hover:opacity-30 transition-opacity"
                  style={{ color: item.accent }}
                >
                  {item.num}
                </div>

                <h3 className="text-lg sm:text-xl font-black text-[#1B2A5E] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div 
                className="mt-5 flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wider transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: item.accent }}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
