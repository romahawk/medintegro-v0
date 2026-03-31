export interface MedicalGasProduct {
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

export const medicalGasProducts: MedicalGasProduct[] = [
  {
    slug: "gas-sources",
    name: "Medical Gas Sources",
    shortDescription:
      "Central medical gas plants including oxygen, vacuum, medical air, and cylinder manifold systems for healthcare facilities.",
    cardImage: "/images/products/medical-gases/shared/hero-main.jpg",
    heroTitle: "Central medical gas generation and supply systems",
    heroSubtitle:
      "From oxygen cylinder manifolds and cryogenic liquid oxygen plants to medical vacuum systems and compressed air plants, we supply the complete range of compliant medical gas source equipment for hospitals and clinics.",
    overview:
      "Medical gas sources are the foundation of a hospital's gas infrastructure, providing the primary supply of oxygen, medical air, nitrous oxide, carbon dioxide, and surgical vacuum to every point of care in the facility. Our portfolio covers all source technologies - cylinder manifold systems for smaller facilities, cryogenic liquid oxygen plants for high-demand hospitals, multi-pump vacuum plants with antibacterial filtration, and medical air compressor systems. Every system is compliant with EN ISO 7396-1 and relevant national standards, designed for reliable continuous operation and ease of maintenance.",
    highlights: [
      "Full range: cylinder manifolds, cryogenic O2 plants, vacuum plants, medical air plants.",
      "Central oxygen reduction stations for cylinder and bulk liquid supply.",
      "Medical vacuum plants with minimum 3 pumps, tanks, and antibacterial filters.",
      "All systems compliant with EN ISO 7396-1 and healthcare facility standards.",
    ],
    capabilityItems: [
      {
        title: "Medical oxygen supply systems",
        description:
          "Cylinder manifold systems, cryogenic liquid oxygen (LOX) storage plants, and central oxygen reduction stations providing reliable primary O2 supply at all demand levels.",
      },
      {
        title: "Medical vacuum plants",
        description:
          "Multi-pump vacuum systems (minimum 3 pumps) with storage tanks, antibacterial filters, and control panels - designed for N+1 redundancy to maintain continuous vacuum supply.",
      },
      {
        title: "Medical air compressor plants",
        description:
          "Oil-free compressor systems for medical air Grade 4.0 supply, with redundant compressors, dryers, filtration stages, and monitoring panels per EN ISO 7396-1.",
      },
      {
        title: "Cylinder connectors and reduction stations",
        description:
          "Cylinder connectors for connecting gas cylinders to central reduction units, and reduction stations for nitrous oxide, CO2, and other medical gases requiring secondary source systems.",
      },
    ],
    deploymentItems: [
      {
        title: "New hospital builds",
        description:
          "Complete medical gas source systems specified and installed as part of new hospital infrastructure, including plant room design, equipment selection, and commissioning.",
      },
      {
        title: "Hospital capacity upgrades",
        description:
          "Additional vacuum pumps, LOX capacity expansion, or medical air compressor upgrades to meet increased patient volumes or new clinical departments.",
      },
      {
        title: "Replacement and modernization",
        description:
          "End-of-life plant replacement and modernization of legacy cylinder manifold systems with current-generation compliant equipment.",
      },
    ],
    valuePoints: [
      "N+1 redundancy in vacuum and air systems maintains supply during maintenance.",
      "Compliant with EN ISO 7396-1 for safe medical gas supply.",
      "Designed for ease of maintenance and service access.",
      "Supports all medical gas types used in hospital environments.",
    ],
    heroImages: {
      main: { src: "/images/products/medical-gases/shared/hero-main.jpg", alt: "Medical gas plant room with oxygen and vacuum systems" },
      secondary1: { src: "/images/products/medical-gases/shared/hero-main.jpg", alt: "Cryogenic LOX tank and vaporizer installation" },
      secondary2: { src: "/images/products/medical-gases/shared/hero-main.jpg", alt: "Medical air compressor plant with monitoring panel" },
    },
    deploymentImages: [
      { src: "/images/products/medical-gases/shared/hero-main.jpg", alt: "Medical gas plant in new hospital build" },
      { src: "/images/products/medical-gases/shared/hero-main.jpg", alt: "Vacuum plant upgrade for increased capacity" },
      { src: "/images/products/medical-gases/shared/hero-main.jpg", alt: "Cylinder manifold replacement program" },
    ],
  },
  {
    slug: "pipeline-distribution",
    name: "Medical Gas Pipeline Distribution Systems",
    shortDescription:
      "Complete copper pipeline networks connecting gas sources to every point of care across operating rooms, ICU, and ward areas.",
    cardImage: "/images/products/medical-gases/shared/hero-main.jpg",
    heroTitle: "Medical gas pipeline networks from source to point of care",
    heroSubtitle:
      "We design, supply, and install medical-grade copper pipeline distribution systems that deliver all medical gases and vacuum safely and reliably to every clinical area in the facility - OR, ICU, wards, and outpatient rooms.",
    overview:
      "Medical gas pipeline distribution systems are the arterial network of a hospital's gas infrastructure, connecting central sources to the terminal outlet at every bed, operating table, and treatment point. Our systems use medical-grade copper pipework per EN ISO 7396-1, with full zone isolation, pressure testing, and validation before commissioning. We cover design, supply, installation, pressure testing, purging, identification, and handover documentation for complete pipeline projects in new builds, extensions, and renovation programs.",
    highlights: [
      "Medical-grade copper pipework to EN ISO 7396-1 standards.",
      "Full zone isolation design with area valve service units at each zone.",
      "Pressure testing, purging, and verification per relevant standards.",
      "Design, supply, installation, and documentation included.",
    ],
    capabilityItems: [
      {
        title: "Medical-grade copper pipeline",
        description:
          "Pipework manufactured from seamless medical-grade copper tube, internally cleaned and capped at manufacture, with brazed joints and appropriate support systems.",
      },
      {
        title: "Zone distribution design",
        description:
          "Pipeline layouts designed with zone-by-zone distribution to enable area isolation for maintenance without interrupting adjacent clinical areas.",
      },
      {
        title: "Installation and jointing",
        description:
          "All pipework installed by trained and certified medical gas installers using inert-gas-purged brazing techniques to prevent oxidation contamination.",
      },
      {
        title: "Testing and commissioning",
        description:
          "Complete pressure testing, purging with inert gas, cross-connection verification, outlet testing, and full handover documentation package.",
      },
    ],
    deploymentItems: [
      {
        title: "New hospital construction",
        description:
          "Full pipeline system from plant room to every outlet, coordinated with building structure, ceiling services, and AVSU positioning.",
      },
      {
        title: "Department extension or renovation",
        description:
          "Extending the existing pipeline network into new or renovated clinical areas, with tie-in to the existing system and zone isolation maintained throughout.",
      },
      {
        title: "Pipeline replacement programs",
        description:
          "Replacement of aging or non-compliant pipework in legacy hospital infrastructure, with minimal disruption to ongoing clinical operations.",
      },
    ],
    valuePoints: [
      "Fully designed and installed to EN ISO 7396-1 for compliance and patient safety.",
      "Zone isolation design protects adjacent areas during maintenance.",
      "Complete documentation package supports future maintenance and audit.",
      "Experienced installation team with medical gas certification.",
    ],
    heroImages: {
      main: { src: "/images/products/medical-gases/shared/hero-main.jpg", alt: "Medical gas copper pipeline distribution network" },
      secondary1: { src: "/images/products/medical-gases/shared/hero-main.jpg", alt: "Pipeline installation in ceiling services" },
      secondary2: { src: "/images/products/medical-gases/shared/hero-main.jpg", alt: "Pipeline distribution system in hospital corridor" },
    },
    deploymentImages: [
      { src: "/images/products/medical-gases/shared/hero-main.jpg", alt: "Pipeline installation in new hospital" },
      { src: "/images/products/medical-gases/shared/hero-main.jpg", alt: "Pipeline extension in renovated department" },
      { src: "/images/products/medical-gases/shared/hero-main.jpg", alt: "Legacy pipeline replacement program" },
    ],
  },
  {
    slug: "area-valve-service-units",
    name: "Area Valve Service Units",
    shortDescription:
      "Zone isolation valve boxes enabling controlled shutdown of individual clinical areas for maintenance without disrupting adjacent zones.",
    cardImage: "/images/products/medical-gases/shared/hero-main.jpg",
    heroTitle: "Zone isolation for safe maintenance without service disruption",
    heroSubtitle:
      "Area Valve Service Units (AVSUs) provide the critical zone isolation function in medical gas pipeline systems, allowing individual clinical areas to be safely isolated for maintenance while all other zones continue uninterrupted supply.",
    overview:
      "Area Valve Service Units are a mandatory component of EN ISO 7396-1 compliant medical gas pipeline systems. Each AVSU contains manual isolation valves for every gas and vacuum service passing through that zone, with clear labelling, pressure gauges, and lockable enclosures. Correct AVSU positioning and sizing during system design ensures that any zone in the hospital can be isolated for service or emergency without affecting patient care in adjacent areas. We supply, install, and commission AVSUs as part of complete pipeline projects or as standalone upgrades to existing systems.",
    highlights: [
      "Mandatory EN ISO 7396-1 zone isolation for compliant pipeline systems.",
      "Individual valves for all gas and vacuum services per zone.",
      "Integrated pressure gauges for immediate zone status visibility.",
      "Lockable enclosures with clear service and gas identification.",
    ],
    capabilityItems: [
      {
        title: "Multi-gas zone isolation",
        description:
          "Each AVSU contains individual isolation valves for all medical gas and vacuum services running through that zone - typically O2, N2O, CO2, medical air, and vacuum.",
      },
      {
        title: "Pressure monitoring at zone",
        description:
          "Integrated pressure gauges on each service provide immediate visual indication of zone pipeline pressure, supporting fault diagnosis and post-maintenance pressure verification.",
      },
      {
        title: "Safe lockout capability",
        description:
          "Lockable valve handles and enclosures support formal lockout/tagout procedures during planned maintenance to prevent inadvertent reopening.",
      },
      {
        title: "Clear identification and labelling",
        description:
          "All valves and pipework are colour-coded and labelled per EN ISO 7396-1 gas identification standards, reducing the risk of incorrect valve operation.",
      },
    ],
    deploymentItems: [
      {
        title: "Operating suite zone isolation",
        description:
          "AVSUs installed outside each OR suite to allow individual room isolation for equipment maintenance without affecting other operating rooms.",
      },
      {
        title: "ICU and ward zone isolation",
        description:
          "Zone-by-zone AVSU installation in ICU and ward areas allows bed bay and room maintenance without interrupting supply to occupied patient areas.",
      },
      {
        title: "Corridor and service risers",
        description:
          "Main distribution riser AVSUs control supply to entire floors or wings, supporting large-scale planned maintenance and emergency gas isolation.",
      },
    ],
    valuePoints: [
      "Enables safe planned maintenance without patient care interruption.",
      "Compliant with EN ISO 7396-1 zone isolation requirements.",
      "Reduces risk of cross-contamination and incorrect service isolation.",
      "Supports emergency gas shutdown procedures across clinical areas.",
    ],
    heroImages: {
      main: { src: "/images/products/medical-gases/shared/hero-main.jpg", alt: "Area Valve Service Unit box with multi-gas valves" },
      secondary1: { src: "/images/products/medical-gases/shared/hero-main.jpg", alt: "AVSU with pressure gauges and lockable enclosure" },
      secondary2: { src: "/images/products/medical-gases/shared/hero-main.jpg", alt: "AVSU installation in hospital corridor" },
    },
    deploymentImages: [
      { src: "/images/products/medical-gases/shared/hero-main.jpg", alt: "AVSU at OR suite entrance" },
      { src: "/images/products/medical-gases/shared/hero-main.jpg", alt: "AVSU in ICU zone" },
      { src: "/images/products/medical-gases/shared/hero-main.jpg", alt: "AVSU on main distribution riser" },
    ],
  },
  {
    slug: "monitoring-systems",
    name: "Medical Gas Monitoring Systems",
    shortDescription:
      "Alarm panels, pressure monitoring, and centralized gas management systems providing continuous visibility of medical gas pressure and status across all zones.",
    cardImage: "/images/products/medical-gases/shared/hero-secondary-2.jpg",
    heroTitle: "Continuous medical gas monitoring and alarm management",
    heroSubtitle:
      "Medical gas monitoring systems provide real-time pressure data, zone status, and fault alarming for every gas and vacuum service throughout the facility, ensuring rapid detection and response to supply disruptions.",
    overview:
      "Medical gas monitoring is a patient safety critical function required by EN ISO 7396-1. Monitoring systems continuously measure pipeline pressure at zone and area level, generate audible and visual alarms when pressures fall outside safe operating ranges, and report status to centralized management panels at nursing stations and in the hospital technical management centre. Our monitoring system portfolio ranges from local zone alarm panels to fully integrated hospital-wide gas management systems with data logging, trend analysis, and remote alarm notification.",
    highlights: [
      "Local area alarm panels for immediate bedside and zone pressure indication.",
      "Master alarm panels at nursing stations and control rooms.",
      "Centralized monitoring with data logging, trends, and remote notification.",
      "Covers all medical gas services: O2, medical air, vacuum, N2O, CO2.",
    ],
    capabilityItems: [
      {
        title: "Local area alarm panels",
        description:
          "Zone-level panels displaying pressure status for each gas service with audible and visual alarms triggered on high or low pressure deviation from setpoint.",
      },
      {
        title: "Master alarm systems",
        description:
          "Nursing station and switchboard master panels providing summary alarm status for all monitored zones, enabling rapid clinical and maintenance response.",
      },
      {
        title: "Centralized gas management",
        description:
          "Building management system (BMS) integrated or standalone gas management platforms with trend display, data logging, and remote email/SMS alarm notification.",
      },
      {
        title: "Source and plant monitoring",
        description:
          "Plant room monitoring of source equipment status, cylinder contents gauges, plant change-over indicators, and duty/standby equipment status.",
      },
    ],
    deploymentItems: [
      {
        title: "Operating theatre suites",
        description:
          "Local alarm panels in each OR with master alarm at the OR control desk, providing immediate pressure status for all active surgical gases.",
      },
      {
        title: "ICU and critical care",
        description:
          "Zone alarm panels at ICU nurse stations with escalation to central hospital monitoring for all critical care gas and vacuum services.",
      },
      {
        title: "Hospital-wide gas management",
        description:
          "Centralized monitoring platform covering all clinical floors and plant rooms, with data logging for compliance reporting and planned maintenance management.",
      },
    ],
    valuePoints: [
      "Immediate visual and audible alert on gas supply deviation.",
      "Centralized overview reduces response time to supply incidents.",
      "Data logging supports compliance documentation and audit.",
      "Scalable from single-zone panels to full hospital monitoring.",
    ],
    heroImages: {
      main: { src: "/images/products/medical-gases/shared/hero-secondary-2.jpg", alt: "Medical gas alarm panel displaying pressure status" },
      secondary1: { src: "/images/products/medical-gases/shared/hero-secondary-2.jpg", alt: "Master alarm panel at nursing station" },
      secondary2: { src: "/images/products/medical-gases/shared/hero-secondary-2.jpg", alt: "Centralized gas monitoring system display" },
    },
    deploymentImages: [
      { src: "/images/products/medical-gases/shared/hero-secondary-2.jpg", alt: "Gas alarm panel in operating theatre" },
      { src: "/images/products/medical-gases/shared/hero-secondary-2.jpg", alt: "Zone monitoring in ICU nurse station" },
      { src: "/images/products/medical-gases/shared/hero-secondary-2.jpg", alt: "Hospital-wide gas management platform" },
    ],
  },
  {
    slug: "gas-outlets",
    name: "Medical Gas Outlets",
    shortDescription:
      "Terminal units for oxygen, medical air, vacuum, N2O, and CO2 at points of care in operating rooms, ICU, and ward environments.",
    cardImage: "/images/products/medical-gases/shared/hero-secondary-2.jpg",
    heroTitle: "Medical gas terminal units for safe and reliable point-of-care connection",
    heroSubtitle:
      "Medical gas outlets are the final delivery point of the pipeline system, providing gas-specific connections for clinical equipment at every bed, operating table, treatment space, and procedure room.",
    overview:
      "Medical gas outlets (terminal units) are the interface between the hospital's pipeline infrastructure and the clinical equipment - anaesthesia machines, ventilators, infusion pumps, and suction devices - that depend on a continuous, reliable gas supply. Our outlet range covers all international standard probe types (NIST, Schraeder/DISS, and NF standards) in all medical gas services, in wall-mounted, ceiling-mounted, pendant, and column configurations. All outlets comply with BS EN ISO 9170-1 and gas-specific colour coding and labelling standards to prevent cross-connection.",
    highlights: [
      "Gas-specific probe design prevents cross-connection between services.",
      "NIST, Schraeder/DISS outlet types to international standards.",
      "Wall, ceiling, pendant, and column mounting configurations.",
      "Full colour coding and labelling per EN ISO 7396-1 identification requirements.",
    ],
    capabilityItems: [
      {
        title: "Gas-specific outlet design",
        description:
          "Each outlet accepts only the correct gas-specific probe, providing a physical safeguard against cross-connection of medical gas equipment - a critical patient safety feature.",
      },
      {
        title: "Multiple outlet standard compatibility",
        description:
          "NIST (Non-Interchangeable Screw Thread), Schraeder/DISS, and NF outlet probe standards available to match installed equipment and facility requirements.",
      },
      {
        title: "Flexible mounting options",
        description:
          "Wall-mounted outlet panels, ceiling-pendant integrated outlets, bed head unit outlets, and column-mounted configurations to suit all clinical environments.",
      },
      {
        title: "Standards-compliant identification",
        description:
          "Outlets are colour-coded by gas service and labelled with chemical formula and gas name per EN ISO 7396-1 requirements, supporting correct clinical use.",
      },
    ],
    deploymentItems: [
      {
        title: "Operating room pendant and wall outlets",
        description:
          "High-density outlet provision for anaesthesia gas, surgical air, surgical vacuum, and CO2 on ceiling pendants and OR wall panels.",
      },
      {
        title: "ICU and bed head unit integration",
        description:
          "Gas outlets integrated into ceiling pendants and bed head units at each ICU bedspace, providing organized and ergonomically positioned connections.",
      },
      {
        title: "Ward and recovery room outlets",
        description:
          "Bed head unit and wall-panel outlets for ward oxygen, vacuum, and medical air provision at all general and post-operative care beds.",
      },
    ],
    valuePoints: [
      "Physical gas specificity prevents cross-connection errors at the point of care.",
      "Compliant with BS EN ISO 9170-1 for safe terminal unit performance.",
      "Wide range of outlet types to match any existing system standard.",
      "Suitable for integration with all INMED pendant and bed head systems.",
    ],
    heroImages: {
      main: { src: "/images/products/medical-gases/shared/hero-secondary-2.jpg", alt: "Medical gas outlet panel with colour-coded terminal units" },
      secondary1: { src: "/images/products/medical-gases/shared/hero-secondary-2.jpg", alt: "NIST and Schraeder gas outlets on wall panel" },
      secondary2: { src: "/images/products/medical-gases/shared/hero-secondary-2.jpg", alt: "Medical gas outlets integrated in ceiling pendant" },
    },
    deploymentImages: [
      { src: "/images/products/medical-gases/shared/hero-secondary-2.jpg", alt: "Gas outlets on OR ceiling pendant" },
      { src: "/images/products/medical-gases/shared/hero-secondary-2.jpg", alt: "Gas outlets in ICU bed head unit" },
      { src: "/images/products/medical-gases/shared/hero-secondary-2.jpg", alt: "Ward gas outlet wall panel" },
    ],
  },
  {
    slug: "consumption-boards",
    name: "Medical Gas Consumption Boards",
    shortDescription:
      "Multi-outlet distribution boards organizing gas, electrical, and data connections for OR, ICU, and procedure room environments.",
    cardImage: "/images/products/medical-gases/shared/hero-secondary-2.jpg",
    heroTitle: "Medical gas consumption boards for organized multi-outlet clinical environments",
    heroSubtitle:
      "Medical gas consumption boards combine multiple gas outlets, electrical sockets, and data connections in a single organized distribution unit, simplifying equipment management in high-density clinical environments.",
    overview:
      "Medical gas consumption boards are designed for clinical environments where multiple gas and electrical connections are required at a single location - procedure rooms, endoscopy suites, minor treatment rooms, and outpatient clinical areas. Rather than running individual outlet points to each location, consumption boards consolidate all required gas services, electrical sockets, equipotential connections, and data ports in a single wall or ceiling-mounted unit. This approach simplifies installation, improves room organization, and makes all connections accessible from one clearly labelled panel.",
    highlights: [
      "Combines gas, electrical, and data connections in one organized panel.",
      "Gas outlets gas-specific and colour-coded per EN ISO 7396-1.",
      "Wall and ceiling-mounted configurations for flexible room deployment.",
      "Simplifies installation compared to individual outlet point runs.",
    ],
    capabilityItems: [
      {
        title: "Multi-gas outlet consolidation",
        description:
          "Multiple gas service outlets - oxygen, medical air, vacuum, N2O - organized in a single panel, reducing the number of pipeline terminal points in the room.",
      },
      {
        title: "Integrated electrical provision",
        description:
          "Standard and equipotential electrical sockets are integrated with gas outlets in the same board, providing a unified connection point for all clinical equipment.",
      },
      {
        title: "Data and IT integration",
        description:
          "Optional data ports and nurse call connections can be incorporated in the board design, further consolidating all bedside and procedural room connections.",
      },
      {
        title: "Flexible panel configuration",
        description:
          "Gas service selection, outlet count, and electrical provision are configured to the specific clinical requirements of each room type.",
      },
    ],
    deploymentItems: [
      {
        title: "Procedure and endoscopy rooms",
        description:
          "Consumption boards provide all required gas, electrical, and data connections for endoscopy, bronchoscopy, and minor procedure rooms in a compact wall panel.",
      },
      {
        title: "Outpatient and treatment rooms",
        description:
          "Simplified media provision for outpatient clinical rooms where full pendant infrastructure is not justified but organized multi-service connection is required.",
      },
      {
        title: "Recovery and step-down areas",
        description:
          "Portable and fixed consumption boards support recovery bay and step-down unit configurations with all required gas and electrical connections at each position.",
      },
    ],
    valuePoints: [
      "Reduces installation complexity in multi-service clinical rooms.",
      "Single organized panel simplifies clinical equipment connection.",
      "Gas-specific outlet design maintains cross-connection safety.",
      "Configurable to match the specific gas and electrical needs of any room type.",
    ],
    heroImages: {
      main: { src: "/images/products/medical-gases/shared/hero-secondary-2.jpg", alt: "Medical gas consumption board with multi-service outlets" },
      secondary1: { src: "/images/products/medical-gases/shared/hero-secondary-2.jpg", alt: "Gas and electrical consumption board in procedure room" },
      secondary2: { src: "/images/products/medical-gases/shared/hero-secondary-2.jpg", alt: "Consumption board in endoscopy suite" },
    },
    deploymentImages: [
      { src: "/images/products/medical-gases/shared/hero-secondary-2.jpg", alt: "Consumption board in procedure room" },
      { src: "/images/products/medical-gases/shared/hero-secondary-2.jpg", alt: "Consumption board in outpatient room" },
      { src: "/images/products/medical-gases/shared/hero-secondary-2.jpg", alt: "Consumption board in recovery bay" },
    ],
  },
]

export function getMedicalGasProductBySlug(slug: string) {
  return medicalGasProducts.find((item) => item.slug === slug)
}
