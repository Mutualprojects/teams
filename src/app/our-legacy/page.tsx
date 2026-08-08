"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Trophy,
  LayoutGrid,
  Filter,
  Award,
  Calendar,
  ChevronDown,
  Flame,
  MapPin,
  Globe,
  Building2,
  Users,
  Medal,
} from "lucide-react";
import { legacyEventsData } from "@/data/legacyEventsData";
import { LegacyGridCard } from "@/components/legacy/LegacyGridCard";
import { LegacyEventModal } from "@/components/legacy/LegacyEventModal";
import type { EventCategory, LegacyEvent } from "@/types/legacy";

const categories: EventCategory[] = ["All", "Pro League", "International", "Corporate", "Grassroots"];

const categoryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  All: Trophy,
  "Pro League": Medal,
  International: Globe,
  Corporate: Building2,
  Grassroots: Users,
};

export default function OurLegacyPage() {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>("All");
  const [selectedEvent, setSelectedEvent] = useState<LegacyEvent | null>(null);

  const filteredEvents = useMemo(
    () =>
      selectedCategory === "All"
        ? legacyEventsData
        : legacyEventsData.filter((event) => event.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <main
      className="relative min-h-screen w-full overflow-x-hidden pb-12"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-[10%] -left-[10%] h-[50%] w-[60%] rounded-full bg-[#D8232A]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-[10%] -right-[10%] h-[50%] w-[60%] rounded-full bg-[#1B2A5E]/5 blur-[120px]" />
      <div className="pointer-events-none absolute top-[40%] left-[50%] -translate-x-1/2 h-[30%] w-[40%] rounded-full bg-amber-500/3 blur-[100px]" />

      {/* ══════════════════════════════════════════════════
           FULL-WIDTH HERO BANNER
         ══════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[92vh] sm:min-h-[88vh] flex items-end overflow-hidden">
        {/* Hero Background Image */}
        <Image
          src="/fe345c3a-59ec-4dc6-a4cb-6c485e2ca7d8.jpg"
          alt="Our Legacy — National Sports"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Multi-layer gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128]/70 via-[#0a1128]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/90 via-[#0a1128]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#1B2A5E]/40" />

        {/* Floating top-left badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-28 sm:top-32 left-6 sm:left-10 z-20"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <Sparkles className="w-4 h-4 text-[#D8232A]" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.15em] text-white/90">
              Est. 2012 — Our Legacy
            </span>
          </div>
        </motion.div>

        {/* ── Right-Bottom Content Block ── */}
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-10 sm:pb-12 lg:pb-14">
            <div className="flex justify-end">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-full sm:max-w-xl lg:max-w-2xl"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] tracking-tight text-white mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  Moments That{" "}
                  <span className="bg-gradient-to-r from-[#D8232A] to-[#ff4d54] bg-clip-text text-transparent">
                    Shaped
                  </span>
                  <br />
                  <span className="text-white/95">Indian Sports</span>
                </h1>

                <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed font-medium mb-7 max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                  14 years of building the infrastructure behind India&apos;s grassroots sports revolution — 
                  from floodlit stadiums to international exhibition matches.
                </p>

                {/* Stats row */}
                <div className="flex flex-wrap gap-4 sm:gap-6 mb-7">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#D8232A]/20 border border-[#D8232A]/30 flex items-center justify-center">
                      <Flame className="w-5 h-5 text-[#D8232A]" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-white leading-none drop-shadow-md">14+</div>
                      <div className="text-[10px] sm:text-xs font-semibold text-white/50 uppercase tracking-wider">Years</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#D8232A]/20 border border-[#D8232A]/30 flex items-center justify-center">
                      <Award className="w-5 h-5 text-[#D8232A]" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-white leading-none drop-shadow-md">50+</div>
                      <div className="text-[10px] sm:text-xs font-semibold text-white/50 uppercase tracking-wider">Events</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#D8232A]/20 border border-[#D8232A]/30 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#D8232A]" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-white leading-none drop-shadow-md">10+</div>
                      <div className="text-[10px] sm:text-xs font-semibold text-white/50 uppercase tracking-wider">Cities</div>
                    </div>
                  </div>
                </div>

                {/* Bottom separator + CTA hint */}
                <div className="pt-5 border-t border-white/15 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-white/50 flex items-center gap-2 drop-shadow-md">
                    <Calendar className="w-4 h-4 text-[#D8232A]" />
                    Explore our complete journey below
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#D8232A]/20 border border-[#D8232A]/30 flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-[#D8232A]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-white/40" />
          </motion.div>
        </motion.div>
      </section>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-12 sm:pt-16 lg:pt-20">

        {/* ── Category Filter Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8 sm:mb-10"
        >
          {/* Filter label */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Filter size={14} className="text-[#1B2A5E]/40" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B2A5E]/40">
              Filter by category
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {categories.map((category) => {
              const isActive = category === selectedCategory;
              const IconComponent = categoryIconMap[category] || Trophy;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={isActive}
                  className={`group relative rounded-full px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider transition-all duration-300 sm:px-6 sm:py-3 sm:text-sm flex items-center gap-2 ${
                    isActive
                      ? "bg-[#1B2A5E] text-white shadow-xl shadow-[#1B2A5E]/25 scale-105"
                      : "bg-white/80 text-[#1B2A5E]/80 border border-slate-200/80 backdrop-blur-md hover:bg-white hover:shadow-lg hover:text-[#1B2A5E] hover:border-slate-300"
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isActive ? "text-amber-400" : "text-[#D8232A]"}`} />
                  <span>{category}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 rounded-full bg-[#1B2A5E] -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Event count */}
          <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-[#4d5d85]">
            <Trophy className="h-4 w-4 text-[#D8232A]" />
            <span>
              {filteredEvents.length} {filteredEvents.length === 1 ? "event" : "events"}
              {selectedCategory !== "All" && (
                <span className="text-[#1B2A5E]/40"> in {selectedCategory}</span>
              )}
            </span>
          </div>
        </motion.div>

        {/* ── Grid Layout ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {filteredEvents.length === 0 ? (
              <div className="text-center py-20">
                <LayoutGrid className="w-12 h-12 text-[#1B2A5E]/20 mx-auto mb-4" />
                <p className="text-lg font-semibold text-[#1B2A5E]/50">
                  No events found in this category.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 auto-rows-[minmax(340px,auto)]">
                {filteredEvents.map((event, index) => (
                  <LegacyGridCard
                    key={event.id}
                    event={event}
                    index={index}
                    onSelect={setSelectedEvent}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom Decorative Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-16 sm:mt-20 relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A5E] via-[#162452] to-[#0c1430]" />
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-red-600/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 p-8 sm:p-10 md:p-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-5">
              <Sparkles className="w-4 h-4 text-[#D8232A]" />
              <span>Our Journey Continues</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-4">
              Every Event, A{" "}
              <span className="bg-gradient-to-r from-red-400 via-[#D8232A] to-rose-400 bg-clip-text text-transparent">
                Milestone
              </span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-xl mx-auto">
              From our first football tournament under the floodlights to international exhibition
              matches — every event is a step toward building India&apos;s grassroots sports ecosystem.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Event Detail Modal */}
      <LegacyEventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </main>
  );
}
