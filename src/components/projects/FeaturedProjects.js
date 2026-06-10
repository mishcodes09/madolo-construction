import Image from "next/image";

const row1 = [
  { id: 1, src: "/images/commercial.jpeg", alt: "Commercial build", span: 2 },
  {
    id: 2,
    src: "/images/residential.jpeg",
    alt: "Residential project",
    span: 1,
  },
];

const row2 = [
  { id: 3, src: "/images/finishes.jpeg", alt: "Premium finishes" },
  { id: 4, src: "/images/hospitality.jpeg", alt: "Hospitality space" },
  { id: 5, src: "/images/interior.jpeg", alt: "Interior design" },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-dark text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight">
              Project Gallery
            </h2>
          </div>
          <p className="font-body text-brand-text/50 text-sm leading-relaxed max-w-[200px] mt-5 md:mt-0 md:text-right">
            Crafted spaces and premium builds from across South Africa.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {/* Row 1 — wide + portrait */}
          {row1.map((img) => (
            <div
              key={img.id}
              className={`${
                img.span === 2 ? "col-span-2" : "col-span-1"
              } relative h-64 md:h-[380px] rounded-2xl overflow-hidden`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          ))}

          {/* Row 2 — three equal */}
          {row2.map((img) => (
            <div
              key={img.id}
              className="relative col-span-1 h-52 md:h-[260px] rounded-2xl overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
