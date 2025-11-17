'use client'

import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { BenefitsSection } from '@/components/benefits-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { PlansSection } from '@/components/plans-section'
import { FinalCTASection } from '@/components/final-cta-section'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PlansSection />
      <FinalCTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
