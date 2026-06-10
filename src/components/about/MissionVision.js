// src/components/about/MissionVision.jsx

export default function MissionVision() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-black/5">
          <p className="text-[#eb191a] text-xs uppercase tracking-[0.25em] mb-3">
            Mission
          </p>

          <h3 className="text-dark text-2xl mb-4">Deliver Excellence</h3>

          <p className="font-body text-brand-text/70 leading-relaxed">
            To create exceptional spaces through quality construction,
            innovative thinking, and dependable service.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-black/5">
          <p className="text-[#eb191a] text-xs uppercase tracking-[0.25em] mb-3">
            Vision
          </p>

          <h3 className="text-dark text-2xl mb-4">Shape Better Environments</h3>

          <p className="font-body text-brand-text/70 leading-relaxed">
            To become a trusted leader in modern construction and interior
            solutions across South Africa.
          </p>
        </div>
      </div>
    </section>
  );
}
