export default function Showcase() {
  return (
    <section className="bg-primary py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[500px]">
          {/* Video */}
          <div className="relative overflow-hidden order-2 lg:order-1 h-64 md:h-80 lg:h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center px-6 md:px-10 lg:px-16 py-10 lg:py-12">
            <p className="font-body text-white/60 text-xs uppercase tracking-[0.25em] font-medium mb-4">
              Showcase
            </p>

            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
              Where Vision Meets Craftsmanship
            </h2>

            <p className="font-body text-white/80 text-base leading-relaxed mb-6 max-w-md">
              Every project tells a story of meticulous planning, skilled
              execution, and a relentless commitment to excellence.
            </p>

            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-white text-primary font-body font-semibold text-sm px-7 py-3 hover:bg-white/90 transition-colors duration-300 self-start"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
