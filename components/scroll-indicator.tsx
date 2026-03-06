"use client"

import { useEffect, useMemo, useState } from "react"
import { ChevronDown } from "lucide-react"

export function ScrollIndicator() {
  const [scrollY, setScrollY] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)

  useEffect(() => {
    const updateMetrics = () => {
      const nextMax = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      )
      setMaxScroll(nextMax)
      setScrollY(window.scrollY)
    }

    updateMetrics()
    window.addEventListener("scroll", updateMetrics, { passive: true })
    window.addEventListener("resize", updateMetrics)
    return () => {
      window.removeEventListener("scroll", updateMetrics)
      window.removeEventListener("resize", updateMetrics)
    }
  }, [])

  const progress = useMemo(() => {
    if (maxScroll <= 0) return 1
    return Math.min(scrollY / maxScroll, 1)
  }, [maxScroll, scrollY])

  const visible = maxScroll > 0 && progress < 0.96
  if (!visible) return null

  const opacity = Math.max(0.35, 1 - progress * 1.2)

  return (
    <button
      type="button"
      aria-label="Scroll down"
      className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
      style={{ opacity }}
      onClick={() =>
        window.scrollBy({
          top: Math.max(window.innerHeight * 0.85, 300),
          behavior: "smooth",
        })
      }
    >
      <span className="block text-[11px] font-semibold uppercase tracking-[0.2em]">
        Scroll
      </span>
      <span className="mt-1 flex justify-center">
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </span>
    </button>
  )
}
