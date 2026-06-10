// src/components/about/StatsSection.jsx

const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "20+", label: "Years Experience" },
  { number: "89%", label: "Client Satisfaction" },
  { number: "24/7", label: "Client Support" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-primary text-4xl md:text-5xl mb-2">
                {stat.number}
              </h3>

              <p className="font-body text-white/60 text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
