import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StickyInquiryBar } from "@/components/sticky-inquiry-bar"
import { products, getProductBySlug } from "@/lib/products"
import { CONTACT, SITE } from "@/lib/constants"
import {
  Phone,
  MessageCircle,
  FileDown,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Truck,
  Clock,
  ArrowRight,
} from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Equipment Not Found | Lotus Infracon",
    }
  }

  return {
    title: `${product.name} Rental in Pune, Maharashtra | Lotus Infracon`,
    description: `${product.description.slice(0, 160)} Best rental rates from Lotus Infracon, Swargate Pune. Call ${CONTACT.phone}.`,
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Breadcrumbs */}
      <section className="pt-24 pb-6 bg-secondary/50 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/products" className="hover:text-primary transition-colors">
              Equipment Fleet
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href={`/products?category=${product.category}`}
              className="hover:text-primary transition-colors"
            >
              {product.categoryLabel}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium truncate max-w-[200px] md:max-w-none">
              {product.name}
            </span>
          </nav>
        </div>
      </section>

      {/* Main Showcase */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Image Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-border bg-card shadow-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-sm shadow-sm backdrop-blur-md ${
                      product.status === "available"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        product.status === "available"
                          ? "bg-emerald-400 animate-pulse"
                          : "bg-amber-400"
                      }`}
                    />
                    {product.statusLabel}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-sm text-xs font-semibold text-foreground border border-border">
                  {product.categoryLabel}
                </div>
              </div>

              {/* Trust highlights banner */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-sm border border-border bg-secondary/30">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-primary shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-foreground">Pune Yard Dispatch</span>
                    <span className="text-[11px] text-muted-foreground">Prompt Delivery</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-foreground">Certified Quality</span>
                    <span className="text-[11px] text-muted-foreground">Pre-tested Fleet</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-foreground">24/7 Breakdown</span>
                    <span className="text-[11px] text-muted-foreground">Standby Engineers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content & Action Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-widest">
                  Equipment Code: LOTUS-{product.id.padStart(3, "0")}
                </span>
                <h1 className="text-2xl md:text-4xl font-extrabold text-foreground mt-2 leading-tight">
                  {product.name}
                </h1>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-4">
                  {product.description}
                </p>
              </div>

              {/* Quick Specs badges */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-sm border border-border bg-card">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      {spec.label}
                    </span>
                    <span className="text-sm md:text-base font-bold text-foreground mt-0.5">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Highlights */}
              {product.highlights && product.highlights.length > 0 && (
                <div className="flex flex-col gap-2">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Fleet Advantages
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {product.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/90">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Primary CTAs */}
              <div className="flex flex-col gap-3 pt-2">
                <Link
                  href={`/contact?equipment=${encodeURIComponent(product.slug)}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 px-6 rounded-sm font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
                      `Hi Lotus Infracon, I want to inquire about renting "${product.name}". Please share availability and rates.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-sm font-semibold text-sm transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center justify-center gap-2 border border-border bg-card hover:bg-secondary text-foreground py-3 px-4 rounded-sm font-semibold text-sm transition-colors"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    <span>Call Hotline</span>
                  </a>
                </div>

                <a
                  href={SITE.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Download Lotus Infracon Catalog (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & Trade Info Tabs */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Specifications */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-primary" />
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Technical Specifications
                </h2>
              </div>

              <div className="border border-border rounded-sm overflow-hidden bg-card">
                <div className="divide-y divide-border">
                  {(product.detailedSpecs || product.specs).map((spec, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-2 p-3.5 text-sm hover:bg-secondary/40 transition-colors"
                    >
                      <span className="text-muted-foreground font-medium">{spec.label}</span>
                      <span className="text-foreground font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trade & Commercial Information */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-primary" />
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Commercial & Rental Terms
                </h2>
              </div>

              <div className="border border-border rounded-sm overflow-hidden bg-card p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-1 border-b border-border pb-3">
                  <span className="text-xs uppercase text-muted-foreground font-semibold">
                    Minimum Order Quantity (MOQ)
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    {product.tradeInfo?.moq || "Flexible (Daily, Weekly, Monthly)"}
                  </span>
                </div>

                <div className="flex flex-col gap-1 border-b border-border pb-3">
                  <span className="text-xs uppercase text-muted-foreground font-semibold">
                    Supply Capacity & Availability
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    {product.tradeInfo?.supplyAbility || "High availability from Swargate Pune Yard"}
                  </span>
                </div>

                <div className="flex flex-col gap-1 border-b border-border pb-3">
                  <span className="text-xs uppercase text-muted-foreground font-semibold">
                    Dispatch Location
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    {CONTACT.address}
                  </span>
                </div>

                <div className="flex flex-col gap-1 border-b border-border pb-3">
                  <span className="text-xs uppercase text-muted-foreground font-semibold">
                    Service Area Coverage
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    {product.tradeInfo?.deliveryLocation || "Pune, Mumbai, Maharashtra & Pan-India"}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase text-muted-foreground font-semibold">
                    GST Verification
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    GSTIN: {SITE.gstin} (Verified Supplier)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Similar Equipment
                </span>
                <h2 className="text-2xl font-bold text-foreground mt-1">
                  More in {product.categoryLabel}
                </h2>
              </div>
              <Link
                href={`/products?category=${product.category}`}
                className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  className="group flex flex-col rounded-sm border border-border bg-card overflow-hidden hover:border-primary/50 transition-all"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex flex-col gap-3 flex-1">
                    <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{rel.description}</p>
                    <div className="mt-auto pt-2 flex items-center justify-between border-t border-border">
                      <Link
                        href={`/products/${rel.slug}`}
                        className="text-xs font-semibold text-primary hover:underline"
                      >
                        View Specifications →
                      </Link>
                      <Link
                        href={`/contact?equipment=${encodeURIComponent(rel.slug)}`}
                        className="text-xs font-semibold bg-secondary hover:bg-primary hover:text-primary-foreground px-2.5 py-1.5 rounded-sm transition-colors"
                      >
                        Quote
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <StickyInquiryBar />
    </main>
  )
}
