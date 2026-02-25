"use client"

import { Container } from "@/components/container"

interface PageHeaderProps {
  label?: string
  title: string
  description?: string
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/50 py-16 md:py-20">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <Container className="relative">
        <div className="mx-auto w-full max-w-3xl">
          {label && (
            <span
              className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary"
              suppressHydrationWarning
            >
              {label}
            </span>
          )}
          <h1
            className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
            suppressHydrationWarning
          >
            {title}
          </h1>
          {description && (
            <p
              className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
              suppressHydrationWarning
            >
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
