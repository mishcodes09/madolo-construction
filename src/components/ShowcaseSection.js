export default function ShowcaseSection() {
  return (
    <section className="bg-primary py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
          {/* Image */}
          <div className="relative overflow-hidden order-2 lg:order-1 h-72 lg:h-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=900&q=85"
              alt="Showcase project"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center px-10 md:px-16 py-16 lg:py-20 relative">
            <p className="font-body text-white/60 text-xs uppercase tracking-[0.25em] font-medium mb-6">
              Showcase
            </p>
            <h2 className="font-display text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Where Vision Meets Craftsmanship
            </h2>
            <p className="font-body text-white/80 text-base leading-relaxed mb-8 max-w-md">
              Every project tells a story of meticulous planning, skilled execution, and a relentless
              commitment to excellence. This is what we build — not just structures, but legacies.
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-white text-primary font-body font-semibold text-sm px-7 py-3 rounded-xl hover:bg-white/90 transition-colors duration-300 self-start"
            >
              View Our Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
