import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-body text-primary text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Services
          </p>
          <h2 className="text-dark text-3xl md:text-4xl">
            Construction Services Designed Around Your Needs
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden shadow-md cursor-pointer h-[420px] sm:h-80"
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover scale-105 sm:scale-100 group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {service.title}
                </h3>

                {/* Description (Vue-style responsive behavior preserved) */}
                <p
                  className="
                    font-body text-white/80 text-sm leading-relaxed
                    opacity-100 sm:opacity-0
                    sm:translate-y-2 sm:group-hover:translate-y-0 sm:group-hover:opacity-100
                    transition-all duration-300
                  "
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
