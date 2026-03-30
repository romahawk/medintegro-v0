export interface IcuInfrastructureProduct {
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

// в”Ђв”Ђв”Ђ Ceiling Medical Supply Units в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ

export const ceilingPendantProducts: IcuInfrastructureProduct[] = [
  {
    slug: "lissa-classic",
    name: "LISSAclassic",
    shortDescription: "Modular ceiling pendant for OR and ICU with ergonomic swivel arms and high load capacity.",
    cardImage: "/images/products/icu-infrastructure/shared/hero-main.jpg",
    heroTitle: "Modular ceiling pendant for demanding OR and ICU environments",
    heroSubtitle:
      "LISSAclassic combines flexible arm geometry, high payload capacity, and comprehensive media integration to support every surgical and intensive care workflow.",
    overview:
      "LISSAclassic is the cornerstone of the INMED ceiling pendant family. It is engineered for operating rooms and intensive care units where reliable, fast access to gas, power, and data outlets is critical. The modular design allows arm configuration, extension length, and accessory loading to be adapted to the precise demands of each installation, from single-arm setups to complex multi-arm OR environments.",
    highlights: [
      "High load capacity accommodates monitors, infusion devices, and surgical accessories.",
      "Full gas, electrical, data, and equipotential connectivity in one modular unit.",
      "Ergonomic swivel arms with smooth positioning under clinical load.",
      "Configurable arm extensions, shelves, and medical rail systems.",
    ],
    capabilityItems: [
      {
        title: "Comprehensive media integration",
        description:
          "Integrates medical gas outlets, electrical sockets, data ports, and equipotential connections in a single modular housing accessible at the point of care.",
      },
      {
        title: "Ergonomic arm geometry",
        description:
          "Swivel arm design allows fast repositioning during procedures with controlled resistance and reliable brake engagement.",
      },
      {
        title: "High-load accessory mounting",
        description:
          "Supports heavy monitors, infusion pump arrays, and multi-device configurations without compromising positioning accuracy.",
      },
      {
        title: "Modular configuration",
        description:
          "Arm count, extension length, and accessory selection are configured at design stage to match the clinical workflow of each room.",
      },
    ],
    deploymentItems: [
      {
        title: "New operating room builds",
        description:
          "Integrated during OR construction into ceiling infrastructure with full media routing for gas, electrical, and data services.",
      },
      {
        title: "ICU bay fitouts",
        description:
          "Provides each ICU bedspace with centralized access to all required media connections, reducing floor clutter and improving nursing efficiency.",
      },
      {
        title: "OR modernization projects",
        description:
          "Retrofitted into existing ceiling structures to upgrade aging media bridge or column systems with current-generation pendant technology.",
      },
    ],
    valuePoints: [
      "Reduces floor equipment clutter, improving movement safety in OR and ICU.",
      "Shortens setup time before and between procedures.",
      "Supports clean, standardized room layouts across the facility.",
      "Long service life with accessible maintenance access points.",
    ],
    heroImages: {
      main: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LISSAclassic ceiling pendant installed in modern OR" },
      secondary1: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LISSAclassic arm detail with gas and power outlets" },
      secondary2: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LISSAclassic deployed in ICU patient bay" },
    },
    deploymentImages: [
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LISSAclassic in new OR build" },
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LISSAclassic in ICU bay" },
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LISSAclassic in OR modernization" },
    ],
  },
  {
    slug: "lissa-classic-lift",
    name: "LISSAclassic-lift",
    shortDescription: "Ceiling pendant with electric or spring lift for OR and treatment rooms вЂ” high ergonomics and flexible brake options.",
    cardImage: "/images/products/icu-infrastructure/shared/hero-main.jpg",
    heroTitle: "Ceiling pendant with integrated vertical lift for enhanced ergonomics",
    heroSubtitle:
      "LISSAclassic-lift adds electric or spring-actuated height adjustment to the proven LISSAclassic platform, eliminating manual effort for repositioning during complex surgical procedures.",
    overview:
      "LISSAclassic-lift is designed for operating rooms and treatment environments where height-adjustable pendant positioning is required to accommodate different surgical team configurations, patient table heights, and procedure types. The lift drive вЂ” available in electric or spring-actuated variants вЂ” provides smooth, controlled vertical movement with configurable brake options including electromagnetic, pneumatic, and electro-pneumatic systems.",
    highlights: [
      "Electric or spring lift drive for smooth vertical height adjustment.",
      "Electromagnetic, pneumatic, or electro-pneumatic brake configurations.",
      "Full LISSAclassic media integration with added vertical travel range.",
      "Suitable for operating rooms and multi-purpose treatment spaces.",
    ],
    capabilityItems: [
      {
        title: "Vertical lift drive options",
        description:
          "Electric drive provides motorized height adjustment at the touch of a control; spring drive offers passive counterbalance for manual height positioning.",
      },
      {
        title: "Configurable brake systems",
        description:
          "Electromagnetic, pneumatic, or electro-pneumatic brakes are selected at configuration stage to match room control infrastructure and clinical workflow.",
      },
      {
        title: "Ergonomic height adaptation",
        description:
          "Allows OR and ICU teams to precisely adjust pendant height for each procedure, reducing physical strain on staff during long operations.",
      },
      {
        title: "Full media provision",
        description:
          "Retains complete gas, electrical, data, and equipotential connectivity of the LISSAclassic platform across the full vertical travel range.",
      },
    ],
    deploymentItems: [
      {
        title: "Multi-specialty OR environments",
        description:
          "Height adjustment supports different surgical disciplines sharing the same room, reducing per-procedure setup time.",
      },
      {
        title: "Hybrid operating rooms",
        description:
          "Adapts pendant position to varying imaging and surgical table configurations in image-guided procedural spaces.",
      },
      {
        title: "Treatment and procedure rooms",
        description:
          "Provides flexible media access across different clinical activities without fixed-height limitations.",
      },
    ],
    valuePoints: [
      "Reduces physical strain on surgical teams during height adjustments.",
      "Supports faster room turnover in multi-specialty environments.",
      "Flexible brake configuration adapts to room control system.",
      "Compatible with INMED standard arm and accessory ecosystem.",
    ],
    heroImages: {
      main: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LISSAclassic-lift with vertical adjustment in active OR" },
      secondary1: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LISSAclassic-lift lift mechanism detail" },
      secondary2: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LISSAclassic-lift in hybrid OR environment" },
    },
    deploymentImages: [
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LISSAclassic-lift in multi-specialty OR" },
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LISSAclassic-lift in hybrid OR" },
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LISSAclassic-lift in treatment room" },
    ],
  },
  {
    slug: "lissa-heavy",
    name: "LISSAheavy",
    shortDescription: "Heavy-duty ceiling pendant with up to 250 kg load capacity and 260 cm arm extension for demanding OR environments.",
    cardImage: "/images/products/icu-infrastructure/shared/hero-main.jpg",
    heroTitle: "Heavy-duty ceiling pendant for the most demanding surgical and ICU environments",
    heroSubtitle:
      "LISSAheavy is engineered for operating rooms and intensive care settings that require maximum payload capacity, extended arm reach, and full media provision at every arm position.",
    overview:
      "LISSAheavy extends the LISSA pendant family to serve the most equipment-intensive OR and ICU environments. With load capacity up to 250 kg and total arm extension up to 260 cm, it supports large intraoperative imaging systems, multi-monitor arrays, and high-payload surgical equipment at the precise position required without compromising arm stability or brake performance.",
    highlights: [
      "Load capacity up to 250 kg for imaging systems and heavy equipment.",
      "Total arm extension up to 260 cm for large OR footprints.",
      "Robust arm brake systems rated for heavy-duty daily use.",
      "Full gas, electrical, and data media provision maintained at maximum load.",
    ],
    capabilityItems: [
      {
        title: "Maximum payload capacity",
        description:
          "Rated for up to 250 kg of attached equipment, supporting large intraoperative imaging systems, monitor arrays, and complex device configurations.",
      },
      {
        title: "Extended arm reach",
        description:
          "Total arm extension up to 260 cm provides access across wide OR table configurations and large-footprint surgical environments.",
      },
      {
        title: "Heavy-duty brake system",
        description:
          "Arm brakes are rated for sustained heavy load operation with consistent engagement performance under daily clinical use cycles.",
      },
      {
        title: "Full media integration",
        description:
          "Gas, electrical, data, and equipotential connections are maintained throughout the arm range even at maximum payload.",
      },
    ],
    deploymentItems: [
      {
        title: "Robotic and image-guided OR",
        description:
          "Supports heavy camera heads, large-format monitors, and imaging system components in robotic surgery and image-guided operating environments.",
      },
      {
        title: "Complex hybrid OR",
        description:
          "Provides high-payload pendant positions for interventional imaging, surgical navigation, and multi-discipline equipment in hybrid room configurations.",
      },
      {
        title: "High-acuity ICU bays",
        description:
          "Accommodates multiple ventilators, infusion systems, and monitoring equipment at each critical care bedspace.",
      },
    ],
    valuePoints: [
      "Eliminates the need for supplementary equipment support structures.",
      "Maintains arm stability and brake performance under maximum clinical load.",
      "Supports large-format intraoperative imaging without secondary mounting.",
      "Built for sustained daily operation in the most demanding clinical settings.",
    ],
    heroImages: {
      main: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LISSAheavy ceiling pendant in complex OR" },
      secondary1: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LISSAheavy supporting imaging and monitoring equipment" },
      secondary2: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LISSAheavy arm extension in large OR" },
    },
    deploymentImages: [
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LISSAheavy in robotic OR" },
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LISSAheavy in hybrid OR" },
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LISSAheavy in high-acuity ICU" },
    ],
  },
  {
    slug: "luna-compact",
    name: "LUNAcompact",
    shortDescription: "Economical fixed rigid ceiling pendant for ICU patient rooms and treatment areas, configurable with shelves and accessories.",
    cardImage: "/images/products/icu-infrastructure/shared/hero-main.jpg",
    heroTitle: "Economical fixed ceiling pendant for ICU and general ward environments",
    heroSubtitle:
      "LUNAcompact provides reliable media access for ICU patient rooms and treatment areas in a cost-effective fixed-arm design, fully configurable with shelves, jibs, and clinical accessories.",
    overview:
      "LUNAcompact is designed for ICU patient bays, general wards, and treatment rooms where a fixed-position pendant provides all required media connections without the complexity of articulated arm systems. Its economical design does not compromise on functionality вЂ” LUNAcompact accommodates medical gas, electrical, data, and lighting connections along with a full range of shelves, medical rails, and accessories to meet specific bedspace requirements.",
    highlights: [
      "Economical fixed-arm design for cost-effective ICU and ward deployments.",
      "Configurable with shelves, jibs, IV poles, and accessory rails.",
      "Full gas, electrical, IT, and lighting connectivity options.",
      "Rapid access to all media for nursing and clinical staff.",
    ],
    capabilityItems: [
      {
        title: "Fixed-arm media provision",
        description:
          "Delivers all required gas, electrical, and data connections at a fixed position optimized for the bedspace layout, minimizing installation complexity.",
      },
      {
        title: "Comprehensive accessory system",
        description:
          "Medical rails, shelves, IV poles, baskets, and monitor arms integrate directly with the LUNAcompact body to create a fully equipped bedside station.",
      },
      {
        title: "ICU and ward adaptability",
        description:
          "Configuration options accommodate varying clinical requirements from standard ward beds to full ICU bedspaces.",
      },
      {
        title: "Low-maintenance design",
        description:
          "Fixed-arm construction minimizes moving components, reducing maintenance burden in high-occupancy ward environments.",
      },
    ],
    deploymentItems: [
      {
        title: "ICU patient bays",
        description:
          "Provides all bedspace media in a compact overhead footprint, supporting full critical care equipment without floor stands.",
      },
      {
        title: "General and step-down wards",
        description:
          "Cost-effective media provision for standard hospital beds with configurable accessory options for each ward type.",
      },
      {
        title: "Treatment and procedure rooms",
        description:
          "Delivers fixed media access for clinical procedures without the need for mobile equipment carts.",
      },
    ],
    valuePoints: [
      "Lower installation cost compared to articulated pendant systems.",
      "Reduces equipment clutter and floor obstacles at ICU bedspaces.",
      "Configurable at design stage to match specific ward requirements.",
      "Simple maintenance due to minimal moving components.",
    ],
    heroImages: {
      main: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LUNAcompact in ICU patient room" },
      secondary1: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LUNAcompact with shelves and accessories" },
      secondary2: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LUNAcompact in ward environment" },
    },
    deploymentImages: [
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LUNAcompact in ICU bay" },
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LUNAcompact in general ward" },
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "LUNAcompact in treatment room" },
    ],
  },
  {
    slug: "vega-care",
    name: "VEGAcare",
    shortDescription: "Floor-to-ceiling strut medical unit for ICU and anaesthesia care вЂ” full pendant functionality without ceiling mounting.",
    cardImage: "/images/products/icu-infrastructure/shared/hero-main.jpg",
    heroTitle: "Floor-to-ceiling pendant alternative for renovation and constrained structures",
    heroSubtitle:
      "VEGAcare delivers complete pendant media functionality through a floor-to-ceiling strut system, enabling ICU and anaesthesia room upgrades in buildings where ceiling mounting is not feasible.",
    overview:
      "VEGAcare is the ideal solution for ICU, anaesthesia, and critical care environments in existing buildings where ceiling structure does not permit direct pendant mounting. The floor-to-ceiling strut design provides rigid, stable support for all media services вЂ” gas, electrical, data, and accessories вЂ” without any ceiling modification, making it the preferred choice for renovation projects and structurally constrained installations.",
    highlights: [
      "No ceiling modification required вЂ” ideal for renovation projects.",
      "Full pendant gas, electrical, and data media provision via strut mount.",
      "Suitable for ICU, anaesthesia, and critical care environments.",
      "Stable, vibration-resistant strut construction for clinical loads.",
    ],
    capabilityItems: [
      {
        title: "Ceiling-independent installation",
        description:
          "Floor-to-ceiling tension mount provides a stable pendant alternative in rooms where ceiling construction precludes direct pendant fixings.",
      },
      {
        title: "Complete media provision",
        description:
          "All standard gas, electrical, data, and equipotential connections are available through the VEGAcare column system.",
      },
      {
        title: "Accessory compatibility",
        description:
          "Supports standard INMED medical rails, shelves, IV poles, and monitor mounting accessories.",
      },
      {
        title: "Renovation-ready design",
        description:
          "Designed specifically for retrofit into existing ward and ICU environments without structural modification.",
      },
    ],
    deploymentItems: [
      {
        title: "ICU renovation without ceiling work",
        description:
          "Upgrades existing ICU bedspaces with full pendant media access when ceiling construction does not allow for traditional pendant installation.",
      },
      {
        title: "Anaesthesia room upgrades",
        description:
          "Provides overhead gas and media access in anaesthesia induction and recovery rooms in older hospital buildings.",
      },
      {
        title: "Temporary and modular care setups",
        description:
          "Suitable for overflow critical care areas, temporary ICU expansions, and modular care environments requiring flexible installation.",
      },
    ],
    valuePoints: [
      "Eliminates costly structural ceiling work in renovation projects.",
      "Enables ICU media infrastructure upgrades in legacy buildings.",
      "Comparable functionality to ceiling-mounted pendants.",
      "Fully removable and redeployable for adaptable care environments.",
    ],
    heroImages: {
      main: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "VEGAcare strut unit in ICU environment" },
      secondary1: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "VEGAcare floor-to-ceiling mount detail" },
      secondary2: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "VEGAcare in renovated ICU bay" },
    },
    deploymentImages: [
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "VEGAcare in ICU renovation" },
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "VEGAcare in anaesthesia room" },
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "VEGAcare in modular care area" },
    ],
  },
  {
    slug: "caro-classic",
    name: "CAROclassic",
    shortDescription: "ICU ceiling beam with solid robust body вЂ” no sliding gliders or service heads, maximum reliability and easy cleaning.",
    cardImage: "/images/products/icu-infrastructure/shared/hero-main.jpg",
    heroTitle: "Robust ICU ceiling beam engineered for maximum reliability and ease of hygiene",
    heroSubtitle:
      "CAROclassic provides a fixed, solid-body ceiling beam for intensive care units, eliminating sliding components and service heads to maximize reliability and simplify cleaning protocols.",
    overview:
      "CAROclassic is designed for intensive care units where reliability and infection control are the primary system requirements. Its solid, robust body contains no sliding gliders or service heads вЂ” the components most subject to wear and contamination in conventional beam systems. This architecture maximizes system uptime, simplifies daily cleaning, and reduces long-term maintenance costs in demanding ICU environments.",
    highlights: [
      "Solid body вЂ” no sliding gliders or service heads for maximum reliability.",
      "Simplified hygiene: smooth surfaces support ICU cleaning protocols.",
      "Fixed gas, electrical, and media connections along the beam length.",
      "Robust construction rated for continuous ICU operation.",
    ],
    capabilityItems: [
      {
        title: "Reliability-first architecture",
        description:
          "Elimination of sliding components and service heads removes the most common failure points in ceiling beam systems, maximizing clinical uptime.",
      },
      {
        title: "Hygiene-optimized surfaces",
        description:
          "Smooth, continuous beam body without joints or sliding tracks provides surfaces that are easy to wipe-clean with standard ICU disinfectants.",
      },
      {
        title: "Fixed media provision",
        description:
          "Gas, electrical, and data outlets are positioned at fixed points along the beam length, configured during installation for the ICU bedspace layout.",
      },
      {
        title: "High-load capacity",
        description:
          "Robust body construction supports the equipment loads typical in high-acuity ICU environments.",
      },
    ],
    deploymentItems: [
      {
        title: "Standard ICU bay installations",
        description:
          "Spans ICU bed positions to deliver all required media in a reliable overhead system without floor-level obstructions.",
      },
      {
        title: "Infection-sensitive care areas",
        description:
          "Preferred in isolation rooms, NICU, and oncology ICU where cleaning efficiency and surface hygiene are critical.",
      },
      {
        title: "High-throughput critical care",
        description:
          "Minimized maintenance requirements support continuous operation in busy ICU environments with high bed occupancy.",
      },
    ],
    valuePoints: [
      "Lower maintenance cost due to elimination of wear-prone sliding components.",
      "Faster cleaning cycles between patient admissions.",
      "Maximizes system uptime in high-acuity care environments.",
      "Preferred choice for infection-sensitive ICU specifications.",
    ],
    heroImages: {
      main: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "CAROclassic ceiling beam in ICU" },
      secondary1: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "CAROclassic beam body detail" },
      secondary2: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "CAROclassic in critical care bay" },
    },
    deploymentImages: [
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "CAROclassic in standard ICU" },
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "CAROclassic in isolation ICU" },
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "CAROclassic in high-throughput ICU" },
    ],
  },
  {
    slug: "caro-care-premium",
    name: "CAROcare-premium",
    shortDescription: "Advanced ICU ceiling beam with sliding gliders and medical rails for flexible, ergonomic equipment arrangement.",
    cardImage: "/images/products/icu-infrastructure/shared/hero-main.jpg",
    heroTitle: "Advanced ICU ceiling beam with sliding gliders for flexible equipment positioning",
    heroSubtitle:
      "CAROcare-premium adds sliding gliders and medical rails to the ICU beam concept, enabling ergonomic repositioning of all connected equipment, media outlets, and monitoring accessories.",
    overview:
      "CAROcare-premium represents the premium tier of the CARO ICU ceiling beam family. Sliding gliders and integrated medical rails allow nurses and clinicians to reposition equipment, monitors, infusion systems, and accessories along the beam length, adapting the bedspace configuration to each patient's clinical needs and care activities. The result is a highly ergonomic, flexible ICU environment that supports both routine care and intensive interventions.",
    highlights: [
      "Sliding gliders enable repositioning of equipment along the beam length.",
      "Integrated medical rails support monitors, pumps, and accessories.",
      "Flexible configuration adapts to different patients and care activities.",
      "Maintains full gas, electrical, and data provision throughout travel range.",
    ],
    capabilityItems: [
      {
        title: "Sliding glider system",
        description:
          "Gliders travel along the full beam length, allowing monitors, infusion pumps, and accessory brackets to be positioned precisely for each care activity.",
      },
      {
        title: "Medical rail integration",
        description:
          "DIN-standard medical rails on the beam body accept a wide range of clinical accessories including IV poles, monitor arms, storage baskets, and lighting.",
      },
      {
        title: "Dynamic media access",
        description:
          "Gas, electrical, and data outlets on glider-mounted service heads travel with the equipment to maintain connections during repositioning.",
      },
      {
        title: "Care-activity adaptability",
        description:
          "Beam configuration can be quickly changed between routine monitoring, nursing procedures, physician rounds, and emergency interventions.",
      },
    ],
    deploymentItems: [
      {
        title: "High-acuity ICU bays",
        description:
          "Provides maximum bedspace flexibility for critically ill patients requiring frequent equipment reconfiguration and multi-discipline interventions.",
      },
      {
        title: "NICU and specialist ICU",
        description:
          "Sliding configuration supports specialized care activities in neonatal, cardiac, and neurosurgical intensive care environments.",
      },
      {
        title: "Mixed-acuity ICU environments",
        description:
          "Adapts to varying patient dependency levels without requiring fixed equipment layouts for each bedspace.",
      },
    ],
    valuePoints: [
      "Maximizes nursing workflow efficiency through repositionable equipment.",
      "Reduces time spent reconfiguring bedspaces between clinical activities.",
      "Supports both standard and emergency care configurations from one system.",
      "Compatible with INMED accessory ecosystem for comprehensive bedspace specification.",
    ],
    heroImages: {
      main: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "CAROcare-premium beam in advanced ICU" },
      secondary1: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "CAROcare-premium sliding glider detail" },
      secondary2: { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "CAROcare-premium configured ICU bay" },
    },
    deploymentImages: [
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "CAROcare-premium in high-acuity ICU" },
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "CAROcare-premium in NICU" },
      { src: "/images/products/icu-infrastructure/shared/hero-main.jpg", alt: "CAROcare-premium in mixed-acuity ICU" },
    ],
  },
]

