import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {label && (
        <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          {label}
        </span>
      )}
      <h2 className="max-w-2xl text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>
      )}
    </div>
  )
}
