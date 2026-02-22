import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { StickyInquiryBar } from "@/components/sticky-inquiry-bar"

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-28 pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Equipment Fleet
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
              Dynamic Inventory
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Browse our complete range of construction equipment available for
              immediate hire. Filter by category to find exactly what your
              project needs.
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
