// src/components/about/AboutHero.jsx

export default function AboutHero() {
  return (
    <section className="relative py-28 md:py-36 bg-dark overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
          alt="Construction"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <p className="font-body text-primary text-xs uppercase tracking-[0.25em] font-medium mb-4">
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
