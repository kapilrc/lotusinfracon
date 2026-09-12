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
  ShieldCheck,
  Award,
  CheckCircle2,
} from "lucide-react"
import { SITE, CONTACT } from "@/lib/constants"

const timeline = [
  {
    year: "2010",
    title: "Founded in Pune",
    description:
      "Lotus Infracon was established in Swargate, Pune, starting with premium stationary concrete pumps and scaffolding staging.",
  },
  {
    year: "2014",
    title: "Boom Pump Fleet Expansion",
    description:
      "Added truck-mounted boom pumps (36m & 42m) to deliver rapid concrete placement for multi-level construction.",
  },
  {
    year: "2018",
    title: "Key Infrastructure Milestones",
    description:
      "Became regular rental partner for metro flyovers, industrial factories, and expressway corridors across Maharashtra.",
  },
  {
    year: "2022",
    title: "1,000+ Tons Scaffolding Inventory",
    description:
      "Scaled modular cuplock and H-frame inventory to over 1,000 tons with a centralized staging yard in Pune.",
  },
  {
    year: "Present",
    title: "Trusted Regional Powerhouse",
    description:
      "Serving over 500+ clients with comprehensive rental solutions backed by dedicated 24/7 field engineers.",
  },
]

const values = [
  {
    icon: Target,
    title: "Precision Engineering",
    description:
      "Every pump and scaffold component is pre-inspected and load-tested for maximum safety and output on site.",
  },
  {
    icon: Eye,
    title: "Clear Commercial Terms",
    description:
      "Transparent monthly rental schedules, zero hidden clauses, and complete statutory GST compliance.",
  },
  {
    icon: Users,
    title: "Site Partnership",
    description:
      "We operate as an extension of your site engineering team, ensuring zero downtime and rapid equipment mobilization.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Fleet Upgrade",
    description:
      "Ongoing investments into state-of-the-art Putzmeister and Swing Setter machines for cutting-edge performance.",
  },
]

const leaders = [
  {
    name: "Mr. Deepak Darda",
    role: "Managing Director",
    desc: "Visionary leadership driving Lotus Infracon's strategic fleet expansion, quality excellence, and key infrastructure partnerships across India.",
  },
  {
    name: "Mr. Mahavir S. Darda",
    role: "Marketing Head",
    desc: "Spearheading client relations, project procurement, and rapid equipment deployment for Tier-1 contractors and engineering firms.",
  },
]

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                  About Lotus Infracon
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
                Powering Maharashtra&apos;s Infrastructure Since 2010
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Headquartered in Swargate, Pune, Lotus Infracon is a premier equipment rental provider specializing in high-capacity concrete pumps, truck-mounted boom pumps, modular cuplock scaffolding systems, and MS pipeline infrastructure.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Part of the Lotus Holdings network catering to over 500+ customers, we are trusted by government contractors, industrial builders, and real estate developers across Western India for certified machinery and rapid on-site mobilization.
              </p>
              <div className="flex items-center gap-4 flex-wrap pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity w-fit"
                >
                  Request Fleet Proposal
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-sm border border-border bg-card text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>GSTIN: {SITE.gstin}</span>
                </div>
              </div>
            </div>

            <div className="relative h-80 lg:h-[480px] rounded-sm overflow-hidden border border-border">
              <Image
                src="/images/project-building.jpg"
                alt="Lotus Infracon high-rise project"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Years in Business", icon: Building2 },
              { value: "500+", label: "Projects Completed", icon: HardHat },
              { value: "50+", label: "Heavy Machinery Units", icon: Target },
              { value: "1,000+", label: "Tons Scaffolding Stock", icon: Users },
            ].map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="flex flex-col items-center text-center gap-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-primary/10 mb-1">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-3xl md:text-4xl font-extrabold text-primary">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground text-xs uppercase tracking-wider font-medium">
                    {stat.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 mb-14">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Leadership
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Guiding India&apos;s Construction Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="p-8 border border-border rounded-sm bg-card flex flex-col gap-4 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
                    <span className="text-primary text-sm font-semibold">{leader.role}</span>
                  </div>
                  <Award className="h-7 w-7 text-primary/40" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 mb-16">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Our Journey
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Evolution of Our Fleet
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            <div className="flex flex-col gap-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2" />
                  <div className="pl-12 md:pl-0 md:w-1/2">
                    <span className="text-primary font-bold text-2xl">{item.year}</span>
                    <h3 className="text-foreground font-semibold text-lg mt-1">{item.title}</h3>
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
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 mb-16">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                Our Standards
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              What Sets Us Apart
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
                  <h3 className="text-foreground font-semibold text-lg">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quality & Statutory Compliance */}
      <section className="py-16 bg-secondary/60 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-foreground">
                Official Registered Supplier Details
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Operating with certified Push Master and Swing Setter brand equipment. All machines comply with IS and European safety norms, operated by verified licensed personnel.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>GSTIN: <strong>{SITE.gstin}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>HQ: <strong>Swargate, Pune - 411037</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Nature: <strong>Equipment Rental Service Provider</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Hotline: <strong>{CONTACT.phone}</strong></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 px-6 rounded-sm font-semibold text-sm hover:opacity-90 transition-opacity text-center"
              >
                Contact Procurement Team
              </Link>
              <a
                href={SITE.brochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border bg-card py-3 px-6 rounded-sm font-semibold text-xs text-foreground hover:bg-secondary transition-colors text-center"
              >
                Download Company Brochure (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyInquiryBar />
    </main>
  )
}
