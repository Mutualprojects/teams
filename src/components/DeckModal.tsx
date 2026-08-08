"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, FileDown } from "lucide-react";

interface DeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeckModal({ isOpen, onClose }: DeckModalProps) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
    }, 1500);
  };

  return (
    <div className="modal-backdrop animate-fadeIn" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Download Sponsorship Deck"
        onClick={(e) => e.stopPropagation()}
        className="animate-slideUp"
        style={{
          maxWidth: "600px",
          width: "100%",
          padding: "clamp(1.5rem, 4vw, 2.5rem)",
          background: "#ffffff",
          border: "2px solid var(--navy)",
          borderRadius: "24px",
          position: "relative",
          boxShadow: "var(--shadow-xl)",
          maxHeight: "100%",
          overflowY: "auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
          <div className="tag-badge" style={{ marginBottom: 0 }}>Corporate Deck 2026</div>
          <button
            onClick={onClose}
            aria-label="Close deck modal"
            style={{
              background: "var(--bg-soft)",
              border: "1px solid var(--border)",
              color: "var(--navy)",
              fontSize: "1.25rem",
              cursor: "pointer",
              borderRadius: "8px",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Logo */}
        <div style={{ marginBottom: "1.25rem" }}>
          <Image
            src="/team7-logo.webp"
            alt="Team 7 Sports"
            width={140}
            height={47}
            style={{ objectFit: "contain", height: "auto" }}
          />
        </div>

        <h3 style={{ fontSize: "1.75rem", color: "var(--navy)", marginBottom: "0.5rem" }}>
          Team 7 Sports Partnership Deck
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
          Comprehensive pitch deck containing league reach metrics, demographic data, broadcast partnerships,
          and customized brand integration models.
        </p>

        {/* Deck Preview */}
          <div
            style={{
              background: "var(--bg-soft)",
              border: "2px dashed var(--border-strong)",
              borderRadius: "14px",
              padding: "1.5rem",
              textAlign: "center",
              marginBottom: "1.75rem",
            }}
          >
            <FileDown
              size={40}
              strokeWidth={1.5}
              style={{ color: "var(--navy)", margin: "0 auto 0.5rem" }}
            />
            <div style={{ fontWeight: 700, color: "var(--navy)", fontSize: "1.05rem", wordBreak: "break-word" }}>
              Team7_Sports_Management_Partnership_Deck.pdf
            </div>
          <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
            Format: High-Res PDF • Size: 8.4 MB • 24 Pages
          </div>
        </div>

        <div style={{ marginBottom: "1.75rem" }}>
          <h4 style={{ fontSize: "0.88rem", color: "var(--navy)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "var(--font-heading)" }}>
            Deck Table of Contents:
          </h4>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.5rem", fontSize: "0.88rem", color: "var(--text-muted)" }} className="sm:!grid-cols-2">
            <div>1. Executive Summary & Vision</div>
            <div>2. TPK & UBA Reach Numbers</div>
            <div>3. Audience Demographics</div>
            <div>4. Multi-Sport Roadmap 2026–28</div>
            <div>5. Disability Sports CSR Tier</div>
            <div>6. Broadcast & Digital ROI</div>
          </div>
        </div>

        {downloaded ? (
          <div
            style={{
              padding: "1rem",
              background: "rgba(27,42,94,0.08)",
              border: "1px solid var(--navy)",
              borderRadius: "10px",
              textAlign: "center",
              color: "var(--navy)",
              fontWeight: 700,
            }}
          >
            ✓ Corporate Deck Downloaded Successfully!
          </div>
        ) : (
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="btn btn-navy"
            style={{ width: "100%", opacity: downloading ? 0.7 : 1 }}
          >
            {downloading ? "Preparing PDF Download..." : "Download Official Partnership Deck"}
          </button>
        )}
      </div>
    </div>
  );
}
