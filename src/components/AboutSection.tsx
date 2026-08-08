"use client";

import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Trophy,
  Target,
  Flame,
  Users,
  Shield,
  Zap,
  ArrowRight,
  ArrowLeft,
  Medal,
  Activity,
  Globe,
  Goal,
} from "lucide-react";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function AboutSection() {
  const [activeProperty, setActiveProperty] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const pastProperties = [
    {
      id: 1,
      title: "Telangana Premier Kabaddi (TPK)",
      tag: "Regional Flagship",
      desc: "Bringing a sport deeply woven into rural Telangana's identity onto a professional, television-worthy stage.",
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7" />,
      stat: "TV Broadcasted",
      color: "#1B2A5E",
      lightBg: "bg-[#1B2A5E]/10",
      textColor: "text-[#1B2A5E]",
      borderColor: "border-[#1B2A5E]/20",
    },
    {
      id: 2,
      title: "UBA Basketball League",
      tag: "Pro League",
      desc: "Giving India's fast-growing basketball community the structured, high-energy platform it deserved.",
      icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7" />,
      stat: "National Reach",
      color: "#D8232A",
      lightBg: "bg-[#D8232A]/10",
      textColor: "text-[#D8232A]",
      borderColor: "border-[#D8232A]/20",
    },
    {
      id: 3,
      title: "Disabled Cricket Tournament",
      tag: "Inclusive Sports",
      desc: "Proving that determination on the field has nothing to do with physical ability, and everything to do with heart.",
      icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7" />,
      stat: "Heart & Courage",
      color: "#1B2A5E",
      lightBg: "bg-[#1B2A5E]/10",
      textColor: "text-[#1B2A5E]",
      borderColor: "border-[#1B2A5E]/20",
    },
    {
      id: 4,
      title: "Floodlight Football Tournaments",
      tag: "Night Thrills",
      desc: "Turning ordinary evenings into prime-time football drama with packed floodlit stadium arenas.",
      icon: <Flame className="w-6 h-6 sm:w-7 sm:h-7" />,
      stat: "Packed Stadiums",
      color: "#D8232A",
      lightBg: "bg-[#D8232A]/10",
      textColor: "text-[#D8232A]",
      borderColor: "border-[#D8232A]/20",
    },
    {
      id: 5,
      title: "American Football Leagues",
      tag: "Emerging Sport",
      desc: "Introducing a high-octane global sport to Indian audiences with local flavour and energy.",
      icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7" />,
      stat: "Pioneer League",
      color: "#1B2A5E",
      lightBg: "bg-[#1B2A5E]/10",
      textColor: "text-[#1B2A5E]",
      borderColor: "border-[#1B2A5E]/20",
    },
    {
      id: 6,
      title: "Corporate Leagues",
      tag: "Workforce Cup",
      desc: "Reminding India's workforce that the competitive spirit doesn't stop at the office door.",
      icon: <Trophy className="w-6 h-6 sm:w-7 sm:h-7" />,
      stat: "50+ Corporate Brands",
      color: "#D8232A",
      lightBg: "bg-[#D8232A]/10",
      textColor: "text-[#D8232A]",
      borderColor: "border-[#D8232A]/20",
    },
    {
      id: 7,
      title: "State Boxing & Combat Championship",
      tag: "Combat Arena",
      desc: "Bringing the grit and determination of state-level fighters into a premium televised tournament format.",
      icon: <Target className="w-6 h-6 sm:w-7 sm:h-7" />,
      stat: "5000+ Live Attendees",
      color: "#1B2A5E",
      lightBg: "bg-[#1B2A5E]/10",
      textColor: "text-[#1B2A5E]",
      borderColor: "border-[#1B2A5E]/20",
    },
    {
      id: 8,
      title: "Inter-University Athletic Meet",
      tag: "Olympic Track",
      desc: "Deploying professional-grade timing systems to elevate college athletics to international standards.",
      icon: <Medal className="w-6 h-6 sm:w-7 sm:h-7" />,
      stat: "30+ Universities",
      color: "#D8232A",
      lightBg: "bg-[#D8232A]/10",
      textColor: "text-[#D8232A]",
      borderColor: "border-[#D8232A]/20",
    },
    {
      id: 9,
      title: "Women's Super Kabaddi League",
      tag: "Women in Sports",
      desc: "Creating a professional premier stage for rising female kabaddi athletes to show their dominance.",
      icon: <Goal className="w-6 h-6 sm:w-7 sm:h-7" />,
      stat: "National Broadcast",
      color: "#1B2A5E",
      lightBg: "bg-[#1B2A5E]/10",
      textColor: "text-[#1B2A5E]",
      borderColor: "border-[#1B2A5E]/20",
    },
    {
      id: 10,
      title: "Grassroots Tennis Tour",
      tag: "Junior Circuit",
      desc: "Providing structured training and junior tour tournaments across tier-2 cities.",
      icon: <Activity className="w-6 h-6 sm:w-7 sm:h-7" />,
      stat: "1200+ Junior Players",
      color: "#D8232A",
      lightBg: "bg-[#D8232A]/10",
      textColor: "text-[#D8232A]",
      borderColor: "border-[#D8232A]/20",
    },
  ];

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const el = scrollerRef.current;
      if (!el) return;

      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScrollLeft - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const card = el.querySelector<HTMLElement>(".legacy-card-item");
        const step = card ? card.offsetWidth + 24 : 340;
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".legacy-card-item");
    const step = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section id="about" className="relative w-full py-12 sm:py-16 md:py-20 overflow-hidden bg-transparent">
      {/* Ambient Background Glows */}
      <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[50%] bg-gradient-to-br from-[#D8232A]/5 to-transparent blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-[10%] -right-[5%] w-[50%] h-[60%] bg-gradient-to-tl from-[#1B2A5E]/5 to-transparent blur-3xl pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="tag-badge">
            <Target className="w-4 h-4 text-[#D8232A]" />
            <span>Who We Are</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[#1B2A5E] tracking-tight leading-tight mb-4">
            Building the Infrastructure of Opportunity{" "}
            <span className="bg-gradient-to-r from-[#D8232A] to-red-600 bg-clip-text text-transparent">
              Across India&apos;s Grassroots
            </span>
          </h2>

          <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
            We are Team 7 Sports Management Private Limited — built by sports creators
            who believe talent shouldn&apos;t need a metro city or stroke of luck to be discovered.
          </p>
        </motion.div>

        {/* 2-Column Story Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          {/* Card 1: The Gap We Close */}
          <motion.div
            variants={fadeIn}
            className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border-t-4 border-t-[#1B2A5E] border-x border-b border-slate-200/80 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute -top-6 -right-6 text-[#1B2A5E]/[0.04] pointer-events-none rotate-[-12deg] group-hover:scale-110 transition-transform duration-500">
              <Medal className="w-52 h-52 sm:w-64 sm:h-64" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#1B2A5E] text-white flex items-center justify-center shadow-lg shadow-[#1B2A5E]/30 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#1B2A5E]/60 block mb-0.5">Core Purpose</span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#1B2A5E]">
                    The Gap We Close
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5 font-normal">
                India has never lacked athletes. What it has lacked, for too long, is the infrastructure
                of opportunity — the leagues, the visibility, the professional ecosystem that turns a
                promising young player into a household name.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#1B2A5E]/5 border-l-4 border-l-[#1B2A5E] border border-slate-100">
              <p className="text-[#1B2A5E] text-base sm:text-lg font-bold leading-relaxed">
                We don&apos;t just organise matches. We build ecosystems where every athlete gets{" "}
                <strong className="text-[#1B2A5E] font-black underline decoration-[#1B2A5E]/40 decoration-2 underline-offset-4">
                  a real, professionally run stage to compete on.
                </strong>
              </p>
            </div>
          </motion.div>

          {/* Card 2: 14 Years On-Ground */}
          <motion.div
            variants={fadeIn}
            className="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border-t-4 border-t-[#D8232A] border-x border-b border-slate-200/80 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute -top-6 -right-6 text-[#D8232A]/[0.04] pointer-events-none rotate-[12deg] group-hover:scale-110 transition-transform duration-500">
              <Flame className="w-52 h-52 sm:w-64 sm:h-64" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#D8232A] text-white flex items-center justify-center shadow-lg shadow-[#D8232A]/30 group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#D8232A]/70 block mb-0.5">Proven Track Record</span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#D8232A]">
                    14 Years On-Ground
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5 font-normal">
                Team 7 Sports Management is a new name, but not a new team. Behind it stands 14 years of
                hands-on execution — learned on match days, in stadium logistics, and in the quiet
                satisfaction of watching athletes perform.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50/50 border border-red-100">
              <div className="font-black text-[#D8232A] text-sm sm:text-base mb-1.5 flex items-center gap-2">
                <Goal className="w-5 h-5 text-[#D8232A]" />
                <span>Core Leadership Commitment</span>
              </div>
              <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
                Indian audiences will show up passionately for sports beyond cricket when given professional quality.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Legacy Properties Header & Horizontal Carousel */}
        <div className="mb-14 sm:mb-20">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div>
              <div className="tag-badge mb-3">
                <Trophy className="w-4 h-4 text-[#D8232A]" />
                <span>Our Portfolio</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1B2A5E] tracking-tight">
                Memorable Properties{" "}
                <span className="bg-gradient-to-r from-[#D8232A] to-red-600 bg-clip-text text-transparent">
                  Delivered By Us
                </span>
              </h3>
            </div>

            {/* Carousel Nav Controls */}
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
              <button
                type="button"
                aria-label="Scroll left"
                onClick={() => scrollByCard(-1)}
                className="w-11 h-11 rounded-full border border-slate-200/80 bg-white/90 backdrop-blur-md text-[#1B2A5E] hover:bg-[#1B2A5E] hover:text-white transition-all duration-200 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md active:scale-95 outline-none"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="Scroll right"
                onClick={() => scrollByCard(1)}
                className="w-11 h-11 rounded-full border border-slate-200/80 bg-white/90 backdrop-blur-md text-[#1B2A5E] hover:bg-[#1B2A5E] hover:text-white transition-all duration-200 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md active:scale-95 outline-none"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <motion.div
            ref={scrollerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 -mx-2 px-2 scroll-smooth scrollbar-none touch-pan-x"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {pastProperties.map((prop) => {
              const isHovered = activeProperty === prop.id;
              return (
                <motion.div
                  key={prop.id}
                  variants={fadeIn}
                  onMouseEnter={() => setActiveProperty(prop.id)}
                  onMouseLeave={() => setActiveProperty(null)}
                  className={`legacy-card-item snap-start shrink-0 w-[270px] sm:w-[320px] group relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 border border-slate-200/80 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden ${
                    isHovered
                      ? "shadow-2xl shadow-[#1B2A5E]/15 -translate-y-2 border-slate-300"
                      : "shadow-lg shadow-slate-900/5 hover:shadow-xl"
                  }`}
                >
                  {/* Glowing Top Indicator Bar */}
                  <div
                    className="absolute top-0 left-6 right-6 h-1.5 rounded-b-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: prop.color }}
                  />

                  <div>
                    {/* Header: Icon + Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${prop.lightBg} ${prop.textColor} shadow-xs ${
                          isHovered ? "scale-110 rotate-3 shadow-md" : ""
                        }`}
                      >
                        {prop.icon}
                      </div>

                      <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full border transition-colors ${prop.lightBg} ${prop.textColor} ${prop.borderColor}`}>
                        {prop.tag}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-black text-[#1B2A5E] group-hover:text-[#D8232A] transition-colors mb-2 leading-snug">
                      {prop.title}
                    </h4>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4 font-normal min-h-[3.5rem]">
                      {prop.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between font-extrabold text-sm" style={{ color: prop.color }}>
                    <span className="flex items-center gap-2">
                      <Activity className="w-4 h-4" />
                      <span>{prop.stat}</span>
                    </span>

                    <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isHovered ? "bg-[#1B2A5E] text-white translate-x-1.5 shadow-md" : "bg-slate-100 text-slate-400"
                    }`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Vision Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-[#1B2A5E] via-[#162452] to-[#0c1430] rounded-3xl sm:rounded-[2rem] p-7 sm:p-10 md:p-12 overflow-hidden shadow-2xl shadow-[#1B2A5E]/40 border border-white/10"
        >
          {/* Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-red-600/20 blur-3xl pointer-events-none z-0" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none z-0" />

          {/* Background Trophy Watermark */}
          <div className="absolute right-6 -bottom-6 text-white/5 pointer-events-none -rotate-12 hidden md:block z-0">
            <Trophy className="w-64 h-64 md:w-80 md:h-80" strokeWidth={1} />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Beyond The Boundary Rope</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-4">
              Our Vision:{" "}
              <span className="bg-gradient-to-r from-red-400 via-[#D8232A] to-rose-400 bg-clip-text text-transparent">
                Beyond Cricket
              </span>
            </h3>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal mb-6 max-w-2xl">
              Cricket will always be personal to us. But our ambition doesn&apos;t stop at the
              boundary rope. We believe Olympic sports like athletics, badminton, and basketball,
              along with rising non-Olympic formats, deserve the same professional respect, media
              attention, and fan following that cricket has enjoyed for decades.
            </p>

            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-2xl bg-white/5 backdrop-blur-xl border-l-4 border-l-[#D8232A] border-y border-r border-white/10 shadow-lg text-white text-base sm:text-lg font-bold italic leading-relaxed">
              &ldquo;Every athlete, in every sport, deserves their moment under the lights — and
              Team 7 intends to build that moment for them.&rdquo;
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}