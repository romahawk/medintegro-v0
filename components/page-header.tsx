"use client"

import Image from "next/image"
import { Container } from "@/components/container"

interface PageHeaderProps {
  label?: string
  title: string
  description?: string
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden border-b border-border/50">
      <div className="absolute inset-0">
        <Image
          src="/images/company/hero-or.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <Container className="relative z-10 py-24">
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
            className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
            suppressHydrationWarning
          >
            {title}
          </h1>
          {description && (
            <p
              className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
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
