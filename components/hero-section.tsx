import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Since 2005
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
            Powering India&apos;s Infrastructure with{" "}
            <span className="text-primary">Precision</span> Rental Solutions
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
            Premium concrete pumps, boom pumps, scaffolding systems, and
            industrial pipe rentals trusted by Tier-1 contractors across the
            nation.
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
                Projects Delivered
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-primary">20+</span>
              <span className="text-muted-foreground text-xs mt-1 uppercase tracking-wide">
                Years Experience
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold text-primary">50+</span>
              <span className="text-muted-foreground text-xs mt-1 uppercase tracking-wide">
                Equipment Fleet
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
