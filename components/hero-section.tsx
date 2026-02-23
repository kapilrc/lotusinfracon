import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionLabel } from "@/components/section-label"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-boom-pump.jpg"
          alt="Concrete boom pump at a construction site"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl flex flex-col gap-8">
          <SectionLabel>Since 2006</SectionLabel>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
            Construction Equipment{" "}
            <span className="text-primary">Rental</span> &amp; Scaffolding Solutions
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
            Leading provider of concrete pumps, boom pumps, scaffolding systems,
            and construction equipment rental services across India since 2006.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              View Equipment Fleet
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-sm text-sm font-semibold hover:bg-secondary transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border max-w-lg">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-primary">500+</span>
              <span className="text-muted-foreground text-xs mt-1 uppercase tracking-wide">
                Customers Served
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-primary">19+</span>
              <span className="text-muted-foreground text-xs mt-1 uppercase tracking-wide">
                Years Experience
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-primary">40+</span>
              <span className="text-muted-foreground text-xs mt-1 uppercase tracking-wide">
                Products
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