// в”Ђв”Ђв”Ђ Bed Head Units в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ

export const bedHeadUnitProducts: IcuInfrastructureProduct[] = [
  {
    slug: "mery-classic",
    name: "MERYclassic",
    shortDescription: "The original MERY bed head unit integrating medical gas, electrical, and lighting systems in a modular design.",
    cardImage: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg",
    heroTitle: "The original MERY вЂ” modular bed head unit for hospitals and clinics",
    heroSubtitle:
      "MERYclassic is the most established model in the MERY family, providing a reliable combination of medical gas, electrical, and integrated lighting for hospital ward bedspaces.",
    overview:
      "MERYclassic is the foundation of the INMED MERY bed head unit family and the most widely deployed model across hospital wards and clinics. Its modular architecture integrates medical gas outlets, electrical sockets, equipotential connections, and overhead lighting in a single bed head unit, creating an organized, accessible bedspace media station. The proven design supports easy installation, system expansion, and long-term maintenance.",
    highlights: [
      "Established modular design with decades of hospital deployment.",
      "Integrates gas, electrical, lighting, and equipotential in one unit.",
      "Wide accessory range: medical rails, shelves, IV poles, baskets.",
      "Easy installation and maintenance with standard INMED components.",
    ],
    capabilityItems: [
      {
        title: "Integrated media provision",
        description:
          "Medical gas outlets, electrical sockets, equipotential connections, and lighting are combined in a single modular unit at the bedside.",
      },
      {
        title: "Modular architecture",
        description:
          "Module-based construction allows gas, electrical, and accessory configurations to be specified for each ward type and installation.",
      },
      {
        title: "Comprehensive accessory system",
        description:
          "Standard medical rails, shelves, IV poles, bedside lighting, and monitor mounting accessories attach directly to the MERY body.",
      },
      {
        title: "Proven clinical reliability",
        description:
          "MERYclassic has been validated across thousands of hospital installations with a proven track record of performance and ease of service.",
      },
    ],
    deploymentItems: [
      {
        title: "Standard hospital wards",
        description:
          "Provides all bedside media in general medical and surgical wards, replacing cable management systems with a clean overhead unit.",
      },
      {
        title: "Post-operative care units",
        description:
          "Supports recovery monitoring and media access in the immediate post-operative environment.",
      },
      {
        title: "Outpatient and day procedure rooms",
        description:
          "Compact media provision for procedure room beds and treatment areas in outpatient settings.",
      },
    ],
    valuePoints: [
      "Eliminates floor and wall cable management at the bedside.",
      "Easy to specify, install, and expand with additional modules.",
      "Compatible with the full INMED accessory ecosystem.",
      "Long service life with accessible component maintenance.",
    ],
    heroImages: {
      main: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYclassic bed head unit in hospital ward" },
      secondary1: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYclassic gas and electrical outlets detail" },
      secondary2: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYclassic with accessories in ward room" },
    },
    deploymentImages: [
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYclassic in standard ward" },
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYclassic in post-operative unit" },
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYclassic in day procedure room" },
    ],
  },
  {
    slug: "mery-care",
    name: "MERYcare",
    shortDescription: "Advanced ICU/NICU bed head unit in horizontal and vertical configurations вЂ” high quality, functionality, and ergonomics for critical care.",
    cardImage: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg",
    heroTitle: "Advanced ICU and NICU bed head unit for critical care environments",
    heroSubtitle:
      "MERYcare is engineered for high-dependency care, providing doubled gas outlets, advanced media integration, and ergonomic access in both horizontal and vertical configurations for ICU and NICU bedspaces.",
    overview:
      "MERYcare is the ICU-focused model of the MERY family, designed for high-acuity patient care environments where rapid, reliable access to gas, electrical, and monitoring connections is critical. Available in both horizontal and vertical mounting configurations, MERYcare accommodates the spatial and clinical requirements of adult ICU, NICU, and high-dependency units. Doubled gas outlets, enhanced electrical provision, and a comprehensive accessory range support the complex equipment configurations typical of critical care bedspaces.",
    highlights: [
      "Horizontal and vertical configuration options for ICU and NICU layouts.",
      "Enhanced gas outlet provision for critical care equipment density.",
      "High-ergonomic design for fast, precise clinical access.",
      "Compatible with full range of ICU bedspace accessories.",
    ],
    capabilityItems: [
      {
        title: "Dual configuration availability",
        description:
          "Available in horizontal or vertical mounting orientation to accommodate different ICU room layouts, ceiling heights, and bedspace configurations.",
      },
      {
        title: "Enhanced critical care media",
        description:
          "Gas outlet provision and electrical socket density match the high-demand requirements of ICU and NICU bedspaces with multiple concurrent devices.",
      },
      {
        title: "Ergonomic clinical access",
        description:
          "Outlet and socket positioning is optimized for rapid access during clinical interventions and routine nursing care activities.",
      },
      {
        title: "ICU accessory integration",
        description:
          "Full range of medical rails, monitor arms, infusion pump rails, and lighting accessories adapt the unit to each patient's care requirements.",
      },
    ],
    deploymentItems: [
      {
        title: "Adult ICU bedspaces",
        description:
          "Provides complete media infrastructure for high-acuity adult critical care with equipment density typical of level-3 intensive care.",
      },
      {
        title: "Neonatal ICU (NICU)",
        description:
          "Vertical configuration and precise outlet positioning support the specialized equipment requirements of neonatal critical care environments.",
      },
      {
        title: "High-dependency units",
        description:
          "Supports step-down and high-dependency care environments requiring ICU-grade media provision at lower staffing ratios.",
      },
    ],
    valuePoints: [
      "Dual orientation options maximize spatial adaptability across ICU types.",
      "Supports full critical care equipment arrays at each bedspace.",
      "Designed for the ergonomic demands of intensive nursing care.",
      "INMED quality construction for sustained critical care operation.",
    ],
    heroImages: {
      main: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYcare in advanced ICU environment" },
      secondary1: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYcare horizontal and vertical configuration" },
      secondary2: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYcare in NICU bedspace" },
    },
    deploymentImages: [
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYcare in adult ICU" },
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYcare in NICU" },
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYcare in high-dependency unit" },
    ],
  },
  {
    slug: "mery-care-classic",
    name: "MERYcare-classic",
    shortDescription: "ICU bed head unit with doubled gas outlets, additional electrical sockets, and full accessory range including rails, shelves, and IV poles.",
    cardImage: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg",
    heroTitle: "ICU bed head unit with doubled gas provision and full accessory integration",
    heroSubtitle:
      "MERYcare-classic extends the MERY platform with doubled gas outlets, additional electrical and equipotential sockets, and a comprehensive accessory ecosystem for demanding critical care environments.",
    overview:
      "MERYcare-classic combines the structural reliability of MERYclassic with the enhanced media provision required for ICU bedspaces. Doubled gas outlets ensure simultaneous connection of all critical care gas-driven devices; additional electrical and equipotential sockets accommodate the equipment density of level-2 and level-3 critical care. The full MERY accessory range вЂ” medical rails, trays, shelves, IV poles, and baskets вЂ” integrates directly with the unit body.",
    highlights: [
      "Doubled gas outlets for simultaneous critical care device connection.",
      "Additional electrical and equipotential sockets for ICU equipment density.",
      "Full MERY accessory range: rails, trays, shelves, IV poles, baskets.",
      "Modular architecture for flexible ICU bedspace specification.",
    ],
    capabilityItems: [
      {
        title: "Doubled gas outlet provision",
        description:
          "Two gas outlets per service вЂ” oxygen, air, vacuum вЂ” ensure all critical care devices can be simultaneously connected without adaptor multipliers.",
      },
      {
        title: "Enhanced electrical provision",
        description:
          "Additional standard and equipotential sockets support the high electrical demand of ICU bedspaces with multiple monitors and therapeutic devices.",
      },
      {
        title: "Comprehensive accessory system",
        description:
          "Medical rails at the top and bottom of the unit accept IV poles, storage baskets, infusion pump rails, and bedside lighting arms.",
      },
      {
        title: "Modular media configuration",
        description:
          "Gas, electrical, and data module positions are configurable at specification stage to match each ward's media infrastructure and clinical workflow.",
      },
    ],
    deploymentItems: [
      {
        title: "General ICU wards",
        description:
          "Complete media provision for mixed-diagnosis ICU bedspaces with high concurrent equipment loading.",
      },
      {
        title: "Post-surgical intensive care",
        description:
          "Supports the immediate post-operative period with all required monitoring, ventilation, and infusion device connections.",
      },
      {
        title: "Coronary and cardiac care units",
        description:
          "Accommodates the specialized device requirements of cardiac ICU environments with full gas and electrical provision.",
      },
    ],
    valuePoints: [
      "Eliminates gas adaptor multipliers at critical care bedspaces.",
      "Comprehensive accessory system adapts to each patient's needs.",
      "Modular configuration reduces specification complexity.",
      "Proven INMED quality for long-term ICU operation.",
    ],
    heroImages: {
      main: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYcare-classic in ICU bedspace" },
      secondary1: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYcare-classic doubled gas outlets" },
      secondary2: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYcare-classic with accessories in ICU" },
    },
    deploymentImages: [
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYcare-classic in general ICU" },
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYcare-classic in post-surgical ICU" },
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYcare-classic in cardiac care unit" },
    ],
  },
  {
    slug: "mery-light",
    name: "MERYlight",
    shortDescription: "Ultra-slim and lightweight bed head unit with 9 aluminium profile types for comprehensive gas, electrical, IT, and lighting configuration.",
    cardImage: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg",
    heroTitle: "Ultra-slim bed head unit for modern hospital room design",
    heroSubtitle:
      "MERYlight delivers complete bedside media infrastructure in an ultra-slim aluminium profile, enabling comprehensive gas, electrical, IT, and lighting integration with a minimal visual footprint.",
    overview:
      "MERYlight is designed for modern hospital refurbishment and new-build projects where room aesthetics and compact bedside design are important alongside full clinical functionality. Nine aluminium profile types allow MERYlight installations to be precisely configured for any combination of medical gas, electrical, data, IT, and lighting requirements, while the ultra-slim form factor reduces the visual mass of the bed head unit in the room.",
    highlights: [
      "Ultra-slim design for contemporary hospital room aesthetics.",
      "9 aluminium profile types for comprehensive media configuration.",
      "Comprehensive gas, electrical, IT, and lighting options.",
      "Lightweight construction for simplified installation and retrofitting.",
    ],
    capabilityItems: [
      {
        title: "Ultra-slim profile system",
        description:
          "Nine aluminium profile types enable precise combination of gas, electrical, data, IT, and lighting sections in a minimal depth cross-section.",
      },
      {
        title: "Complete media coverage",
        description:
          "All medical gas types, electrical sockets, equipotential connections, data and IT ports, nurse call, and integrated lighting are available within the slim profile.",
      },
      {
        title: "Aesthetic design language",
        description:
          "Clean aluminium surfaces, concealed cable management, and minimal visible hardware align with modern ward interior design standards.",
      },
      {
        title: "Lightweight installation",
        description:
          "Reduced unit weight simplifies installation in refurbishment projects where wall loading and installation access are limited.",
      },
    ],
    deploymentItems: [
      {
        title: "New-build private hospitals",
        description:
          "Preferred specification for premium private hospital projects where room design and patient environment quality are key objectives.",
      },
      {
        title: "General ward refurbishment",
        description:
          "Lightweight, slim profile simplifies installation during ward refurbishment with minimal disruption to adjacent occupied spaces.",
      },
      {
        title: "Specialist outpatient facilities",
        description:
          "Provides full clinical media infrastructure in a design-conscious format suitable for patient-facing specialist care environments.",
      },
    ],
    valuePoints: [
      "Reduces visual clutter at the bedside for a calmer patient environment.",
      "Comprehensive media coverage without compromise on clinical functionality.",
      "Simplified installation reduces refurbishment programme time.",
      "9 profile types provide maximum specification flexibility.",
    ],
    heroImages: {
      main: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYlight in modern hospital room" },
      secondary1: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYlight slim profile detail" },
      secondary2: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYlight aluminium profile options" },
    },
    deploymentImages: [
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYlight in private hospital" },
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYlight in ward refurbishment" },
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYlight in specialist outpatient" },
    ],
  },
  {
    slug: "mery-edge",
    name: "MERYedge",
    shortDescription: "Modern bed head unit with elegant brushed aluminium front вЂ” ergonomic media access with contemporary ward aesthetics.",
    cardImage: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg",
    heroTitle: "Contemporary bed head unit with brushed aluminium front and ergonomic media access",
    heroSubtitle:
      "MERYedge combines ergonomic access to all bedside media with a distinctive brushed aluminium front face, delivering a premium aesthetic for modern hospital wards and private patient rooms.",
    overview:
      "MERYedge is designed for healthcare facilities that prioritize both clinical function and ward environment quality. The brushed aluminium front panel creates a distinctive contemporary visual, while the underlying MERY media architecture delivers full gas, electrical, data, and lighting provision with the ergonomic outlet positioning characteristic of the MERY family. MERYedge is particularly suited to private patient rooms, premium ward upgrades, and specialist care environments.",
    highlights: [
      "Brushed aluminium front for contemporary ward aesthetics.",
      "Ergonomic outlet and socket positioning for clinical access.",
      "Full gas, electrical, data, and lighting integration.",
      "Premium finish for private and specialist care environments.",
    ],
    capabilityItems: [
      {
        title: "Brushed aluminium surface",
        description:
          "High-quality anodized aluminium front combines durability with a premium aesthetic that complements contemporary ward interior design.",
      },
      {
        title: "Ergonomic media layout",
        description:
          "Outlet and socket positions are optimized for rapid access during both routine care and clinical procedures.",
      },
      {
        title: "Complete media provision",
        description:
          "Full MERY gas, electrical, data, IT, and integrated lighting functionality is available within the MERYedge design language.",
      },
      {
        title: "Premium environment compatibility",
        description:
          "Surface quality and visual design are appropriate for private hospital, premium ward, and specialist care environments with high interior standards.",
      },
    ],
    deploymentItems: [
      {
        title: "Private patient rooms",
        description:
          "Premium surface quality and clean design align with the higher interior specification of private patient accommodation.",
      },
      {
        title: "Premium ward upgrades",
        description:
          "Replaces standard bed head units in ward refurbishment projects targeting a premium patient environment standard.",
      },
      {
        title: "Specialist and VIP care suites",
        description:
          "Appropriate for high-end specialist care suites, maternity rooms, and VIP patient accommodation.",
      },
    ],
    valuePoints: [
      "Enhances patient environment quality with premium surface design.",
      "Combines aesthetic value with full MERY clinical functionality.",
      "Supports premium facility positioning and patient experience.",
      "Durable aluminium surface withstands intensive clinical cleaning.",
    ],
    heroImages: {
      main: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYedge in premium hospital room" },
      secondary1: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYedge brushed aluminium front detail" },
      secondary2: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYedge in contemporary ward environment" },
    },
    deploymentImages: [
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYedge in private patient room" },
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYedge in premium ward upgrade" },
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYedge in VIP care suite" },
    ],
  },
  {
    slug: "mery-fun",
    name: "MERYfun",
    shortDescription: "Paediatric bed head unit with colourful CorianВ® graphic fronts, child-safe sockets, LED/AmbientLight, and full medical integration.",
    cardImage: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg",
    heroTitle: "Paediatric bed head unit with child-friendly design and full clinical functionality",
    heroSubtitle:
      "MERYfun creates a reassuring environment for young patients with vibrant CorianВ® graphic fronts and child-safe electrical sockets, while delivering complete medical gas, IT, and LED lighting integration.",
    overview:
      "MERYfun is designed for children's hospital wards, paediatric departments, and NICU environments where the physical space must support both clinical care and a child-friendly patient experience. Colourful CorianВ® graphic fronts can be customized with themed designs to reduce patient anxiety, while child-safe electrical sockets and LED/AmbientLight technology ensure the unit meets paediatric safety standards. All standard MERY medical gas, IT, and clinical accessory functions are fully available.",
    highlights: [
      "Colourful CorianВ® graphic fronts with customizable paediatric themes.",
      "Child-safe electrical sockets meeting paediatric safety standards.",
      "Integrated LED and AmbientLight for therapeutic room lighting.",
      "Full medical gas, electrical, and IT integration.",
    ],
    capabilityItems: [
      {
        title: "Customizable CorianВ® graphic fronts",
        description:
          "CorianВ® front panels accept full-colour graphic printing with thematic designs that reduce paediatric patient anxiety and support age-appropriate environments.",
      },
      {
        title: "Child-safe electrical safety",
        description:
          "Electrical sockets comply with paediatric safety standards, with additional protective measures appropriate for children's ward environments.",
      },
      {
        title: "LED and AmbientLight integration",
        description:
          "Integrated overhead LED and programmable AmbientLight systems support circadian rhythms and therapeutic lighting for young patients.",
      },
      {
        title: "Full MERY media provision",
        description:
          "Complete medical gas, electrical, data, and IT connectivity is available within the MERYfun platform without clinical compromise.",
      },
    ],
    deploymentItems: [
      {
        title: "Children's hospital wards",
        description:
          "Graphic front customization and child-friendly design support positive patient environment standards in paediatric general wards.",
      },
      {
        title: "Paediatric intensive care (PICU)",
        description:
          "Full ICU-grade media provision combined with a non-clinical aesthetic reduces patient and family anxiety in paediatric critical care.",
      },
      {
        title: "Neonatal units and maternity",
        description:
          "AmbientLight and LED features support developmental care lighting in neonatal and maternity ward environments.",
      },
    ],
    valuePoints: [
      "Reduces patient anxiety through age-appropriate environment design.",
      "Supports paediatric safety standards with child-safe electrical fittings.",
      "Customizable themes available for different ward types and patient ages.",
      "Full clinical functionality maintained within child-friendly design.",
    ],
    heroImages: {
      main: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYfun in paediatric ward" },
      secondary1: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYfun Corian graphic front detail" },
      secondary2: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYfun with LED ambient light in children's room" },
    },
    deploymentImages: [
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYfun in children's hospital ward" },
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYfun in PICU" },
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYfun in neonatal unit" },
    ],
  },
  {
    slug: "mery-art",
    name: "MERYart",
    shortDescription: "Premium bed head unit with CorianВ® or tempered glass fronts вЂ” full clinical functionality with high-end design for premium healthcare.",
    cardImage: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg",
    heroTitle: "Premium bed head unit for high-end healthcare environments",
    heroSubtitle:
      "MERYart merges complete MERY clinical functionality with CorianВ® or tempered glass front surfaces, creating a premium bedside aesthetic for private hospitals, VIP suites, and luxury healthcare facilities.",
    overview:
      "MERYart is the premium tier of the MERY bed head unit range, designed for healthcare facilities where the patient environment represents a core part of the service proposition. CorianВ® or tempered glass front panels create a distinctive, high-quality aesthetic that aligns with luxury hotel-standard patient rooms, while the underlying MERY architecture maintains full medical gas, electrical, IT, and lighting functionality without compromise. Custom colours and finishes are available to match interior design specifications.",
    highlights: [
      "CorianВ® or tempered glass front options for premium interior integration.",
      "Custom colours and finishes available to specification.",
      "Complete MERY clinical functionality maintained within premium design.",
      "Appropriate for private hospitals, VIP suites, and luxury healthcare.",
    ],
    capabilityItems: [
      {
        title: "Premium surface materials",
        description:
          "CorianВ® or tempered glass fronts provide a high-quality surface appropriate for luxury healthcare environments, available in custom colours and finishes.",
      },
      {
        title: "Custom design integration",
        description:
          "Finish specifications can be coordinated with interior design consultants and architects for seamless integration into premium room schemes.",
      },
      {
        title: "Full clinical provision",
        description:
          "All MERY medical gas, electrical, data, IT, equipotential, and lighting functions are maintained within the premium design language.",
      },
      {
        title: "Durable luxury materials",
        description:
          "CorianВ® and tempered glass surfaces withstand intensive hospital cleaning and disinfection protocols while retaining their premium appearance.",
      },
    ],
    deploymentItems: [
      {
        title: "VIP and private patient suites",
        description:
          "Premium surface quality and custom finishes align with the highest patient accommodation standards in private healthcare.",
      },
      {
        title: "Luxury healthcare facilities",
        description:
          "Suitable for wellness hospitals, rehabilitation centres, and premium healthcare environments where design quality is a differentiating factor.",
      },
      {
        title: "High-profile public hospital upgrades",
        description:
          "Provides a premium bedside environment for flagship wards and specialist units in public hospital modernization programs.",
      },
    ],
    valuePoints: [
      "Communicates quality and investment in patient care through premium design.",
      "Customizable to any interior design specification.",
      "Luxury surface quality does not compromise clinical media provision.",
      "Durable materials maintain appearance over the unit's service life.",
    ],
    heroImages: {
      main: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYart in premium private hospital room" },
      secondary1: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYart Corian and glass front options" },
      secondary2: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYart in VIP patient suite" },
    },
    deploymentImages: [
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYart in VIP suite" },
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYart in luxury healthcare facility" },
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYart in premium hospital upgrade" },
    ],
  },
  {
    slug: "mery-comfort",
    name: "MERYcomfort",
    shortDescription: "Patient-comfort focused bed head unit with CorianВ® finish, dedicated patient and staff zones, integrated media, and multi-zone lighting.",
    cardImage: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg",
    heroTitle: "Patient-comfort oriented bed head unit with zoned design for patient and clinical staff",
    heroSubtitle:
      "MERYcomfort organizes the bedside space into dedicated patient and clinical staff zones, integrating entertainment media, multi-zone lighting, and full medical infrastructure for a superior patient experience.",
    overview:
      "MERYcomfort is designed around the needs of the patient as well as the clinical team. The unit is organized into clearly defined patient and staff zones, with integrated media systems including television, internet connectivity, and nurse call, combined with multi-zone lighting that supports both clinical procedures and patient rest. The CorianВ® surface finish provides a premium aesthetic while maintaining the practical durability required in a hospital environment.",
    highlights: [
      "Dedicated patient and clinical staff zones for organized bedside access.",
      "Integrated media: TV, internet, nurse call, and entertainment systems.",
      "Multi-zone lighting for clinical procedures and patient comfort.",
      "CorianВ® surface finish combining premium aesthetics with durability.",
    ],
    capabilityItems: [
      {
        title: "Zoned bedside design",
        description:
          "Patient zone provides accessible entertainment and communication interfaces; staff zone organizes all clinical media connections for efficient care delivery.",
      },
      {
        title: "Integrated media systems",
        description:
          "Television, internet connectivity, nurse call, and patient entertainment systems are built into the unit structure, eliminating separate bedside devices.",
      },
      {
        title: "Multi-zone lighting",
        description:
          "Separate clinical and ambient lighting zones allow procedure-quality illumination without disturbing resting patients or adjacent beds.",
      },
      {
        title: "CorianВ® surface quality",
        description:
          "Premium CorianВ® surfaces provide the aesthetic quality and chemical resistance required for long-term hospital use.",
      },
    ],
    deploymentItems: [
      {
        title: "Private and amenity patient rooms",
        description:
          "Comprehensive media and comfort features support premium single and amenity room specifications in both NHS and private hospital environments.",
      },
      {
        title: "Long-stay ward environments",
        description:
          "Patient media integration and comfort lighting benefit patients with extended hospital stays where quality of environment affects recovery experience.",
      },
      {
        title: "Rehabilitation and specialist wards",
        description:
          "Entertainment and comfort features support patient wellbeing during rehabilitation programmes and specialist care pathways.",
      },
    ],
    valuePoints: [
      "Improves patient experience through integrated entertainment and comfort features.",
      "Organized zone design supports efficient nursing workflow at the bedside.",
      "Multi-zone lighting reduces clinical disruption to patient rest cycles.",
      "Premium CorianВ® finish enhances room environment quality.",
    ],
    heroImages: {
      main: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYcomfort in private patient room" },
      secondary1: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYcomfort patient zone with media integration" },
      secondary2: { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYcomfort multi-zone lighting in use" },
    },
    deploymentImages: [
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYcomfort in private room" },
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYcomfort in long-stay ward" },
      { src: "/images/products/icu-infrastructure/shared/hero-secondary-2.jpg", alt: "MERYcomfort in rehabilitation ward" },
    ],
  },
]

// в”Ђв”Ђв”Ђ Helpers в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ

export function getCeilingPendantBySlug(slug: string) {
  return ceilingPendantProducts.find((item) => item.slug === slug)
}

export function getBedHeadUnitBySlug(slug: string) {
  return bedHeadUnitProducts.find((item) => item.slug === slug)
}
