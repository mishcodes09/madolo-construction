import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-body text-primary text-xs uppercase tracking-[0.25em] font-medium mb-3">
            Featured Projects
          </p>

          <h2 className="text-dark text-3xl md:text-4xl">
            Crafted Spaces That Speak For Themselves
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden bg-white border border-black/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-primary text-xs uppercase tracking-wide mb-2">
                  {project.category}
                </p>

                <h3 className="text-dark text-xl mb-2">{project.title}</h3>

                <p className="font-body text-brand-text/60 text-sm">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
