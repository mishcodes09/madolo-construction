"use client";

import { useState } from "react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = testimonials[currentIndex];

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <section className="py-20 md:py-28 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-body text-primary text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Testimonials
          </p>

          <h2 className="text-dark text-3xl md:text-4xl leading-tight">
            Hear what our clients
            <br className="hidden sm:block" />
            are saying
          </h2>
        </div>

        {/* Animated Card */}
        <div
          key={currentIndex}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade"
        >
          {/* Quote Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
            <svg
              className="w-10 h-10 text-primary/20 mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="font-body text-brand-text text-base md:text-lg leading-relaxed mb-8 italic">
              "{current.quote}"
            </p>

            <div>
              <p className="font-body font-semibold text-dark text-sm">
                — {current.name}
              </p>

              <p className="font-body text-brand-text/50 text-sm mt-0.5">
                {current.role}
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {/* Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-primary w-6" : "bg-dark/20 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
