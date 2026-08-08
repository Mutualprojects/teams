"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { SparklesIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export interface GalleryEvent {
  id: number;
  title: string;
  subtitle: string;
  location: string;
  date: string;
  category: string;
  folder: string;
  teams?: string;
  organizer?: string;
  images: string[];
  description?: string;
}

export const galleryData: GalleryEvent[] = [
  {
    id: 1,
    title: "American Football Championship",
    subtitle: "National Championship 🏈",
    category: "Pro League",
    location: "Gachibowli Stadium, Hyderabad",
    date: "30 January 2016",
    folder: "gachibowli_stadium",
    description: "Flagship national tournament bringing elite gridiron action to top-tier Indian stadium infrastructure.",
    images: [
      "/gachibowli_stadium/WhatsApp Image 2026-07-14 at 4.28.19 PM (1).jpeg",
      "/gachibowli_stadium/WhatsApp Image 2026-07-14 at 4.28.19 PM (2).jpeg",
      "/gachibowli_stadium/WhatsApp Image 2026-07-14 at 4.28.19 PM.jpeg",
    ],
  },
  {
    id: 2,
    title: "Friendship Bowl 🏈",
    subtitle: "International Exhibition",
    category: "International",
    location: "Gachibowli Stadium, Hyderabad",
    date: "19 June 2016",
    teams: "India 🇮🇳 vs UAE 🇦🇪",
    organizer: "EAFL Falcons",
    description: "Historic international cross-border clash spotlighting rising Indian tactical gridiron talent.",
    folder: "americal_football",
    images: [
      "/americal_football/WhatsApp Image 2026-07-14 at 3.29.14 PM (1).jpeg",
      "/americal_football/WhatsApp Image 2026-07-14 at 3.29.14 PM (2).jpeg",
      "/americal_football/WhatsApp Image 2026-07-14 at 3.29.14 PM.jpeg",
    ],
  },
  {
    id: 3,
    title: "Corporate Football Cup",
    subtitle: "Workforce Tournament",
    category: "Corporate",
    location: "Hockey Stadium, Begumpet",
    date: "2016",
    description: "High-octane corporate tournament bringing top MNC brands into intense weekend floodlight league action.",
    folder: "another",
    images: [
      "/another/WhatsApp Image 2026-07-14 at 3.30.57 PM.jpeg",
      "/another/WhatsApp Image 2026-07-14 at 3.42.36 PM.jpeg",
      "/another/WhatsApp Image 2026-07-14 at 4.02.32 PM.jpeg",
    ],
  },
  {
    id: 4,
    title: "Sky Kings 5-A-Side",
    subtitle: "Soccer League ⚽",
    category: "Grassroots",
    location: "Sky Kings Academy, Bowenpally",
    date: "2017",
    description: "Fast-paced short format soccer league focused on youth playmaking, speed, and precision skills.",
    folder: "soccertournment",
    images: [
      "/soccertournment/WhatsApp Image 2026-07-14 at 4.08.34 PM (1).jpeg",
      "/soccertournment/WhatsApp Image 2026-07-14 at 4.08.34 PM.jpeg",
      "/soccertournment/WhatsApp Image 2026-07-14 at 4.08.35 PM (1).jpeg",
    ],
  }
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function LegacyGallery() {
  // Combine all images from all events into a single array
  const allImages = galleryData.flatMap((event) => event.images);

  return (
    <section 
      className="w-full min-h-screen relative overflow-hidden flex flex-col justify-between items-center py-12 md:py-16 my-4 md:my-6" 
      style={{ backgroundColor: "var(--bg)", minHeight: "100vh" }}
    >
      {/* Background Soft Glow for Visual Hierarchy */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D8232A]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-8 md:px-16 w-full flex-1 flex flex-col justify-between items-center max-w-7xl relative z-10">

        {/* Top Header Section with Framer Motion Stagger */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto pt-2"
        >
          {/* Badge Pill */}
          <motion.div custom={0} variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D8232A]/30 bg-white/80 backdrop-blur-md text-xs font-extrabold text-[#D8232A] mb-4 shadow-sm uppercase tracking-wider">
            <SparklesIcon size={14} className="text-[#D8232A]" />
            <span>Legacy Events</span>
          </motion.div>

          {/* Heading */}
          <motion.h2 custom={1} variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#1B2A5E] leading-tight">
            Moments That Shaped <br className="hidden sm:block" /> Indian Grassroots Sports
          </motion.h2>

          {/* Subtitle */}
          <motion.p custom={2} variants={fadeInUp} className="text-[#253258]/80 max-w-2xl text-base md:text-xl font-medium mt-3">
            A visual journey through our flagship events and historical highlights.
          </motion.p>
        </motion.div>

        {/* Middle 3D Coverflow Carousel Container with Framer Motion Scale Reveal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex-1 w-full flex items-center justify-center mt-8 md:mt-10 mb-4 min-h-[400px] sm:min-h-[500px]"
        >
          <div className="w-full max-w-6xl relative px-6 md:px-14">
            <Swiper
              spaceBetween={24}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 2.2,
                slideShadows: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              className="w-full !py-8 md:!py-10 !overflow-visible"
            >
              {allImages.map((imgSrc, index) => (
                <SwiperSlide
                  key={index}
                  style={{ width: "min(360px, 82vw)", height: "min(500px, 86vw)" }}
                  className="max-w-[85vw] sm:max-w-[360px]"
                >
                  <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(27,42,94,0.25)] border-2 border-white/70 group bg-[#1B2A5E] transition-all duration-500 hover:shadow-[0_30px_70px_rgba(216,35,42,0.3)] hover:border-white">
                    <Image
                      src={imgSrc}
                      alt={`Gallery Highlight ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 82vw, 360px"
                      loading="lazy"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />

                    {/* Dark gradient overlay for premium contrast and depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111b3f]/90 via-[#111b3f]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                    {/* Inner shadow for 3D bezel effect */}
                    <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_20px_rgba(0,0,0,0.3)] pointer-events-none" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

        {/* Bottom Action Button with Framer Motion Spring */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-6 md:mt-8 pb-2 relative z-10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/our-legacy"
              className="btn btn-primary group px-10 py-4 text-base font-bold shadow-xl transition-all duration-300 flex items-center gap-3"
            >
              <span>View More Highlights</span>
              <ArrowRight
                size={18}
                className="transform group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
