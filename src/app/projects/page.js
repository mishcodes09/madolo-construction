import Navbar from "@/components/Navbar";
import ProjectsHero from "@/components/projects/ProjectsHero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import SocialProofSection from "@/components/projects/SocialProofSection";
import ProjectStats from "@/components/projects/ProjectStats";
import ProjectsCTA from "@/components/projects/ProjectsCTA";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <ProjectsHero />
      <FeaturedProjects />
      <SocialProofSection />
      <ProjectStats />
      <ProjectsCTA />
      <Footer />
    </main>
  );
}
