"use client";

import { useEffect, useRef, useState, useCallback, UIEvent } from "react";
import Link from "next/link";
import { Trophy, Star, ShieldCheck, Users, ChevronDown, Sparkles } from "lucide-react";

export type HeroScrubProps = {
  videoSrc?: string;
  frameCount?: number;
  frameUrl?: (index: number) => string;
  titleTop?: string;
  titleBottom?: string;
  subtitle?: string;
  bgClassName?: string;
  accentHex?: string;
  defaultAspect?: number;
};

export function HeroScrub({
  videoSrc = "/magnific_cinematic-videophoto-prom_u5qm9mhQLD.mp4",
  titleTop = "TEAM 7",
  titleBottom = "SPORTS",
  subtitle = "Revolutionizing Sports. Redefining Leagues.",
  bgClassName = "bg-[#0a1128]",
  accentHex = "#1B2A5E",
  defaultAspect = 16 / 9,
}: HeroScrubProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleTopRef = useRef<HTMLHeadingElement>(null);
  const titleBottomRef = useRef<HTMLHeadingElement>(null);
  const contentDownRef = useRef<HTMLDivElement>(null);

  const [aspect, setAspect] = useState<number>(defaultAspect);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const touchStartYRef = useRef<number>(0);

  // Handle Video Metadata & Load State
  useEffect(() => {
    if (!videoSrc) return;
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      if (video.videoWidth && video.videoHeight) {
        setAspect(video.videoWidth / video.videoHeight);
      }
    };

    if (video.readyState >= 1) {
      handleLoaded();
    } else {
      video.addEventListener("loadedmetadata", handleLoaded);
      video.addEventListener("canplaythrough", handleLoaded);
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
      video.removeEventListener("canplaythrough", handleLoaded);
    };
  }, [videoSrc]);

  // Sync Video currentTime with scroll progress (0 -> 1)
  const updateVideoTime = useCallback((p: number) => {
    if (videoRef.current && videoRef.current.duration) {
      const vid = videoRef.current;
      if (!vid.paused) vid.pause();
      const targetTime = p * vid.duration;
      if (Math.abs(vid.currentTime - targetTime) > 0.015) {
        vid.currentTime = targetTime;
      }
    }
  }, []);

  // Handle Inner Scroll Event inside 100vh Viewport
  const handleInnerScroll = (e: UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const maxScroll = el.scrollHeight - el.clientHeight;
    if (maxScroll <= 0) return;

    const p = Math.min(1, Math.max(0, el.scrollTop / maxScroll));
    setScrollProgress(p);
    updateVideoTime(p);
  };

  // Touch Gesture Handling for Mobile Devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const currentY = e.touches[0].clientY;
    const deltaY = touchStartYRef.current - currentY;
    const el = containerRef.current;

    // If inner scroll is active, update scroll position smoothly
    if ((scrollProgress < 1 && deltaY > 0) || (scrollProgress > 0 && deltaY < 0)) {
      el.scrollTop += deltaY * 1.2;
      touchStartYRef.current = currentY;
    }
  };

  // Auto-snap section into view when user touches or focuses on it
  const handleUserTouchStart = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top > -50 && rect.top < 200) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Calculations for transforms based on inner scroll progress p (0 -> 1)
  const cardScale = 0.58 + scrollProgress * 0.78; // 0.58 -> 1.36 (immerses card)
  const titleTopX = -scrollProgress * 65; // 0vw -> -65vw
  const titleBottomX = scrollProgress * 65; // 0vw -> 65vw
  const titleOpacity = Math.max(0, 1 - scrollProgress * 2.8); // Fades out early
  const contentOpacity = scrollProgress > 0.65 ? Math.min(1, (scrollProgress - 0.65) / 0.35) : 0;
  const contentY = scrollProgress > 0.65 ? (1 - Math.min(1, (scrollProgress - 0.65) / 0.35)) * 30 : 30;

  return (
    <section
      ref={sectionRef}
      onTouchStart={handleUserTouchStart}
      className={`relative w-full h-[100svh] min-h-screen overflow-hidden text-white ${bgClassName}`}
      aria-label="Cinematic T7 Hero Inner Scroll"
      style={{ scrollSnapAlign: "start" }}
    >
      {/* 100vh Viewport Wrapper with Inner Scroll */}
      <div
        ref={containerRef}
        onScroll={handleInnerScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className="relative h-full w-full overflow-y-auto scrollbar-none touch-pan-y"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Tall scroll spacer inside 100vh to allow inner scrolling through full video duration */}
        <div className="relative w-full h-[350vh] pointer-events-none" />

        {/* Sticky 100vh Viewport Layer */}
        <div className="sticky top-0 -mt-[350vh] flex h-[100svh] w-full flex-col items-center justify-center overflow-hidden pointer-events-none">
          {/* Background Gradients & Ambient Glows */}
          <div className="absolute inset-0 z-0" style={{ backgroundColor: accentHex }} />
          <div className="absolute inset-0 z-0 bg-black/40 backdrop-blur-[2px]" />
          
          <div
            className="absolute -top-[20%] -left-[10%] z-0 h-[500px] w-[500px] sm:h-[600px] sm:w-[600px] rounded-full opacity-35 filter blur-[90px]"
            style={{ background: "radial-gradient(circle, rgba(216,35,42,0.4) 0%, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-[20%] -right-[10%] z-0 h-[500px] w-[500px] sm:h-[700px] sm:w-[700px] rounded-full opacity-40 filter blur-[110px]"
            style={{ background: "radial-gradient(circle, rgba(27,42,94,0.6) 0%, transparent 70%)" }}
          />

          {/* Hero Visual Content Stack */}
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 md:gap-4">
            
            {/* Top Title: TEAM 7 */}
            <h1
              ref={titleTopRef}
              className="select-none font-black uppercase text-center text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-transform duration-75 ease-out"
              style={{
                fontSize: "clamp(2.5rem, 8.5vw, 9.5rem)",
                lineHeight: 0.85,
                letterSpacing: "-0.04em",
                fontFamily: "var(--font-heading)",
                transform: `translateX(${titleTopX}vw)`,
                opacity: titleOpacity,
              }}
            >
              {titleTop}
            </h1>

            {/* Video Card */}
            <div
              ref={cardRef}
              className="relative overflow-hidden rounded-[14px] sm:rounded-[18px] shadow-[0_30px_100px_rgba(0,0,0,0.7)] ring-1 ring-white/20 will-change-transform md:rounded-[24px] transition-transform duration-75 ease-out"
              style={{
                width: `min(92vw, calc(64svh * ${aspect}))`,
                height: `min(64svh, 92vw / ${aspect})`,
                aspectRatio: aspect,
                background: "#0d1527",
                transform: `scale(${cardScale})`,
              }}
            >
              <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_0_0_100px_rgba(0,0,0,0.6)]" />
              <div className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] border border-white/15" />

              {videoSrc && (
                <video
                  ref={videoRef}
                  src={videoSrc}
                  playsInline
                  muted
                  preload="auto"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ filter: "brightness(0.92) contrast(1.08)" }}
                />
              )}
            </div>

            {/* Bottom Title: SPORTS */}
            <h2
              ref={titleBottomRef}
              className="select-none font-black uppercase text-center text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-transform duration-75 ease-out"
              style={{
                fontSize: "clamp(2.5rem, 8.5vw, 9.5rem)",
                lineHeight: 0.85,
                letterSpacing: "-0.04em",
                fontFamily: "var(--font-heading)",
                transform: `translateX(${titleBottomX}vw)`,
                opacity: titleOpacity,
              }}
            >
              {titleBottom}
            </h2>

            {/* Scroll Indicator */}
            {scrollProgress < 0.1 && (
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/70 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                <span>Scroll / Touch To Play</span>
                <ChevronDown size={16} className="animate-bounce text-[var(--crimson)]" />
              </div>
            )}

          </div>

          {/* Content Down Low (Reveals at end of inner scroll) */}
          <div
            ref={contentDownRef}
            className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-40 mx-auto max-w-5xl rounded-2xl sm:rounded-3xl bg-[#0a1128]/90 p-4 sm:p-6 md:p-8 backdrop-blur-xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)] pointer-events-auto transition-all duration-150 ease-out"
            style={{
              opacity: contentOpacity,
              transform: `translateY(${contentY}px)`,
              pointerEvents: scrollProgress > 0.65 ? "auto" : "none",
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              
              {/* Text & Tagline */}
              <div className="flex-1 text-center md:text-left space-y-1.5 sm:space-y-2">
                <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black tracking-widest text-[var(--crimson)] uppercase bg-red-950/40 px-2.5 py-0.5 rounded-full border border-red-800/40">
                  <Trophy size={13} />
                  <span>14+ Years Ground Action</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                  {subtitle}
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-gray-300 max-w-xl leading-relaxed">
                  From homegrown kabaddi arenas to multi-sport national properties, Team 7 transforms grassroots passion into legendary athletic ecosystems.
                </p>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full md:w-auto">
                {[
                  { num: "14+", label: "Years Exp", icon: Trophy },
                  { num: "6+", label: "Leagues", icon: Star },
                  { num: "100%", label: "Inclusive", icon: ShieldCheck },
                  { num: "50K+", label: "Athletes", icon: Users },
                ].map((stat, i) => {
                  const IconComp = stat.icon;
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10"
                    >
                      <IconComp size={15} className="text-[var(--crimson)] mb-0.5" />
                      <span className="text-base sm:text-lg font-black text-white leading-none">{stat.num}</span>
                      <span className="text-[9px] sm:text-[10px] text-gray-400 font-semibold uppercase mt-0.5">{stat.label}</span>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Call-to-action bar */}
            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-300 font-medium">
                <Sparkles size={13} className="text-[var(--crimson)]" />
                <span>Kabaddi, Basketball, Wheelchair Cricket &amp; Multi-Sport Events</span>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-3 ml-auto">
                <Link
                  href="/#services"
                  className="btn btn-navy !px-3.5 !py-2 !text-[11px] sm:!text-xs"
                >
                  Explore Services
                </Link>
                <Link
                  href="/#sponsorship"
                  className="btn btn-primary !px-3.5 !py-2 !text-[11px] sm:!text-xs"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}