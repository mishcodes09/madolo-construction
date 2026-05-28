'use client'

import { useState } from 'react'
import { testimonials } from '@/data/testimonials'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const navigate = (direction) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (direction === 'prev') {
          return prev === 0 ? testimonials.length - 1 : prev - 1
        }
        return prev === testimonials.length - 1 ? 0 : prev + 1
      })
      setAnimating(false)
    }, 300)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-20 md:py-28 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="font-body text-primary text-xs uppercase tracking-[0.25em] font-medium mb-3">
              Testimonials
            </p>
            <h2 className="font-display text-dark text-3xl md:text-4xl font-bold leading-tight">
              Hear what our clients<br className="hidden sm:block" /> are saying
            </h2>
          </div>

          {/* Controls */}
          <div className="flex gap-3">
            <button
              onClick={() => navigate('prev')}
              className="w-11 h-11 rounded-xl bg-dark text-white flex items-center justify-center hover:bg-primary transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => navigate('next')}
              className="w-11 h-11 rounded-xl bg-dark text-white flex items-center justify-center hover:bg-primary transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial card */}
        <div
          key={currentIndex}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center transition-opacity duration-300 ${
            animating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Quote */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
            <svg className="w-10 h-10 text-primary/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="font-body text-brand-text text-base md:text-lg leading-relaxed mb-8 italic">
              &ldquo;{current.quote}&rdquo;
            </p>
            <div>
              <p className="font-body font-semibold text-dark text-sm">— {current.name}</p>
              <p className="font-body text-brand-text/50 text-sm mt-0.5">{current.role}</p>
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

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-primary w-6' : 'bg-dark/20 w-2'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
