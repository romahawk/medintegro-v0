import type { Metadata } from "next"
import { NotFoundContent } from "@/components/not-found-content"

/**
 * A 404 is not a page anyone should index, and it must not inherit the root
 * layout's homepage canonical - that would tell crawlers every missing URL is
 * an alias of the homepage. `null` unsets the inherited value.
 */
export const metadata: Metadata = {
  title: { absolute: "404 — Сторінку не знайдено | Medintegro" },
  description:
    "Сторінку не знайдено. Перейдіть до рішень, обладнання, проєктів або контактів Medintegro.",
  alternates: { canonical: null },
  openGraph: null,
  twitter: null,
}

export default function NotFound() {
  return <NotFoundContent />
}
