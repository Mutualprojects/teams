"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FlowArtProps {
  children: ReactNode;
  "aria-label"?: string;
}

export default function FlowArt({ children, "aria-label": ariaLabel }: FlowArtProps) {
  return (
    <div aria-label={ariaLabel} style={{ position: "relative", width: "100%" }}>
      {children}
    </div>
  );
}

interface FlowSectionProps {
  children: ReactNode;
  "aria-label"?: string;
  style?: React.CSSProperties;
  index?: number;
}

export function FlowSection({ children, "aria-label": ariaLabel, style, index = 0 }: FlowSectionProps) {
  const container = useRef<HTMLElement>(null);

  // Track scroll while container passes through the viewport (for text entrance & exit)
  const { scrollYProgress: cardProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Track scroll for sticky card entrance stack effect
  const { scrollYProgress: stackProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Card stacking rotation, scaling, and Y translation
  const initialRotation = index % 2 === 0 ? -5 : 5;
  const rotate = useTransform(stackProgress, [0, 1], [initialRotation, 0]);
  const scale = useTransform(stackProgress, [0, 1], [0.86, 1]);
  const y = useTransform(stackProgress, [0, 1], ["18%", "0%"]);

  // Scroll-driven text entrance from LEFT to center, and fade out on exit (same as Vision & Mission)
  const textX = useTransform(cardProgress, [0, 0.45, 0.8, 1], ["-15%", "0%", "0%", "15%"]);
  const textOpacity = useTransform(cardProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const textScale = useTransform(cardProgress, [0, 0.45, 0.8, 1], [0.92, 1, 1, 0.95]);

  return (
    <section
      ref={container}
      aria-label={ariaLabel}
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        minHeight: "100dvh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          ...style,
          rotate,
          scale,
          y,
          transformOrigin: "bottom center",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "min(4vw, 2.5rem)",
          boxShadow: "0 -20px 40px rgba(0,0,0,0.35)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Card Content with Smooth Entrance from Left to Center & Fade Out on Exit */}
        <motion.div
          style={{
            x: textX,
            opacity: textOpacity,
            scale: textScale,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            zIndex: 10,
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
}
