"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Shop", href: "#" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#f8f8f8] shadow-md py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="relative flex items-center h-16">
          {/* White Logo */}
          <Image
            src="/images/ma-logo.png"
            alt="Madolo Logo"
            width={120}
            height={64}
            className={`absolute h-16 w-auto object-contain transition-opacity duration-300 ${
              isScrolled ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Dark Logo */}
          <Image
            src="/images/ma-blacks.png"
            alt="Madolo Logo"
            width={120}
            height={64}
            className={`h-16 w-auto object-contain transition-opacity duration-300 ${
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-black border-t border-gray-100 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`font-body transition-colors duration-200 text-base ${
                  isScrolled
                    ? "text-brand-text hover:text-primary"
                    : "text-white hover:text-primary"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#contact"
              className={`inline-flex text-sm font-body font-medium px-5 py-2.5 rounded-xl transition-colors duration-300 ${
                isScrolled
                  ? "bg-dark text-white hover:bg-primary"
                  : "bg-white text-dark hover:bg-primary hover:text-white"
              }`}
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
