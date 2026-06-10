// src/components/about/CoreValues.jsx

const values = [
  {
    title: "Integrity",
    description: "Transparent communication and honest workmanship.",
  },
  {
    title: "Precision",
    description: "Attention to detail in every stage of construction.",
  },
  {
    title: "Quality",
    description: "Premium materials and high building standards.",
  },
  {
    title: "Innovation",
    description: "Modern solutions tailored to every client.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-body text-[#eb191a] text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Core Values
          </p>

          <h2 className="text-dark text-3xl md:text-4xl">
            Principles That Guide Every Project
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-7 rounded-2xl border border-black/5 bg-white"
            >
              <h3 className="text-dark text-xl mb-3">{value.title}</h3>

              <p className="font-body text-sm text-brand-text/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
