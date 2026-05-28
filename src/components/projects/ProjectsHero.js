export default function ProjectsHero() {
  return (
    <section className="relative py-28 md:py-36 bg-dark overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
          alt="Projects"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <p className="font-body text-primary text-xs uppercase tracking-[0.25em] font-medium mb-4">
          Our Work
        </p>

        <h1 className="text-white text-4xl md:text-6xl leading-tight mb-6">
          Projects Built With Precision <br />& Purpose
        </h1>

        <p className="font-body text-white/70 text-base md:text-lg max-w-2xl mx-auto">
          Explore a selection of residential, commercial, and interior projects
          crafted with quality and attention to detail.
        </p>
      </div>
    </section>
  );
}
