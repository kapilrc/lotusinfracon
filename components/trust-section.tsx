import Image from "next/image"
import { Shield, Clock, Wrench, Award } from "lucide-react"

const projects = [
  {
    name: "Mumbai-Pune Expressway Extension",
    type: "Highway Infrastructure",
    image: "/images/project-highway.jpg",
  },
  {
    name: "Ahmedabad Metro Phase II",
    type: "Urban Transit",
    image: "/images/project-building.jpg",
  },
]

const certifications = [
  {
    icon: Shield,
    title: "ISO 9001:2015",
    description: "Quality Management System certified operations",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical assistance and breakdown service",
  },
  {
    icon: Wrench,
    title: "Expert Operators",
    description: "Certified and trained equipment operators available on-demand",
  },
  {
    icon: Award,
    title: "OEM Parts",
    description: "Genuine spare parts and factory-standard maintenance",
  },
]

export function TrustSection() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Trust & Track Record
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Major Projects Supported
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Our equipment has powered some of India&apos;s most ambitious
            infrastructure projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {projects.map((project) => (
            <div
              key={project.name}
              className="relative h-72 md:h-96 rounded-sm overflow-hidden group border border-border/50 shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Multi-stage dark gradient scrim for maximum contrast & legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 via-45% to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-sm pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col items-start gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-primary/25 text-amber-400 border border-amber-400/30 backdrop-blur-md shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  {project.type}
                </span>
                <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight drop-shadow-sm group-hover:text-amber-100 transition-colors">
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 mb-12">
          <h3 className="text-2xl font-bold text-foreground">
            Technical Certifications
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => {
            const Icon = cert.icon
            return (
              <div
                key={cert.title}
                className="flex flex-col gap-3 p-6 rounded-sm border border-border bg-card"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-sm bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-foreground font-semibold">{cert.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
