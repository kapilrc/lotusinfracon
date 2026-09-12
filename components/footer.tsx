import Link from "next/link"
import { Phone, MapPin, UserRound, MessageCircle, FileDown, ShieldCheck } from "lucide-react"
import { CONTACT, SITE } from "@/lib/constants"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Logo />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {SITE.description}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-primary pt-1">
              <ShieldCheck className="h-4 w-4" />
              <span>GSTIN: {SITE.gstin}</span>
            </div>
            <div className="pt-2">
              <a
                href={SITE.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold bg-background hover:bg-secondary border border-border px-3 py-2 rounded-sm text-foreground transition-colors"
              >
                <FileDown className="h-3.5 w-3.5 text-primary" />
                <span>Download Catalog PDF</span>
              </a>
            </div>
          </div>

          {/* Equipment Directory */}
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground font-semibold text-sm tracking-wide uppercase">
              Equipment Categories
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/products?category=concrete-pumps"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Stationary & Concrete Pumps
              </Link>
              <Link
                href="/products?category=construction-equipment"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Boom Pumps & Placing Booms
              </Link>
              <Link
                href="/products?category=scaffolding"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Cuplock & H-Frame Scaffolding
              </Link>
              <Link
                href="/products?category=pipes"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Heavy Duty MS Pipes
              </Link>
              <Link
                href="/products"
                className="text-primary text-sm font-semibold hover:underline pt-1"
              >
                Browse All 19+ Equipment →
              </Link>
            </nav>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground font-semibold text-sm tracking-wide uppercase">
              Company
            </h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/company"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                About Lotus Infracon
              </Link>
              <Link
                href="/company#leadership"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Leadership Team
              </Link>
              <Link
                href="/products"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Fleet Inventory
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Request Quotation
              </Link>
              <Link
                href="/sitemap"
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Equipment Sitemap
              </Link>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h3 className="text-foreground font-semibold text-sm tracking-wide uppercase">
              Pune Head Office
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <UserRound className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                <div>
                  <p className="text-foreground font-medium">{CONTACT.person}</p>
                  <p className="text-xs">{CONTACT.designation}</p>
                </div>
              </div>
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>{CONTACT.phone}</span>
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 text-sm transition-colors"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span>+91 80717 92221 (WhatsApp)</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                <span className="text-xs leading-relaxed">{CONTACT.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © 2010 - 2026 Lotus Infracon. All rights reserved. GSTIN: {SITE.gstin}.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link href="/sitemap" className="hover:text-primary transition-colors">
              Sitemap
            </Link>
            <span>•</span>
            <Link href="/company" className="hover:text-primary transition-colors">
              Terms &amp; Compliance
            </Link>
            <span>•</span>
            <span>Pune, Maharashtra, India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
