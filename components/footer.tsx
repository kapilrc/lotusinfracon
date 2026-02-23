import Link from "next/link"
import { Phone, MapPin, UserRound } from "lucide-react"
import { CONTACT, SITE, COMPANY } from "@/lib/constants"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Logo />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {SITE.description}
            </p>
            <p className="text-muted-foreground text-xs">
              GST: {COMPANY.gst}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-foreground font-semibold text-sm tracking-wide uppercase">
              Products
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/products?category=concrete-pumps"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Concrete Pump
              </Link>
              <Link
                href="/products?category=construction-equipment"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Construction Equipment Rental
              </Link>
              <Link
                href="/products?category=scaffolding-equipment"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Scaffolding Equipment
              </Link>
              <Link
                href="/products?category=scaffolding-rental"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Scaffolding Rental Service
              </Link>
              <Link
                href="/products?category=pipes"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Pipes Rental Services
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-foreground font-semibold text-sm tracking-wide uppercase">
              Company
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/company"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/products"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Our Fleet
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-foreground font-semibold text-sm tracking-wide uppercase">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <UserRound className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">{CONTACT.person}</p>
                  <p>{CONTACT.designation}</p>
                </div>
              </div>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span>{CONTACT.phone}</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{CONTACT.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            {'© 2026 Lotus Infracon. All rights reserved.'}
          </p>
          <p className="text-muted-foreground text-xs">
            Developed &amp; Managed by Kapil Choudhari
          </p>
        </div>
      </div>
    </footer>
  )
}
