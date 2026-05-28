// src/components/about/AboutStory.jsx

export default function AboutStory() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="font-body text-primary text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Our Story
          </p>

          <h2 className="text-dark text-3xl md:text-4xl mb-6">
            Crafted Through Experience & Passion
          </h2>

          <p className="font-body text-brand-text/70 leading-relaxed mb-5">
            Madolo Construction was founded with a commitment to delivering
            quality workmanship, transparent communication, and spaces built
            with intention.
          </p>

          <p className="font-body text-brand-text/70 leading-relaxed">
            From residential builds to interior transformations, our approach
            combines technical precision with timeless design.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden aspect-[4/5]">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&q=80"
            alt="Team"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
