import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import MarqueeBanner from '@/components/MarqueeBanner'
import FeaturesSection from '@/components/FeaturesSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import ShowcaseSection from '@/components/ShowcaseSection'
import ProcessSection from '@/components/ProcessSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeBanner />
        <FeaturesSection />
        <ServicesSection />
        <WhyChooseUs />
        <ShowcaseSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
