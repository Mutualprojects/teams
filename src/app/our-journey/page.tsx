"use client";

import { motion, Variants } from "framer-motion";
import {
  Trophy,
  Users,
  Zap,
  Activity,
  Globe,
  Goal,
  ChevronDown,
  Sparkles,
  Clock,
  Heart,
  TrendingUp,
} from "lucide-react";

/* ── Animation Variants ── */
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const heroTitleContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const heroWordVariants: Variants = {
  hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", damping: 15, stiffness: 100 },
  },
};

/* ── Journey Milestones Data ── */
const milestones = [
  {
    year: "2012",
    title: "The Assembly",
    subtitle: "Dreaming Beyond Cricket",
    description: "A small collective of sports creators, players, and visionary builders assemble. Ground logistics expertise begins, with a dream to professionalize sports outside mainstream cricket in Tier-2 and Tier-3 cities.",
    icon: <Users className="w-6 h-6" />,
    color: "#1B2A5E",
    lightBg: "bg-[#1B2A5E]/10",
    textColor: "text-[#1B2A5E]",
    borderColor: "border-[#1B2A5E]/20",
    metric: "Initial Crew Formed",
  },
  {
    year: "2016",
    title: "International Stage & Gridiron",
    subtitle: "Friendship Bowl & National Championship",
    description: "Historic execution of the American Football Championship and the Friendship Bowl (India 🇮🇳 vs UAE 🇦🇪) at Gachibowli Stadium, Hyderabad. Setting new standards in stadium event infrastructure and tactical sport broadcast.",
    icon: <Globe className="w-6 h-6" />,
    color: "#D8232A",
    lightBg: "bg-[#D8232A]/10",
    textColor: "text-[#D8232A]",
    borderColor: "border-[#D8232A]/20",
    metric: "India vs UAE Clash",
  },
  {
    year: "2017",
    title: "Grassroots Expansion",
    subtitle: "Sky Kings 5-A-Side & Youth Carnivals",
    description: "Shifting the target to youth playmaking and talent scouting. Launching structured 5-A-Side soccer formats and youth carnivals across Hyderabad, identifying next-generation stars from city academies.",
    icon: <Goal className="w-6 h-6" />,
    color: "#1B2A5E",
    lightBg: "bg-[#1B2A5E]/10",
    textColor: "text-[#1B2A5E]",
    borderColor: "border-[#1B2A5E]/20",
    metric: "Scouted 1000+ Kids",
  },
  {
    year: "2018",
    title: "TPK Regional Revolution",
    subtitle: "Telangana Premier Kabaddi",
    description: "Bringing Kabaddi to a television-worthy professional platform. conceptualizing and running the Telangana Premier Kabaddi (TPK), capturing the hearts of millions of rural sports fans and creating immediate local stars.",
    icon: <Trophy className="w-6 h-6" />,
    color: "#D8232A",
    lightBg: "bg-[#D8232A]/10",
    textColor: "text-[#D8232A]",
    borderColor: "border-[#D8232A]/20",
    metric: "Live TV Broadcasted",
  },
  {
    year: "2020",
    title: "Inclusivity & Courage",
    subtitle: "Disabled Cricket Championship",
    description: "Delivering one of our most emotionally impactful events — a dedicated, professional-grade disabled cricket tournament. Proving that sports on-ground is about passion, heart, and indomitable courage.",
    icon: <Heart className="w-6 h-6" />,
    color: "#1B2A5E",
    lightBg: "bg-[#1B2A5E]/10",
    textColor: "text-[#1B2A5E]",
    borderColor: "border-[#1B2A5E]/20",
    metric: "Para-sports Focus",
  },
  {
    year: "2022",
    title: "Women in Sports",
    subtitle: "Women's Super Kabaddi League",
    description: "Promoting diversity and professional growth for female athletes. Launching a professional premier stage for rising female Kabaddi superstars, backed by national media visibility.",
    icon: <Activity className="w-6 h-6" />,
    color: "#D8232A",
    lightBg: "bg-[#D8232A]/10",
    textColor: "text-[#D8232A]",
    borderColor: "border-[#D8232A]/20",
    metric: "Super League Matched",
  },
  {
    year: "2024",
    title: "Premium Combat & Corporate",
    subtitle: "State Boxing & Corporate Olympiads",
    description: "Branching out into premium boxing ring spectacles and corporate engagement. Running televised combat boxing meets alongside multi-sport corporate cups for 50+ corporate brands.",
    icon: <Zap className="w-6 h-6" />,
    color: "#1B2A5E",
    lightBg: "bg-[#1B2A5E]/10",
    textColor: "text-[#1B2A5E]",
    borderColor: "border-[#1B2A5E]/20",
    metric: "5000+ Combat Fans",
  },
  {
    year: "2026",
    title: "The Team 7 Era",
    subtitle: "Infrastructure of Opportunity",
    description: "Consolidating 14 years of ground logistics, league conceptualization, and elite stadium expertise under the unified banner of Team 7 Sports Management. Ready to redefine Indian sports leagues forever.",
    icon: <Sparkles className="w-6 h-6" />,
    color: "#D8232A",
    lightBg: "bg-[#D8232A]/10",
    textColor: "text-[#D8232A]",
    borderColor: "border-[#D8232A]/20",
    metric: "Unified Powerhouse",
  },
];

