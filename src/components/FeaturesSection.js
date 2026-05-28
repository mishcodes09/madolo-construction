export default function FeaturesSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Label */}
        <p className="font-body text-primary text-xs uppercase tracking-[0.25em] text-center mb-4 font-medium">
          About Maddlo
        </p>

        {/* Main heading */}
        <h2 className="font-display text-dark text-2xl md:text-4xl lg:text-5xl font-bold text-center leading-tight max-w-3xl mx-auto mb-8">
          We deliver reliable construction solutions backed by quality workmanship and years of industry experience.
        </h2>

        <p className="font-body text-brand-text/70 text-base md:text-lg text-center max-w-2xl mx-auto leading-relaxed mb-12">
          From planning to completion, every project is managed with professionalism, precision, and care.
          Our dedicated team brings unmatched expertise to every build we undertake.
        </p>

        <div className="flex justify-center">
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-primary text-white font-body font-medium text-sm px-7 py-3 rounded-xl hover:bg-orange-700 transition-colors duration-300"
          >
            Who we are
          </a>
        </div>
      </div>
    </section>
  )
}
