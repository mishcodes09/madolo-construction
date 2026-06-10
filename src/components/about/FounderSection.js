import Link from "next/link";
import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-center">
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-brand-bg">
              <Image
                src="/images/nkosiyazi.png"
                alt="Nkosiyazi Dlamini"
                fill
                sizes="(max-width: 1024px) 80vw, 35vw"
                className="object-cover object-top"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#eb191a] rounded-3xl -z-10" />
          </div>

          <div>
            <p className="font-body uppercase tracking-[0.2em] text-[#eb191a] text-sm font-medium mb-3">
              Founder & Site Director
            </p>

            <h3 className="text-4xl md:text-5xl text-dark mb-6">
              Nkosiyazi Dlamini
            </h3>

            <div className="space-y-5">
              <p className="font-body text-brand-text/70 leading-relaxed">
                Nkosiyazi Mncunzwa Dlamini is a builder, carpenter, interior
                designer, and entrepreneur with more than two decades of
                practical experience. His professional journey began in
                furniture manufacturing and interior fit-outs before expanding
                into residential construction, commercial projects, hospitality
                developments, renovations, and project management.
              </p>

              <p className="font-body text-brand-text/70 leading-relaxed">
                His hands-on experience allows him to understand every stage of
                construction—from concept development to final finishes. Under
                his leadership, Madolo Innovative Construction continues to
                pursue projects that combine quality workmanship, innovative
                design, and meaningful community impact.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 bg-[#eb191a] text-white px-6 py-4 mt-10 font-body text-sm font-medium"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
