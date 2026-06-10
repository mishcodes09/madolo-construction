export default function AboutStory() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* TEXT SIDE */}
        <div className="max-w-xl">
          <p className="font-body text-[#eb191a] text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Our Story
          </p>

          <h2 className="text-dark text-3xl md:text-4xl mb-6 leading-tight">
            Crafted Through Experience & Passion
          </h2>

          <p className="font-body text-brand-text/70 leading-relaxed mb-5">
            Led by Nkosiyazi Mncunzwa Dlamini, the company grew from years of
            practical experience in furniture manufacturing, carpentry, interior
            design, and renovations.
          </p>

          <p className="font-body text-brand-text/70 leading-relaxed">
            This foundation developed into a broader vision—to create a
            construction company capable of delivering exceptional residential,
            commercial, hospitality, and community development projects. Today,
            Madolo continues to build with integrity, professionalism, and a
            commitment to creating lasting value.
          </p>
        </div>

        {/* IMAGE SIDE */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-full max-w-sm lg:max-w-md">
            {/* shorter height here */}
            <div className="h-[360px] overflow-hidden rounded-3xl bg-brand-bg shadow-lg">
              <img
                src="/images/balck.png"
                alt="Nkosiyazi Dlamini"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
