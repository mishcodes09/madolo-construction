// src/components/about/CTASection.jsx

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <p className="font-body text-[#eb191a] text-xs uppercase tracking-[0.25em] font-medium mb-4">
          Start Your Project
        </p>

        <h2 className="text-dark text-3xl md:text-5xl leading-tight mb-6">
          Ready To Build Something Exceptional?
        </h2>

        <p className="font-body text-brand-text/70 leading-relaxed mb-8 max-w-2xl mx-auto">
          Let’s bring your vision to life with expert craftsmanship, thoughtful
          design, and reliable execution.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center justify-center px-7 py-4 bg-[#eb191a] text-white text-sm font-medium hover:opacity-90 transition-opacity duration-200"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
