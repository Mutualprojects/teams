"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import { Trophy, Activity, Zap, Star, ShieldCheck, Users } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [value, isInView]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export default function Hero() {
  const containerRef = useRef(null);

  // Framer Motion native scroll tracking for professional parallax
  const { scrollY } = useScroll();

  const yParallax = useTransform(scrollY, [0, 600], [0, -100]);
  const rotateParallax = useTransform(scrollY, [0, 600], [0, 12]);
  const scaleParallax = useTransform(scrollY, [0, 600], [1, 0.92]);
  const opacityParallax = useTransform(scrollY, [0, 600], [1, 0.85]);

  // Entrance animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 60, damping: 15 },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 10 },
    },
  };

  const stats = [
    { number: 14, suffix: "+", label: "Years Ground Expertise", highlight: "Proven Track Record", icon: Trophy, color: "var(--navy)" },
    { number: 6, suffix: "+", label: "League Properties Created", highlight: "Kabaddi, Basketball & More", icon: Star, color: "var(--crimson)" },
    { number: 100, suffix: "%", label: "Inclusive Sports Focus", highlight: "Para & Disabled Sports", icon: ShieldCheck, color: "var(--navy)" },
    { number: 50, suffix: "K+", label: "Athletes & Fans Impacted", highlight: "Grassroots to National", icon: Users, color: "var(--crimson)" },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "clamp(4.5rem, 9vh, 6.5rem)",
        paddingBottom: "clamp(1.5rem, 3vh, 2rem)",
        background: "transparent",
        overflow: "hidden",
      }}
    >
      {/* Background Graphic Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(27,42,94,0.06) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Decorative Blur Spheres with Brand Colors */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.22, 0.15],
          x: [0, 20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27,42,94,0.18) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.14, 0.08],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(216,35,42,0.12) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        {/* Main Split Grid (Content left, Image right) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "clamp(1.5rem, 3vw, 2.5rem)",
            alignItems: "center",
            marginBottom: "clamp(1.5rem, 3vw, 2.25rem)",
          }}
          className="hero-grid"
        >
          {/* ─── LEFT: Text Content ─────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Animated Badge with Lucide Icon */}
            <motion.div variants={badgeVariants} className="tag-badge" style={{ gap: "0.5rem" }}>
              <Zap size={14} style={{ color: "var(--crimson)" }} />
              <span>Empowering Indian Athletes &amp; Leagues</span>
            </motion.div>

            {/* Title with stagger */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: "clamp(2.1rem, 4.6vw, 3.9rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                marginBottom: "1rem",
                letterSpacing: "-0.03em",
                color: "var(--navy)",
              }}
            >
              Revolutionizing<br />
              Sports.{" "}
              <span className="gradient-text-red">Redefining</span>
              <br />
              <span className="gradient-text">Leagues.</span>
            </motion.h1>

            {/* Subtext description */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                color: "var(--text-body)",
                lineHeight: 1.75,
                marginBottom: "1rem",
                maxWidth: "560px",
              }}
            >
              India doesn&apos;t just play sport — it lives it. From dusty kabaddi mat structures to floodlit cricket arenas, we build professional ecosystems that transform homegrown passion into legendary national leagues.
            </motion.p>

            {/* Micro-trust indicators with Lucide Icons */}
            <motion.div
              variants={itemVariants}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                marginTop: "1rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border)",
                flexWrap: "wrap",
              }}
            >
              {[
                { icon: Trophy, text: "14+ Years Ground Action" },
                { icon: Activity, text: "Multi-Sport Integration" },
                { icon: Users, text: "Inclusive Opportunities" },
              ].map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 700 }}>
                    <IconComponent size={18} style={{ color: "var(--crimson)" }} />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ─── RIGHT: Scroll-Driven Animated Sports Equipment ─── */}
          <div style={{ display: "flex", justifyContent: "center", overflow: "visible" }}>
            {/* Scroll animated image wrapper utilizing native Framer Motion transforms */}
            <div
              style={{
                width: "100%",
                height: "clamp(260px, 32vw, 380px)",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "radial-gradient(circle, rgba(27,42,94,0.05) 0%, rgba(255,255,255,0) 70%)",
                borderRadius: "32px",
                overflow: "visible",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: "spring" as const, stiffness: 50, damping: 12, delay: 0.35 }}
                style={{
                  position: "relative",
                  width: "120%",
                  height: "120%",
                  y: yParallax,
                  rotate: rotateParallax,
                  scale: scaleParallax,
                  opacity: opacityParallax,
                }}
              >
                <Image
                  src="/set-sports-equipment-transparent-background.webp"
                  alt="Team 7 Sports Equipment"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* ─── BOTTOM: Full-Width Stats Grid in a Single Row ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "clamp(0.75rem, 1.5vw, 1rem)",
            width: "100%",
            borderTop: "1px solid var(--border)",
            paddingTop: "clamp(1.25rem, 2vw, 1.75rem)",
            marginTop: "clamp(1.25rem, 2vw, 1.5rem)",
          }}
          className="hero-stats"
        >
          {stats.map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80 } },
                }}
                whileHover={{ y: -5, boxShadow: "var(--shadow-md)" }}
                className="card"
                style={{
                  padding: "1.25rem 1rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: stat.color === "var(--navy)" ? "rgba(27,42,94,0.06)" : "rgba(216,35,42,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.25rem",
                  }}
                >
                  <StatIcon size={18} style={{ color: stat.color }} />
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.75rem",
                    fontWeight: 900,
                    color: stat.color,
                    lineHeight: 1,
                  }}
                >
                  <Counter value={stat.number} suffix={stat.suffix} />
                </div>
                <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--text-main)" }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                  {stat.highlight}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          :global(.hero-grid) {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          :global(.hero-stats) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          :global(.hero-stats) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
