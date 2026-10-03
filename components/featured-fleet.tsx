"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, ArrowRight, CheckCircle2, FileText, Sparkles, MapPin, Gauge } from "lucide-react"
import { CONTACT } from "@/lib/constants"
import { products, Product } from "@/lib/products"

const featuredSlugs = [
  "putzmeister-1403",
  "putzmeister-1407",
  "36-meter-boom-pump",
  "42-meter-boom-pump",
  "cuplock-scaffolding-system",
  "ms-pipes-rental",
]

const filterTabs = [
  { id: "all", label: "All Featured Fleet" },
  { id: "concrete-pumps", label: "Concrete Pumps" },
  { id: "construction-equipment", label: "Boom Pumps" },
  { id: "scaffolding", label: "Scaffolding & Pipes" },
]

export function FeaturedFleet() {
  const [activeTab, setActiveTab] = useState("all")

  const featuredItems: Product[] = featuredSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p))

  const filteredItems = featuredItems.filter((item) => {
    if (activeTab === "all") return true
    if (activeTab === "scaffolding") {
      return item.category === "scaffolding" || item.category === "pipes"
    }
    return item.category === activeTab
  })

  return (
    <section id="fleet" className="py-20 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="h-px w-10 bg-primary" />
              <span className="text-primary text-xs font-bold tracking-widest uppercase flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                Ready For Dispatch
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Featured Equipment Available For Hire
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
              Inspect our high-demand fleet units stationed at our Pune depot. Guaranteed
              inspection-cleared, tested under load, and available for immediate deployment.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline shrink-0"
          >
            <span>Explore All 19+ Fleet Items</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Quick Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-sm text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 border border-border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((product) => (
            <div
              key={product.slug}
              className="group flex flex-col rounded-sm border border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
            >
              {/* Image & Status Badge */}
              <div className="relative h-52 w-full overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                {/* Top Badge: Category */}
                <div className="absolute top-3 left-3">
                  <span className="bg-background/90 backdrop-blur-md text-foreground text-[11px] font-bold px-2.5 py-1 rounded-sm border border-border/80">
                    {product.categoryLabel}
                  </span>
                </div>

                {/* Top Badge: Availability */}
                <div className="absolute top-3 right-3">
                  <span className="bg-emerald-500/90 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-sm shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    In Stock (Pune)
                  </span>
                </div>

                {/* Bottom title on image */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-base font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 justify-between gap-5">
                {/* Specs Pill Grid */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-border/80 bg-secondary/30 rounded-sm p-2 text-center">
                  {product.specs.slice(0, 3).map((spec, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground uppercase font-semibold">
                        {spec.label}
                      </span>
                      <span className="text-xs font-bold text-foreground mt-0.5 truncate">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Quick Highlights / Trade snippet */}
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 text-[11px] text-foreground/80 font-medium pt-1">
                    <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span className="truncate">
                      Dispatch: {product.tradeInfo?.deliveryLocation || "Pune & Maharashtra"}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 pt-2 border-t border-border">
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`/contact?equipment=${product.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 bg-primary text-primary-foreground py-2.5 px-3 rounded-sm text-xs font-bold hover:opacity-90 transition-opacity text-center shadow-sm"
                    >
                      <span>Request Rate</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>

                    <a
                      href={CONTACT.phoneHref}
                      className="inline-flex items-center justify-center gap-1.5 border border-border hover:border-primary/60 bg-secondary hover:bg-secondary/80 text-foreground py-2.5 px-3 rounded-sm text-xs font-semibold transition-colors text-center"
                    >
                      <Phone className="h-3.5 w-3.5 text-primary" />
                      <span>Call Depot</span>
                    </a>
                  </div>

                  <Link
                    href={`/products/${product.slug}`}
                    className="text-center text-[11px] font-semibold text-muted-foreground hover:text-primary transition-colors pt-1"
                  >
                    View Engineering Specs &amp; Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner inside fleet */}
        <div className="mt-12 p-6 rounded-sm bg-secondary border border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h4 className="text-base font-bold text-foreground">
              Need a Custom Multi-Equipment Package?
            </h4>
            <p className="text-xs text-muted-foreground">
              We bundle Putzmeister pumps with pipeline staging, boom placers, and cuplock scaffolding on single consolidated invoices.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-sm text-xs font-bold hover:opacity-90 transition-opacity"
            >
              Request Custom Package
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="border border-border text-foreground px-4 py-2.5 rounded-sm text-xs font-semibold hover:bg-card transition-colors"
            >
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
