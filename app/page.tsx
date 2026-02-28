import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { OverviewSection } from "@/components/overview-section"
import { SpecsSection } from "@/components/specs-section"
import { PerformanceSection } from "@/components/performance-section"
import { GallerySection } from "@/components/gallery-section"
import { HeritageSection } from "@/components/heritage-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <SpecsSection />
      <PerformanceSection />
      <GallerySection />
      <HeritageSection />
      <Footer />
    </main>
  )
}
