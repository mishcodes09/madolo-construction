export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-body text-primary text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Why Choose Us
          </p>

          <h2 className="text-dark text-3xl md:text-4xl">
            Built Around Quality & Trust
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Experienced Team",
            "Transparent Pricing",
            "Premium Craftsmanship",
            "Reliable Communication",
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl p-7 border border-black/5"
            >
              <h3 className="text-dark text-lg mb-3">{item}</h3>

              <p className="font-body text-sm text-brand-text/70 leading-relaxed">
                We focus on delivering exceptional results with professionalism
                and attention to detail.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
