"use client";

import { useEffect, useState } from "react";
import { heroImages } from "@/data/hero";

export default function AboutHero() {
  const [currentImage, setCurrentImage] = useState(0);

  // safety fallback (prevents crash if import fails)
  const images = heroImages || [];

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative py-28 md:py-36 bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Construction ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] ease-in-out ${
              currentImage === index
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <p className="font-body text-[#eb191a] text-xs uppercase tracking-[0.25em] font-medium mb-4">
          About Madolo
        </p>

        <h1 className="text-white text-4xl md:text-6xl leading-tight max-w-4xl mx-auto mb-6">
          Building Spaces With Precision, Purpose & Trust
        </h1>

        <p className="font-body text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          We deliver premium construction and interior solutions designed to
          stand the test of time.
        </p>
      </div>
    </section>
  );
}
