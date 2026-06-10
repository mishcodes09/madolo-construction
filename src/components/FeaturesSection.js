"use client";

import { useEffect, useRef, useState } from "react";

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    const current = sectionRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Label */}
        <p
          className={`font-body text-[#eb191a] text-xs uppercase tracking-[0.25em] text-center mb-4 font-medium transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          About Madolo
        </p>

        {/* Heading */}
        <h2
          className={`text-dark text-2xl md:text-4xl lg:text-5xl text-center leading-tight max-w-3xl mx-auto mb-8 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          We believe every project should leave a lasting legacy of quality,
          functionality, and beauty.
        </h2>

        {/* Paragraph (from your original Next version, kept but animated like Vue) */}
        <p
          className={`font-body text-brand-text/70 text-base md:text-lg text-center max-w-2xl mx-auto leading-relaxed mb-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          From planning to completion, every project is managed with
          professionalism, precision, and care. Our dedicated team brings
          unmatched expertise to every build we undertake.
        </p>

        {/* Button */}
        <div
          className={`flex justify-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="/about"
            className="inline-flex items-center gap-2 bg-[#eb191a] text-white font-body font-medium text-sm px-7 py-3 hover:bg-[#d81617] transition-colors duration-300"
          >
            Who we are
          </a>
        </div>
      </div>
    </section>
  );
}
