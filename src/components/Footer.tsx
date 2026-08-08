"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Trophy,
  CircleDot,
  Goal,
  Volleyball,
  Medal,
  Building2,
} from "lucide-react";

export default function Footer() {
  const navLinks: [string, string][] = [
    ["Home", "/"],
    ["Who We Are", "/about-us"],
    ["Our Journey", "/our-journey"],
    ["Legacy Gallery", "/our-legacy"],
    ["Contact & Inquiry", "/contact-us"],
  ];

  const properties = [
    { icon: Trophy, label: "Telangana Premier Kabaddi (TPK)" },
    { icon: CircleDot, label: "UBA Basketball League" },
    { icon: Goal, label: "Disabled Cricket Tournament" },
    { icon: Volleyball, label: "Floodlight Football Championship" },
    { icon: Medal, label: "American Football Leagues" },
    { icon: Building2, label: "Corporate Sports Olympiad" },
  ];

  return (
    <footer
      style={{
        background:
          "linear-gradient(160deg, var(--navy-dark) 0%, var(--bg-navy-deep) 60%)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        paddingTop: "clamp(2.5rem, 4vw, 3.5rem)",
        paddingBottom: "2rem",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Col 1: Brand */}
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <Image
                src="/team7-logo.webp"
                alt="Team 7 Sports Management"
                width={160}
                height={53}
                priority={false}
                style={{
                  width: "160px",
                  height: "auto",
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.92,
                }}
              />
            </div>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.92rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
              Team 7 Sports Management Private Limited — India&apos;s premier sports management firm
              conceptualizing and executing high-energy, inclusive leagues across Cricket, Olympic,
              and Non-Olympic formats.
            </p>
            <div
              style={{
                fontSize: "0.85rem",
                color: "var(--crimson-light)",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <MapPin size={15} aria-hidden="true" />
              <span>Hyderabad • Telangana • India</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4
              style={{
                fontSize: "0.82rem",
                color: "#fff",
                marginBottom: "1.25rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontFamily: "var(--font-heading)",
              }}
            >
              Quick Navigation
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.92rem" }}>
              {navLinks.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    style={{ color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Properties */}
          <div>
            <h4
              style={{
                fontSize: "0.82rem",
                color: "#fff",
                marginBottom: "1.25rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontFamily: "var(--font-heading)",
              }}
            >
              Key Properties
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.92rem", color: "rgba(255,255,255,0.5)" }}>
              {properties.map(({ icon: Icon, label }) => (
                <li key={label} style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
                  <Icon size={15} style={{ color: "var(--crimson-light)", flexShrink: 0 }} aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4
              style={{
                fontSize: "0.82rem",
                color: "#fff",
                marginBottom: "1.25rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontFamily: "var(--font-heading)",
              }}
            >
              Reach Out Directly
            </h4>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "0.75rem" }}>
              <strong style={{ color: "rgba(255,255,255,0.75)" }}>Business Enquiries:</strong>
              <br />
              <a
                href="mailto:info@team7sports.com"
                style={{ color: "var(--crimson-light)", transition: "opacity 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                info@team7sports.com
              </a>
            </p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.92rem", lineHeight: 1.6 }}>
              <strong style={{ color: "rgba(255,255,255,0.75)" }}>Sponsorships:</strong>
              <br />
              <a
                href="mailto:partner@team7sports.com"
                style={{ color: "var(--crimson-light)", transition: "opacity 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                partner@team7sports.com
              </a>
            </p>

            <div style={{ marginTop: "1.5rem" }}>
              <Link
                href="/contact-us"
                className="btn btn-primary"
                style={{ padding: "0.65rem 1.35rem", fontSize: "0.88rem" }}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          <div>© {new Date().getFullYear()} Team 7 Sports Management Private Limited. All Rights Reserved.</div>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <Link href="/privacy-policy" style={{ color: "rgba(255,255,255,0.35)", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" style={{ color: "rgba(255,255,255,0.35)", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>
              Terms &amp; Conditions
            </Link>
            <Link href="/contact-us" style={{ color: "rgba(255,255,255,0.35)", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
