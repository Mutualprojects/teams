"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Layers, ArrowUpRight, Trophy, Sparkles } from "lucide-react";
import { LegacyEvent } from "@/types/legacy";

interface LegacyGridCardProps {
  event: LegacyEvent;
  index: number;
  onSelect: (event: LegacyEvent) => void;
}

const categoryStyles: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  "Pro League": {
    bg: "bg-gradient-to-r from-[#D8232A] to-rose-600",
    text: "text-white",
    border: "border-red-400/30",
    glow: "shadow-[0_0_20px_rgba(216,35,42,0.3)]",
  },
  International: {
    bg: "bg-gradient-to-r from-amber-500 to-orange-500",
    text: "text-white",
    border: "border-amber-300/30",
    glow: "shadow-[0_0_20px_rgba(245,158,11,0.3)]",
  },
  Corporate: {
    bg: "bg-gradient-to-r from-[#1B2A5E] to-indigo-600",
    text: "text-white",
    border: "border-blue-400/30",
    glow: "shadow-[0_0_20px_rgba(27,42,94,0.3)]",
  },
  Grassroots: {
    bg: "bg-gradient-to-r from-emerald-500 to-teal-500",
    text: "text-white",
    border: "border-emerald-300/30",
    glow: "shadow-[0_0_20px_rgba(16,185,129,0.3)]",
  },
};

export const LegacyGridCard: React.FC<LegacyGridCardProps> = ({
  event,
  index,
  onSelect,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const style = categoryStyles[event.category] || categoryStyles["Pro League"];

  // Alternate tall / standard rows for visual rhythm
  const isTall = index % 3 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      role="button"
      tabIndex={0}
      aria-label={`View ${event.title} gallery`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(event);
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(event)}
      className={`group relative cursor-pointer rounded-[1.75rem] overflow-hidden border border-white/15 transition-all duration-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#D8232A]/60 ${
        isHovered ? `shadow-2xl ${style.glow} -translate-y-2 scale-[1.02]` : "shadow-xl hover:shadow-2xl"
      } ${isTall ? "row-span-2" : ""}`}
      style={{ minHeight: isTall ? 520 : 340 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-transform duration-700 ease-out ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Multi-layer gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/40 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent" />

        {/* Shimmer overlay on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent transition-opacity duration-700 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Glowing top accent bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 transition-all duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        } ${style.bg}`}
      />

      {/* Top Header: Category + Photo Count */}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
        <span
          className={`px-3.5 py-1.5 text-[10px] font-black tracking-[0.1em] uppercase rounded-full backdrop-blur-xl border shadow-lg ${style.bg} ${style.text} ${style.border}`}
        >
          {event.category}
        </span>

        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold text-white/90 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 shadow-sm">
          <Layers size={12} className="text-red-400" />
          <span>{event.images.length}</span>
        </span>
      </div>

      {/* Card Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col">
        {/* Date & Teams row */}
        <div className="flex items-center flex-wrap gap-2.5 mb-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/80 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
            <Calendar size={12} className="text-red-400 shrink-0" />
            {event.date}
          </span>
          {event.teams && (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-300 bg-amber-950/50 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/20">
              <Trophy size={11} className="shrink-0" />
              {event.teams}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className={`text-xl sm:text-2xl font-black text-white leading-tight tracking-tight transition-colors duration-300 ${
            isHovered ? "text-red-100" : ""
          }`}
        >
          {event.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs font-semibold text-white/60 mt-1 line-clamp-1">
          {event.subtitle}
        </p>

        {/* Divider + Bottom row */}
        <div
          className={`flex items-center justify-between mt-4 pt-3.5 border-t transition-all duration-300 ${
            isHovered ? "border-white/20" : "border-white/10"
          }`}
        >
          <div className="flex items-center gap-1.5 text-xs text-white/70">
            <MapPin size={13} className="text-red-400 shrink-0" />
            <span className="truncate max-w-[180px]">{event.location}</span>
          </div>

          <div
            className={`flex items-center gap-1.5 text-xs font-bold transition-all duration-300 ${
              isHovered
                ? "text-white translate-x-0 opacity-100"
                : "text-white/50 -translate-x-2 opacity-0"
            }`}
          >
            <span>Explore</span>
            <div className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>
      </div>

      {/* Corner accent sparkle on hover */}
      <div
        className={`absolute top-14 right-5 transition-all duration-500 ${
          isHovered ? "opacity-100 rotate-12 scale-100" : "opacity-0 rotate-0 scale-50"
        }`}
      >
        <Sparkles size={18} className="text-amber-400/60" />
      </div>
    </motion.div>
  );
};
