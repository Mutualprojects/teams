"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Target, CheckCircle2, ShieldCheck, type LucideIcon } from "lucide-react";

interface FullBleedPanelProps {
  badgeLabel: string;
  badgeIcon: React.ReactNode;
  subline: string;
  headline: string;
  headlineAccent: string;
  description: string;
  tags: string[];
  tagsIcon: LucideIcon;
  accent: string;
  videoSrc: string;
  tagIconColor: string;
}

function FullBleedPanel({
  badgeLabel,
  badgeIcon,
  subline,
  headline,
  headlineAccent,
  description,
  tags,
  tagsIcon,
  accent,
  videoSrc,
  tagIconColor,
}: FullBleedPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start end", "end start"],
  });

  const textX = useTransform(scrollYProgress, [0, 0.5, 1], ["-10%", "0%", "10%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.18, 0.85, 1], [0, 1, 1, 0]);
  const ruleScale = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0, 1, 1, 0]);

  const TagIcon = tagsIcon;

  return (
    <div
      ref={panelRef}
      className="relative w-full h-[100svh] min-h-screen flex items-center justify-start overflow-hidden text-white border-b border-white/10"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none z-0"
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Solid dark veil — no gradient */}
      <div className="absolute inset-0 bg-[#0a1128]/55 z-0" aria-hidden="true" />
      {/* Soft accent glow blob */}
      <div
        className="absolute top-1/4 left-10 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none z-0"
        style={{ background: `${accent}26` }}
        aria-hidden="true"
      />

      {/* Scroll-driven text content */}
      <motion.div
        style={{ x: textX, opacity: textOpacity }}
        className="container mx-auto px-6 sm:px-10 lg:px-16 max-w-7xl relative z-10 my-auto"
      >
        <div className="flex flex-col items-start text-left max-w-3xl space-y-6">
          {/* Top Glass Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white shadow-2xl">
            {badgeIcon}
            <span>{badgeLabel}</span>
          </div>

          {/* Subline Tag */}
          <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em]" style={{ color: accent }}>
            {subline}
          </span>

          {/* Main Headline — solid color, no gradient */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.02] text-white font-heading">
            {headline}
            <br />
            <span style={{ color: accent }}>{headlineAccent}</span>
          </h2>

          {/* Accent Rule */}
          <motion.div
            style={{ scaleX: ruleScale }}
            className="w-20 h-1 origin-left rounded-full"
          >
            <div className="w-full h-full rounded-full" style={{ background: accent }} />
          </motion.div>

          {/* Description */}
          <p className="text-gray-200 text-base sm:text-xl font-medium leading-relaxed">
            {description}
          </p>

          {/* Value Tags */}
          <div className="flex flex-wrap gap-3 pt-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-bold text-gray-100"
              >
                <TagIcon className="w-4 h-4" color={tagIconColor} />
                <span>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border border-white/40 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function VisionMissionSection() {
  return (
    <section id="vision-mission" className="relative w-full overflow-hidden bg-[#0a1128]">
      {/* MISSION — first */}
      <FullBleedPanel
        badgeLabel="Our Mission"
        badgeIcon={<Target className="w-4 h-4 text-[#D8232A]" />}
        subline="EVERYDAY IMPACT & EXECUTION"
        headline="From Raw Talent"
        headlineAccent="To National Sporting Drama"
        description="To design inclusive, professionally-managed sports leagues that discover raw talent from every corner of India, entertain fans with genuine sporting drama, and deliver real commercial ROI to our partners."
        tags={["Inclusive Design", "Raw Talent Scouting", "Broadcast Grade", "Sponsor ROI"]}
        tagsIcon={ShieldCheck}
        accent="#D8232A"
        tagIconColor="#D8232A"
        videoSrc="/0_Strategy_Strategic_1920x1080.mp4"
      />

      {/* VISION — second */}
      <FullBleedPanel
        badgeLabel="Our Vision"
        badgeIcon={<Eye className="w-4 h-4 text-amber-400" />}
        subline="THE FUTURE WE ARE BUILDING"
        headline="Putting Overlooked Sports"
        headlineAccent="On The Global Map"
        description="To become India's most versatile and trusted sports management firm — known for transforming homegrown passion into national legacies, and giving the next generation of champions a real stage to shine."
        tags={["Versatility", "National Visibility", "Grassroots Potential", "Legacy Building"]}
        tagsIcon={CheckCircle2}
        accent="#FBBF24"
        tagIconColor="#FBBF24"
        videoSrc="/GettyImages-1355556495.mp4"
      />
    </section>
  );
}
