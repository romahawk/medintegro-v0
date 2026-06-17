import Image from "next/image"
import Link from "next/link"
import { existsSync, statSync } from "node:fs"
import path from "node:path"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Layers, Settings2, Shield } from "lucide-react"
import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { getCeilingPendantBySlug, ceilingPendantProducts } from "@/lib/icu-infrastructure-products"

function getCeilingPendantImage(slug: string, fileName: string) {
  const relativePath = `/images/products/icu-infrastructure/ceiling-pendants/${slug}/${fileName}`
  const absolutePath = path.join(
    process.cwd(),
    "public",
    "images",
    "products",
    "icu-infrastructure",
    "ceiling-pendants",
    slug,
    fileName
  )

  if (!existsSync(absolutePath)) {
    return relativePath
  }

  return `${relativePath}?v=${statSync(absolutePath).mtimeMs}`
}

export function generateStaticParams() {
  return ceilingPendantProducts.map((product) => ({ slug: product.slug }))
}

export default async function CeilingPendantProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getCeilingPendantBySlug(slug)

  if (!product) {
    notFound()
  }

  const currentIndex = ceilingPendantProducts.findIndex((item) => item.slug === product.slug)
  const prevProduct = currentIndex > 0 ? ceilingPendantProducts[currentIndex - 1] : null
  const nextProduct =
    currentIndex < ceilingPendantProducts.length - 1 ? ceilingPendantProducts[currentIndex + 1] : null

  const capabilityIcons = [Layers, Shield, Settings2]
  const heroImages = {
    main: { src: getCeilingPendantImage(product.slug, "hero-main.jpg"), alt: product.heroImages.main.alt },
    secondary1: { src: getCeilingPendantImage(product.slug, "hero-secondary-1.jpg"), alt: product.heroImages.secondary1.alt },
    secondary2: { src: getCeilingPendantImage(product.slug, "hero-secondary-2.jpg"), alt: product.heroImages.secondary2.alt },
  }
  const deploymentImages = [
    { src: getCeilingPendantImage(product.slug, "deploy-1.jpg"), alt: product.deploymentImages[0].alt },
    { src: getCeilingPendantImage(product.slug, "deploy-2.jpg"), alt: product.deploymentImages[1].alt },
    { src: getCeilingPendantImage(product.slug, "deploy-3.jpg"), alt: product.deploymentImages[2].alt },
  ]

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/50 py-16 md:py-20">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <Container className="relative">
          <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Link href="/equipment" className="transition-colors hover:text-primary">
              Обладнання
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/equipment/icu-infrastructure/ceiling-pendants" className="transition-colors hover:text-primary">
              Стельові медичні консолі
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          <Link
            href="/equipment/icu-infrastructure/ceiling-pendants"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад до стельових медичних консолей
          </Link>

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                ВІТ / критична інфраструктура
              </span>
              <h1 className="max-w-4xl text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                {product.heroTitle}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {product.heroSubtitle}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="gap-2 rounded-xl glow-cyan">
                  <Link href="/contact">
                    Request Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-6 hidden flex-wrap gap-2 md:flex">
                <a href="#overview" className="rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">Overview</a>
                <a href="#capabilities" className="rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">Capabilities</a>
                <a href="#deployment" className="rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">Deployment</a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="relative col-span-2 aspect-video overflow-hidden rounded-xl border border-border/40">
                <Image src={heroImages.main.src} alt={heroImages.main.alt} fill className="object-cover" />
              </div>
              <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-border/40">
                <Image src={heroImages.secondary1.src} alt={heroImages.secondary1.alt} fill className="object-cover" />
              </div>
              <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-border/40">
                <Image src={heroImages.secondary2.src} alt={heroImages.secondary2.alt} fill className="object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="overview" className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="glass rounded-xl p-6 lg:col-span-2">
              <h2 className="text-xl font-semibold text-foreground md:text-2xl">Overview</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {product.overview}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {product.valuePoints.map((point) => (
                  <div key={point} className="rounded-lg border border-border/50 bg-background/40 p-3">
                    <p className="text-sm leading-relaxed text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="glass rounded-xl p-6">
              <h2 className="text-xl font-semibold text-foreground">Key Highlights</h2>
              <ul className="mt-4 space-y-3">
                {product.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </section>

      <section id="capabilities" className="relative overflow-hidden border-y border-border/50 py-16 md:py-24">
        <div className="absolute inset-0 bg-card/40" />
        <Container className="relative">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Core capabilities for clinical infrastructure
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {product.capabilityItems.map((item, index) => {
              const Icon = capabilityIcons[index % capabilityIcons.length]
              return (
                <article key={item.title} className="glass glass-hover rounded-xl p-6 transition-all duration-300">
                  <div className="mb-3 inline-flex rounded-lg border border-primary/30 bg-primary/10 p-2 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              )
            })}
          </div>
        </Container>
      </section>

      <section id="deployment" className="py-16 md:py-24">
        <Container>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Deployment environments
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {product.name} is designed for deployment across a range of clinical environments
            where reliable overhead media infrastructure is essential.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.deploymentItems.map((item, index) => (
              <article key={item.title} className="glass rounded-xl p-4">
                <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg border border-border/40">
                  <Image
                    src={deploymentImages[index]?.src ?? deploymentImages[0].src}
                    alt={deploymentImages[index]?.alt ?? item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-border/50 py-10">
        <Container className="flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm text-muted-foreground">Explore other ceiling medical supply units</div>
          <div className="flex flex-wrap gap-2">
            {prevProduct && (
              <Button asChild variant="outline" size="sm" className="rounded-lg border-border/50 hover:border-primary/40">
                <Link href={`/equipment/icu-infrastructure/ceiling-pendants/${prevProduct.slug}`}>
                  <ArrowLeft className="h-4 w-4" />
                  {prevProduct.name}
                </Link>
              </Button>
            )}
            {nextProduct && (
              <Button asChild variant="outline" size="sm" className="rounded-lg border-border/50 hover:border-primary/40">
                <Link href={`/equipment/icu-infrastructure/ceiling-pendants/${nextProduct.slug}`}>
                  {nextProduct.name}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-border/50 py-20 md:py-24">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Need support specifying the right pendant system?
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            We can evaluate your room layout, gas requirements, and equipment loading to define
            the optimal ceiling pendant specification for your operating rooms and ICU.
          </p>
          <Button asChild size="lg" className="gap-2 rounded-xl glow-cyan">
            <Link href="/contact">
              Request Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Container>
      </section>
    </>
  )
}
