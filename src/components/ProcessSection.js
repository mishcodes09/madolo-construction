const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Consultation & Planning",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    description:
      "We begin with an in-depth consultation to understand your vision, budget, and timeline before creating a detailed project plan.",
  },
  {
    id: 2,
    number: "02",
    title: "Design & Permits",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    description:
      "Our team handles architectural drawings, engineering reviews, and all necessary permit applications for a smooth approval process.",
  },
  {
    id: 3,
    number: "03",
    title: "Construction & Build",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    description:
      "Skilled craftsmen bring your project to life with precision, using quality materials and adhering to strict safety standards.",
  },
  {
    id: 4,
    number: "04",
    title: "Final Walkthrough",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
    description:
      "We conduct a thorough final inspection with you, address any punch list items, and ensure everything meets our quality guarantee.",
  },
];

export default function Process() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-body text-primary text-xs uppercase tracking-[0.25em] font-medium mb-3">
            How we do things
          </p>
          <h2 className="text-dark text-3xl md:text-4xl">
            Our Construction Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div key={step.id} className="group">
              {/* Number + Title row */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-body font-semibold text-dark text-base">
                  {step.title}
                </h3>
              </div>

              {/* Image */}
              <div className="rounded-xl overflow-hidden mb-4 aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Description */}
              <p className="font-body text-brand-text/65 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
