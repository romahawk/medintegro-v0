import type { OrLightingProduct } from "@/lib/or-lighting-products"

export const examinationLampProducts: OrLightingProduct[] = [
  {
    slug: "diasys-range",
    name: "DIASYS Range",
    shortDescription: "Treatment and examination lighting designed for specialist care environments.",
    cardImage: "/images/or-lighting/diasys-range.png",
    heroTitle: "Treatment and examination lighting for specialist workflows",
    heroSubtitle:
      "DIASYS is built for procedure and consultation spaces where reliable visibility, ergonomic handling, and daily operational readiness are essential.",
    overview:
      "DIASYS supports examination and treatment environments with a lighting approach focused on comfort, consistent output, and intuitive operation across high-frequency clinical routines.",
    highlights: [
      "Designed for specialist care scenarios including examinations and minor procedures.",
      "Ergonomic interaction pattern for frequent daily clinical use.",
      "Operational behavior focused on readiness, control, and energy-conscious usage.",
    ],
    capabilityItems: [
      {
        title: "Focused examination visibility",
        description:
          "Provides consistent light quality for diagnostic observation and treatment procedures.",
      },
      {
        title: "User-friendly handling",
        description:
          "Supports easy positioning and adjustment to match varying consultation and procedure setups.",
      },
      {
        title: "Specialist workflow fit",
        description:
          "Adapted for departments where fast room turnover and precise visualization are both important.",
      },
      {
        title: "Reliable day-to-day performance",
        description:
          "Designed for repeated daily operation in outpatient and specialist-care environments.",
      },
    ],
    deploymentItems: [
      {
        title: "Consultation room deployment",
        description:
          "Suitable for routine specialist visits requiring accurate local illumination.",
      },
      {
        title: "Minor procedure environment",
        description:
          "Supports treatment spaces where clear visibility and ergonomic access are key.",
      },
      {
        title: "Specialist outpatient setup",
        description:
          "Can be integrated into diverse departmental layouts with practical operational flexibility.",
      },
    ],
    valuePoints: [
      "Improves examination precision in specialist care settings.",
      "Supports clinician comfort through ergonomic positioning workflow.",
      "Helps standardize treatment-room readiness and operation quality.",
      "Fits well in modernization programs for outpatient and minor-procedure areas.",
    ],
    heroImages: {
      main: { src: "/images/or-lighting/examination-lamps/diasys-range/hero-main.png", alt: "DIASYS examination light in specialist care setting" },
      secondary1: { src: "/images/or-lighting/examination-lamps/diasys-range/deploy-1.jpg", alt: "Clinical room with examination lighting setup" },
      secondary2: { src: "/images/or-lighting/examination-lamps/diasys-range/deploy-2.jpg", alt: "Treatment environment with focused lighting" },
    },
    deploymentImages: [
      { src: "/images/or-lighting/examination-lamps/diasys-range/deploy-1.jpg", alt: "DIASYS in consultation room deployment" },
      { src: "/images/or-lighting/examination-lamps/diasys-range/deploy-2.jpg", alt: "DIASYS in minor procedure environment" },
      { src: "/images/or-lighting/examination-lamps/diasys-range/deploy-3.jpg", alt: "DIASYS in specialist outpatient setup" },
    ],
  },
]

export function getExaminationLampProductBySlug(slug: string) {
  return examinationLampProducts.find((item) => item.slug === slug)
}
