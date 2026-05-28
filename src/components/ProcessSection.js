import { processSteps } from '@/data/process'

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-body text-primary text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Why Choose Us
          </p>
          <h2 className="font-display text-dark text-3xl md:text-4xl font-bold">
            Our Construction Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div key={step.id} className="group">
              {/* Number + Title row */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="font-display text-primary font-bold text-xs">{step.number}</span>
                </div>
                <h3 className="font-body font-semibold text-dark text-base">{step.title}</h3>
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
              <p className="font-body text-brand-text/65 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
