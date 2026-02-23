import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StickyInquiryBar } from "@/components/sticky-inquiry-bar"
import { products, getProductBySlug, getRelatedProducts } from "@/lib/products"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: "Product Not Found" }
  return {
    title: `${product.name} | Lotus Infracon`,
    description: product.description.slice(0, 160),
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const relatedProducts = getRelatedProducts(product)

  return (
    <main>
      <Navbar />

      <section className="pt-28 pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href={`/products?category=${product.category}`}
              className="hover:text-primary transition-colors"
            >
              {product.categoryLabel}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-border bg-card">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.images.slice(0, 4).map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-square rounded-sm overflow-hidden border border-border bg-card"
                    >
                      <Image
                        src={img}
                        alt={`${product.name} ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                  {product.categoryLabel}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                  {product.name}
                </h1>
                {product.price && (
                  <p className="text-2xl font-bold text-primary mt-3">
                    {product.price}
                  </p>
                )}
              </div>

              <p className="text-muted-foreground text-base leading-relaxed">
                {product.description}
              </p>

              {/* Specs table */}
              <div>
                <h2 className="text-foreground font-semibold text-lg mb-3">
                  Specifications
                </h2>
                <div className="border border-border rounded-sm overflow-hidden">
                  {product.specs.map((spec, i) => (
                    <div
                      key={spec.label}
                      className={`flex items-center px-4 py-3 ${
                        i % 2 === 0 ? "bg-card" : "bg-secondary/50"
                      }`}
                    >
                      <span className="text-muted-foreground text-sm w-1/2">
                        {spec.label}
                      </span>
                      <span className="text-foreground text-sm font-semibold w-1/2">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trade Info */}
              {product.tradeInfo && product.tradeInfo.length > 0 && (
                <div>
                  <h2 className="text-foreground font-semibold text-lg mb-3">
                    Trade Information
                  </h2>
                  <div className="border border-border rounded-sm overflow-hidden">
                    {product.tradeInfo.map((info, i) => (
                      <div
                        key={info.label}
                        className={`flex items-center px-4 py-3 ${
                          i % 2 === 0 ? "bg-card" : "bg-secondary/50"
                        }`}
                      >
                        <span className="text-muted-foreground text-sm w-1/2">
                          {info.label}
                        </span>
                        <span className="text-foreground text-sm font-semibold w-1/2">
                          {info.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Get Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-sm text-sm font-semibold hover:bg-secondary transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Products
                </Link>
              </div>
            </div>
          </div>

          {/* FAQs */}
          {product.faqs && product.faqs.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <div className="flex flex-col gap-4">
                {product.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="border border-border rounded-sm p-6 bg-card"
                  >
                    <h3 className="text-foreground font-semibold mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Related Products
                </h2>
                <Link
                  href={`/products?category=${product.category}`}
                  className="flex items-center gap-1 text-primary text-sm font-semibold hover:underline"
                >
                  View All
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/products/${rp.slug}`}
                    className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card hover:border-primary/50 transition-all"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={rp.image}
                        alt={rp.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 flex flex-col gap-1">
                      <h3 className="text-foreground font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">
                        {rp.name}
                      </h3>
                      {rp.price && (
                        <span className="text-primary text-sm font-bold">
                          {rp.price}
                        </span>
                      )}
                      <span className="text-muted-foreground text-xs">
                        {rp.categoryLabel}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <StickyInquiryBar />
    </main>
  )
}
