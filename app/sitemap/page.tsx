import Link from "next/link"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StickyInquiryBar } from "@/components/sticky-inquiry-bar"
import { products, categories } from "@/lib/products"
import { SITE, CONTACT } from "@/lib/constants"
import { ArrowRight, ChevronRight, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Equipment Sitemap & Directory | Lotus Infracon",
  description:
    "Complete directory of construction equipment rental services, concrete pumps, boom placers, scaffolding systems, and pipes available in Pune and Maharashtra.",
}

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-24 pb-12 bg-secondary/50 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">Sitemap Directory</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground">
            Equipment &amp; Site Directory
          </h1>
          <p className="text-muted-foreground text-sm md:text-base mt-2 max-w-2xl">
            Quick directory to explore all rental machinery, concrete pumps, scaffolding models, and corporate pages offered by Lotus Infracon.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Corporate & Navigation Pages */}
            <div className="flex flex-col gap-4 p-6 rounded-sm border border-border bg-card">
              <div className="flex items-center gap-2 text-primary font-bold text-lg border-b border-border pb-3">
                <FileText className="h-5 w-5" />
                <h2>Company &amp; Service Pages</h2>
              </div>
              <ul className="flex flex-col gap-2.5 text-sm">
                <li>
                  <Link href="/" className="text-foreground hover:text-primary transition-colors flex items-center justify-between">
                    <span>Home Page</span>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </Link>
                </li>
                <li>
                  <Link href="/company" className="text-foreground hover:text-primary transition-colors flex items-center justify-between">
                    <span>Company Profile &amp; History</span>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-foreground hover:text-primary transition-colors flex items-center justify-between">
                    <span>Full Equipment Fleet Inventory</span>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-foreground hover:text-primary transition-colors flex items-center justify-between">
                    <span>Contact Us &amp; Procurement</span>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </Link>
                </li>
                <li>
                  <a
                    href={SITE.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center justify-between font-medium pt-2"
                  >
                    <span>Download Official Catalog (PDF)</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Equipment Categories */}
            {categories
              .filter((c) => c.id !== "all")
              .map((category) => {
                const categoryProducts = products.filter((p) => p.category === category.id)
                return (
                  <div
                    key={category.id}
                    className="flex flex-col gap-4 p-6 rounded-sm border border-border bg-card"
                  >
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <h2 className="text-foreground font-bold text-lg">{category.label}</h2>
                      <Link
                        href={`/products?category=${category.id}`}
                        className="text-xs font-semibold text-primary hover:underline"
                      >
                        Category View
                      </Link>
                    </div>

                    <ul className="flex flex-col gap-2.5 text-sm">
                      {categoryProducts.map((p) => (
                        <li key={p.id}>
                          <Link
                            href={`/products/${p.slug}`}
                            className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all flex items-center justify-between group"
                          >
                            <span className="group-hover:text-primary transition-colors">
                              {p.name}
                            </span>
                            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/50 group-hover:text-primary transition-colors shrink-0" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
          </div>

          {/* Direct Assistance CTA Banner */}
          <div className="mt-16 p-8 border border-primary/30 rounded-sm bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-foreground">
                Looking for a specific model not listed in the directory?
              </h3>
              <p className="text-sm text-muted-foreground">
                Our Swargate, Pune depot has ongoing fleet rotations and specialized custom pipelines.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Inquire With Dispatch
              </Link>
              <a
                href={CONTACT.phoneHref}
                className="border border-border bg-card text-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:bg-secondary transition-colors"
              >
                Call {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyInquiryBar />
    </main>
  )
}
