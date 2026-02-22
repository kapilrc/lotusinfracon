import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  textClassName?: string
  subtextClassName?: string
}

export function Logo({
  className,
  textClassName = "text-foreground",
  subtextClassName = "text-muted-foreground",
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/logo.png"
        alt="Lotus Infracon"
        width={40}
        height={40}
        className="rounded-sm"
      />
      <div className="flex flex-col">
        <span
          className={cn(
            "font-bold text-lg leading-tight tracking-tight",
            textClassName
          )}
        >
          LOTUS
        </span>
        <span
          className={cn(
            "text-xs tracking-widest uppercase",
            subtextClassName
          )}
        >
          Infracon
        </span>
      </div>
    </div>
  )
}
