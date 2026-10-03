"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Truck,
  Wrench,
  Clock,
  Sparkles,
  Send,
} from "lucide-react"
import { CONTACT, SITE } from "@/lib/constants"
import { products } from "@/lib/products"

const featuredQuickPicks = [
  { label: "Putzmeister 1403", slug: "putzmeister-1403" },
  { label: "Putzmeister 1407", slug: "putzmeister-1407" },
  { label: "36m Boom Pump", slug: "36-meter-boom-pump" },
  { label: "42m Boom Pump", slug: "42-meter-boom-pump" },
  { label: "Cuplock Scaffolding", slug: "cuplock-scaffolding-system" },
  { label: "MS Pipes Rental", slug: "ms-pipes-rental" },
]

export function HeroSection() {
  const router = useRouter()
  const [equipment, setEquipment] = useState("putzmeister-1403")
  const [location, setLocation] = useState("")
  const [phone, setPhone] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const handleQuickQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    const targetUrl = `/contact?equipment=${encodeURIComponent(equipment)}${
      location ? `&location=${encodeURIComponent(location)}` : ""
    }`
    router.push(targetUrl)
  }

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Graphic & Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-boom-pump.jpg"
          alt="Heavy concrete boom pump operating on infrastructure site in Pune"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Multi-layered dark overlay for razor-sharp text readability in light & dark modes */}
        <div className="absolute inset-0 bg-background/90 md:bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full">
        {/* Top High-Value Trust Banner (replaces generic 'Since 2010 • Swargate') */}
        <div className="inline-flex items-center gap-2 sm:gap-3 flex-wrap p-1.5 pr-4 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-md mb-6 max-w-fit shadow-sm">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="h-3.5 w-3.5" />
            Verified GST Supplier
          </span>
          <span className="text-xs text-foreground/90 font-medium hidden sm:inline">
            GSTIN: <strong className="font-mono text-primary">{SITE.gstin}</strong>
          </span>
          <span className="text-foreground/40 hidden sm:inline">•</span>
          <span className="text-xs text-foreground/90 font-medium flex items-center gap-1.5">
            <Truck className="h-3.5 w-3.5 text-primary" />
            Immediate Dispatch across Pune &amp; Maharashtra
          </span>
        </div>

        {/* 2-Column Responsive Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Direct Commercial Value Proposition */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.12] tracking-tight text-balance">
              Heavy Construction Equipment on Rent in{" "}
              <span className="text-primary underline decoration-primary/40 underline-offset-8">
                Pune &amp; Maharashtra
              </span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
              Factory-maintained Putzmeister stationary concrete pumps, truck-mounted boom placers
              (36m &amp; 42m), certified cuplock scaffolding &amp; heavy MS pipes. Ready for immediate
              site mobilization with licensed operators and 24/7 technical breakdown support.
            </p>

            {/* Quick Machinery Direct-Pills */}
            <div className="flex flex-col gap-2 pt-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Popular Fleet in Yard Right Now:
              </span>
              <div className="flex flex-wrap gap-2">
                {featuredQuickPicks.map((pick) => (
                  <Link
                    key={pick.slug}
                    href={`/products/${pick.slug}`}
                    className="text-xs font-medium px-3 py-1.5 rounded-sm bg-card hover:bg-primary hover:text-primary-foreground border border-border transition-colors flex items-center gap-1 text-foreground"
                  >
                    <span>{pick.label}</span>
                    <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary-foreground" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Direct Call & WhatsApp Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-6 py-3.5 rounded-sm text-sm font-bold hover:opacity-95 transition-all shadow-md group"
              >
                <Phone className="h-4 w-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Call Dispatch: {CONTACT.phone}</span>
              </a>

              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-sm text-sm font-bold transition-colors shadow-md"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span>WhatsApp Instant Quote</span>
              </a>
            </div>

            {/* Key Assurance Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-border/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span className="text-xs text-muted-foreground font-medium">
                  50+ Heavy Machinery Units
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span className="text-xs text-muted-foreground font-medium">
                  Under 2-Hour Quote SLA
                </span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Wrench className="h-4 w-4 text-primary shrink-0" />
                <span className="text-xs text-muted-foreground font-medium">
                  Certified Operators Included
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Quick Equipment Finder Card */}
          <div className="lg:col-span-5 hidden">
            <div className="relative rounded-sm border border-primary/30 bg-card/95 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
              <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-3">
                <span className="bg-primary text-primary-foreground text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-sm shadow-sm tracking-wider">
                  Fast Dispatch
                </span>
              </div>

              <div className="flex flex-col gap-1.5 mb-5">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <span>Check Fleet Availability</span>
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Select your machinery model and site location for instant commercial rental pricing.
                </p>
              </div>

              <form onSubmit={handleQuickQuoteSubmit} className="flex flex-col gap-4">
                {/* Equipment Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                    Equipment Required *
                  </label>
                  <select
                    value={equipment}
                    onChange={(e) => setEquipment(e.target.value)}
                    className="w-full bg-input border border-border rounded-sm px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  >
                    <optgroup label="Concrete Pumps">
                      {products
                        .filter((p) => p.category === "concrete-pumps")
                        .map((p) => (
                          <option key={p.slug} value={p.slug}>
                            {p.name}
                          </option>
                        ))}
                    </optgroup>
                    <optgroup label="Boom Pumps & Placing">
                      {products
                        .filter((p) => p.category === "construction-equipment")
                        .map((p) => (
                          <option key={p.slug} value={p.slug}>
                            {p.name}
                          </option>
                        ))}
                    </optgroup>
                    <optgroup label="Scaffolding Systems">
                      {products
                        .filter((p) => p.category === "scaffolding")
                        .map((p) => (
                          <option key={p.slug} value={p.slug}>
                            {p.name}
                          </option>
                        ))}
                    </optgroup>
                    <optgroup label="Pipes Rental">
                      {products
                        .filter((p) => p.category === "pipes")
                        .map((p) => (
                          <option key={p.slug} value={p.slug}>
                            {p.name}
                          </option>
                        ))}
                    </optgroup>
                  </select>
                </div>

                {/* Site Location */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                    Site Location (City / Area)
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Pune, PCMC, Chakan, Mumbai"
                    className="w-full bg-input border border-border rounded-sm px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Mobile Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                    Contact Phone Number *
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 bg-muted border border-r-0 border-border rounded-l-sm text-xs text-muted-foreground font-semibold">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="98765 43210"
                      maxLength={10}
                      className="w-full bg-input border border-border rounded-r-sm px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 px-4 rounded-sm text-sm font-bold hover:opacity-90 transition-opacity shadow-md"
                >
                  <Send className="h-4 w-4" />
                  <span>{submitting ? "Redirecting..." : "Get Instant Quote & Availability"}</span>
                </button>

                <p className="text-[11px] text-center text-muted-foreground pt-1">
                  🔒 Zero spam. Direct technical quote from Swargate Pune dispatch team.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
