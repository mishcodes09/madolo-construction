"use client";

import { useEffect, useState } from "react";
import { heroImages } from "@/data/hero";

export default function HeroSection() {
  const [showHero, setShowHero] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = heroImages;

  useEffect(() => {
    setShowHero(true);

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Construction ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-[1500ms] ease-in-out ${
              currentImage === index
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/80" />
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/27615444038"
        className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp"
      >
        <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16 md:mt-20">
        <h1
          className={`text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight md:leading-relaxed mb-6 md:mb-8 max-w-4xl mx-auto transition-all duration-700 ease-out ${
            showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Building More Than Structures.
          <span
            className="block py-2 text-transparent bg-clip-text bg-center bg-cover"
            style={{
              backgroundImage: `url(${images[currentImage]})`,
              WebkitBackgroundClip: "text",
              WebkitTextStroke: "1px rgba(255,255,255,0.25)",
            }}
          >
            Building Legacies.
          </span>
        </h1>

        <p className="font-body text-white/75 text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
          South African construction company delivering residential, commercial,
          hospitality, and community development projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#eb191a] text-white font-body font-medium text-sm px-8 py-3.5 hover:bg-[#d81617] transition-colors duration-300 shadow-lg"
          >
            Request a Quote
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 backdrop-blur text-white font-body font-medium text-sm px-8 py-3.5 border border-white/30 hover:bg-white/20 transition-colors duration-300"
          >
            Services
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-10 md:h-12 bg-gradient-to-b from-white/60 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
