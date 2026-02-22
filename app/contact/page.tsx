"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react"
import { CONTACT } from "@/lib/constants"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    detail: CONTACT.phone,
    sub: `${CONTACT.person} | ${CONTACT.designation}`,
    href: CONTACT.phoneHref,
  },
  {
    icon: Mail,
    title: "Email",
    detail: CONTACT.email,
    sub: "We reply within 2 hours",
    href: CONTACT.emailHref,
  },
  {
    icon: MapPin,
    title: "Office",
    detail: CONTACT.address,
    sub: `${CONTACT.city}, ${CONTACT.state}, ${CONTACT.country}`,
    href: undefined,
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon - Sat: 8AM - 8PM",
    sub: "Sunday: Emergency Only",
    href: undefined,
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main>
      <Navbar />

      <section className="pt-28 pb-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 mb-16">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Get In Touch
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
              Let&apos;s Power Your Next Project
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Tell us about your equipment needs and our team will prepare a
              custom rental solution within 2 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center p-16 border border-border rounded-sm bg-card text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-foreground text-2xl font-bold">
                    Inquiry Received
                  </h2>
                  <p className="text-muted-foreground max-w-md">
                    Thank you for reaching out. Our team will review your
                    requirements and get back to you within 2 hours during
                    business hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                  className="flex flex-col gap-6 p-8 border border-border rounded-sm bg-card"
                >
                  <h2 className="text-foreground text-xl font-bold">
                    Request a Quote
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-foreground text-sm font-medium">
                        Full Name <span className="text-primary">*</span>
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
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your company"
                        className="bg-input border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-foreground text-sm font-medium">
                        Phone <span className="text-primary">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="bg-input border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-foreground text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        className="bg-input border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-foreground text-sm font-medium">
                      Equipment Required <span className="text-primary">*</span>
                    </label>
                    <select
                      required
                      defaultValue=""
                      className="bg-input border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="" disabled>
                        Select equipment type
                      </option>
                      <option value="concrete-pump">Concrete Pump</option>
                      <option value="boom-pump">Boom Pump</option>
                      <option value="scaffolding">Scaffolding System</option>
                      <option value="pipes">Pipes</option>
                      <option value="multiple">Multiple Equipment</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-foreground text-sm font-medium">
                        Project Location
                      </label>
                      <input
                        type="text"
                        placeholder="City, State"
                        className="bg-input border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-foreground text-sm font-medium">
                        Rental Duration
                      </label>
                      <select
                        defaultValue=""
                        className="bg-input border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="" disabled>
                          Select duration
                        </option>
                        <option value="1-week">1 Week</option>
                        <option value="1-month">1 Month</option>
                        <option value="3-months">3 Months</option>
                        <option value="6-months">6 Months</option>
                        <option value="1-year">1 Year+</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-foreground text-sm font-medium">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your project requirements, site conditions, and any special needs..."
                      className="bg-input border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Send className="h-4 w-4" />
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  const Wrapper = info.href ? "a" : "div"
                  const wrapperProps = info.href
                    ? { href: info.href }
                    : {}
                  return (
                    <Wrapper
                      key={info.title}
                      {...wrapperProps}
                      className="flex items-start gap-4 p-5 border border-border rounded-sm bg-card hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-primary/10 shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-muted-foreground text-xs uppercase tracking-wide">
                          {info.title}
                        </span>
                        <span className="text-foreground font-semibold">
                          {info.detail}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          {info.sub}
                        </span>
                      </div>
                    </Wrapper>
                  )
                })}

                <div className="p-5 border border-primary/30 rounded-sm bg-primary/5">
                  <h3 className="text-foreground font-semibold text-sm mb-2">
                    Need Urgent Equipment?
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    For emergency requirements, call our hotline directly. We
                    can dispatch equipment within 24 hours.
                  </p>
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    Call Emergency Line
                  </a>
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
