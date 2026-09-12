"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, MessageCircle, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { CONTACT, SITE } from "@/lib/constants"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Equipment Fleet" },
  { href: "/company", label: "Company Profile" },
  { href: "/contact", label: "Contact Us" },
  { href: "/sitemap", label: "Sitemap" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Utility Micro-Bar */}
      {/* <div className="bg-[oklch(0.12_0.005_250)] text-white/70 text-[11px] border-b border-white/10 hidden md:block">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-1.5">
          <div className="flex items-center gap-4">
            <span>GSTIN: <strong className="text-white font-mono">{SITE.gstin}</strong></span>
            <span className="text-white/30">•</span>
            <span>Swargate, Pune, Maharashtra</span>
            <span className="text-white/30">•</span>
            <span className="text-amber-400 font-medium">Push Master & Swing Setter Brands</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="h-3 w-3" />
              <span>WhatsApp Support</span>
            </a>
            <span className="text-white/30">•</span>
            <a
              href={SITE.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <FileText className="h-3 w-3 text-primary" />
              <span>Catalog PDF</span>
            </a>
          </div>
        </div>
      </div> */}

      {/* Main Navbar */}
      <nav className="bg-[oklch(0.15_0.005_250/0.95)] backdrop-blur-md border-b border-[oklch(0.28_0.008_250)] text-[oklch(0.95_0_0)]">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3.5">
          <Link href="/" className="flex items-center gap-3">
            <Logo textClassName="text-white" subtextClassName="text-white/60" />
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary font-bold" : "text-white/70"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors font-medium"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>{CONTACT.phone}</span>
            </a>
            <ThemeToggle />
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-5 py-2 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity"
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
              <div className="text-xs text-white/50 border-b border-white/10 pb-2">
                GSTIN: <strong className="text-white font-mono">{SITE.gstin}</strong>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === link.href ? "text-primary font-bold" : "text-white/70"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-[oklch(0.28_0.008_250)]" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">Theme</span>
                <ThemeToggle />
              </div>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 text-sm text-white font-semibold"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>Call: {CONTACT.phone}</span>
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-emerald-400 font-semibold"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: +91 80717 92221</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground px-5 py-2.5 rounded-sm text-sm font-semibold text-center hover:opacity-90 transition-opacity mt-2"
              >
                Request Fast Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
