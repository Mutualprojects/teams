"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Workflow,
  Swords,
  Accessibility,
  Radio,
  Check,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Service = {
  index: string;
  icon: LucideIcon;
  tag: string;
  title: string;
  desc: string;
  features: string[];
  accent: string;
  gradient: string;
  soft: string;
  glow: string;
};

const services: Service[] = [
  {
    index: "01",
    icon: Workflow,
    tag: "Core",
    title: "League Conceptualization & Execution",
    desc: "From the first whiteboard sketch to the final whistle, we turn sporting ideas into fully realised, professionally run leagues.",
    features: [
      "Franchise & Tournament Architecture",
      "Rulebooks, Technical Governance & Officiating",
      "Team Ownership & Player Draft Systems",
      "Schedule Optimization & League Operations",
    ],
    accent: "#1B2A5E",
    gradient: "linear-gradient(135deg, #1B2A5E 0%, #2f4080 100%)",
    soft: "rgba(27,42,94,0.08)",
    glow: "rgba(27,42,94,0.45)",
  },
  {
    index: "02",
    icon: Swords,
    tag: "Growth",
    title: "Multi-Sport Promotion",
    desc: "Equal investment and equal spotlight for Cricket, Olympic sports, and emerging non-Olympic formats.",
    features: [
      "Olympic Sport Grassroots Leagues",
      "3x3 & 5v5 Basketball Properties",
      "Combat & High-Intensity Formats",
      "Emerging Global Sports Adaptation",
    ],
    accent: "#D8232A",
    gradient: "linear-gradient(135deg, #D8232A 0%, #f03038 100%)",
    soft: "rgba(216,35,42,0.08)",
    glow: "rgba(216,35,42,0.4)",
  },
  {
    index: "03",
    icon: Accessibility,
    tag: "Inclusion",
    title: "Inclusivity in Sports",
    desc: "Carrying forward our commitment to Para-sports and Disabled Cricket, because the scoreboard should never care about ability.",
    features: [
      "Wheelchair & Amputee Cricket Leagues",
      "Para-Athlete Infrastructure & Support",
      "Inclusive Broadcast & Media Coverage",
      "Accessibility-First Stadium Operations",
    ],
    accent: "#1B2A5E",
    gradient: "linear-gradient(135deg, #1B2A5E 0%, #2f4080 100%)",
    soft: "rgba(27,42,94,0.08)",
    glow: "rgba(27,42,94,0.45)",
  },
  {
    index: "04",
    icon: Radio,
    tag: "Experience",
    title: "End-to-End Event Management",
    desc: "Venues, floodlights, broadcasting, officiating, hospitality — every detail that turns a tournament into an experience worth remembering.",
    features: [
      "High-Definition Live Stream & TV Broadcast",
      "Stadium & Floodlight Production",
      "VIP Hospitality & Fan Zones",
      "Commercial Brand Activations",
    ],
    accent: "#D8232A",
    gradient: "linear-gradient(135deg, #D8232A 0%, #f03038 100%)",
    soft: "rgba(216,35,42,0.08)",
    glow: "rgba(216,35,42,0.4)",
  },
];

