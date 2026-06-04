export interface OrLightingProduct {
  slug: string
  name: string
  shortDescription: string
  cardImage: string
  heroTitle: string
  heroSubtitle: string
  overview: string
  highlights: string[]
  capabilityItems: { title: string; description: string }[]
  deploymentItems: { title: string; description: string }[]
  valuePoints: string[]
  heroImages: {
    main: { src: string; alt: string }
    secondary1: { src: string; alt: string }
    secondary2: { src: string; alt: string }
  }
  deploymentImages: { src: string; alt: string }[]
}

export const orLightingProducts: OrLightingProduct[] = [
  {
    slug: "xmt-range",
    name: "XMT Range",
    shortDescription: "High-performance operating lights for demanding surgical applications.",
    cardImage: "/images/products/or-lighting/xmt-range/card.png",
    heroTitle: "Unique and high-quality operating room lighting",
    heroSubtitle:
      "XMT is designed for surgical teams that need stable light quality, precise field control, and dependable performance throughout complex procedures.",
    overview:
      "The XMT range is positioned for advanced operating environments requiring high illuminance consistency, refined color rendering, and ergonomic control under daily intensive usage.",
    highlights: [
      "Excellent color rendering (Ra up to 98) for accurate tissue visualization.",
      "High optical consistency for deep-cavity and multidisciplinary procedures.",
      "Designed around reliability-focused control and smooth OR integration.",
    ],
    capabilityItems: [
      {
        title: "High optical precision",
        description:
          "Supports detailed visualization in complex surgical scenes with stable illumination and controlled focus behavior.",
      },
      {
        title: "Ergonomic daily operation",
        description:
          "User-oriented handling and adjustment logic help teams keep attention on the procedure rather than light management.",
      },
      {
        title: "Workflow-ready control",
        description:
          "Designed to align with modern OR control patterns and compatible room integration concepts.",
      },
      {
        title: "Reliable surgical uptime",
        description:
          "Built for consistent performance in operating suites with high procedure volumes.",
      },
    ],
    deploymentItems: [
      {
        title: "Single-dome operating setup",
        description:
          "Suitable for rooms with focused procedural scope where compact, high-quality lighting is preferred.",
      },
      {
        title: "Dual-dome surgical layout",
        description:
          "Supports broader and more complex fields by combining complementary light heads for flexibility.",
      },
      {
        title: "Integration with OR planning",
        description:
          "Can be aligned with room architecture and device placement during new builds or modernization projects.",
      },
    ],
    valuePoints: [
      "Improves visual confidence during long and delicate surgeries.",
      "Helps maintain consistent field illumination with reduced disruption.",
      "Supports room-level standardization across surgical departments.",
      "Contributes to long-term OR performance and operational quality.",
    ],
    heroImages: {
      main: { src: "/images/products/or-lighting/xmt-range/hero-main.png", alt: "XMT operating lights in modern surgical room" },
      secondary1: { src: "/images/products/or-lighting/xmt-range/hero-secondary-1.png", alt: "Surgical team under operating light system" },
      secondary2: { src: "/images/products/or-lighting/xmt-range/hero-secondary-2.png", alt: "Integrated OR environment with ceiling lights" },
    },
    deploymentImages: [
      { src: "/images/products/or-lighting/xmt-range/deploy-1.jpg", alt: "Single-dome operating light deployment" },
      { src: "/images/products/or-lighting/xmt-range/deploy-2.jpg", alt: "Dual-dome surgical light deployment" },
      { src: "/images/products/or-lighting/xmt-range/deploy-3.jpg", alt: "Operating light integrated in planned OR layout" },
    ],
  },
  {
    slug: "epure-range",
    name: "EPURE Range",
    shortDescription: "Affordable, high-performance surgical lights with touchless control concepts.",
    cardImage: "/images/products/or-lighting/epure-range/card.png",
    heroTitle: "High-performance and affordable surgical lighting",
    heroSubtitle:
      "EPURE combines strong surgical illumination with accessible deployment economics, making high-quality lighting easier to standardize across facilities.",
    overview:
      "EPURE is designed to deliver clinical-grade performance in a practical package, supporting hospitals and clinics that prioritize both hygiene workflow and cost-efficient modernization.",
    highlights: [
      "Performance-focused surgical lighting with budget-conscious positioning.",
      "Touchless control approach to support sterile operating protocols.",
      "Design language that supports easier cleaning and room maintenance.",
    ],
    capabilityItems: [
      {
        title: "Balanced performance profile",
        description:
          "Combines strong light output and field quality with practical total-cost planning for healthcare operators.",
      },
      {
        title: "Hygiene-oriented interaction",
        description:
          "Touchless control patterns help reduce unnecessary contact points in surgical spaces.",
      },
      {
        title: "Easy modernization path",
        description:
          "Suitable for both new OR projects and replacement programs in existing operating blocks.",
      },
      {
        title: "Broad clinical applicability",
        description:
          "Supports a wide range of routine and specialty procedures requiring reliable visualization.",
      },
    ],
    deploymentItems: [
      {
        title: "Cost-efficient OR upgrades",
        description:
          "Ideal for phased lighting modernization where performance gains are needed without excessive infrastructure burden.",
      },
      {
        title: "Multi-room standardization",
        description:
          "Supports consistent surgical-lighting strategy across different procedure rooms and teams.",
      },
      {
        title: "Integrated sterile workflow",
        description:
          "Adapts to OR processes focused on speed, cleanliness, and repeatable operation quality.",
      },
    ],
    valuePoints: [
      "Delivers strong surgical visibility with practical investment planning.",
      "Supports infection-control practices with low-friction control behavior.",
      "Simplifies deployment in both private clinics and large hospitals.",
      "Enables scalable modernization strategies across operating suites.",
    ],
    heroImages: {
      main: { src: "/images/products/or-lighting/epure-range/hero-main.png", alt: "EPURE operating lights in active OR" },
      secondary1: { src: "/images/products/or-lighting/epure-range/hero-secondary-1.png", alt: "EPURE ceiling light array in surgical room" },
      secondary2: { src: "/images/products/or-lighting/epure-range/hero-secondary-2.png", alt: "Clinical environment with integrated lighting solution" },
    },
    deploymentImages: [
      { src: "/images/products/or-lighting/epure-range/deploy-1.jpg", alt: "EPURE in cost-efficient operating room upgrade" },
      { src: "/images/products/or-lighting/epure-range/deploy-2.jpg", alt: "EPURE in multi-room standardization deployment" },
      { src: "/images/products/or-lighting/epure-range/deploy-3.jpg", alt: "EPURE in sterile-focused procedural environment" },
    ],
  },
  {
    slug: "nomadeo-wireless-camera",
    name: "NOMADEO Wireless Camera",
    shortDescription: "Wireless Full HD surgical camera module for compatible Surgiris operating lights.",
    cardImage: "/images/products/or-lighting/xmt-range/x2-camera.png",
    heroTitle: "Wireless surgical video directly from the operating light",
    heroSubtitle:
      "NOMADEO adds removable, low-latency Full HD video capture to compatible Surgiris lights, helping teams share, record, and route the surgical view without adding a fixed camera arm.",
    overview:
      "NOMADEO is a plug-and-play wireless camera accessory designed for X2MT, X3MT, and EPURE surgical lights. The module captures Full HD 1080p video at 60 frames per second from a 2.4 MP sensor and transmits over a 5 GHz wireless link with AES encryption and very low latency.",
    highlights: [
      "Full HD 1080p60 surgical video capture from a compact 2.4 MP camera module.",
      "Wireless 5 GHz transmission with AES encryption and latency below 2 ms.",
      "Removable plug-and-play design compatible with X2MT, X3MT, and EPURE lights.",
    ],
    capabilityItems: [
      {
        title: "Full HD surgical capture",
        description:
          "Delivers 1920 x 1080 video at 60 fps for live procedure sharing, teaching, documentation, and OR display workflows.",
      },
      {
        title: "Low-latency wireless signal",
        description:
          "Uses a 5 GHz wireless link with latency below 2 ms, helping the video feed stay responsive during live surgical teamwork.",
      },
      {
        title: "Secure video transmission",
        description:
          "AES encryption supports secure wireless communication between the camera and receiving equipment in the operating room.",
      },
      {
        title: "Quick removable setup",
        description:
          "The camera can be fitted or removed without complex installation steps, making it practical for rooms that need flexible video capability.",
      },
    ],
    deploymentItems: [
      {
        title: "Teaching and consultation",
        description:
          "Streams the surgical field to displays or recording systems for training, supervision, and remote expert support.",
      },
      {
        title: "Flexible OR upgrades",
        description:
          "Adds video capture to compatible lights without dedicating a separate fixed camera arm in the room plan.",
      },
      {
        title: "Integrated video workflows",
        description:
          "Fits naturally into OR integration environments where camera feeds are routed to monitors, recorders, or collaboration systems.",
      },
    ],
    valuePoints: [
      "Adds surgical video capability while preserving a clean ceiling and light-head workflow.",
      "Supports documentation, education, and team viewing from the operating light position.",
      "Makes camera availability easier to standardize across rooms with compatible Surgiris lights.",
      "Keeps deployment flexible because the module can be removed when the workflow does not require video.",
    ],
    heroImages: {
      main: { src: "/images/products/or-lighting/xmt-range/x2-camera.png", alt: "NOMADEO wireless camera for Surgiris operating lights" },
      secondary1: { src: "/images/products/or-lighting/xmt-range/hero-secondary-1.png", alt: "Surgical light workflow with integrated camera capability" },
      secondary2: { src: "/images/products/or-lighting/epure-range/hero-secondary-2.png", alt: "Operating room video workflow with surgical lighting" },
    },
    deploymentImages: [
      { src: "/images/products/or-lighting/xmt-range/x2-camera.png", alt: "NOMADEO removable camera module" },
      { src: "/images/products/or-lighting/xmt-range/hero-secondary-2.png", alt: "Compatible Surgiris lighting in operating room planning" },
      { src: "/images/products/or-lighting/surgiris-integration.png", alt: "Surgiris integrated video workflow for operating rooms" },
    ],
  },
]

export function getOrLightingProductBySlug(slug: string) {
  return orLightingProducts.find((item) => item.slug === slug)
}
