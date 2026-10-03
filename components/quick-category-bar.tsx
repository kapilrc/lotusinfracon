import Link from "next/link"
import { ArrowRight, ChevronRight, Layers, Hammer, Shield, Wrench } from "lucide-react"

const categories = [
  {
    title: "Stationary Concrete Pumps",
    subtitle: "Putzmeister BSA 1403, 1405, 1407",
    href: "/products?category=concrete-pumps",
    badge: "High Pressure",
  },
  {
    title: "Truck Boom Placers",
    subtitle: "36m & 42m High-Reach Booms",
    href: "/products?category=construction-equipment",
    badge: "Fast Setup",
  },
  {
    title: "Cuplock Scaffolding",
    subtitle: "Modular Systems, Standards & Ledgers",
    href: "/products?category=scaffolding",
    badge: "1,000+ Tons",
  },
  {
    title: "Heavy MS Pipes",
    subtitle: "Pumping Pipelines & Victaulic Couplings",
    href: "/products?category=pipes",
    badge: "Ready Stock",
  },
]

export function QuickCategoryBar() {
  return (
    <div className="bg-secondary/70 border-y border-border py-4 relative z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group p-3 sm:p-4 rounded-sm bg-card border border-border hover:border-primary/50 transition-all flex flex-col justify-between shadow-xs hover:shadow-sm"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-xs bg-primary/10 text-primary">
                  {cat.badge}
                </span>
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {cat.title}
                </h4>
                <p className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                  {cat.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
