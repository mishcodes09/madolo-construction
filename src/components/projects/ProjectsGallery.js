const galleryImagesTop = [
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
];

const galleryImagesBottom = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
];

export default function ProjectsGallery() {
  return (
    <section className="py-20 md:py-28 overflow-hidden bg-neutral-50">
      <div className="text-center mb-14 px-4">
        <p className="font-body text-primary text-xs uppercase tracking-[0.25em] font-medium mb-3">
          Project Gallery
        </p>

        <h2 className="text-dark text-3xl md:text-4xl">
          Designed With Detail. Built With Precision.
        </h2>
      </div>

      {/* TOP ROW */}
      <div className="flex gap-6 w-max animate-marquee-right mb-6">
        {[...galleryImagesTop, ...galleryImagesTop].map((image, index) => (
          <div
            key={index}
            className={`rounded-2xl overflow-hidden flex-shrink-0 ${
              index % 2 === 0
                ? "w-[320px] h-[520px]"
                : "w-[320px] h-[250px] mt-20"
            }`}
          >
            <img
              src={image}
              alt="Project"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
