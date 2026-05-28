import Navbar from "@/components/Navbar";
import ProjectsHero from "@/components/projects/ProjectsHero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import ProjectsGallery from "@/components/projects/ProjectsGallery";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <ProjectsHero />
      <FeaturedProjects />
      <ProjectsGallery />
      <ProjectsCTA />
      <Footer />
    </main>
  );
}
