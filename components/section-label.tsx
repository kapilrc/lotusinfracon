import { cn } from "@/lib/utils"

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-12 bg-primary" />
      <span className="text-primary text-sm font-semibold tracking-widest uppercase">
        {children}
      </span>
    </div>
  )
}

export function SectionHeader({
  label,
  title,
  description,
  as: Tag = "h2",
  className,
}: {
  label: string
  title: string
  description?: string
  as?: "h1" | "h2"
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <SectionLabel>{label}</SectionLabel>
      <Tag
        className={cn(
          "text-3xl font-bold text-foreground text-balance",
          Tag === "h1" ? "md:text-5xl" : "md:text-4xl"
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl">
          {description}
        </p>
      )}
    </div>
  )
}
