import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categoryCards = [
  {
    title: "Concrete Pumps",
    description: "Putzmeister stationary pumps for high-volume concrete delivery",
    image: "/images/concrete-pump.jpg",
    href: "/products?category=concrete-pumps",
    count: "8+ Units",
  },
  {
    title: "Boom Pumps",
    description: "Truck-mounted boom pumps with 36m to 52m reach",
    image: "/images/hero-boom-pump.jpg",
    href: "/products?category=construction-equipment",
    count: "12+ Units",
  },
  {
    title: "Scaffolding",
    description: "Cuplock and H-frame systems for any scale project",
    image: "/images/scaffolding.jpg",
    href: "/products?category=scaffolding",
    count: "1000+ Tons",
  },
  {
    title: "Pipes Rental",
    description: "MS pipes in all standard sizes for construction",
    image: "/images/pipes.jpg",
    href: "/products?category=pipes",
    count: "All Sizes",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Our Fleet
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Comprehensive Equipment Range
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            From concrete placement to access solutions, we provide everything
            your project demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative overflow-hidden rounded-sm border border-border bg-card hover:border-primary/50 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/40" />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-sm">
                  {card.count}
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
                <div className="flex items-center gap-1 text-primary text-sm font-medium mt-2">
                  <span>Explore</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
