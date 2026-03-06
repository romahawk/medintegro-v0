export interface IntegratedOrProduct {
  slug: string
  name: string
  shortDescription: string
  cardImage?: string
  overview: string
  highlights: string[]
  sourceUrl: string
  heroTitle?: string
  heroSubtitle?: string
  capabilityItems?: { title: string; description: string }[]
  deploymentItems?: { title: string; description: string }[]
  valuePoints?: string[]
  heroImages?: {
    main: { src: string; alt: string }
    secondary1: { src: string; alt: string }
    secondary2: { src: string; alt: string }
  }
  deploymentImages?: { src: string; alt: string }[]
}

export const integratedOrProducts: IntegratedOrProduct[] = [
  {
    slug: "surgimedia-compact",
    name: "SurgiMedia Compact",
    shortDescription: "Flexible integrated OR platform tailored for hybrid operating and treatment rooms.",
    cardImage: "/images/integrated-or/surgimedia-compact.jpg",
    overview:
      "SurgiMedia Compact is positioned as a highly flexible and customizable integration solution for procedure spaces that require adaptable workflows and central control.",
    highlights: [
      "Designed for procedures that require high flexibility and customizability.",
      "Suitable for hybrid operating rooms and treatment rooms.",
      "Built on a brand-independent and open software platform.",
    ],
    sourceUrl: "https://www.surgimedia.com/products/compact",
    heroTitle: "HD and 4K video management for modern operating rooms",
    heroSubtitle:
      "A practical solution to capture, route, and share surgical video workflows while staying easy to deploy and adapt.",
    capabilityItems: [
      {
        title: "More than a surgical recorder",
        description:
          "Centralizes essential OR functions including control screen access, PACS connectivity, and photo/video recording and sharing.",
      },
      {
        title: "Use it instantly",
        description:
          "Plug-and-play setup supports computer and HD/4K video sources so teams can start quickly with minimal friction.",
      },
      {
        title: "User-friendly interface",
        description:
          "Touch-first, icon-based controls help clinical teams operate the system intuitively during daily workflows.",
      },
      {
        title: "Versatile and customizable",
        description:
          "Expandable with additional peripherals to support evolving clinical and technical requirements.",
      },
    ],
    deploymentItems: [
      {
        title: "Wall mounted or on a surgical arm",
        description: "Fits into existing spaces while preserving day-to-day usability near the procedural field.",
      },
      {
        title: "On video-column",
        description: "Can be integrated with endoscopy columns across specialties for shared procedural infrastructure.",
      },
      {
        title: "On a mobile trolley",
        description: "Moves between rooms easily, enabling flexible resource allocation within surgical departments.",
      },
    ],
    valuePoints: [
      "Connect and access patient files instantly from the OR workflow.",
      "Store, archive, and share audio/video records produced in the operating room.",
      "Adapt to room constraints without structural modifications.",
      "Scale the solution progressively as requirements evolve.",
    ],
    heroImages: {
      main: {
        src: "/images/integrated-or/compact/hero-main.jpg.jpg",
        alt: "SurgiMedia Compact in an integrated operating room",
      },
      secondary1: {
        src: "/images/integrated-or/compact/hero-secondary-1.jpg",
        alt: "SurgiMedia Compact touchscreen in clinical use",
      },
      secondary2: {
        src: "/images/integrated-or/compact/hero-secondary-2.jpg",
        alt: "SurgiMedia Compact mobile setup in operating environment",
      },
    },
    deploymentImages: [
      {
        src: "/images/integrated-or/compact/deploy-wall-arm.jpg",
        alt: "Compact mounted on wall or surgical arm",
      },
      {
        src: "/images/integrated-or/compact/deploy-video-column.jpg",
        alt: "Compact integrated on a video column",
      },
      {
        src: "/images/integrated-or/compact/deploy-mobile-trolley.jpg",
        alt: "Compact deployed on a mobile trolley",
      },
    ],
  },
  {
    slug: "surgimedia-xxl-4k",
    name: "SurgiMedia XXL 4K",
    shortDescription: "Advanced 4K integrated OR concept for minimally invasive and image-guided surgery.",
    cardImage: "/images/integrated-or/surgimedia-xxl-4k.jpg",
    overview:
      "SurgiMedia XXL 4K focuses on complex operating suites that need high-end visualization, centralized integration, and room setups that can be adapted to different surgical specialties.",
    highlights: [
      "Designed for minimally invasive and image-guided surgery environments.",
      "Supports individualized room setup concepts.",
      "Can integrate solid or suspended monitor carrier systems with up to 8 medical monitors in 4K and HD.",
    ],
    sourceUrl: "https://www.surgimedia.com/products/product-xxl-4k",
    heroTitle: "Premium 4K integrated OR workflow for advanced surgical environments",
    heroSubtitle:
      "SurgiMedia XXL 4K combines high-resolution visualization, centralized control, and scalable room architecture for demanding clinical programs.",
    capabilityItems: [
      {
        title: "Designed for advanced minimally invasive workflows",
        description:
          "Supports demanding operating room environments where precision imaging, visualization, and coordination are central to surgical performance.",
      },
      {
        title: "Flexible room concept and architecture",
        description:
          "Adapts to discipline-specific requirements and supports tailored room layouts for diverse surgical teams and procedures.",
      },
      {
        title: "High-capacity 4K monitor ecosystem",
        description:
          "Integrates both fixed and suspended monitor carrier concepts with support for up to eight medical displays in HD/4K.",
      },
      {
        title: "Centralized control philosophy",
        description:
          "Brings key video and integration controls into one coordinated workflow to improve usability and reduce process friction.",
      },
    ],
    deploymentItems: [
      {
        title: "Hung on the wall",
        description:
          "Wall-mounted configuration allows direct connection to medical devices while keeping an ergonomic all-in-one setup with a large-format display.",
      },
      {
        title: "Embedded in the wall",
        description:
          "When planned during OR design, the unit can be integrated into the surgical wall to combine large-screen visibility with a higher hygiene standard in the room.",
      },
      {
        title: "Hybrid OR-compatible layouts",
        description:
          "Enables room configurations that align with image-guided and multidisciplinary procedural workflows.",
      },
    ],
    valuePoints: [
      "Enables consistent high-resolution visualization for critical decisions.",
      "Scales from single-room deployments to complex multi-display concepts.",
      "Supports customization based on specialty and room constraints.",
      "Improves surgical workflow continuity through coordinated integration.",
    ],
    heroImages: {
      main: {
        src: "/images/integrated-or/surgimedia-xxl-4k/hero-main.jpg",
        alt: "SurgiMedia XXL 4K integrated operating room scene",
      },
      secondary1: {
        src: "/images/integrated-or/surgimedia-xxl-4k/hero-secondary-1.jpg",
        alt: "High-resolution OR integration display workflow",
      },
      secondary2: {
        src: "/images/integrated-or/surgimedia-xxl-4k/hero-secondary-2.jpg",
        alt: "Surgical environment with advanced visualization systems",
      },
    },
    deploymentImages: [
      {
        src: "/images/integrated-or/surgimedia-xxl-4k/deploy-1.jpg",
        alt: "XXL 4K deployed in wall-mounted configuration",
      },
      {
        src: "/images/integrated-or/surgimedia-xxl-4k/deploy-2.jpg",
        alt: "XXL 4K embedded into surgical wall environment",
      },
      {
        src: "/images/integrated-or/surgimedia-xxl-4k/deploy-3.jpg",
        alt: "XXL 4K in hybrid OR-compatible room setup",
      },
    ],
  },
  {
    slug: "surgimedia-distriview-4k-ip",
    name: "SurgiMedia DistriView 4K-IP",
    shortDescription: "IP-based distribution and control platform for medical audio, video, and data signals.",
    cardImage: "/images/integrated-or/surgimedia-distriview-4k-ip.webp",
    overview:
      "SurgiMedia DistriView 4K-IP is presented as a network-distributed visualization and integration platform for both existing and greenfield installations.",
    highlights: [
      "Rack-based multimedia platform for routing, display, transmission, and storage in OR environments.",
      "High compatibility with video capture devices across specialties and manufacturers.",
      "Modular architecture that scales with future hardware and infrastructure evolution.",
      "Centralized command that can include surgical lights, operating cameras, and ambience cameras.",
    ],
    sourceUrl: "https://www.surgimedia.com/products/distriview-4k-ip",
    heroTitle: "The right information, in the right place, at the right moment",
    heroSubtitle:
      "DistriView 4K-IP is designed to build efficient surgical video ecosystems, combining distribution, control, and display workflows in one integrated environment.",
    capabilityItems: [
      {
        title: "Remote support and assistance ready",
        description:
          "Supports connected collaboration patterns so clinical teams can coordinate and receive technical assistance when needed.",
      },
      {
        title: "Improved OR ergonomics",
        description:
          "Centralized visual and control workflows reduce friction at the point of care and streamline day-to-day room operation.",
      },
      {
        title: "High compatibility by design",
        description:
          "Built to interoperate with heterogeneous medical video sources without locking rooms to one manufacturer ecosystem.",
      },
      {
        title: "Two-technology flexibility",
        description:
          "Can be adapted around SDVoE IP standard principles and advanced integrated processing for smooth distribution workflows.",
      },
    ],
    deploymentItems: [
      {
        title: "Rack-based integration core",
        description:
          "Central rack architecture helps organize video, audio, data, and control routing for robust OR infrastructure.",
      },
      {
        title: "Built-in or fixed display strategy",
        description:
          "Supports configurable screen size, position, and quantity to match room geometry and specialty-specific workflows.",
      },
      {
        title: "Scalable future-ready expansion",
        description:
          "Modular growth path allows staged upgrades as departments add new devices, rooms, and workflow requirements.",
      },
    ],
    valuePoints: [
      "Access patient files and route relevant visual information directly from the control interface.",
      "Broadcast the right source to one or multiple surgical displays based on the procedure phase.",
      "Support both renovation and greenfield projects with adaptable integration scope.",
      "Increase long-term ROI through modular expansion instead of full-system replacement.",
    ],
    heroImages: {
      main: {
        src: "/images/integrated-or/surgimedia-distriview-4k-ip/hero-main.webp",
        alt: "SurgiMedia DistriView 4K-IP integrated operating room control setup",
      },
      secondary1: {
        src: "/images/integrated-or/surgimedia-distriview-4k-ip/hero-secondary-1.webp",
        alt: "Clinical workstation and video management interface",
      },
      secondary2: {
        src: "/images/integrated-or/surgimedia-distriview-4k-ip/hero-secondary-2.webp",
        alt: "Surgical room video distribution and display workflow",
      },
    },
    deploymentImages: [
      {
        src: "/images/integrated-or/surgimedia-distriview-4k-ip/deploy-1.webp",
        alt: "Rack-based multimedia deployment in OR environment",
      },
      {
        src: "/images/integrated-or/surgimedia-distriview-4k-ip/deploy-2.webp",
        alt: "Built-in surgical display integration approach",
      },
      {
        src: "/images/integrated-or/surgimedia-distriview-4k-ip/deploy-3.webp",
        alt: "Scalable modular video management deployment",
      },
    ],
  },
  {
    slug: "surgimedia-multiview-4k-ip",
    name: "SurgiMedia MultiView 4K-IP",
    shortDescription: "Integrated video management for multi-discipline and hybrid OR environments.",
    cardImage: "/images/integrated-or/surgimedia-multiview-4k-ip.jpg",
    overview:
      "SurgiMedia MultiView 4K-IP is described as a video management system aimed at multi-discipline operating rooms and hybrid ORs where many image sources must be orchestrated.",
    highlights: [
      "Collaborative video management solution designed for hybrid operating rooms.",
      "Centralizes clinical information on large 4K displays with multi-window visualization.",
      "Supports live sharing in video conferencing and streaming workflows.",
      "Records interventions up to 4K on local servers or network infrastructure.",
    ],
    sourceUrl: "https://www.surgimedia.com/products/multiview-4k-ip",
    heroTitle: "All the information gathered at the same place",
    heroSubtitle:
      "A complementary multimedia layer for hybrid ORs that helps teams record, share, and collaborate around one centralized visualization workflow.",
    capabilityItems: [
      {
        title: "Centralize the information",
        description:
          "Display procedure feeds, patient context, and additional data sources simultaneously in configurable multi-window 4K layouts.",
      },
      {
        title: "Ease the procedure",
        description:
          "Administrative tasks around patient files, archiving, and source capture can be completed quickly from one workflow interface.",
      },
      {
        title: "Share your intervention",
        description:
          "Supports live streaming and video-conferencing collaboration with students and peers during and after procedures.",
      },
      {
        title: "Touch-first fluid operation",
        description:
          "User-friendly touch screens and icon-driven controls help surgical teams move faster with fewer workflow interruptions.",
      },
    ],
    deploymentItems: [
      {
        title: "Central 4K collaboration display",
        description:
          "Gather critical surgical and patient information onto a single high-resolution screen to improve team situational awareness.",
      },
      {
        title: "Configurable built-in or fixed screens",
        description:
          "Screen count, size, and placement can be adapted to the room architecture and procedure requirements.",
      },
      {
        title: "Custom multimedia I/O topology",
        description:
          "Audio/video inputs and outputs can be configured per room to match existing equipment and collaboration workflows.",
      },
    ],
    valuePoints: [
      "Concentrates procedural and contextual data into one coordinated viewing environment.",
      "Helps teams reduce context-switching during image-guided interventions.",
      "Supports hybrid OR programs that require speed, precision, and collaboration.",
      "Adapts with room-specific co-design instead of rigid one-size-fits-all layouts.",
    ],
    heroImages: {
      main: {
        src: "/images/integrated-or/surgimedia-multiview-4k-ip/hero-main.jpg",
        alt: "SurgiMedia MultiView 4K-IP in a hybrid OR environment",
      },
      secondary1: {
        src: "/images/integrated-or/surgimedia-multiview-4k-ip/hero-secondary-1.webp",
        alt: "Centralized multi-window 4K visualization workflow",
      },
      secondary2: {
        src: "/images/integrated-or/surgimedia-multiview-4k-ip/hero-secondary-2.webp",
        alt: "Hybrid OR collaboration and video management interface",
      },
    },
    deploymentImages: [
      {
        src: "/images/integrated-or/surgimedia-multiview-4k-ip/deploy-1.webp",
        alt: "Central collaboration display deployment in operating room",
      },
      {
        src: "/images/integrated-or/surgimedia-multiview-4k-ip/deploy-2.webp",
        alt: "Built-in and fixed screen integration strategy",
      },
      {
        src: "/images/integrated-or/surgimedia-multiview-4k-ip/deploy-3.webp",
        alt: "Custom audio and video routing topology for hybrid OR",
      },
    ],
  },
]

export function getIntegratedOrProductBySlug(slug: string) {
  return integratedOrProducts.find((product) => product.slug === slug)
}
