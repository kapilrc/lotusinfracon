import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StickyInquiryBar } from "@/components/sticky-inquiry-bar"
import {
  ArrowRight,
  Target,
  Users,
  HardHat,
  Building2,
  Shield,
  Award,
  Wrench,
  HeartHandshake,
} from "lucide-react"
import { COMPANY } from "@/lib/constants"
import { keyFacts, aboutSections, leadership } from "@/lib/company"
import { SectionHeader } from "@/components/section-label"

export default function CompanyPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <SectionHeader as="h1" label="About Us" title={aboutSections[0].title} />
              <p className="text-muted-foreground text-lg leading-relaxed">
                {aboutSections[0].content}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity w-fit"
              >
                Work With Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative h-80 lg:h-[500px] rounded-sm overflow-hidden border border-border bg-card">
              <Image
                src="https://cpimg.tistatic.com/10588659/b/4/Concrete-Boom-Pump.jpg"
                alt="Lotus Infracon construction equipment"
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
              { value: "19+", label: "Years in Business", icon: Building2 },
              { value: "500+", label: "Customers Served", icon: HardHat },
              { value: "40+", label: "Products", icon: Target },
              { value: `${COMPANY.employees}`, label: "Team Members", icon: Users },
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

      {/* Key Facts Table */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 mb-12">
            <SectionHeader label="Company Profile" title="Key Facts" />
          </div>

          <div className="border border-border rounded-sm overflow-hidden max-w-2xl">
            {keyFacts.map((fact, i) => (
              <div
                key={fact.label}
                className={`flex items-start px-6 py-4 ${
                  i % 2 === 0 ? "bg-card" : "bg-secondary/50"
                }`}
              >
                <span className="text-muted-foreground text-sm w-2/5 shrink-0">
                  {fact.label}
                </span>
                <span className="text-foreground text-sm font-semibold">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 mb-16">
            <SectionHeader label="About Lotus Infracon" title="What Sets Us Apart" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutSections.slice(1).map((section, i) => {
              const icons = [Users, Shield, Wrench, Award, HeartHandshake]
              const Icon = icons[i % icons.length]
              return (
                <div
                  key={section.title}
                  className="flex flex-col gap-4 p-6 rounded-sm border border-border bg-card"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-foreground font-semibold text-lg">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {section.content}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 mb-12">
            <SectionHeader label="Leadership" title="Our Leadership" />
          </div>

          <div className="max-w-xl p-8 border border-border rounded-sm bg-card">
            <h3 className="text-foreground text-xl font-bold">{leadership.name}</h3>
            <p className="text-primary text-sm font-semibold mt-1">{leadership.role}</p>
            <p className="text-muted-foreground text-xs mt-1">{leadership.company}</p>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4">
              {leadership.description}
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <StickyInquiryBar />
    </main>
  )
}
