"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#f8f8f8] shadow-md py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="relative block w-[250px] h-20 md:w-[250px] md:h-20"
        >
          <Image
            src="/images/transparent.png"
            alt="Madolo Logo"
            fill
            className={`object-contain transition-opacity duration-300 ${
              isScrolled ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src="/images/transblack.png"
            alt="Madolo Logo"
            fill
            className={`object-contain transition-opacity duration-300 ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`font-body text-sm transition-colors duration-200 relative
                after:absolute after:bottom-0 after:left-0 after:h-px after:w-0
                after:bg-primary after:transition-all after:duration-300 hover:after:w-full
                ${
                  isScrolled
                    ? "text-brand-text hover:text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className={`hidden md:inline-flex items-center gap-2 text-sm font-body font-medium px-5 py-2.5 transition-colors duration-300 ${
            isScrolled
              ? "bg-dark text-white hover:bg-primary"
              : "bg-white text-dark hover:bg-primary hover:text-white"
          }`}
        >
          Request Quote
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? "bg-dark" : "bg-white"
            } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? "bg-dark" : "bg-white"
            } ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? "bg-dark" : "bg-white"
            } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* MOBILE MENU FIXED */}
      <div
        className={`md:hidden overflow-hidden transition-all text-center duration-300 bg-black border-t border-white/10 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-body text-white text-base hover:text-primary transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#contact"
              className="inline-flex text-sm font-body font-medium px-5 py-2.5 bg-white text-dark hover:bg-primary hover:text-white transition-colors duration-300"
              onClick={() => setMobileOpen(false)}
            >
              Request Quote
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