export default function OurJourneyPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: "var(--bg)" }}>

      {/* ══════════════════════════════════════════════════
           VIDEO HERO SECTION (BOTTOM-RIGHT ALIGNED CONTENT)
         ══════════════════════════════════════════════════ */}
      <section className="relative w-full h-[100vh] min-h-[600px] flex items-end overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/94209.jpg"
        >
          <source src="/magnific_cinematic-videophoto-prom_u5qm9mhQLD.mp4" type="video/mp4" />
        </video>

        {/* Multi-layer gradient overlays for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a1128]/85 via-[#0a1128]/35 to-transparent" />
        <div className="absolute inset-0 bg-[#0a1128]/25" />

        {/* Floating top-left badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-28 sm:top-32 left-6 sm:left-10 z-20"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <Clock className="w-4 h-4 text-[#D8232A]" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.15em] text-white/90">
              Est. 2012 — The Evolution
            </span>
          </div>
        </motion.div>

        {/* Bottom-Right Aligned Content Block */}
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-16 sm:pb-20 lg:pb-24 flex justify-end">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={heroTitleContainer}
              className="max-w-2xl text-right flex flex-col items-end"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight text-white mb-6 drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)] flex flex-col items-end">
                <span className="text-white/90">Our</span>
                <span className="bg-gradient-to-r from-[#D8232A] to-[#ff4d54] bg-clip-text text-transparent inline-block">
                  Journey
                </span>
              </h1>

              <motion.p
                variants={heroWordVariants}
                className="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed font-semibold mb-8 max-w-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              >
                14 years of ground logistics, league conceptualization, and elite stadium execution.
                We build the platforms where raw talent meets national spotlights.
              </motion.p>

              {/* Stats Row */}
              <div className="flex gap-6 sm:gap-8 justify-end">
                <motion.div variants={heroWordVariants} className="flex flex-col items-end">
                  <div className="text-2xl sm:text-3xl font-black text-white leading-none drop-shadow-lg">14+</div>
                  <div className="text-[10px] sm:text-xs font-bold text-white/50 uppercase tracking-widest mt-1">Years Grounded</div>
                </motion.div>
                <div className="w-[1px] h-8 bg-white/20 self-center" />
                <motion.div variants={heroWordVariants} className="flex flex-col items-end">
                  <div className="text-2xl sm:text-3xl font-black text-white leading-none drop-shadow-lg">50+</div>
                  <div className="text-[10px] sm:text-xs font-bold text-white/50 uppercase tracking-widest mt-1">Leagues Executed</div>
                </motion.div>
                <div className="w-[1px] h-8 bg-white/20 self-center" />
                <motion.div variants={heroWordVariants} className="flex flex-col items-end">
                  <div className="text-2xl sm:text-3xl font-black text-[#D8232A] leading-none drop-shadow-lg">∞</div>
                  <div className="text-[10px] sm:text-xs font-bold text-white/50 uppercase tracking-widest mt-1">Athletes Impacted</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Our Story</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
           TIMELINE SECTION
         ══════════════════════════════════════════════════ */}
      <section className="relative w-full py-16 sm:py-24 md:py-32 overflow-hidden bg-transparent">
        {/* Decorative Background Lines */}
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[50%] bg-gradient-to-br from-[#D8232A]/5 to-transparent blur-3xl pointer-events-none z-0" />
        <div className="absolute -bottom-[10%] -right-[5%] w-[50%] h-[60%] bg-gradient-to-tl from-[#1B2A5E]/5 to-transparent blur-3xl pointer-events-none z-0" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

          {/* Header */}
          <motion.div
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="tag-badge">
              <TrendingUp className="w-4 h-4 text-[#D8232A]" />
              <span>Timeline of Growth</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1B2A5E] tracking-tight leading-tight mb-6">
              Our Journey Over the{" "}
              <span className="bg-gradient-to-r from-[#D8232A] to-red-600 bg-clip-text text-transparent">
                Last 14 Years
              </span>
            </h2>

            <p className="text-slate-700 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              From our humble on-ground beginnings to building televised leagues and international arenas,
              discover the milestones that shaped Team 7.
            </p>
          </motion.div>

          {/* Timeline Node Chain */}
          <div className="relative max-w-5xl mx-auto">
            {/* Center Line for Desktop, Left Line for Mobile */}
            <div className="absolute left-8 lg:left-1/2 top-4 bottom-4 w-1 bg-slate-200 -translate-x-1/2 z-0" />
            <div className="absolute left-8 lg:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#D8232A] via-[#1B2A5E] to-[#D8232A] -translate-x-1/2 z-0 opacity-40" />

            {/* Milestones loop */}
            <motion.div
              className="space-y-12 sm:space-y-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {milestones.map((milestone, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <div key={idx} className="relative flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0 font-sans">

                    {/* Time node point */}
                    <div className="absolute left-8 lg:left-1/2 w-8 h-8 rounded-full bg-white border-4 -translate-x-1/2 top-6 z-10 shadow-md flex items-center justify-center transition-all duration-300"
                      style={{ borderColor: milestone.color }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: milestone.color }} />
                    </div>

                    {/* Left side column */}
                    <div className={`w-full lg:w-[46%] pl-16 lg:pl-0 flex flex-col justify-center ${isEven ? "lg:text-right lg:items-end order-2 lg:order-1" : "order-2 lg:order-2 lg:opacity-0 pointer-events-none select-none lg:h-0 overflow-hidden"
                      }`}>
                      {isEven && (
                        <motion.div
                          variants={isEven ? fadeInLeft : fadeInRight}
                          className="group relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border-t-4 border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border-x border-b"
                          style={{ borderTopColor: milestone.color }}
                        >
                          <span className="text-3xl sm:text-4xl font-black mb-1 block" style={{ color: milestone.color }}>
                            {milestone.year}
                          </span>
                          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 block mb-2">
                            {milestone.subtitle}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-black text-[#1B2A5E] mb-3">
                            {milestone.title}
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed mb-4">
                            {milestone.description}
                          </p>
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold ${milestone.lightBg} ${milestone.textColor} ${milestone.borderColor}`}>
                            {milestone.icon}
                            <span>{milestone.metric}</span>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Middle Column space */}
                    <div className="hidden lg:block lg:w-[8%] order-2" />

                    {/* Right side column */}
                    <div className={`w-full lg:w-[46%] pl-16 lg:pl-0 flex flex-col justify-center ${!isEven ? "lg:text-left lg:items-start order-2 lg:order-3" : "order-2 lg:order-1 lg:opacity-0 pointer-events-none select-none lg:h-0 overflow-hidden"
                      }`}>
                      {!isEven && (
                        <motion.div
                          variants={!isEven ? fadeInRight : fadeInLeft}
                          className="group relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border-t-4 border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border-x border-b"
                          style={{ borderTopColor: milestone.color }}
                        >
                          <span className="text-3xl sm:text-4xl font-black mb-1 block" style={{ color: milestone.color }}>
                            {milestone.year}
                          </span>
                          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 block mb-2">
                            {milestone.subtitle}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-black text-[#1B2A5E] mb-3">
                            {milestone.title}
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed mb-4">
                            {milestone.description}
                          </p>
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold ${milestone.lightBg} ${milestone.textColor} ${milestone.borderColor}`}>
                            {milestone.icon}
                            <span>{milestone.metric}</span>
                          </div>
                        </motion.div>
                      )}
                    </div>

                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
           VISION CARD AT THE BOTTOM
         ══════════════════════════════════════════════════ */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-[#1B2A5E] via-[#162452] to-[#0c1430] rounded-[2rem] p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl shadow-[#1B2A5E]/40 border border-white/10"
        >
          {/* Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-red-600/20 blur-3xl pointer-events-none z-0" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none z-0" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Looking To The Future</span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-5 font-sans">
              The Next Era of{" "}
              <span className="bg-gradient-to-r from-red-400 via-[#D8232A] to-rose-400 bg-clip-text text-transparent">
                Indian Leagues
              </span>
            </h3>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal mb-8 max-w-2xl">
              We continue to expand our vision. By providing high-end production, television broadcasts,
              and professional tournament execution, we are paving the way for athletes in boxing, basketball,
              kabaddi, athletics, and emerging sports to secure their future and inspire the nation.
            </p>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border-l-4 border-l-[#D8232A] border-y border-r border-white/10 shadow-lg text-white text-base sm:text-lg font-bold italic leading-relaxed">
              &ldquo;The journey is long, but our commitment remains unchanged: to design, build, and deliver
              the professional stages that our athletes deserve.&rdquo;
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
