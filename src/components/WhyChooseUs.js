const features = [
  {
    id: 1,
    title: "Experienced Professionals",
    description:
      "Our team brings decades of hands-on expertise, ensuring every project is executed with skill and precision.",
  },
  {
    id: 2,
    title: "Transparent Communication",
    description:
      "We keep you informed at every stage with regular updates, clear timelines, and honest reporting.",
  },
  {
    id: 3,
    title: "Quality Guaranteed",
    description:
      "We stand behind every build with a comprehensive workmanship guarantee and post-completion support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="font-body text-primary text-xs uppercase tracking-[0.25em] font-medium mb-3">
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
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

            <a
              href="#about"
              className="inline-flex items-center gap-2 bg-dark text-white font-body font-medium text-sm px-7 py-3 hover:bg-primary transition-colors duration-300 mt-10"
            >
              Who we are
            </a>
          </div>

          {/* Image */}
          <div className="relative flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-square w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/7937365/pexels-photo-7937365.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern construction"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Decorative accents */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-dark/5 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
