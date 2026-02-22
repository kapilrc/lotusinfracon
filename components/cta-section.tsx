import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CONTACT } from "@/lib/constants"

export function CTASection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-sm border border-border bg-card p-12 md:p-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col items-center text-center gap-6">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Ready to Start?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance max-w-2xl">
              Get Your Equipment On-Site Within 24 Hours
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Tell us your requirements and our team will have the right
              equipment dispatched to your project site.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-sm text-sm font-semibold hover:bg-secondary transition-colors"
              >
                Call Now: {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
