import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { TrustSection } from "@/components/trust-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { StickyInquiryBar } from "@/components/sticky-inquiry-bar"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <TrustSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <StickyInquiryBar />
    </main>
  )
}
