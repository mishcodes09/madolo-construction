const stats = [
  {
    number: "50+",
    label: "Projects Completed",
  },
  {
    number: "10+",
    label: "Years Experience",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
  },
  {
    number: "24/7",
    label: "Project Support",
  },
];

export default function ProjectStats() {
  return (
    <section className="py-20 md:py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="font-body text-primary text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Our Impact
          </p>

          <h2 className="text-white text-3xl md:text-4xl">
            Numbers Backed By Experience
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-primary text-4xl md:text-5xl font-semibold mb-3">
                {stat.number}
              </h3>

              <p className="font-body text-white/60 text-sm uppercase tracking-[0.15em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
