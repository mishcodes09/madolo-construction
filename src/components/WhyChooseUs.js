const features = [
  {
    id: 1,
    title: "Experienced Professionals",
    description:
      "Over 20 years of experience in carpentry, manufacturing, interior design, and construction.",
  },
  {
    id: 2,
    title: "Quality Workmanship",
    description:
      "Every project is completed with attention to detail and a commitment to excellence.",
  },
  {
    id: 3,
    title: "Design-Led Construction",
    description:
      "We understand both construction and aesthetics, delivering spaces that work beautifully.",
  },
  {
    id: 4,
    title: "Client-Focused Approach",
    description:
      "Transparent communication, honest pricing, and professional project management.",
  },
  {
    id: 5,
    title: "Community Development",
    description:
      "We believe construction should create opportunities, transfer skills, and uplift communities.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="font-body text-[#eb191a] text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Why Choose Us
          </p>
          <h2 className="text-dark text-3xl md:text-4xl">
            Why Clients Choose Our Team
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Features */}
          <div>
            <ul className="space-y-8">
              {features.map((feature) => (
                <li key={feature.id} className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#eb191a] flex items-center justify-center text-white font-bold text-lg">
                    {feature.id}
                  </div>

                  <div>
                    <h4 className="font-body font-semibold text-dark text-base mb-1">
                      {feature.title}
                    </h4>
                    <p className="font-body text-brand-text/65 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* 🔥 BUTTON FIXED HERE */}
            <div className="flex justify-center lg:justify-start mt-10">
              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-dark text-white font-body font-medium text-sm px-7 py-3 hover:bg-primary transition-colors duration-300"
              >
                Who we are
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] w-full">
              <img
                src="/images/tool.jpg"
                alt="Modern construction"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Decorative accents */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#eb191a]/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#eb191a]/5 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
