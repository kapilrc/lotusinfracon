"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { CONTACT } from "@/lib/constants"
import { categories } from "@/lib/products"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products", hasDropdown: true },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const productCategories = categories.filter((c) => c.id !== "all")

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[oklch(0.15_0.005_250/0.9)] backdrop-blur-md border-b border-[oklch(0.28_0.008_250)] text-[oklch(0.95_0_0)]">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Logo textClassName="text-white" subtextClassName="text-white/60" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                    pathname.startsWith("/products")
                      ? "text-primary"
                      : "text-white/70"
                  )}
                >
                  {link.label}
                  <ChevronDown className={cn("h-3.5 w-3.5 relative top-[2px] transition-transform", isProductsOpen && "rotate-180")} />
                </button>
                {isProductsOpen && (
                  <div className="absolute top-full left-0 mt-3 w-72 bg-[oklch(0.18_0.005_250)] border border-[oklch(0.28_0.008_250)] rounded-sm shadow-xl py-2">
                    <Link
                      href="/products"
                      onClick={() => setIsProductsOpen(false)}
                      className="block px-4 py-2.5 text-sm text-white/70 hover:text-primary hover:bg-white/5 transition-colors font-medium"
                    >
                      All Products
                    </Link>
                    <div className="h-px bg-[oklch(0.28_0.008_250)] my-1" />
                    {productCategories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/products?category=${cat.id}`}
                        onClick={() => setIsProductsOpen(false)}
                        className="block px-4 py-2.5 text-sm text-white/70 hover:text-primary hover:bg-white/5 transition-colors"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href
                    ? "text-primary"
                    : "text-white/70"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>{CONTACT.phone}</span>
          </a>
          <ThemeToggle />
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get Quote
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[oklch(0.15_0.005_250)] border-t border-[oklch(0.28_0.008_250)]">
          <div className="flex flex-col px-6 py-4 gap-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/" ? "text-primary" : "text-white/70"
              )}
            >
              Home
            </Link>

            {/* Mobile products dropdown */}
            <div>
              <button
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors w-full",
                  pathname.startsWith("/products") ? "text-primary" : "text-white/70"
                )}
              >
                Products
                <ChevronDown className={cn("h-3.5 w-3.5 relative top-[2px] transition-transform", isMobileProductsOpen && "rotate-180")} />
              </button>
              {isMobileProductsOpen && (
                <div className="flex flex-col gap-2 mt-2 ml-4">
                  <Link
                    href="/products"
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    All Products
                  </Link>
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/products?category=${cat.id}`}
                      onClick={() => setIsOpen(false)}
                      className="text-sm text-white/60 hover:text-primary transition-colors"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/company"
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/company" ? "text-primary" : "text-white/70"
              )}
            >
              Company
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/contact" ? "text-primary" : "text-white/70"
              )}
            >
              Contact
            </Link>

            <hr className="border-[oklch(0.28_0.008_250)]" />
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">Theme</span>
              <ThemeToggle />
            </div>
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 text-sm text-white/70"
            >
              <Phone className="h-4 w-4" />
              <span>{CONTACT.phone}</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-sm text-sm font-semibold text-center hover:opacity-90 transition-opacity"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
