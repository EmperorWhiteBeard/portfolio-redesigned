import { HeroSection } from "@/sections/hero-section"
import { AboutSection } from "@/sections/about-section"
import { TechStackSection } from "@/sections/tech-stack-section"
import { CertificationsSection } from "@/sections/certifications-section"
import { ProjectsSection } from "@/sections/projects-section"
import { ExperienceSection } from "@/sections/experience-section"
import { ContactSection } from "@/sections/contact-section"
import { Footer } from "@/sections/footer"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <CertificationsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </>
  )
}
