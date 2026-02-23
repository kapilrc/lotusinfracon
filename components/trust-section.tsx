import Image from "next/image"
import { Shield, Clock, Wrench, Award } from "lucide-react"
import { SectionHeader } from "@/components/section-label"

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
          <SectionHeader
            label="Trust & Track Record"
            title="Major Projects Supported"
            description="Our equipment has powered some of India's most ambitious infrastructure projects."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {projects.map((project) => (
            <div
              key={project.name}
              className="relative h-64 md:h-80 rounded-sm overflow-hidden group"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/00" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                  {project.type}
                </span>
                <h3 className="text-foreground text-xl font-bold mt-1">
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
