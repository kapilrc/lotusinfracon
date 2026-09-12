export interface Product {
  id: string
  slug: string
  name: string
  category: "concrete-pumps" | "construction-equipment" | "scaffolding" | "pipes"
  categoryLabel: string
  image: string
  specs: {
    label: string
    value: string
  }[]
  detailedSpecs?: {
    label: string
    value: string
  }[]
  tradeInfo?: {
    moq: string
    supplyAbility: string
    paymentTerms: string
    deliveryLocation: string
  }
  status: "available" | "on-hire" | "maintenance"
  statusLabel: string
  description: string
  highlights?: string[]
}

export const categories = [
  { id: "all", label: "All Equipment" },
  { id: "concrete-pumps", label: "Concrete Pumps" },
  { id: "construction-equipment", label: "Boom Pumps & Placing" },
  { id: "scaffolding", label: "Scaffolding Systems" },
  { id: "pipes", label: "Pipes Rental" },
] as const

export const products: Product[] = [
  // --- CONCRETE PUMPS ---
  {
    id: "1",
    slug: "putzmeister-1403",
    name: "Putzmeister BSA 1403 Concrete Pump",
    category: "concrete-pumps",
    categoryLabel: "Concrete Pumps",
    image: "/images/concrete-pump.jpg",
    specs: [
      { label: "Output", value: "130 m³/h" },
      { label: "Pressure", value: "85 bar" },
      { label: "Cylinder", value: "200 x 1400 mm" },
    ],
    detailedSpecs: [
      { label: "Max Output (Rod Side)", value: "130 m³/h" },
      { label: "Max Pressure (Head Side)", value: "85 bar" },
      { label: "Delivery Cylinder Diameter", value: "200 mm" },
      { label: "Delivery Cylinder Stroke", value: "1400 mm" },
      { label: "Drive Engine Power", value: "115 kW Diesel / Electric" },
      { label: "Hopper Capacity", value: "600 Liters" },
      { label: "Control System", value: "Ergonic Ergonomic Hydraulic" },
      { label: "Application", value: "High-Rise Concrete Pumping, Bridges" },
    ],
    tradeInfo: {
      moq: "1 Month Rental",
      supplyAbility: "Immediate Dispatch from Pune Yard",
      paymentTerms: "Advance / Monthly Invoicing",
      deliveryLocation: "Pune, PCMC, Mumbai, Maharashtra & Pan-India",
    },
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "High-performance stationary concrete pump ideal for high-rise buildings and large-scale infrastructure projects. Delivers consistent output with superior pressure handling and low maintenance downtime.",
    highlights: [
      "Robust Putzmeister S-Valve technology for smooth concrete flow",
      "Handles tough concrete mixes with aggregate up to 40mm",
      "Factory-trained maintenance team on standby",
      "Available on short-term and long-term rental contracts",
    ],
  },
  {
    id: "2",
    slug: "putzmeister-1405",
    name: "Putzmeister BSA 1405 Concrete Pump",
    category: "concrete-pumps",
    categoryLabel: "Concrete Pumps",
    image: "/images/concrete-pump.jpg",
    specs: [
      { label: "Output", value: "145 m³/h" },
      { label: "Pressure", value: "95 bar" },
      { label: "Cylinder", value: "200 x 1400 mm" },
    ],
    detailedSpecs: [
      { label: "Max Theoretical Output", value: "145 m³/h" },
      { label: "Max Concrete Pressure", value: "95 bar" },
      { label: "Stroke Length", value: "1400 mm" },
      { label: "Piston Diameter", value: "200 mm" },
      { label: "Engine Type", value: "Tier 3 Water-Cooled Diesel" },
      { label: "Mounting", value: "Heavy-Duty Dual-Axle Chassis" },
    ],
    tradeInfo: {
      moq: "1 Month Rental",
      supplyAbility: "Pune & Maharashtra Sites",
      paymentTerms: "Standard Commercial Terms",
      deliveryLocation: "Maharashtra & Western India",
    },
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Reliable mid-to-high capacity stationary pump engineered for high-altitude pumping and mass pour tasks in industrial parks, metros, and highway flyovers.",
    highlights: [
      "Optimal balance of high pressure and rapid cubic volume output",
      "Integrated automatic greasing system",
      "Full piping and pipeline accessories available upon request",
    ],
  },
  {
    id: "3",
    slug: "putzmeister-1407",
    name: "Putzmeister BSA 1407 Concrete Pump",
    category: "concrete-pumps",
    categoryLabel: "Concrete Pumps",
    image: "/images/concrete-pump.jpg",
    specs: [
      { label: "Output", value: "160 m³/h" },
      { label: "Pressure", value: "108 bar" },
      { label: "Cylinder", value: "230 x 1400 mm" },
    ],
    detailedSpecs: [
      { label: "Max Delivery Rate", value: "160 m³/h" },
      { label: "Max Pressure", value: "108 bar" },
      { label: "Piston Diameter", value: "230 mm" },
      { label: "Stroke Length", value: "1400 mm" },
      { label: "Hopper Volume", value: "650 Liters with Agitator" },
      { label: "Engine Rating", value: "145 kW" },
    ],
    tradeInfo: {
      moq: "1 Month Rental",
      supplyAbility: "Immediate Deployment",
      paymentTerms: "Commercial Lease / Rental",
      deliveryLocation: "Pune, Navi Mumbai, Nagpur, Pan-India",
    },
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Heavy-duty stationary pump designed for demanding high-rise concrete placement and mega civil works requiring uninterrupted high-volume concrete delivery.",
    highlights: [
      "Maximum vertical reach capacity for super-tall buildings",
      "Exceptional fuel efficiency and minimal wear parts",
      "Backed by Lotus Infracon 24/7 on-site technical support",
    ],
  },
  {
    id: "4",
    slug: "stationary-concrete-pump",
    name: "Stationary Concrete Pump Rental Services",
    category: "concrete-pumps",
    categoryLabel: "Concrete Pumps",
    image: "/images/concrete-pump.jpg",
    specs: [
      { label: "Capacity", value: "50-160 m³/h" },
      { label: "Pressure", value: "Up to 110 bar" },
      { label: "Pipeline", value: "125mm / 150mm" },
    ],
    detailedSpecs: [
      { label: "Model Range", value: "BSA 1005 / 1403 / 1407 / Swing Setter" },
      { label: "Mounting", value: "Stationary Skid / Towable Chassis" },
      { label: "Operation", value: "Manual / Remote Controlled" },
      { label: "Fuel Type", value: "Diesel" },
    ],
    tradeInfo: {
      moq: "Flexible Rental Durations",
      supplyAbility: "5+ Units in Pune Yard",
      paymentTerms: "Negotiable / Monthly Billing",
      deliveryLocation: "All Maharashtra Construction Hubs",
    },
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Comprehensive stationary concrete pump hire service with pipeline setup, clamping accessories, and experienced certified operators for complete peace of mind on site.",
    highlights: [
      "Turnkey rental including heavy-duty delivery pipes & bends",
      "Certified and verified operators available",
      "Pre-dispatch pressure testing on all units",
    ],
  },
  {
    id: "5",
    slug: "truck-mounted-concrete-pump",
    name: "Truck Mounted Concrete Pump Rental Services",
    category: "concrete-pumps",
    categoryLabel: "Concrete Pumps",
    image: "/images/hero-boom-pump.jpg",
    specs: [
      { label: "Mobility", value: "Truck Chassis" },
      { label: "Output", value: "120-160 m³/h" },
      { label: "Setup Time", value: "< 20 Mins" },
    ],
    detailedSpecs: [
      { label: "Chassis", value: "BharatBenz / Tata Multi-Axle" },
      { label: "Pump Output", value: "Up to 160 m³/h" },
      { label: "Outrigger System", value: "X-Style Hydraulic Stabilization" },
      { label: "Operator Cabin", value: "Fully Air Conditioned Mobile Unit" },
    ],
    tradeInfo: {
      moq: "Per Pour / Weekly / Monthly",
      supplyAbility: "Fleet of 8 Units",
      paymentTerms: "Rental Agreement",
      deliveryLocation: "Maharashtra & Surrounding States",
    },
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "High-mobility truck mounted pump solution for fast deployments across dispersed project sites. Minimal setup time, high efficiency, and rapid transition between pours.",
    highlights: [
      "Zero crane dependency for pump positioning",
      "Ideal for city road works, bridges, and commercial plazas",
      "Experienced driving and pumping crew included",
    ],
  },
  {
    id: "6",
    slug: "concrete-pump-hire-services",
    name: "Concrete Pump Hire Rental Services",
    category: "concrete-pumps",
    categoryLabel: "Concrete Pumps",
    image: "/images/concrete-pump.jpg",
    specs: [
      { label: "Rental Model", value: "Dry / Wet Hire" },
      { label: "Duration", value: "Monthly / Annual" },
      { label: "Support", value: "24/7 Breakdown" },
    ],
    detailedSpecs: [
      { label: "Fleet Availability", value: "Multiple Units Ready" },
      { label: "Maintenance", value: "Covered by Lotus Infracon" },
      { label: "Replacement Policy", value: "Quick swap in case of major breakdown" },
    ],
    tradeInfo: {
      moq: "Custom Contract",
      supplyAbility: "Pan-Maharashtra",
      paymentTerms: "Standard Construction Credit Terms",
      deliveryLocation: "Swargate Pune Hub to Site",
    },
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "End-to-end hire solutions tailored for infrastructure companies, ready-mix suppliers, and general contractors seeking reliable concrete pumping equipment without capital expenditure.",
    highlights: [
      "Custom SLA with guaranteed uptime",
      "Comprehensive preventative maintenance included",
      "Competitive monthly rates with transparent terms",
    ],
  },

  // --- BOOM PUMPS & PLACING EQUIPMENT ---
  {
    id: "7",
    slug: "36-meter-boom-pump",
    name: "36 Meter Boom Pump Rental Services",
    category: "construction-equipment",
    categoryLabel: "Boom Pumps & Placing",
    image: "/images/hero-boom-pump.jpg",
    specs: [
      { label: "Vertical Reach", value: "36 Meters" },
      { label: "Horizontal Reach", value: "31.8 Meters" },
      { label: "Arms", value: "4-Section Z-Fold" },
    ],
    detailedSpecs: [
      { label: "Vertical Reach", value: "35.6 m" },
      { label: "Horizontal Reach", value: "31.4 m" },
      { label: "Reach Depth", value: "23.9 m" },
      { label: "Unfolding Height", value: "8.5 m" },
      { label: "End Hose Length", value: "3 m" },
      { label: "Pump Output", value: "160 m³/h" },
      { label: "Outrigger Spread (Front)", value: "6.3 m" },
      { label: "Chassis", value: "3-Axle Heavy Duty Carrier" },
    ],
    tradeInfo: {
      moq: "Weekly / Monthly Hire",
      supplyAbility: "Multiple Units",
      paymentTerms: "Advance / Work Order",
      deliveryLocation: "Pune, Mumbai, Nashik, Aurangabad",
    },
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Versatile 36-meter truck-mounted boom pump featuring 4-section Z-fold kinematics for seamless maneuvering in congested urban construction sites and medium-rise buildings.",
    highlights: [
      "Compact footprint with flexible outrigger setup",
      "High pumping capacity with smooth boom dampening system",
      "Full safety interlocks and certified boom operators",
    ],
  },
  {
    id: "8",
    slug: "42-meter-boom-pump",
    name: "42 Meter Boom Pump Rental Services",
    category: "construction-equipment",
    categoryLabel: "Boom Pumps & Placing",
    image: "/images/hero-boom-pump.jpg",
    specs: [
      { label: "Vertical Reach", value: "42 Meters" },
      { label: "Horizontal Reach", value: "37.5 Meters" },
      { label: "Arms", value: "5-Section RZ-Fold" },
    ],
    detailedSpecs: [
      { label: "Vertical Reach", value: "41.8 m" },
      { label: "Horizontal Reach", value: "37.2 m" },
      { label: "Unfolding Height", value: "9.2 m" },
      { label: "Pump Capacity", value: "180 m³/h" },
      { label: "Boom Sections", value: "5-Section RZ" },
      { label: "Chassis", value: "4-Axle Heavy Commercial Carrier" },
    ],
    tradeInfo: {
      moq: "1 Month Minimum",
      supplyAbility: "Subject to Scheduling",
      paymentTerms: "Commercial Contract",
      deliveryLocation: "Western & Southern India",
    },
    status: "on-hire",
    statusLabel: "Currently On Hire - Inquire for Next Slot",
    description:
      "Extended-reach 42m boom pump delivering unparalleled outreach for high-rise slabs, bridge piers, and vast industrial floor casting where repositioning must be minimized.",
    highlights: [
      "Massive horizontal and vertical coverage area",
      "5-section RZ boom allows threading into complex slab structures",
      "High output capacity suitable for large continuous pours",
    ],
  },
  {
    id: "9",
    slug: "concrete-boom-pump",
    name: "Concrete Boom Pump Rental Services",
    category: "construction-equipment",
    categoryLabel: "Boom Pumps & Placing",
    image: "/images/hero-boom-pump.jpg",
    specs: [
      { label: "Reach Range", value: "24m to 42m" },
      { label: "Output", value: "120-180 m³/h" },
      { label: "Deployment", value: "Rapid On-Site" },
    ],
    detailedSpecs: [
      { label: "Boom Configuration", value: "Roll-Z / Z-Fold" },
      { label: "Pipe Diameter", value: "125 mm" },
      { label: "Radio Remote", value: "Proportional Wireless Control" },
    ],
    tradeInfo: {
      moq: "Project-Based",
      supplyAbility: "Available in Fleet",
      paymentTerms: "Standard Terms",
      deliveryLocation: "Across Maharashtra",
    },
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Fleet of modern concrete boom pumps delivering versatile reach, high flow rates, and precision placement on residential towers, industrial foundations, and metro works.",
    highlights: [
      "Precision wireless remote control for operator safety",
      "Minimizes labor requirements on slab casting",
      "Regularly serviced and load-tested equipment",
    ],
  },
  {
    id: "10",
    slug: "boom-placer-rental",
    name: "Boom Placer Rental Services",
    category: "construction-equipment",
    categoryLabel: "Boom Pumps & Placing",
    image: "/images/hero-boom-pump.jpg",
    specs: [
      { label: "Type", value: "Hydraulic Placing Boom" },
      { label: "Reach", value: "28 - 36 Meters" },
      { label: "Rotation", value: "360° Continuous" },
    ],
    detailedSpecs: [
      { label: "Mounting Type", value: "Tower Mounted / Self-Climbing Floor Frame" },
      { label: "Slewing Angle", value: "360° Continuous Hydraulic" },
      { label: "Coupling", value: "High-Pressure Delivery Pipe Coupling" },
    ],
    tradeInfo: {
      moq: "6 Months Rental (Tower Installations)",
      supplyAbility: "Contract Based",
      paymentTerms: "Long-term Infrastructure Lease",
      deliveryLocation: "Pan-India",
    },
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Stationary placing booms designed for super high-rise structures where truck-mounted boom pumps cannot reach. Easily climbs with the building core as construction advances.",
    highlights: [
      "Self-climbing hydraulic system for high-rise cores",
      "Full 360-degree continuous concrete placement",
      "Significantly speeds up multi-floor casting cycles",
    ],
  },

  // --- SCAFFOLDING SYSTEMS ---
  {
    id: "11",
    slug: "cuplock-scaffolding-system",
    name: "Cuplock Scaffolding System Rental Services",
    category: "scaffolding",
    categoryLabel: "Scaffolding Systems",
    image: "/images/scaffolding.jpg",
    specs: [
      { label: "Material", value: "High-Yield Mild Steel" },
      { label: "Finish", value: "Hot-Dip Galvanized / Painted" },
      { label: "Capacity", value: "Heavy Load Bearing" },
    ],
    detailedSpecs: [
      { label: "Pipe Outer Diameter", value: "48.3 mm" },
      { label: "Wall Thickness", value: "3.2 mm / 4.0 mm" },
      { label: "Cup Spacing", value: "500 mm Centers" },
      { label: "Standard Heights", value: "1.0m, 1.5m, 2.0m, 2.5m, 3.0m" },
      { label: "Standard", value: "IS 2750 / IS 1239" },
    ],
    tradeInfo: {
      moq: "5 Tons / Bulk Projects",
      supplyAbility: "1000+ Tons in Pune Warehouse",
      paymentTerms: "Monthly Rental / Security Deposit",
      deliveryLocation: "Pune, Swargate, Chakan, Ranjangaon, Talegaon, Mumbai",
    },
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Heavy-duty modular Cuplock scaffolding system providing rigid, multi-point connection nodes. The industry standard for concrete shoring, facade access, and bridge staging.",
    highlights: [
      "Cup locking mechanism allows up to 4 ledger connections in one action",
      "No loose bolts or nuts required for main frame assembly",
      "Vastly accelerates staging erection and stripping cycles",
    ],
  },
  {
    id: "12",
    slug: "standard-cuplock-rental",
    name: "Standard Cuplock Rental Services (Verticals)",
    category: "scaffolding",
    categoryLabel: "Scaffolding Systems",
    image: "/images/scaffolding.jpg",
    specs: [
      { label: "Lengths", value: "1.0m to 3.0m" },
      { label: "OD", value: "48.3 mm" },
      { label: "Cups", value: "Top cup & Fixed bottom cup" },
    ],
    detailedSpecs: [
      { label: "Material", value: "Mild Steel Grade Q235 / IS 1239" },
      { label: "Spigot", value: "Integral Pressed Spigot for vertical stacking" },
      { label: "Cup Spacing", value: "500 mm" },
    ],
    tradeInfo: {
      moq: "500 Numbers / Tons",
      supplyAbility: "Over 50,000 meters available",
      paymentTerms: "Standard Terms",
      deliveryLocation: "Maharashtra Sites",
    },
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Vertical standard members with welded bottom cups and captive drop-forged top cups every 500mm. Provides maximum columnar strength for slab and beam support.",
    highlights: [
      "Precision welded cups for high axial load capacity",
      "Easy inter-locking spigot jointing",
      "Suitable for formwork staging and access towers",
    ],
  },
  {
    id: "13",
    slug: "horizontal-cuplock-system",
    name: "Horizontal Cuplock System Rental Services (Ledgers)",
    category: "scaffolding",
    categoryLabel: "Scaffolding Systems",
    image: "/images/scaffolding.jpg",
    specs: [
      { label: "Sizes", value: "0.6m to 2.5m" },
      { label: "Blade Ends", value: "Forged Blade Terminals" },
      { label: "Tube", value: "48.3 mm OD" },
    ],
    detailedSpecs: [
      { label: "Terminal Fitting", value: "Drop Forged Blade welded to tube ends" },
      { label: "Standard Lengths", value: "0.6m, 0.9m, 1.2m, 1.5m, 1.8m, 2.0m, 2.5m" },
      { label: "Application", value: "Horizontal tie-in and ledger support for staging" },
    ],
    tradeInfo: {
      moq: "Bulk Available",
      supplyAbility: "Immediate Supply",
      paymentTerms: "Monthly Rental",
      deliveryLocation: "Pune & Nationwide",
    },
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Horizontal ledger members with forged blade ends that lock securely into the cup nodes of vertical standards, establishing rigid bay dimensions for staging and access.",
    highlights: [
      "Rigid box connection creates robust bracing against lateral loads",
      "Accurate bay lengths maintain structural alignment",
      "Quick hammer-lock engagement into standard cups",
    ],
  },
  {
    id: "14",
    slug: "h-frame-scaffolding-system",
    name: "H-Frame Scaffolding Rental Services",
    category: "scaffolding",
    categoryLabel: "Scaffolding Systems",
    image: "/images/scaffolding.jpg",
    specs: [
      { label: "Height", value: "2.0m / 1.5m" },
      { label: "Width", value: "1.2m / 1.0m" },
      { label: "Bracing", value: "Scissor Cross Brace" },
    ],
    detailedSpecs: [
      { label: "Main Frame Tube", value: "48.3 mm OD Class Medium" },
      { label: "Cross Member Tube", value: "25 mm / 32 mm OD" },
      { label: "Access Ladder", value: "Integrated Rung Design" },
      { label: "Finish", value: "Primer Painted / Dip Coated" },
    ],
    tradeInfo: {
      moq: "100 Frames",
      supplyAbility: "Ready Stock in Swargate Depot",
      paymentTerms: "Standard Monthly Rental",
      deliveryLocation: "Maharashtra & Western India",
    },
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Heavy-duty H-frame access and shoring system. Highly popular for external building plastering, painting, glazing, and straightforward slab casting.",
    highlights: [
      "Fastest assembly and dismantling times among access scaffolding",
      "Built-in ladder rungs provide convenient working access",
      "Economical rental pricing with full cross-bracing accessories",
    ],
  },
  {
    id: "15",
    slug: "scaffolding-props-jack",
    name: "Scaffolding Props Jack & Adjustable Spans Rental",
    category: "scaffolding",
    categoryLabel: "Scaffolding Systems",
    image: "/images/scaffolding.jpg",
    specs: [
      { label: "Prop Sizes", value: "2m to 4.5m" },
      { label: "Span Sizes", value: "2.4m to 4.2m" },
      { label: "Load", value: "20 - 30 kN" },
    ],
    detailedSpecs: [
      { label: "Inner Tube OD", value: "48.3 mm" },
      { label: "Outer Tube OD", value: "60.3 mm" },
      { label: "Nut & Thread", value: "Heavy Ductile Iron Nut with Cold Rolled Thread" },
      { label: "Span Extension", value: "Telescopic Outer & Inner Beam Spans" },
    ],
    tradeInfo: {
      moq: "200 Pieces",
      supplyAbility: "10,000+ Props Available",
      paymentTerms: "Standard Rental Terms",
      deliveryLocation: "All Project Sites in Maharashtra",
    },
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Telescopic adjustable steel props and girder spans for beam shuttering and slab formwork. Provides micro-height adjustment with foolproof safety pin locks.",
    highlights: [
      "Quick threaded collar adjustment for precise leveling",
      "High load capacity reduces total propping count",
      "Complete with top and base plates for secure contact",
    ],
  },
  {
    id: "16",
    slug: "adjustable-base-jacks",
    name: "Adjustable Base Jacks & Stirrup U-Head Jacks",
    category: "scaffolding",
    categoryLabel: "Scaffolding Systems",
    image: "/images/scaffolding.jpg",
    specs: [
      { label: "Length", value: "350mm to 650mm" },
      { label: "Stem OD", value: "34mm / 38mm" },
      { label: "Base", value: "150 x 150 mm" },
    ],
    detailedSpecs: [
      { label: "Base Jack Type", value: "Solid / Hollow Threaded Spindle" },
      { label: "U-Head Stirrup", value: "Forged U-channel for primary runner timber/steel" },
      { label: "Thread Type", value: "Acme / Metric Fast Pitch" },
      { label: "Adjustment Nut", value: "Cast Iron Handle Nut" },
    ],
    tradeInfo: {
      moq: "500 Numbers",
      supplyAbility: "Ready Stock",
      paymentTerms: "Monthly Rental",
      deliveryLocation: "Pune, Pimpri-Chinchwad & Maharashtra",
    },
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Heavy-duty jack spindles used at the bottom of vertical scaffolding to accommodate uneven ground, and at the top with U-heads to support formwork runners and beams.",
    highlights: [
      "Accommodates unlevel ground and ramp slopes effortlessly",
      "U-Head stirrups securely seat aluminum and wooden runners",
      "Zinc coated / galvanized against site corrosion",
    ],
  },
  {
    id: "17",
    slug: "scaffolding-couplers-clamps",
    name: "Scaffolding Couplers, Sleeve Clamps & Swivel Couplers",
    category: "scaffolding",
    categoryLabel: "Scaffolding Systems",
    image: "/images/scaffolding.jpg",
    specs: [
      { label: "Types", value: "Right Angle / Swivel / Sleeve" },
      { label: "Material", value: "Drop Forged Mild Steel" },
      { label: "Fit", value: "48.3 mm Tubes" },
    ],
    detailedSpecs: [
      { label: "Standard", value: "EN74 / BS1139 / IS 2750" },
      { label: "Bolt & Nut", value: "High-Tensile Galvanized T-Bolts (1/2\" Whitworth)" },
      { label: "Slip Resistance", value: "High Torqued Clamping" },
    ],
    tradeInfo: {
      moq: "1000 Pieces",
      supplyAbility: "Large Volume Depot Supply",
      paymentTerms: "Monthly Rental",
      deliveryLocation: "Pune & Pan-India",
    },
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Drop-forged scaffold clamps including fixed 90-degree right angle couplers, 360-degree swivel couplers, and external sleeve clamps for connecting tubes at any angle.",
    highlights: [
      "Heavy-duty drop forged steel eliminates risk of cracking",
      "Swivel couplers allow diagonal bracing on any structure geometry",
      "Sleeve clamps allow end-to-end joining of scaffolding pipes",
    ],
  },
  {
    id: "18",
    slug: "steel-walkway-planks-centering-plates",
    name: "Steel Walkway Planks & Centering Shuttering Plates",
    category: "scaffolding",
    categoryLabel: "Scaffolding Systems",
    image: "/images/scaffolding.jpg",
    specs: [
      { label: "Planks", value: "2.0m / 2.5m Perforated Steel" },
      { label: "Plates", value: "900 x 600 mm Shuttering" },
      { label: "Safety", value: "Anti-Slip Surface" },
    ],
    detailedSpecs: [
      { label: "Walkway Material", value: "Pre-Galvanized Non-Skid Perforated Sheet" },
      { label: "Hook Type", value: "Integral End Hooks for Cuplock / Tube resting" },
      { label: "Shuttering Plate Sheet", value: "12 Gauge / 14 Gauge Mild Steel with Angle Frame" },
    ],
    tradeInfo: {
      moq: "200 Pieces",
      supplyAbility: "Substantial Yard Stock",
      paymentTerms: "Standard Monthly Rental",
      deliveryLocation: "Maharashtra Sites",
    },
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Anti-skid perforated steel walkway battens for safe worker movement at heights, and heavy-duty steel centering shuttering plates for clean concrete slab finishes.",
    highlights: [
      "Perforated drainage holes prevent water and oil accumulation",
      "Replaces heavy wooden timber boards for maximum safety",
      "Clean steel face ensures superior concrete finish",
    ],
  },

  // --- PIPES RENTAL ---
  {
    id: "19",
    slug: "ms-pipes-rental",
    name: "MS Pipes Rental Services (All Diameters & Lengths)",
    category: "pipes",
    categoryLabel: "Pipes Rental",
    image: "/images/pipes.jpg",
    specs: [
      { label: "Diameter", value: "100 mm to 600 mm" },
      { label: "Length", value: "6m & 12m Standard" },
      { label: "Grade", value: "IS 1239 / IS 3589" },
    ],
    detailedSpecs: [
      { label: "Outer Diameter", value: "100 mm - 600 mm (4\" to 24\")" },
      { label: "Wall Thickness", value: "3.2 mm to 10.0 mm" },
      { label: "Material Grade", value: "Fe 410 / IS 1239 Heavy / IS 3589" },
      { label: "End Type", value: "Plain End / Beveled / Flanged" },
      { label: "Pressure Rating", value: "High-Pressure Hydraulic / Dewatering" },
      { label: "Application", value: "Concrete Pumping, Piling, Dewatering, Staging" },
    ],
    tradeInfo: {
      moq: "500 Meters / Bulk Tonnage",
      supplyAbility: "Large Inventory in Pune Depot",
      paymentTerms: "Monthly Rental / Delivery Slips",
      deliveryLocation: "Pune, Swargate, Mumbai, Nashik, Pan-India",
    },
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Full range of heavy-duty mild steel (MS) pipes available on rental for construction slurry lines, concrete pipeline lines, dewatering, and temporary structural piling.",
    highlights: [
      "Straight, sound, pressure-tested pipe inventory",
      "Available with rapid Victaulic and flanged couplings",
      "Immediate loading and transport from Swargate Pune yard",
    ],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
