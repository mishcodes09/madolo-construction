// src/components/projects/ProjectCard.js

export default function ProjectCard({ project }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white border border-black/5 hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-primary text-xs uppercase tracking-[0.2em] font-medium mb-2">
          {project.category}
        </p>

        <h3 className="text-dark text-xl mb-3">{project.title}</h3>

        <p className="font-body text-brand-text/60 text-sm">
          {project.location}
        </p>
      </div>
    </div>
  );
}
