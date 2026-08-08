"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface SportsAction {
  type: string;
  emoji: string;
  subEmoji?: string;
  label: string;
  color: string;
}

const sportsActions: SportsAction[] = [
  {
    type: "cricket",
    emoji: "⚾",
    subEmoji: "🏏",
    label: "SIXER! 🏏",
    color: "#D8232A",
  },
  {
    type: "football",
    emoji: "⚽",
    label: "GOAL! 🚀",
    color: "#10B981",
  },
  {
    type: "basketball",
    emoji: "🏀",
    label: "SWISH! 🏀",
    color: "#F59E0B",
  },
  {
    type: "badminton",
    emoji: "🏸",
    label: "SMASH! ⚡",
    color: "#3B82F6",
  },
];

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [activeSportsIndex, setActiveSportsIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    // Cycle to next sports action index on each tap
    setActiveSportsIndex((prev) => (prev + 1) % sportsActions.length);
    setIsAnimating(true);

    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Reset animation after completion
    setTimeout(() => {
      setIsAnimating(false);
    }, 1300);
  };

  const currentAction = sportsActions[activeSportsIndex];

  return (
    <>
      {/* Multi-Sports Dynamic Animation on Scroll to Top Tap */}
      <AnimatePresence>
        {isAnimating && (
          <div className="fixed bottom-6 right-6 z-[1000] pointer-events-none flex flex-col items-center">
            {/* Popup Action Badge (SIXER!, GOAL!, SWISH!, SMASH!) */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: [0, 1, 1, 0], y: -50, scale: [0.8, 1.2, 1, 0.9] }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider text-white shadow-2xl backdrop-blur-md mb-2 border border-white/20"
              style={{ backgroundColor: currentAction.color }}
            >
              {currentAction.label}
            </motion.div>

            {/* Flying Sports Object */}
            <motion.div
              key={`sports-anim-${activeSportsIndex}`}
              initial={{ opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 }}
              animate={{
                opacity: [1, 1, 0.9, 0],
                y: -window.innerHeight + 80,
                x: activeSportsIndex % 2 === 0 ? [-20, 35, -20, 0] : [20, -35, 20, 0],
                scale: [1, 1.4, 1.2, 0.5],
                rotate: [0, 360, 720, 1080],
              }}
              transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-4xl sm:text-5xl filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            >
              <span>{currentAction.emoji}</span>
              {currentAction.subEmoji && (
                <motion.span
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: [1, 0.5, 0], scale: [1, 1.3, 0.4] }}
                  transition={{ duration: 0.4 }}
                  className="absolute -left-6 bottom-0 text-3xl"
                >
                  {currentAction.subEmoji}
                </motion.span>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Scroll To Top Button */}
      <AnimatePresence>
        {visible && (
          <motion.button
            key="scroll-top-btn"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleScrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-6 z-[999] p-3.5 sm:p-4 rounded-full bg-[#D8232A] text-white shadow-[0_10px_30px_rgba(216,35,42,0.45)] border border-white/20 backdrop-blur-xl flex items-center justify-center cursor-pointer group"
          >
            <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:-translate-y-1 transition-transform duration-300" />
            <span className="sr-only">Back to Top</span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
