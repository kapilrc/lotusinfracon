"use client"

import { useState, Suspense, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react"
import { CONTACT, SITE } from "@/lib/constants"
import { products } from "@/lib/products"
import { IndiaPhoneInput } from "@/components/india-phone-input"

const contactInfo = [
  {
    icon: Phone,
    title: "Direct Hotline",
    detail: CONTACT.phone,
    sub: `${CONTACT.person} | ${CONTACT.designation}`,
    href: CONTACT.phoneHref,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chat",
    detail: "+91 80717 92221",
    sub: "Instant reply for site requirements",
    href: CONTACT.whatsappHref,
  },
  {
    icon: Mail,
    title: "Email",
    detail: CONTACT.email,
    sub: "Inquiries & Tender Documentation",
    href: CONTACT.emailHref,
  },
  {
    icon: MapPin,
    title: "Head Office & Pune Depot",
    detail: CONTACT.address,
    sub: `GSTIN: ${SITE.gstin} | ${CONTACT.city}, ${CONTACT.state}`,
    href: undefined,
  },
  {
    icon: Clock,
    title: "Operating Hours",
    detail: "Mon - Sat: 8:00 AM - 8:00 PM",
    sub: "Sunday: Emergency Plant Support",
    href: undefined,
  },
]

function ContactFormInner() {
  const searchParams = useSearchParams()
  const initialEquipment = searchParams.get("equipment") || ""
  const [selectedEquipment, setSelectedEquipment] = useState(initialEquipment)
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (initialEquipment) {
      setSelectedEquipment(initialEquipment)
    }
  }, [initialEquipment])

  const matchedProduct = products.find((p) => p.slug === selectedEquipment)

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-12 md:p-16 border border-border rounded-sm bg-card text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-foreground text-2xl font-bold">Inquiry Received</h2>
        <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
          Thank you for contacting Lotus Infracon. Our technical team in Swargate Pune will review your project needs and send a commercial quote within 2 hours.
        </p>
        <div className="mt-4 pt-4 border-t border-border flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Need urgent equipment mobilization?</span>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
          >
            <Phone className="h-4 w-4" />
            Call {CONTACT.phone}
          </a>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="flex flex-col gap-6 p-6 md:p-8 border border-border rounded-sm bg-card"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-foreground text-xl font-bold">Request Equipment Quote</h2>
        <p className="text-xs text-muted-foreground">
          Fill in your project requirements for custom pricing and immediate availability.
        </p>
      </div>

      {matchedProduct && (
        <div className="p-3 bg-primary/10 border border-primary/30 rounded-sm flex items-center justify-between text-xs">
          <span className="text-foreground">
            Selected Equipment: <strong>{matchedProduct.name}</strong>
          </span>
          <span className="text-primary font-bold uppercase tracking-wider">
            {matchedProduct.categoryLabel}
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-foreground text-sm font-medium">
            Contact Person <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Your full name"
            className="bg-input border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-foreground text-sm font-medium">
            Company / Contractor Name
          </label>
          <input
            type="text"
            placeholder="Firm or company name"
            className="bg-input border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-foreground text-sm font-medium">
            Mobile Number <span className="text-primary">*</span>
          </label>
          <IndiaPhoneInput
            value={phone}
            onChange={setPhone}
            required
            placeholder="98765 43210"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-foreground text-sm font-medium">Email Address</label>
          <input
            type="email"
            placeholder="procurement@company.com"
            className="bg-input border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-foreground text-sm font-medium">
          Equipment Model Required <span className="text-primary">*</span>
        </label>
        <select
          required
          value={selectedEquipment}
          onChange={(e) => setSelectedEquipment(e.target.value)}
          className="bg-input border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="" disabled>
            Select specific equipment model
          </option>
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
          <optgroup label="General / Package Inquiries">
            <option value="multiple-package">Multiple Equipment Package</option>
            <option value="other-requirement">Other Equipment Requirement</option>
          </optgroup>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-foreground text-sm font-medium">
            Site Location (City / District)
          </label>
          <input
            type="text"
            placeholder="e.g. Pune, Navi Mumbai, Nagpur"
            className="bg-input border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-foreground text-sm font-medium">Expected Duration</label>
          <select
            defaultValue="1-month"
            className="bg-input border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="spot-pour">Single Pour / Spot Hire</option>
            <option value="1-week">1 to 2 Weeks</option>
            <option value="1-month">1 Month</option>
            <option value="3-months">3 to 6 Months</option>
            <option value="long-term">6 Months to 1 Year+</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-foreground text-sm font-medium">
          Project Details / Quantity Needed
        </label>
        <textarea
          rows={3}
          placeholder="Specify output rate, pipe lengths, number of vertical standards, or special site conditions..."
          className="bg-input border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        <Send className="h-4 w-4" />
        Submit Quote Request
      </button>
    </form>
  )
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 mb-14">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Contact & Procurement
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
              Let&apos;s Mobilize Your Equipment
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Connect directly with our fleet dispatch team in Swargate, Pune. We provide verified machinery, certified operators, and 24/7 site reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact form with Suspense */}
            <div className="lg:col-span-3">
              <Suspense
                fallback={
                  <div className="p-12 text-center text-muted-foreground border border-border rounded-sm">
                    Loading inquiry form...
                  </div>
                }
              >
                <ContactFormInner />
              </Suspense>
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  const Wrapper = info.href ? "a" : "div"
                  const wrapperProps = info.href ? { href: info.href, target: info.href.startsWith("http") ? "_blank" : undefined } : {}
                  return (
                    <Wrapper
                      key={info.title}
                      {...wrapperProps}
                      className="flex items-start gap-4 p-4 border border-border rounded-sm bg-card hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="text-muted-foreground text-xs uppercase tracking-wide">
                          {info.title}
                        </span>
                        <span className="text-foreground font-semibold text-sm md:text-base break-words">
                          {info.detail}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {info.sub}
                        </span>
                      </div>
                    </Wrapper>
                  )
                })}

                <div className="p-5 border border-primary/30 rounded-sm bg-primary/5 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    <ShieldCheck className="h-5 w-5" />
                    <span>Verified GST Supplier</span>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    GSTIN: <strong>{SITE.gstin}</strong>. Operating from Ackriti Chambers, Pune Satara Road, Swargate, Pune with full statutory compliance for Tier-1 engineering contracts.
                  </p>
                  <div className="pt-2 flex items-center gap-3">
                    <a
                      href={`https://wa.me/${CONTACT.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-sm inline-flex items-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>WhatsApp Us</span>
                    </a>
                    <a
                      href={CONTACT.phoneHref}
                      className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1.5"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>Call {CONTACT.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
