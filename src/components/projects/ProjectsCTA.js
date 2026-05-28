// src/components/projects/ProjectsCTA.js

export default function ProjectsCTA() {
  return (
    <section className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <p className="font-body text-primary text-xs uppercase tracking-[0.25em] font-medium mb-4">
          Start Your Project
        </p>

        <h2 className="text-dark text-3xl md:text-5xl leading-tight mb-6">
          Let’s Build Something Exceptional Together
        </h2>

        <p className="font-body text-brand-text/70 text-base leading-relaxed max-w-2xl mx-auto mb-8">
          From concept to completion, we deliver construction and interior
          solutions tailored to your vision, goals, and lifestyle.
        </p>

        <a
          href="/#contact"
          className="inline-flex items-center justify-center px-7 py-4 bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity duration-300"
        >
          Request A Consultation
        </a>
      </div>
    </section>
  );
}
