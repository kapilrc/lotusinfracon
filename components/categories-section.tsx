import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/section-label"

const categoryCards = [
  {
    title: "Concrete Pump",
    description: "Putzmeister stationary & truck-mounted concrete pumps for high-volume delivery",
    image: "https://cpimg.tistatic.com/10588638/b/4/Stationary-Concrete-Pump-Rental-services..jpg",
    href: "/products?category=concrete-pumps",
    count: "5 Products",
  },
  {
    title: "Construction Equipment Rental",
    description: "Boom pumps, placing booms & equipment rental with PAN India coverage",
    image: "https://cpimg.tistatic.com/10588659/b/4/Concrete-Boom-Pump.jpg",
    href: "/products?category=construction-equipment",
    count: "10 Products",
  },
  {
    title: "Scaffolding Equipment",
    description: "Cuplock systems, props, jacks, couplers & scaffolding components",
    image: "https://cpimg.tistatic.com/10588651/b/4/Cuplock-Scaffolding-System-Rental-Services..jpg",
    href: "/products?category=scaffolding-equipment",
    count: "13 Products",
  },
  {
    title: "Scaffolding Rental Service",
    description: "H-frame, cuplock & pipe scaffolding systems on rental basis",
    image: "https://cpimg.tistatic.com/10588683/b/4/H-Frame-Scaffolding.jpg",
    href: "/products?category=scaffolding-rental",
    count: "11 Products",
  },
  {
    title: "Pipes Rental Services",
    description: "MS pipes in all standard sizes for construction applications",
    image: "https://cpimg.tistatic.com/10588668/b/4/MS-Pipes-Rental-Services..jpg",
    href: "/products?category=pipes",
    count: "1 Product",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 mb-16">
          <SectionHeader
            label="Our Fleet"
            title="Comprehensive Equipment Range"
            description="From concrete placement to access solutions, we provide everything your project demands."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="absolute inset-0 bg-background/10" />
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
