import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { StickyInquiryBar } from "@/components/sticky-inquiry-bar"
import { SectionHeader } from "@/components/section-label"

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-28 pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 mb-12">
            <SectionHeader
              as="h1"
              label="Equipment Fleet"
              title="Dynamic Inventory"
              description="Browse our complete range of construction equipment available for immediate hire. Filter by category to find exactly what your project needs."
            />
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
