"use client"

import Image from "next/image"
import { useTheme } from "@/lib/theme"

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  const { theme } = useTheme()

  return (
    <Image
      src={theme === "light" ? "/images/logo/logo-light.png" : "/images/logo/logo-dark.png"}
      alt="Medintegro"
      width={1328}
      height={275}
      className={className}
      priority
    />
  )
}
