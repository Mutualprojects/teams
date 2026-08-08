"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Calendar, MapPin, Trophy, UserCheck, Image as ImageIcon } from "lucide-react";
import { LegacyEvent } from "@/types/legacy";

interface LegacyEventModalProps {
  event: LegacyEvent | null;
  onClose: () => void;
}

export const LegacyEventModal: React.FC<LegacyEventModalProps> = ({
  event,
  onClose,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!event) return null;

  return (
    <div key={event.id} role="dialog" aria-modal="true" aria-label={`${event.title} - media gallery`} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111b3f]/75 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col md:flex-row overflow-hidden animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-[#D8232A] flex items-center justify-center transition-colors shadow-lg"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Left Side: Photo Lightbox */}
        <div className="w-full md:w-1/2 bg-navy-dark relative p-4 flex flex-col justify-between min-h-[320px]">
          {/* Main Image */}
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-black/50 shadow-inner">
            <Image
              src={event.images[activeImageIndex] || event.coverImage}
              alt={`${event.title} photo ${activeImageIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-all duration-300"
            />
          </div>

          {/* Photo Thumbnails */}
          {event.images.length > 1 && (
            <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-2">
              {event.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIndex === idx
                      ? "border-[#D8232A] scale-105 shadow-md"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Event Details */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-b from-white to-gray-50">
          <div>
            {/* Category Tag */}
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-wide uppercase rounded-full bg-[#1B2A5E]/10 text-[#1B2A5E] mb-3">
              {event.category}
            </span>

            {/* Title & Subtitle */}
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#1B2A5E] leading-tight mb-1">
              {event.title}
            </h3>
            <p className="text-sm font-semibold text-[#D8232A] mb-4">
              {event.subtitle}
            </p>

            {/* Event Info Metadata Pills */}
            <div className="grid grid-cols-1 gap-2.5 mb-6 text-xs">
              <div className="flex items-center gap-2 text-gray-700 bg-white p-2.5 rounded-xl border border-gray-200/80 shadow-2xs">
                <Calendar size={15} className="text-[#D8232A] shrink-0" />
                <span><strong className="text-navy">Date:</strong> {event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 bg-white p-2.5 rounded-xl border border-gray-200/80 shadow-2xs">
                <MapPin size={15} className="text-[#D8232A] shrink-0" />
                <span><strong className="text-navy">Venue:</strong> {event.location}</span>
              </div>
              {event.teams && (
                <div className="flex items-center gap-2 text-gray-700 bg-white p-2.5 rounded-xl border border-gray-200/80 shadow-2xs">
                  <Trophy size={15} className="text-amber-500 shrink-0" />
                  <span><strong className="text-navy">Match:</strong> {event.teams}</span>
                </div>
              )}
              {event.organizer && (
                <div className="flex items-center gap-2 text-gray-700 bg-white p-2.5 rounded-xl border border-gray-200/80 shadow-2xs">
                  <UserCheck size={15} className="text-blue-500 shrink-0" />
                  <span><strong className="text-navy">Organizer:</strong> {event.organizer}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-1">
                Event Overview
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
            <span className="text-xs text-gray-400 flex items-center gap-1 font-medium">
              <ImageIcon size={13} /> Showing photo {activeImageIndex + 1} of {event.images.length}
            </span>

            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-bold text-[#1B2A5E] hover:text-[#D8232A] bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              Done Viewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