const headingWords = [
  { text: "Full-Spectrum" },
  { text: "Sports", grad: true },
  { text: "Management", grad: true },
  { text: "Services", grad: true },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const tiltRefs = useRef<Record<number, { rx: (v: number) => void; ry: (v: number) => void }>>({});

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // ── Header masked word reveal ──
        gsap
          .timeline({
            scrollTrigger: { trigger: headerRef.current, start: "top 82%" },
          })
          .from(".services-badge", { y: 18, opacity: 0, duration: 0.6, ease: "power3.out" })
          .from(
            ".reveal-word",
            { yPercent: 120, duration: 1.05, ease: "power4.out", stagger: 0.07 },
            "-=0.35"
          )
          .from(
            ".services-sub",
            { y: 24, opacity: 0, duration: 0.7, ease: "power3.out" },
            "-=0.6"
          );

        // ── Header accent line (scrub) ──
        gsap.fromTo(
          ".services-line",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              end: "bottom 60%",
              scrub: 0.5,
            },
          }
        );

        // ── Cards staggered entrance ──
        gsap.from(".services-card", {
          y: 90,
          opacity: 0,
          rotationX: -14,
          transformOrigin: "50% 110%",
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: gridRef.current, start: "top 82%" },
        });

        // ── Ambient orb parallax ──
        gsap.to(".services-orb-a", {
          y: -90,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
        gsap.to(".services-orb-b", {
          y: 70,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        // ── CTA banner reveal ──
        gsap.from(".services-cta", {
          y: 60,
          opacity: 0,
          scale: 0.96,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".services-cta", start: "top 86%" },
        });

        // ── 3D tilt helpers ──
        gsap.utils.toArray<HTMLElement>(".services-card").forEach((el, i) => {
          tiltRefs.current[i] = {
            rx: gsap.quickTo(el, "rotationX", { duration: 0.5, ease: "power3.out" }),
            ry: gsap.quickTo(el, "rotationY", { duration: 0.5, ease: "power3.out" }),
          };
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          ".services-badge, .reveal-word, .services-sub, .services-line, .services-card, .services-cta",
          { opacity: 1 }
        );
        gsap.set(".services-card, .services-cta", { clearProps: "transform" });
      });
    },
    { scope: sectionRef }
  );

  const handleMove = (e: React.MouseEvent<HTMLElement>, i: number) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);

    const t = tiltRefs.current[i];
    if (t) {
      t.rx((0.5 - py) * 9);
      t.ry((px - 0.5) * 11);
    }
  };

  const handleLeave = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.7,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ background: "transparent", position: "relative" }}
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="services-orb-a absolute -top-24 -left-20 h-[26rem] w-[26rem] rounded-full bg-[#D8232A]/6 blur-[110px]" />
        <div className="services-orb-b absolute -bottom-32 -right-24 h-[30rem] w-[30rem] rounded-full bg-[#1B2A5E]/6 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgba(27,42,94,0.07) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* ─────────── Section Header ─────────── */}
        <div ref={headerRef} className="mx-auto max-w-3xl text-center">
          <div className="services-badge inline-flex items-center gap-2 rounded-full border border-red-200/80 bg-white/90 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#D8232A] shadow-md shadow-red-900/5 backdrop-blur-md sm:text-sm">
            <Sparkles className="h-4 w-4" />
            <span>What We Do</span>
          </div>

          <h2 className="mt-5 text-[clamp(1.9rem,4.6vw,3.25rem)] font-black leading-[1.08] tracking-tight text-[#1B2A5E]">
            {headingWords.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                <span
                  className={
                    w.grad
                      ? "reveal-word inline-block will-change-transform bg-gradient-to-r from-[#D8232A] to-red-600 bg-clip-text text-transparent"
                      : "reveal-word inline-block will-change-transform"
                  }
                >
                  {w.text}
                </span>
                {i < headingWords.length - 1 && <span className="reveal-word"> </span>}
              </span>
            ))}
          </h2>

          <div className="services-line mx-auto mt-6 h-[3px] w-28 rounded-full bg-gradient-to-r from-[#D8232A] via-red-400 to-[#1B2A5E]" />

          <p className="services-sub mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-[#4d5d85] md:text-lg">
            We build the end-to-end framework required to transform grassroots passion
            into commercially viable, high-thrill sporting properties.
          </p>
        </div>

        {/* ─────────── Services Grid ─────────── */}
        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14"
          style={{ perspective: "1400px" }}
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                onMouseMove={(e) => handleMove(e, i)}
                onMouseLeave={handleLeave}
                className="services-card group relative will-change-transform"
                style={
                  {
                    transformStyle: "preserve-3d",
                    "--glow": s.glow,
                  } as React.CSSProperties
                }
              >
                {/* Ghost index number */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-7 right-4 select-none text-[6rem] font-black leading-none opacity-[0.06] transition-all duration-500 group-hover:opacity-[0.12] group-hover:-translate-y-1"
                  style={{ color: s.accent }}
                >
                  {s.index}
                </span>

                {/* Card body */}
                <div
                  className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-[0_10px_40px_-14px_rgba(27,42,94,0.3)] backdrop-blur-xl transition-shadow duration-500 group-hover:shadow-[0_28px_60px_-16px_var(--glow)] sm:p-7"
                  style={{ transform: "translateZ(36px)" }}
                >
                  {/* Top accent bar */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[4px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: s.gradient }}
                  />

                  {/* Cursor glare */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.7), transparent 55%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(320px circle at var(--mx,50%) var(--my,50%), var(--glow), transparent 60%)",
                      mixBlendMode: "multiply",
                    }}
                  />

                  {/* Header row */}
                  <div className="relative flex items-start justify-between gap-4">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105"
                      style={{
                        background: s.soft,
                        border: `1px solid ${s.accent}22`,
                        color: s.accent,
                      }}
                    >
                      <Icon className="h-6 w-6" strokeWidth={2.1} />
                    </div>

                    <span
                      className="mt-1 inline-flex items-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em]"
                      style={{ background: s.soft, color: s.accent }}
                    >
                      {s.tag}
                    </span>
                  </div>

                  {/* Title + desc */}
                  <div className="relative mt-5">
                    <h3 className="text-xl font-black leading-snug tracking-tight text-[#1B2A5E] sm:text-[1.35rem]">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[#4d5d85]">
                      {s.desc}
                    </p>
                  </div>

                  {/* Feature list */}
                  <ul className="relative mt-5 flex flex-col gap-2.5">
                    {s.features.map((feat, fi) => (
                      <li
                        key={fi}
                        className="flex items-center gap-2.5 text-[0.87rem] font-medium text-[#253258]"
                      >
                        <span
                          className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full"
                          style={{ background: s.soft, color: s.accent }}
                        >
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* Footer link */}
                  <div className="relative mt-6 flex items-center justify-between border-t border-[#1B2A5E]/10 pt-4">
                    <span
                      className="text-xs font-black uppercase tracking-[0.14em]"
                      style={{ color: s.accent }}
                    >
                      Explore Service
                    </span>
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ background: s.gradient }}
                    >
                      <ArrowUpRight className="h-[18px] w-[18px]" strokeWidth={2.4} />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ─────────── CTA Banner ─────────── */}
        <div className="services-cta relative mt-14 overflow-hidden rounded-[2rem] lg:mt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1128] via-[#111b3f] to-[#1B2A5E]" />
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#D8232A]/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#2f4080]/40 blur-3xl" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-12 text-center sm:px-12 md:flex-row md:justify-between md:px-14 md:py-14 md:text-left">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#D8232A]">
                Have a sporting property in mind?
              </p>
              <h3 className="mt-2.5 text-2xl font-black leading-tight text-white sm:text-3xl">
                Let&apos;s Build Your Next League Together.
              </h3>
              <p className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-white/60 md:text-base">
                From concept to broadcast, Team 7 Sports handles the entire lifecycle —
                so you can focus on the game.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-gradient-to-r from-[#D8232A] to-[#f03038] px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-[0_12px_40px_-8px_rgba(216,35,42,0.55)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_-8px_rgba(216,35,42,0.7)]"
            >
              Start a Project
              <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
