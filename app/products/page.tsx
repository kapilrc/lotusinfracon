import { Suspense } from "react"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { StickyInquiryBar } from "@/components/sticky-inquiry-bar"

export const metadata: Metadata = {
  title: "Construction Equipment Rental Fleet in Pune | Concrete Pumps & Scaffolding",
  description:
    "Explore Lotus Infracon's rental fleet in Pune: Putzmeister stationary concrete pumps (BSA 1403/1405/1407), 36m & 42m boom pumps, cuplock scaffolding & MS pipes. Fast dispatch from Swargate Pune.",
  keywords: [
    "concrete pump rental fleet pune",
    "putzmeister rental pune",
    "boom pump hire pune",
    "scaffolding rental catalog pune",
    "cuplock scaffolding pune yard",
    "ms pipes hire maharashtra",
  ],
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Construction Equipment Rental Fleet in Pune | Lotus Infracon",
    description:
      "Concrete pumps, boom pumps, modular cuplock scaffolding, and heavy-duty pipes available for hire in Pune and Maharashtra.",
    url: "/products",
  },
}

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-24 pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Equipment Fleet • Pune, Maharashtra
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
              Heavy Construction Equipment on Rent in Pune
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Browse our complete range of certified concrete pumps, boom placers,
              cuplock scaffolding, and industrial pipes available for immediate site dispatch
              from our Pune staging depot.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="text-muted-foreground text-center py-20">
                Loading equipment...
              </div>
            }
          >
            <ProductGrid />
          </Suspense>
        </div>
      </section>
      <Footer />
      <StickyInquiryBar />
    </main>
  )
}
