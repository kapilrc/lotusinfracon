"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, PhoneCall, ArrowRight } from "lucide-react"
import Link from "next/link"
import { PUNE_FAQS, generateFaqSchema } from "@/lib/seo"
import { CONTACT } from "@/lib/constants"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const faqSchema = generateFaqSchema(PUNE_FAQS)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="py-20 bg-secondary/30 border-t border-border">
      {/* FAQ Schema for Google SERP Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Header & Quick Action */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Got Questions?
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              Frequently Asked Questions About Equipment Rental in Pune
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed">
              Find answers regarding fleet mobilization, Putzmeister concrete pump
              specifications, boom pump coverage, and cuplock scaffolding rental
              logistics across Pune, Pimpri-Chinchwad, and Maharashtra.
            </p>

            <div className="p-6 border border-border rounded-sm bg-card flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-3 text-primary">
                <HelpCircle className="h-5 w-5" />
                <span className="font-semibold text-foreground text-sm">
                  Need a custom quote or immediate yard dispatch?
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our Swargate fleet coordinators are available 6 days a week to review your concrete volume and scaffolding requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>Call {CONTACT.phone}</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-border text-foreground text-xs font-semibold px-4 py-2.5 rounded-sm hover:bg-secondary transition-colors"
                >
                  <span>Online Inquiry</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Accordion List */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {PUNE_FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={idx}
                  className="border border-border rounded-sm bg-card overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-base text-foreground hover:text-primary transition-colors gap-4"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

