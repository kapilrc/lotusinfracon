"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ArrowRight, Search } from "lucide-react"
import { products, categories, type Product } from "@/lib/products"
import { cn } from "@/lib/utils"

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card hover:border-primary/50 transition-all"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-background/10" />
        <div className="absolute top-3 right-3">
          <span className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-sm">
            {product.categoryLabel}
          </span>
        </div>
        {product.price && (
          <div className="absolute top-3 left-3">
            <span className="text-xs font-semibold bg-primary text-primary-foreground px-2.5 py-1 rounded-sm">
              {product.price}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="text-foreground font-bold text-lg group-hover:text-primary transition-colors">{product.name}</h3>

        <div className="grid grid-cols-3 gap-3">
          {product.specs.slice(0, 3).map((spec) => (
            <div key={spec.label} className="flex flex-col gap-0.5">
              <span className="text-muted-foreground text-xs uppercase tracking-wide">
                {spec.label}
              </span>
              <span className="text-foreground text-sm font-semibold">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mt-auto">
          {product.description}
        </p>

        <div className="flex items-center gap-1 text-primary text-sm font-medium mt-2">
          <span>View Details</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}

export function ProductGrid() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category") || "all"
  const [activeCategory, setActiveCategory] = useState(categoryParam)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    setActiveCategory(categoryParam)
  }, [categoryParam])

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex flex-col gap-8">
      {/* Filters */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search equipment..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-input border border-border rounded-sm pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-sm text-sm font-medium transition-all",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-sm">
          Showing{" "}
          <span className="text-foreground font-semibold">
            {filteredProducts.length}
          </span>{" "}
          equipment
        </p>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <p className="text-muted-foreground text-lg">
            No equipment found matching your criteria.
          </p>
          <button
            onClick={() => {
              setActiveCategory("all")
              setSearchQuery("")
            }}
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
          >
            Clear filters
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  )
}
