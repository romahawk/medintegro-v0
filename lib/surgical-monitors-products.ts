export interface SurgicalMonitorProduct {
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

const beaconSharedImages = {
  card: "/images/products/surgical-monitors/shared/card.jpg",
  heroMain: "/images/products/surgical-monitors/shared/hero-main.jpg",
  heroSecondary1: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg",
  heroSecondary2: "/images/products/surgical-monitors/shared/hero-secondary-2.jpg",
  deploy1: "/images/products/surgical-monitors/shared/deploy-1.jpg",
  deploy2: "/images/products/surgical-monitors/shared/deploy-2.jpg",
  deploy3: "/images/products/surgical-monitors/shared/deploy-3.jpg",
}

function createBeaconProduct({
  slug,
  name,
  displaySize,
  resolution,
  orientation = "surgical display",
  useCase = "operating-room and endoscopy visualization",
  is3D = false,
}: {
  slug: string
  name: string
  displaySize: string
  resolution: string
  orientation?: string
  useCase?: string
  is3D?: boolean
}): SurgicalMonitorProduct {
  const modeLabel = is3D ? "3D surgical display" : orientation
  const overviewUseCase = is3D ? "stereoscopic operating-room visualization" : useCase

  return {
    slug,
    name,
    shortDescription: `${displaySize} ${resolution} ${modeLabel} for ${overviewUseCase}.`,
    cardImage: beaconSharedImages.card,
    heroTitle: `${displaySize} ${resolution} Beacon surgical monitor`,
    heroSubtitle:
      `Beacon lists the ${name} as a ${displaySize} ${resolution} operating-room display for ${useCase}.`,
    overview:
      `The ${name} is part of Beacon's surgical display range for operating-room applications. Based on the manufacturer's current operating-room lineup, this model is positioned as a ${displaySize} ${resolution} display intended for clinical video workflows where reliable intraoperative visualization and medical-grade mounting compatibility are required.`,
    highlights: [
      `${displaySize} display format suited to Beacon's operating-room product range.`,
      `${resolution} native resolution for surgical video workflows.`,
      is3D ? "3D-capable surgical viewing for stereoscopic workflows." : "Intended for operating-room and endoscopy visualization.",
      "Configured for medical display deployment in procedure and OR environments.",
    ],
    capabilityItems: [
      {
        title: "Operating-room display format",
        description:
          `The ${name} is positioned for OR deployment where monitor size and image resolution need to match room layout, viewing distance, and surgical workflow.`,
      },
      {
        title: "Resolution matched to clinical video",
        description:
          `${resolution} output supports modern surgical imaging workflows and provides a clear fit for endoscopy, procedure-room, or auxiliary OR visualization depending on the monitor size.`,
      },
      {
        title: is3D ? "3D visualization workflow" : "Medical integration flexibility",
        description: is3D
          ? "This model is listed as a 3D surgical display, making it relevant for workflows where stereoscopic depth perception is part of the camera and display chain."
          : "The form factor is suited to medical mounting and integration scenarios such as carts, booms, wall mounts, or integrated OR display layouts.",
      },
      {
        title: "Beacon operating-room range alignment",
        description:
          "This model sits within Beacon's operating-room product family shown on the manufacturer's surgical-display page, helping keep the public catalog aligned with the current vendor lineup.",
      },
    ],
    deploymentItems: [
      {
        title: "Endoscopy and procedure rooms",
        description:
          `Suitable for use in endoscopy-led clinical environments where a ${displaySize} monitor format is appropriate for the procedure-room layout.`,
      },
      {
        title: "Integrated operating rooms",
        description:
          "Can be specified as part of integrated OR video layouts where display size and resolution must align with camera systems and team viewing needs.",
      },
      {
        title: is3D ? "3D-capable surgical suites" : "Auxiliary or team-viewing positions",
        description: is3D
          ? "Relevant for operating rooms using a 3D-capable video chain for stereoscopic surgical visualization."
          : "Depending on monitor size, the display can serve as a primary surgical screen, auxiliary monitor, or large-format team-viewing display.",
      },
    ],
    valuePoints: [
      "Keeps the public product catalog aligned with the current Beacon lineup.",
      `${displaySize} sizing helps match display choice to room layout and viewing distance.`,
      `${resolution} positioning gives buyers a clear starting point for monitor selection.`,
      is3D ? "Supports conversations around 3D-capable surgical visualization." : "Useful for OR, endoscopy, and integrated-room planning discussions.",
    ],
    heroImages: {
      main: { src: beaconSharedImages.heroMain, alt: `${name} Beacon surgical monitor` },
      secondary1: { src: beaconSharedImages.heroSecondary1, alt: `${name} installed in operating-room workflow` },
      secondary2: { src: beaconSharedImages.heroSecondary2, alt: `${name} display detail` },
    },
    deploymentImages: [
      { src: beaconSharedImages.deploy1, alt: `${name} in endoscopy environment` },
      { src: beaconSharedImages.deploy2, alt: `${name} in integrated OR setup` },
      { src: beaconSharedImages.deploy3, alt: `${name} in clinical deployment` },
    ],
  }
}

export const beaconProducts: SurgicalMonitorProduct[] = [
  createBeaconProduct({
    slug: "s2421p",
    name: "S2421P",
    displaySize: '24"',
    resolution: "FHD",
    useCase: "operating-room and procedure-room visualization",
  }),
  createBeaconProduct({
    slug: "s271p",
    name: "S271P",
    displaySize: '27"',
    resolution: "FHD",
    useCase: "operating-room and endoscopy visualization",
  }),
  createBeaconProduct({
    slug: "s5583p-l",
    name: "S5583P(L)",
    displaySize: '55"',
    resolution: "4K UHD",
    useCase: "large-format operating-room team viewing",
  }),
  createBeaconProduct({
    slug: "s2785p",
    name: "S2785P",
    displaySize: '27"',
    resolution: "4K UHD",
    useCase: "4K endoscopy and operating-room visualization",
  }),
  createBeaconProduct({
    slug: "s3285p",
    name: "S3285P",
    displaySize: '32"',
    resolution: "4K UHD",
    useCase: "primary operating-room and endoscopy visualization",
  }),
  createBeaconProduct({
    slug: "s3282p",
    name: "S3282P",
    displaySize: '31.5"',
    resolution: "4K UHD",
    useCase: "operating-room and endoscopy visualization",
  }),
  createBeaconProduct({
    slug: "s2780p",
    name: "S2780P",
    displaySize: '27"',
    resolution: "4K UHD",
    useCase: "compact 4K surgical display workflows",
  }),
  createBeaconProduct({
    slug: "s5583p-h",
    name: "S5583P(H)",
    displaySize: '55"',
    resolution: "4K UHD",
    useCase: "large-format operating-room and gallery viewing",
  }),
  createBeaconProduct({
    slug: "s3285p-3d",
    name: "S3285P-3D",
    displaySize: '32"',
    resolution: "4K 3D",
    useCase: "3D operating-room and endoscopy visualization",
    is3D: true,
  }),
  createBeaconProduct({
    slug: "s3221p-3d",
    name: "S3221P-3D",
    displaySize: '31.5"',
    resolution: "FHD 3D",
    useCase: "3D operating-room visualization",
    is3D: true,
  }),
  createBeaconProduct({
    slug: "s3286p",
    name: "S3286P",
    displaySize: '31.5"',
    resolution: "4K UHD",
    useCase: "operating-room and endoscopy visualization",
  }),
]

export const fsnProducts: SurgicalMonitorProduct[] = [
  {
    slug: "fs-l2402d",
    name: "FS-L2402D",
    shortDescription: "24\" WUXGA surgical monitor with edge-to-edge glass and fanless design for quiet OR environments.",
    cardImage: "/images/products/surgical-monitors/shared/card.jpg",
    heroTitle: "24\" WUXGA Fanless Surgical Monitor with Edge-to-Edge Glass",
    heroSubtitle:
      "The FSN FS-L2402D delivers WUXGA resolution in a 24-inch fanless design with edge-to-edge glass construction, providing a hygienic, quiet, and compact surgical display solution for endoscopy and auxiliary visualization positions.",
    overview:
      "The FSN FS-L2402D is a 24-inch WUXGA (1920 x 1200) surgical monitor built for clinical environments that demand quiet operation, easy decontamination, and reliable image performance in a compact form factor. The fanless design eliminates active cooling noise and moving-part failure risks, while the edge-to-edge glass construction minimizes crevices that could harbor pathogens and simplifies surface cleaning protocols.",
    highlights: [
      "WUXGA (1920 x 1200) resolution for high-clarity image display at 24-inch screen size.",
      "Fanless design eliminates cooling noise and reduces mechanical failure points.",
      "Edge-to-edge glass for simplified surface decontamination and infection control.",
      "Compact 24-inch form factor suitable for space-constrained OR positions.",
      "Medical-grade construction designed for regular clinical cleaning procedures.",
    ],
    capabilityItems: [
      {
        title: "Fanless silent operation",
        description:
          "Eliminates fan noise from the display environment, supporting OR acoustic standards and reducing distraction during delicate procedures.",
      },
      {
        title: "Edge-to-edge glass surface",
        description:
          "Flat, seamless front surface removes bezel gaps and seams, simplifying wipe-down decontamination and supporting strict infection-control protocols.",
      },
      {
        title: "WUXGA image clarity",
        description:
          "1920 x 1200 resolution at 24 inches provides a high pixel density suitable for endoscopic detail visualization and ancillary data display.",
      },
      {
        title: "Compact clinical integration",
        description:
          "The 24-inch form factor integrates into procedure rooms, anesthesia workstations, and auxiliary positions without consuming large amounts of available space.",
      },
    ],
    deploymentItems: [
      {
        title: "Endoscopy auxiliary positions",
        description:
          "Suitable as a secondary display in endoscopy suites where compact, hygienic screen solutions are preferred alongside a primary monitor.",
      },
      {
        title: "Anesthesia workstations",
        description:
          "Fanless operation and compact size make the FS-L2402D appropriate for anesthesia positions requiring a quiet, clean secondary screen.",
      },
      {
        title: "Procedure room imaging",
        description:
          "Compact WUXGA display for smaller procedure rooms requiring clean, reliable visualization without the footprint of larger 32-inch surgical monitors.",
      },
    ],
    valuePoints: [
      "Fanless design reduces maintenance needs and eliminates noise from the display system.",
      "Edge-to-edge glass supports hygienic surface management in sterile environments.",
      "WUXGA resolution delivers clear imaging for both HD camera feeds and data overlays.",
      "Compact form factor enables deployment in space-limited OR and procedure room positions.",
    ],
    heroImages: {
      main: { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FSN FS-L2402D 24\" WUXGA surgical monitor" },
      secondary1: { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FS-L2402D in endoscopy procedure room" },
      secondary2: { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FS-L2402D edge-to-edge glass surface" },
    },
    deploymentImages: [
      { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FS-L2402D in endoscopy auxiliary position" },
      { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FS-L2402D at anesthesia workstation" },
      { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FS-L2402D in compact procedure room" },
    ],
  },
  {
    slug: "fs-l3202d",
    name: "FS-L3202D",
    shortDescription: "32\" FHD surgical monitor with multiview capability and fanless design.",
    cardImage: "/images/products/surgical-monitors/shared/card.jpg",
    heroTitle: "32\" FHD Fanless Surgical Monitor with Multiview",
    heroSubtitle:
      "The FSN FS-L3202D provides full HD visualization in a 32-inch fanless format with built-in multiview for simultaneous display of multiple signal sources, suited for endoscopy towers and auxiliary monitoring positions.",
    overview:
      "The FSN FS-L3202D is a 32-inch full-HD surgical display engineered for clinical environments that require reliable FHD imaging with multiview capability and silent operation. Its fanless construction eliminates cooling noise while the 32-inch panel size delivers comfortable viewing for primary endoscopy and open-surgery visualization. Integrated multiview modes support simultaneous display of multiple video inputs without additional signal processing hardware.",
    highlights: [
      "32-inch FHD panel for primary endoscopy and open-surgery visualization.",
      "Multiview capability for simultaneous display of multiple video signal sources.",
      "Fanless design for silent OR operation and reduced mechanical complexity.",
      "Medical-grade construction optimized for daily clinical use and decontamination.",
      "Broad input compatibility with standard HD surgical camera systems.",
    ],
    capabilityItems: [
      {
        title: "Integrated multiview modes",
        description:
          "Built-in multiview enables simultaneous display of two or more independent video inputs without requiring an external video wall processor or additional monitor hardware.",
      },
      {
        title: "32-inch FHD primary display",
        description:
          "Full HD (1920 x 1080) at 32 inches provides a comfortable and detailed viewing experience for standard endoscopic and open-surgery camera systems.",
      },
      {
        title: "Fanless quiet operation",
        description:
          "Passive cooling eliminates fan noise from the surgical display environment, supporting acoustic standards in procedure and examination rooms.",
      },
      {
        title: "Daily clinical durability",
        description:
          "Medical-grade panel and enclosure design support consistent performance under frequent cleaning and extended daily procedure schedules.",
      },
    ],
    deploymentItems: [
      {
        title: "Standard endoscopy towers",
        description:
          "Primary FHD display for endoscopy video towers in procedure rooms requiring reliable imaging with multiview for simultaneous data or camera monitoring.",
      },
      {
        title: "Multi-source auxiliary monitoring",
        description:
          "Multiview capability makes the FS-L3202D suitable for positions requiring display of both a camera feed and patient monitoring or navigation data on a single screen.",
      },
      {
        title: "Budget-conscious OR modernization",
        description:
          "FHD fanless display provides a cost-effective upgrade path for procedure rooms transitioning from legacy CRT or aging flat-panel monitors.",
      },
    ],
    valuePoints: [
      "Integrated multiview reduces equipment count and simplifies OR cart configurations.",
      "Fanless design lowers long-term maintenance requirements and extends display service life.",
      "32-inch FHD format provides comfortable viewing for standard surgical camera systems.",
      "Cost-effective solution for primary and secondary OR display modernization programs.",
    ],
    heroImages: {
      main: { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FSN FS-L3202D 32\" FHD surgical monitor" },
      secondary1: { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FS-L3202D in endoscopy tower configuration" },
      secondary2: { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FS-L3202D multiview display in use" },
    },
    deploymentImages: [
      { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FS-L3202D in standard endoscopy tower" },
      { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FS-L3202D in multi-source auxiliary position" },
      { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FS-L3202D in modernized procedure room" },
    ],
  },
  {
    slug: "fm-e2701d",
    name: "FM-E2701D",
    shortDescription: "27\" 4K UHD surgical monitor for compact 4K visualization in endoscopy and open surgery.",
    cardImage: "/images/products/surgical-monitors/shared/card.jpg",
    heroTitle: "27\" 4K UHD Surgical Monitor for Compact High-Resolution Visualization",
    heroSubtitle:
      "The FSN FM-E2701D delivers 4K UHD resolution in a 27-inch compact form factor, providing high pixel density for detailed endoscopic visualization and secondary 4K display applications in space-efficient OR configurations.",
    overview:
      "The FSN FM-E2701D is a 27-inch 4K UHD surgical monitor designed for operating rooms and procedure environments where high resolution is required without the footprint of a larger display. The 27-inch 4K panel achieves a high pixel density that renders fine anatomical detail from modern 4K endoscopic cameras, making it suitable as both a primary compact 4K display and a high-resolution secondary monitor in multi-display OR configurations.",
    highlights: [
      "4K UHD (3840 x 2160) resolution at 27 inches for high pixel density visualization.",
      "Compact form factor suited for space-efficient 4K display configurations.",
      "Medical-grade panel calibrated for accurate color in surgical imaging applications.",
      "Compatible with 4K surgical cameras and standard HD sources via upscaling.",
      "VESA-compatible mounting for boom arm and cart integration.",
    ],
    capabilityItems: [
      {
        title: "High pixel density 4K panel",
        description:
          "4K UHD resolution concentrated in a 27-inch panel produces exceptional pixel density, rendering fine endoscopic detail that would be less visible on larger lower-density displays.",
      },
      {
        title: "Compact 4K OR integration",
        description:
          "Allows 4K visualization to be deployed in positions where a 32-inch or larger display would obstruct surgical access or violate boom arm load limits.",
      },
      {
        title: "Accurate surgical color calibration",
        description:
          "Factory-calibrated panel ensures consistent color temperature and white balance across the display lifetime, supporting reliable intraoperative color assessment.",
      },
      {
        title: "Multi-input source compatibility",
        description:
          "Accepts HDMI and SDI inputs, enabling connection to 4K camera systems and standard-definition sources through a single display unit.",
      },
    ],
    deploymentItems: [
      {
        title: "Compact 4K endoscopy setups",
        description:
          "Primary 4K monitor for procedure rooms with space limitations that prevent deployment of 32-inch displays on standard video tower carts.",
      },
      {
        title: "Secondary 4K auxiliary positions",
        description:
          "High-resolution secondary display for multi-monitor OR setups where a compact 4K panel is needed at an auxiliary viewing position.",
      },
      {
        title: "Robotic console and navigation displays",
        description:
          "Compact 4K form factor supports installation near robotic platforms or navigation systems where detailed imaging reference is required.",
      },
    ],
    valuePoints: [
      "High pixel density at 27 inches maximizes detail rendering from 4K camera systems.",
      "Compact form factor enables 4K deployment in space-constrained positions.",
      "Accurate color calibration supports confident intraoperative visual assessment.",
      "Flexible mounting compatibility simplifies integration into existing OR infrastructure.",
    ],
    heroImages: {
      main: { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FSN FM-E2701D 27\" 4K surgical monitor" },
      secondary1: { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FM-E2701D in compact 4K endoscopy setup" },
      secondary2: { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FM-E2701D secondary display configuration" },
    },
    deploymentImages: [
      { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FM-E2701D in compact 4K endoscopy room" },
      { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FM-E2701D as secondary 4K auxiliary display" },
      { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FM-E2701D near robotic console position" },
    ],
  },
  {
    slug: "fm-e3230d",
    name: "FM-E3230D",
    shortDescription: "32\" 4K surgical monitor with protective corner guards and a rear cable cover for cleaner OR integration.",
    cardImage: "/images/products/surgical-monitors/shared/card.jpg",
    heroTitle: "32\" 4K Surgical Monitor with OR-Safe Protective Details",
    heroSubtitle:
      "The FSN FM-E3230D is presented by the manufacturer as a 32-inch 4K medical display with wide viewing angles, protective corner guards, and a rear cable cover for cleaner operating-room deployment.",
    overview:
      "The FSN FM-E3230D is a 32-inch 4K surgical monitor intended for operating-room environments that need high-resolution visualization with practical integration details already built into the display. Based on the current FSN 4K monitor category, this series emphasizes wide viewing angles for team visibility, protective corner guards for safer movement around booms and carts, and a rear cable cover to keep wiring more controlled in active OR workflows.",
    highlights: [
      "4K UHD (3840 x 2160) resolution in a standard 32-inch surgical display form factor.",
      "Protective corner guards for safer handling around carts, booms, and room movement.",
      "Rear cable cover to keep OR wiring more controlled and presentation-ready.",
      "Wide viewing angles for shared image visibility across the OR team.",
      "Medical-grade enclosure designed for clinical cleaning and daily use.",
    ],
    capabilityItems: [
      {
        title: "Protective OR-oriented design",
        description:
          "Protective corner guards help reduce accidental contact damage during installation, repositioning, and day-to-day use around mobile or boom-mounted clinical setups.",
      },
      {
        title: "32-inch 4K UHD display",
        description:
          "Full 4K UHD resolution at 32 inches provides the detail and viewing comfort required for primary surgical visualization in standard OR environments.",
      },
      {
        title: "Cleaner cable management",
        description:
          "A rear cable cover helps keep cords managed behind the display, supporting tidier endoscopy tower, boom, and wall-mount installations.",
      },
      {
        title: "Reliable shared viewing",
        description:
          "Wide viewing angles allow multiple observers around the OR table to see the same image without significant brightness or color degradation.",
      },
    ],
    deploymentItems: [
      {
        title: "Integrated endoscopy towers",
        description:
          "Corner protection, cable management, and 32-inch 4K resolution make the FM-E3230D well suited for tower-based 4K endoscopy systems requiring a robust primary display.",
      },
      {
        title: "Boom-mounted OR monitors",
        description:
          "Standard 32-inch 4K format integrates into ceiling boom display positions for team-viewing and surgical camera visualization.",
      },
      {
        title: "Cart and wall-mounted 4K displays",
        description:
          "Supports 4K visualization in mobile or fixed installations where controlled cable routing and a medical-grade enclosure are required.",
      },
    ],
    valuePoints: [
      "32-inch 4K format balances compact mounting with high-detail surgical imaging.",
      "Protective corner guards add practical resilience for real OR deployments.",
      "Rear cable cover supports a cleaner, more controlled installed appearance.",
      "Wide viewing angles support better image access for surgeons, assistants, and staff.",
    ],
    heroImages: {
      main: { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FSN FM-E3230D 32\" 4K surgical monitor" },
      secondary1: { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FM-E3230D in 4K endoscopy tower configuration" },
      secondary2: { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FM-E3230D integrated OR display deployment" },
    },
    deploymentImages: [
      { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FM-E3230D as primary 4K endoscopy tower display" },
      { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FM-E3230D in boom-mounted OR deployment" },
      { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FM-E3230D in integrated OR room setup" },
    ],
  },
  {
    slug: "fm-e3250d",
    name: "FM-E3250D",
    shortDescription: "32\" 4K Mini-LED surgical monitor with local dimming and HDR for exceptional contrast and brightness.",
    cardImage: "/images/products/surgical-monitors/shared/card.jpg",
    heroTitle: "32\" 4K Mini-LED Surgical Monitor with Local Dimming and HDR",
    heroSubtitle:
      "The FSN FM-E3250D combines Mini-LED backlight technology with local dimming and HDR processing to deliver exceptional contrast ratios and peak brightness for demanding surgical visualization requiring the highest image quality.",
    overview:
      "The FSN FM-E3250D is a 32-inch 4K surgical display built around Mini-LED backlight technology with advanced local dimming, producing HDR-grade contrast ratios and peak luminance that outperform standard surgical monitors. Mini-LED backlights allow finer zone control than conventional LED arrays, resulting in deeper blacks, brighter highlights, and improved overall image depth. This makes the FM-E3250D suitable for procedures where precise tissue differentiation and shadow detail are clinically significant.",
    highlights: [
      "Mini-LED backlight with local dimming for superior contrast and deep black reproduction.",
      "HDR image processing for precise tonal range across bright highlights and dark shadows.",
      "32-inch 4K UHD panel in a standard surgical display form factor.",
      "High peak luminance for excellent visibility in bright OR environments.",
      "Medical-grade calibration optimized for accurate surgical imaging color representation.",
    ],
    capabilityItems: [
      {
        title: "Mini-LED local dimming technology",
        description:
          "Mini-LED backlight arrays with fine-grained zone control produce contrast ratios and black levels that exceed conventional surgical display capabilities.",
      },
      {
        title: "HDR surgical imaging",
        description:
          "HDR processing maps the full tonal range from endoscopic and open-surgery cameras, preserving detail in both bright specular reflections and dark tissue recesses simultaneously.",
      },
      {
        title: "High peak luminance",
        description:
          "Elevated peak brightness allows the display to remain clearly visible and accurate under intense overhead OR lighting that would wash out standard surgical monitors.",
      },
      {
        title: "Precise tissue differentiation",
        description:
          "The combination of Mini-LED contrast and HDR rendering helps surgeons distinguish tissue planes, vessel structures, and anatomical boundaries with greater visual confidence.",
      },
    ],
    deploymentItems: [
      {
        title: "High-complexity endoscopic surgery",
        description:
          "Exceptional contrast and HDR performance support visualization of fine anatomical detail in advanced laparoscopic, robotic, and thoracoscopic procedures.",
      },
      {
        title: "Fluorescence-guided surgery",
        description:
          "High contrast ratio and local dimming support simultaneous visualization of white-light and fluorescence overlay imaging in near-infrared guided procedures.",
      },
      {
        title: "Premium OR room displays",
        description:
          "Flagship imaging performance for integrated OR rooms where clinical leadership demands the highest available display quality.",
      },
    ],
    valuePoints: [
      "Mini-LED contrast reveals anatomical detail that standard surgical displays cannot reproduce.",
      "HDR imaging support aligns with evolving 4K and HDR surgical camera system capabilities.",
      "High brightness maintains accuracy in challenging OR ambient light environments.",
      "Premium display performance supports surgeon confidence in complex, detail-sensitive procedures.",
    ],
    heroImages: {
      main: { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FSN FM-E3250D 32\" 4K Mini-LED surgical monitor" },
      secondary1: { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FM-E3250D in high-complexity surgical suite" },
      secondary2: { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FM-E3250D Mini-LED display in OR environment" },
    },
    deploymentImages: [
      { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FM-E3250D in high-complexity endoscopy suite" },
      { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FM-E3250D in fluorescence-guided surgery setup" },
      { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FM-E3250D in premium integrated OR room" },
    ],
  },
  {
    slug: "fm-f2701d",
    name: "FM-F2701D",
    shortDescription: "27\" OLED surgical monitor with perfect black levels, infinite contrast, and wide viewing angles.",
    cardImage: "/images/products/surgical-monitors/shared/card.jpg",
    heroTitle: "27\" OLED Surgical Monitor with Perfect Black Levels and Infinite Contrast",
    heroSubtitle:
      "The FSN FM-F2701D uses OLED panel technology to deliver perfect black levels, infinite contrast ratio, and wide viewing angles in a 27-inch surgical display, enabling exceptional tissue differentiation and depth perception in demanding endoscopic procedures.",
    overview:
      "The FSN FM-F2701D is a 27-inch OLED surgical monitor that leverages organic light-emitting diode technology to achieve display characteristics that are physically impossible with LCD-based panels. Each OLED pixel generates its own light independently, enabling true black display (zero pixel emission) and an effectively infinite contrast ratio. This produces a display depth and tissue differentiation capability that is particularly valuable in procedures where shadow detail and color fidelity are clinically important.",
    highlights: [
      "OLED panel technology for true zero-black and infinite contrast ratio.",
      "Wide 178-degree viewing angle for accurate color from any observer position.",
      "Instant pixel response time eliminating motion blur in fast endoscope movements.",
      "Exceptional tissue differentiation enabled by OLED per-pixel light control.",
      "27-inch form factor for compact high-performance surgical display deployment.",
    ],
    capabilityItems: [
      {
        title: "True black OLED display",
        description:
          "OLED pixels can individually switch off completely, producing absolute black levels that no LCD or LED panel can replicate, resulting in a display depth that significantly enhances tissue contrast.",
      },
      {
        title: "Infinite contrast ratio",
        description:
          "With pixels capable of true black, the contrast ratio between the darkest and brightest areas is effectively infinite, revealing anatomical detail that is invisible on conventional surgical monitors.",
      },
      {
        title: "Wide viewing angle accuracy",
        description:
          "OLED technology maintains color accuracy and brightness uniformity across 178-degree horizontal and vertical viewing angles, ensuring consistent imaging for all team positions around the OR table.",
      },
      {
        title: "Instant pixel response",
        description:
          "Near-zero OLED response time eliminates motion blur during rapid endoscope movement, maintaining sharp image clarity throughout dynamic procedural phases.",
      },
    ],
    deploymentItems: [
      {
        title: "Advanced minimally invasive surgery",
        description:
          "OLED contrast and color depth support the finest tissue differentiation requirements in complex laparoscopic, thoracoscopic, and robotic-assisted procedures.",
      },
      {
        title: "Fluorescence and multispectral imaging",
        description:
          "Perfect black background in OLED technology enhances near-infrared fluorescence overlay visibility against dark tissue environments.",
      },
      {
        title: "Premium compact OR visualization",
        description:
          "27-inch OLED provides the highest available display quality in a compact format for OR positions where display footprint is constrained.",
      },
    ],
    valuePoints: [
      "OLED black levels and infinite contrast exceed the physical limits of all LCD-based surgical displays.",
      "Wide viewing angles ensure consistent image quality for all team members regardless of position.",
      "Instant pixel response eliminates motion blur from fast endoscope navigation.",
      "Compact 27-inch OLED format delivers flagship display performance in space-efficient configurations.",
    ],
    heroImages: {
      main: { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FSN FM-F2701D 27\" OLED surgical monitor" },
      secondary1: { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FM-F2701D in advanced minimally invasive surgery" },
      secondary2: { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FM-F2701D OLED display in OR environment" },
    },
    deploymentImages: [
      { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FM-F2701D in advanced laparoscopic suite" },
      { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FM-F2701D in fluorescence imaging application" },
      { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FM-F2701D in premium compact OR configuration" },
    ],
  },
  {
    slug: "fm-d5802dv",
    name: "FM-D5802DV",
    shortDescription: "58\" 4K UHD large-format surgical monitor with DICOM compliance and uniform brightness calibration.",
    cardImage: "/images/products/surgical-monitors/shared/card.jpg",
    heroTitle: "58\" 4K UHD DICOM Large-Format Surgical Display with Uniform Brightness",
    heroSubtitle:
      "The FSN FM-D5802DV provides a 58-inch 4K UHD large-format display with DICOM Part 14 compliance and factory-calibrated uniform brightness, enabling diagnostic-quality imaging for wide-area OR visualization and medical imaging review.",
    overview:
      "The FSN FM-D5802DV is a 58-inch 4K UHD large-format surgical display designed for operating rooms and imaging review environments requiring diagnostic-quality visualization at scale. DICOM Part 14 grayscale calibration ensures that the display renders medical imaging data with the tonal accuracy required for diagnostic review. Factory-calibrated uniform brightness across the full 58-inch panel surface eliminates the brightness variation that affects large-format displays without zone calibration, ensuring consistent image quality from edge to edge.",
    highlights: [
      "58-inch 4K UHD panel for large-format team visualization and imaging review.",
      "DICOM Part 14 grayscale calibration for diagnostic-quality medical imaging display.",
      "Uniform brightness calibration ensuring consistent luminance across the full panel surface.",
      "Wide-area visualization supporting full surgical team simultaneous image access.",
      "Suitable for OR gallery positions, imaging review rooms, and integrated OR environments.",
    ],
    capabilityItems: [
      {
        title: "DICOM Part 14 calibration",
        description:
          "Factory DICOM grayscale calibration ensures the display renders medical imaging data in accordance with diagnostic imaging standards, supporting accurate interpretation of radiological and endoscopic content.",
      },
      {
        title: "Uniform brightness across 58 inches",
        description:
          "Panel-wide brightness uniformity calibration eliminates luminance gradients that commonly affect large-format displays, ensuring consistent image quality from corner to corner.",
      },
      {
        title: "4K UHD large-format resolution",
        description:
          "4K UHD resolution across 58 inches maintains sufficient pixel density for detail visualization, even when multiple team members view the screen from different distances.",
      },
      {
        title: "Multi-observer team visualization",
        description:
          "Large-format design ensures that all surgical team members including circulating nurses, assistants, and attendings have clear simultaneous access to procedure imagery.",
      },
    ],
    deploymentItems: [
      {
        title: "Integrated OR gallery and team displays",
        description:
          "Wall or ceiling-mounted gallery-position display providing the entire surgical team with a shared high-resolution view of the procedure.",
      },
      {
        title: "Medical imaging review rooms",
        description:
          "DICOM calibration supports use in imaging interpretation environments where diagnostic accuracy is required from a large-format display.",
      },
      {
        title: "Surgical training and observation",
        description:
          "58-inch scale and 4K resolution support high-quality simultaneous observation by trainees and senior surgeons during complex cases.",
      },
    ],
    valuePoints: [
      "DICOM calibration extends the display's clinical utility to diagnostic imaging review applications.",
      "Uniform brightness calibration ensures diagnostic consistency across the full 58-inch panel.",
      "Large-format 4K resolution supports the simultaneous viewing needs of entire surgical teams.",
      "Shared visualization reduces information asymmetry between OR team positions.",
    ],
    heroImages: {
      main: { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FSN FM-D5802DV 58\" 4K DICOM large-format display" },
      secondary1: { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FM-D5802DV in integrated OR gallery position" },
      secondary2: { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FM-D5802DV large-format surgical team display" },
    },
    deploymentImages: [
      { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FM-D5802DV in integrated OR gallery deployment" },
      { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FM-D5802DV in medical imaging review room" },
      { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FM-D5802DV in surgical training observation room" },
    ],
  },
  {
    slug: "fm-e3204dgc",
    name: "FM-E3204DGC",
    shortDescription: "32\" 4K 3D surgical monitor with 2D/3D OSD switch and passive polarized eyewear included.",
    cardImage: "/images/products/surgical-monitors/shared/card.jpg",
    heroTitle: "32\" 4K 3D Surgical Monitor with 2D/3D Switch and Polarized Eyewear",
    heroSubtitle:
      "The FSN FM-E3204DGC provides 4K 3D stereoscopic visualization in a 32-inch surgical display with on-screen 2D/3D switching, delivering depth perception for advanced minimally invasive and robotic-assisted surgery with passive polarized eyewear included.",
    overview:
      "The FSN FM-E3204DGC is a 32-inch 4K surgical display with integrated 3D stereoscopic visualization capability. On-screen display (OSD) switching between 2D and 3D modes allows surgical teams to select the appropriate visualization mode for the procedure phase without interrupting workflow. Passive polarized eyewear is included with the system, providing a glasses-based 3D viewing experience without battery requirements or active synchronization hardware.",
    highlights: [
      "32-inch 4K UHD panel with integrated 3D stereoscopic visualization.",
      "OSD 2D/3D switch for seamless mode transitions during procedures.",
      "Passive polarized eyewear included for battery-free 3D viewing.",
      "4K resolution maintained in both 2D and 3D display modes.",
      "Designed for robotic-assisted and advanced minimally invasive surgery applications.",
    ],
    capabilityItems: [
      {
        title: "OSD 2D/3D mode switching",
        description:
          "On-screen display controls enable seamless switching between standard 2D and stereoscopic 3D modes without external hardware or workflow interruption during a procedure.",
      },
      {
        title: "Passive polarized 3D system",
        description:
          "Polarized 3D technology provides stereoscopic depth perception without requiring active shutter glasses, battery management, or synchronization infrastructure.",
      },
      {
        title: "4K 3D stereoscopic imaging",
        description:
          "Delivers 4K resolution in both 2D and 3D display modes, ensuring that the transition to stereoscopic visualization does not compromise image detail or clarity.",
      },
      {
        title: "Surgical depth perception",
        description:
          "3D visualization enhances spatial awareness during minimally invasive and robotic procedures, supporting more accurate instrument placement and tissue handling.",
      },
    ],
    deploymentItems: [
      {
        title: "Robotic-assisted surgery suites",
        description:
          "3D visualization capability supports the depth perception requirements of robotic platform console displays and assistant viewing positions.",
      },
      {
        title: "Advanced laparoscopic procedures",
        description:
          "2D/3D switching allows teams to leverage stereoscopic depth during complex dissection while reverting to 2D for standard procedural phases.",
      },
      {
        title: "Surgical simulation and training",
        description:
          "3D display capability supports realistic depth perception in simulation environments for surgical skills development and training programs.",
      },
    ],
    valuePoints: [
      "OSD mode switching eliminates 3D/2D transition complexity during live procedures.",
      "Passive polarized eyewear avoids battery management and active sync maintenance.",
      "3D depth perception improves spatial accuracy in robotic and laparoscopic instrument handling.",
      "4K resolution in both display modes preserves imaging quality across all procedure phases.",
    ],
    heroImages: {
      main: { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FSN FM-E3204DGC 32\" 4K 3D surgical monitor" },
      secondary1: { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FM-E3204DGC in robotic surgery suite" },
      secondary2: { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FM-E3204DGC 3D visualization in use" },
    },
    deploymentImages: [
      { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FM-E3204DGC in robotic-assisted surgery suite" },
      { src: "/images/products/surgical-monitors/shared/card.jpg", alt: "FM-E3204DGC in advanced laparoscopic room" },
      { src: "/images/products/surgical-monitors/shared/hero-secondary-1.jpg", alt: "FM-E3204DGC in surgical simulation environment" },
    ],
  },
]

export function getBeaconProductBySlug(slug: string) {
  return beaconProducts.find((item) => item.slug === slug)
}

export function getFsnProductBySlug(slug: string) {
  return fsnProducts.find((item) => item.slug === slug)
}

