"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Journey", href: "/our-journey" },
    { name: "Legacy Gallery", href: "/our-legacy" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[900] transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "border-b border-[rgba(27,42,94,0.12)] shadow-[0_2px_24px_rgba(27,42,94,0.08)]"
          : "border-b border-transparent"
      }`}
      style={{
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="container flex h-[72px] items-center justify-between gap-4 lg:h-[80px]">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex shrink-0 items-center"
          aria-label="Team 7 Sports Management — Home"
        >
          <Image
            src="/team7-logo.webp"
            alt="Team 7 Sports Management"
            width={150}
            height={50}
            priority
            className="h-auto w-[clamp(120px,28vw,150px)] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-heading text-[0.92rem] font-semibold text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--crimson)]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
          <Link href="/contact-us" className="btn btn-primary hidden !px-5 !py-2.5 !text-sm md:inline-flex">
            Partner With Us
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[rgba(27,42,94,0.22)] bg-transparent text-[var(--navy)] transition-colors hover:bg-navy/5 lg:hidden"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`overflow-hidden bg-white transition-[max-height,opacity,visibility] duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "max-h-[calc(100dvh-72px)] opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex max-h-[calc(100dvh-72px)] flex-col gap-1 overflow-y-auto border-t border-[rgba(27,42,94,0.1)] px-5 pb-6 pt-3 sm:px-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-[rgba(27,42,94,0.08)] px-2 py-3 font-heading text-base font-semibold text-[var(--navy)] transition-colors hover:text-[var(--crimson)]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary mt-4"
          >
            Partner With Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
