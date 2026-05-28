import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import StatsSection from "@/components/about/StatsSection";
import CTASection from "@/components/about/CTASection";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <MissionVision />
      <CoreValues />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
