import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StickyInquiryBar } from "@/components/sticky-inquiry-bar"
import {
  ArrowRight,
  Target,
  Eye,
  Users,
  TrendingUp,
  HardHat,
  Building2,
} from "lucide-react"

const timeline = [
  { year: "2005", title: "Founded", description: "Lotus Infracon established in Ahmedabad with 2 concrete pumps" },
  { year: "2010", title: "Expanded Fleet", description: "Grew to 15+ units including boom pumps and scaffolding" },
  { year: "2015", title: "Major Projects", description: "Started supplying to national highway and metro projects" },
  { year: "2020", title: "50+ Fleet", description: "Reached 50+ equipment units serving all of Western India" },
  { year: "2025", title: "Industry Leader", description: "Recognized as a top-tier equipment rental partner in India" },
]

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every piece of equipment is maintained to factory standards for precise, reliable operation on every project.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear rental terms, upfront pricing, and honest communication at every stage of the engagement.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We see ourselves as an extension of your team, invested in your project's success from start to finish.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Continually upgrading our fleet and capabilities to meet the evolving demands of India's infrastructure sector.",
  },
]

export default function CompanyPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                  About Us
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
                Building India&apos;s Future, One Project at a Time
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Lotus Infracon has been at the forefront of India&apos;s
                construction equipment rental industry for over two decades.
                Founded in Ahmedabad, Gujarat, we have grown from a small
                operation to one of the most trusted names in precision
                equipment rental.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our fleet of 50+ machines serves Tier-1 infrastructure
                contractors across highways, metros, commercial complexes,
                and industrial plants.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity w-fit"
              >
                Work With Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative h-80 lg:h-[500px] rounded-sm overflow-hidden">
              <Image
                src="/images/project-building.jpg"
                alt="Lotus Infracon project site"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Key numbers */}
      <section className="py-16 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "20+", label: "Years in Business", icon: Building2 },
              { value: "500+", label: "Projects Completed", icon: HardHat },
              { value: "50+", label: "Equipment Units", icon: Target },
              { value: "100+", label: "Active Clients", icon: Users },
            ].map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="flex flex-col items-center text-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground text-sm uppercase tracking-wide">
                    {stat.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 mb-16">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Our Journey
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Two Decades of Growth
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            <div className="flex flex-col gap-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2" />
                  <div className="pl-12 md:pl-0 md:w-1/2">
                    <span className="text-primary font-bold text-2xl">
                      {item.year}
                    </span>
                    <h3 className="text-foreground font-semibold text-lg mt-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 mb-16">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Our Values
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="flex flex-col gap-4 p-6 rounded-sm border border-border bg-card"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-foreground font-semibold text-lg">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
      <StickyInquiryBar />
    </main>
  )
}
