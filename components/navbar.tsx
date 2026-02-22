"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { CONTACT } from "@/lib/constants"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Equipment" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[oklch(0.15_0.005_250/0.9)] backdrop-blur-md border-b border-[oklch(0.28_0.008_250)] text-[oklch(0.95_0_0)]">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Logo textClassName="text-white" subtextClassName="text-white/60" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
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
          ))}
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary"
                    : "text-white/70"
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
