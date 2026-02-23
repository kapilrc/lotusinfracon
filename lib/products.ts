export type CategoryId =
  | "all"
  | "concrete-pumps"
  | "construction-equipment"
  | "scaffolding-equipment"
  | "scaffolding-rental"
  | "pipes"

export interface FAQ {
  question: string
  answer: string
}

export interface Product {
  id: string
  slug: string
  name: string
  category: Exclude<CategoryId, "all">
  categoryLabel: string
  image: string
  images?: string[]
  price?: string
  specs: { label: string; value: string }[]
  tradeInfo?: { label: string; value: string }[]
  description: string
  faqs?: FAQ[]
}

export const categories = [
  { id: "all" as const, label: "All Products" },
  { id: "concrete-pumps" as const, label: "Concrete Pump" },
  { id: "construction-equipment" as const, label: "Construction Equipment Rental Services" },
  { id: "scaffolding-equipment" as const, label: "Scaffolding Equipment" },
  { id: "scaffolding-rental" as const, label: "Scaffolding Rental Service" },
  { id: "pipes" as const, label: "Pipes Rental Services" },
]

export const products: Product[] = [
  // ─── CONCRETE PUMPS (5) ────────────────────────────────────────────────
  {
    id: "cp-1",
    slug: "stationary-concrete-pump",
    name: "Stationary Concrete Pump",
    category: "concrete-pumps",
    categoryLabel: "Concrete Pump",
    image: "https://cpimg.tistatic.com/10588638/b/4/Stationary-Concrete-Pump-Rental-services..jpg",
    specs: [
      { label: "Type", value: "Portable" },
      { label: "Frequency", value: "50-60 Hz" },
      { label: "Power Source", value: "Diesel" },
      { label: "Material", value: "Mild Steel" },
      { label: "Pressure", value: "High Pressure" },
    ],
    tradeInfo: [
      { label: "Supply Ability", value: "5 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "We are providing Stationary Concrete Pump Rental services to our clients. These services are rendered by our skilled professionals who hold vast knowledge of this field. Our rendered service is admired in the market for their reliability and timely execution.",
    faqs: [
      {
        question: "What is a stationary concrete pump used for?",
        answer:
          "It is used for pumping concrete to high-rise buildings and large-scale construction sites where a fixed pumping setup is more efficient.",
      },
      {
        question: "What is the maximum pumping distance?",
        answer:
          "Depending on the model, stationary pumps can push concrete up to 300 meters horizontally and over 100 meters vertically.",
      },
    ],
  },
  {
    id: "cp-2",
    slug: "truck-mounted-concrete-pump",
    name: "Truck Mounted Concrete Pump",
    category: "concrete-pumps",
    categoryLabel: "Concrete Pump",
    image: "https://cpimg.tistatic.com/10588639/b/4/Truck-Mounted-Concrete-Pump.jpg",
    specs: [
      { label: "Type", value: "Portable" },
      { label: "Power Source", value: "Diesel" },
      { label: "Material", value: "Mild Steel" },
    ],
    tradeInfo: [
      { label: "Supply Ability", value: "5 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "We are providing Truck Mounted Concrete Pump Rental Services. Leveraging on our industry experience, we present an excellent range of services. The offered services are rendered as per clients\u2019 needs within the limited time period.",
    faqs: [
      {
        question: "What is the advantage of a truck-mounted pump?",
        answer:
          "Truck-mounted pumps are mobile and can be quickly moved between job sites, providing flexibility for multi-site operations.",
      },
    ],
  },
  {
    id: "cp-3",
    slug: "1407-putzmeister-concrete-pump",
    name: "1407 Putzmeister Concrete Pump",
    category: "concrete-pumps",
    categoryLabel: "Concrete Pump",
    image: "https://cpimg.tistatic.com/10588640/b/4/1407-Putzmeister.jpg",
    price: "\u20B92,00,000 / Unit",
    specs: [
      { label: "Type", value: "Durable" },
      { label: "Power Source", value: "Diesel" },
      { label: "Material", value: "Mild Steel" },
    ],
    tradeInfo: [
      { label: "Supply Ability", value: "5 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "We offer 1407 Putzmeister Concrete Pump at the best price. Putzmeister is a globally recognized brand in concrete pumping technology. This model is well-suited for large infrastructure projects and high-rise construction.",
    faqs: [
      {
        question: "What makes Putzmeister pumps reliable?",
        answer:
          "Putzmeister is known for German engineering excellence, offering durable components, high efficiency, and low maintenance costs.",
      },
    ],
  },
  {
    id: "cp-4",
    slug: "1405-putzmeister-concrete-pump",
    name: "1405 Putzmeister Concrete Pump",
    category: "concrete-pumps",
    categoryLabel: "Concrete Pump",
    image: "https://cpimg.tistatic.com/10588641/b/4/1405-Putzmeister.jpg",
    specs: [
      { label: "Type", value: "Durable" },
      { label: "Power Source", value: "Diesel" },
      { label: "Material", value: "Mild Steel" },
    ],
    tradeInfo: [
      { label: "Supply Ability", value: "5 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "We are among the reputed organizations, highly engaged in providing 1405 Putzmeister Concrete Pump. This concrete pump is well-known for its durability and robust construction, ideal for medium to large projects.",
    faqs: [
      {
        question: "What projects is the 1405 model suitable for?",
        answer:
          "The 1405 model is suitable for medium to large-scale commercial and industrial construction projects.",
      },
    ],
  },
  {
    id: "cp-5",
    slug: "1403-putzmeister-concrete-pump",
    name: "1403 Putzmeister Concrete Pump",
    category: "concrete-pumps",
    categoryLabel: "Concrete Pump",
    image: "https://cpimg.tistatic.com/10588642/b/4/1403-Putzmeister.jpg",
    specs: [
      { label: "Type", value: "Portable" },
      { label: "Power Source", value: "Diesel" },
      { label: "Material", value: "Mild Steel" },
    ],
    tradeInfo: [
      { label: "Supply Ability", value: "5 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "We provide 1403 Putzmeister Concrete Pump to our clients. This portable concrete pump from Putzmeister is designed for ease of movement and versatile applications on construction sites.",
    faqs: [
      {
        question: "Is this pump easy to transport?",
        answer: "Yes, the 1403 model is designed to be portable, making it easy to move between construction sites.",
      },
    ],
  },

  // ─── CONSTRUCTION EQUIPMENT RENTAL SERVICES (10) ─────────────────────
  {
    id: "ce-1",
    slug: "boom-placer-rental",
    name: "Boom Placer",
    category: "construction-equipment",
    categoryLabel: "Construction Equipment Rental Services",
    image: "https://cpimg.tistatic.com/10588658/b/4/Boom-Placer.jpg",
    specs: [
      { label: "Boom Reach", value: "36 meters" },
      { label: "Power Source", value: "Diesel / Electric" },
      { label: "Standards", value: "IS Standards" },
      { label: "Operator", value: "Included" },
    ],
    tradeInfo: [
      { label: "Supply Ability", value: "5 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "We provide Boom Placer rental services with 36-meter reach. Our boom placers conform to IS standards and come with trained operators for safe and efficient concrete placement.",
    faqs: [
      {
        question: "Does the rental include an operator?",
        answer: "Yes, all our boom placer rentals include a trained and certified operator.",
      },
    ],
  },
  {
    id: "ce-2",
    slug: "concrete-boom-pump",
    name: "Concrete Boom Pump",
    category: "construction-equipment",
    categoryLabel: "Construction Equipment Rental Services",
    image: "https://cpimg.tistatic.com/10588659/b/4/Concrete-Boom-Pump.jpg",
    specs: [
      { label: "Boom Length", value: "Up to 36m" },
      { label: "Output", value: "60-90 m\u00B3/hr" },
      { label: "Pipe Diameter", value: "125 mm" },
      { label: "Color", value: "Yellow" },
      { label: "Power Source", value: "Diesel" },
      { label: "Mounting", value: "Truck Mounted" },
    ],
    tradeInfo: [
      { label: "Supply Ability", value: "5 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "We provide Concrete Boom Pump rental services. These truck-mounted boom pumps offer up to 36m reach with 60-90 m\u00B3/hr output capacity, suitable for large construction projects.",
    faqs: [
      {
        question: "What is the output capacity?",
        answer: "Our concrete boom pumps deliver 60-90 m\u00B3/hr of concrete output.",
      },
    ],
  },
  {
    id: "ce-3",
    slug: "construction-equipment-rental",
    name: "Construction Equipment Rental Services",
    category: "construction-equipment",
    categoryLabel: "Construction Equipment Rental Services",
    image: "https://cpimg.tistatic.com/10588660/b/4/Construction-Equipment-Rental-Services.jpg",
    specs: [
      { label: "Rental Plans", value: "Daily / Weekly / Monthly" },
      { label: "Availability", value: "Ready Stock" },
      { label: "Coverage", value: "All India" },
    ],
    tradeInfo: [
      { label: "Supply Ability", value: "10 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "We provide comprehensive Construction Equipment Rental Services with flexible rental plans. Our equipment is available on daily, weekly, or monthly basis with ready stock across India.",
  },
  {
    id: "ce-4",
    slug: "36-meter-boom-pump",
    name: "36 Meter Boom Pump",
    category: "construction-equipment",
    categoryLabel: "Construction Equipment Rental Services",
    image: "https://cpimg.tistatic.com/10588661/b/4/36-Meter-Boom-Pump.jpg",
    specs: [
      { label: "Vertical Reach", value: "36 meters" },
      { label: "Horizontal Reach", value: "32 meters" },
      { label: "Output", value: "Up to 100 m\u00B3/hr" },
      { label: "Pipe Diameter", value: "125 mm" },
      { label: "Power Source", value: "Diesel" },
      { label: "Setup Time", value: "30 minutes" },
    ],
    tradeInfo: [
      { label: "Supply Ability", value: "5 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "36 Meter Boom Pump with 36m vertical and 32m horizontal reach, up to 100 m\u00B3/hr output, and 30-minute setup time. Ideal for medium to large scale construction projects.",
    faqs: [
      {
        question: "How quickly can the boom pump be set up?",
        answer: "The 36 Meter Boom Pump can be set up in approximately 30 minutes on site.",
      },
    ],
  },
  {
    id: "ce-5",
    slug: "concrete-pumps-rental",
    name: "Concrete Pumps Rental",
    category: "construction-equipment",
    categoryLabel: "Construction Equipment Rental Services",
    image: "https://cpimg.tistatic.com/10588662/b/4/Concrete-Pumps-Rental.jpg",
    specs: [
      { label: "Output", value: "Up to 100 m\u00B3/hr" },
      { label: "Max Height", value: "Up to 100m" },
      { label: "Coverage", value: "All India" },
    ],
    tradeInfo: [
      { label: "Supply Ability", value: "5 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "We provide Concrete Pumps on rental basis with up to 100 m\u00B3/hr output and up to 100m height capability. Available for projects across India.",
  },
  {
    id: "ce-6",
    slug: "boom-pump-rental-services",
    name: "Boom Pump Rental Services",
    category: "construction-equipment",
    categoryLabel: "Construction Equipment Rental Services",
    image: "https://cpimg.tistatic.com/10588663/b/4/Boom-Pump-Rental-services.jpg",
    specs: [
      { label: "Output", value: "90-120 m\u00B3/hr" },
      { label: "Reach", value: "Up to 36m" },
      { label: "Coverage", value: "PAN India" },
    ],
    tradeInfo: [
      { label: "Supply Ability", value: "5 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "We provide Boom Pump Rental Services across PAN India with 90-120 m\u00B3/hr output and up to 36m reach. Ideal for high-rise and large-scale infrastructure projects.",
  },
  {
    id: "ce-7",
    slug: "concrete-pump-hire",
    name: "Concrete Pump Hire",
    category: "construction-equipment",
    categoryLabel: "Construction Equipment Rental Services",
    image: "https://cpimg.tistatic.com/10588664/b/4/Concrete-Pump-Hire.jpg",
    specs: [
      { label: "Vertical Reach", value: "Up to 42m" },
      { label: "Output", value: "30-100 m\u00B3/hr" },
      { label: "Pipe Diameter", value: "100-125 mm" },
      { label: "Booking", value: "24/7" },
    ],
    tradeInfo: [
      { label: "Supply Ability", value: "5 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "24/7 Concrete Pump Hire service with up to 42m vertical reach and 30-100 m\u00B3/hr output. We provide flexible hiring options with pipe diameters from 100-125mm.",
    faqs: [
      {
        question: "Can I book a concrete pump on short notice?",
        answer: "Yes, we offer 24/7 booking and can dispatch equipment at short notice.",
      },
    ],
  },
  {
    id: "ce-8",
    slug: "boom-pump-rental",
    name: "Boom Pump Rental",
    category: "construction-equipment",
    categoryLabel: "Construction Equipment Rental Services",
    image: "https://cpimg.tistatic.com/10588665/b/4/Boom-Pump-Rental-Services.jpg",
    specs: [
      { label: "Output", value: "Up to 150 m\u00B3/hr" },
      { label: "Boom Range", value: "20-60m" },
      { label: "Pressure", value: "Up to 80 bar" },
      { label: "Power Source", value: "Diesel" },
    ],
    tradeInfo: [
      { label: "Supply Ability", value: "5 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "High-capacity Boom Pump Rental Services with output up to 150 m\u00B3/hr and boom range from 20-60m. Diesel-powered with up to 80 bar pressure.",
  },
  {
    id: "ce-9",
    slug: "concrete-pump-rental",
    name: "Concrete Pump Rental",
    category: "construction-equipment",
    categoryLabel: "Construction Equipment Rental Services",
    image: "https://cpimg.tistatic.com/10588666/b/4/Concrete-Pump-Rental.jpg",
    specs: [
      { label: "Type", value: "Stationary / Mobile" },
      { label: "Coverage", value: "All India" },
    ],
    tradeInfo: [
      { label: "Supply Ability", value: "5 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "We provide Concrete Pump Rental services across India. Both stationary and mobile concrete pumps available for all types of construction projects.",
  },
  {
    id: "ce-10",
    slug: "concrete-placing-boom",
    name: "Concrete Placing Boom",
    category: "construction-equipment",
    categoryLabel: "Construction Equipment Rental Services",
    image: "https://cpimg.tistatic.com/10588667/b/4/Concrete-Placing-Boom.jpg",
    specs: [
      { label: "Vertical Reach", value: "32 meters" },
      { label: "Horizontal Reach", value: "28 meters" },
      { label: "Max Pressure", value: "30 MPa" },
      { label: "Rotation", value: "360\u00B0" },
      { label: "Boom Sections", value: "3/4 Section" },
      { label: "Power", value: "Electric / Diesel" },
    ],
    tradeInfo: [
      { label: "Supply Ability", value: "5 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "Concrete Placing Boom with 32m vertical and 28m horizontal reach, 360\u00B0 rotation, and 30 MPa max pressure. Available in 3 and 4 section configurations with electric or diesel power.",
    faqs: [
      {
        question: "What is the rotation capacity?",
        answer: "The concrete placing boom offers full 360\u00B0 rotation for versatile concrete placement.",
      },
    ],
  },

  // ─── PIPES RENTAL SERVICES (1) ──────────────────────────────────────
  {
    id: "pr-1",
    slug: "ms-pipes-rental",
    name: "MS Pipes Rental Services",
    category: "pipes",
    categoryLabel: "Pipes Rental Services",
    image: "https://cpimg.tistatic.com/10588668/b/4/MS-Pipes-Rental-Services..jpg",
    specs: [
      { label: "Material", value: "Mild Steel" },
      { label: "Application", value: "Construction" },
      { label: "Availability", value: "All Sizes" },
    ],
    tradeInfo: [
      { label: "Supply Ability", value: "50 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "We provide MS Pipes on rental basis for construction applications. Available in all standard sizes with bulk availability across India.",
  },

  // ─── SCAFFOLDING EQUIPMENT (13) ─────────────────────────────────────
  {
    id: "se-1",
    slug: "adjustable-spans",
    name: "Adjustable Spans",
    category: "scaffolding-equipment",
    categoryLabel: "Scaffolding Equipment",
    image: "https://cpimg.tistatic.com/10588643/b/4/Adjustable-Spans-Rental-Services..jpg",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Size", value: "8-12 ft" },
      { label: "Load Capacity", value: "50-100 kg" },
      { label: "Surface", value: "Hot Dip Galvanized" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "1 Unit" },
      { label: "Supply Ability", value: "500 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
      { label: "Payment", value: "Cash in Delivery (CID)" },
    ],
    description:
      "We offer high-quality Adjustable Spans made from steel with hot dip galvanized surface treatment. Available in 8-12 ft size with 50-100 kg load capacity.",
    faqs: [
      {
        question: "What sizes are available?",
        answer: "Our adjustable spans are available in 8-12 ft sizes suitable for various construction needs.",
      },
    ],
  },
  {
    id: "se-2",
    slug: "construction-scaffolding-system",
    name: "Construction Scaffolding System",
    category: "scaffolding-equipment",
    categoryLabel: "Scaffolding Equipment",
    image: "https://cpimg.tistatic.com/10588644/b/4/Construction-Scaffolding-System.jpg",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Size", value: "8-12 ft" },
      { label: "Load Capacity", value: "50-100 kg" },
      { label: "Surface", value: "Hot Dip Galvanized" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "500 Kilogram" },
      { label: "Supply Ability", value: "5000 Kilogram Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "We provide Construction Scaffolding System built from robust steel with hot dip galvanized finish. Suitable for all types of construction and building projects.",
  },
  {
    id: "se-3",
    slug: "scaffolding-props-jack",
    name: "Scaffolding Props Jack",
    category: "scaffolding-equipment",
    categoryLabel: "Scaffolding Equipment",
    image: "https://cpimg.tistatic.com/10588645/b/4/Scaffolding-Props-Jack.jpg",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Size", value: "4-6 ft" },
      { label: "Load Capacity", value: "50-100 kg" },
      { label: "Surface", value: "Hot Dip Galvanized" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "1 Unit" },
      { label: "Supply Ability", value: "500 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "Scaffolding Props Jack made from steel with 4-6 ft size and 50-100 kg load capacity. Hot dip galvanized for corrosion resistance and long life.",
  },
  {
    id: "se-4",
    slug: "scaffolding-sleeve-clamp",
    name: "Scaffolding Sleeve Clamp",
    category: "scaffolding-equipment",
    categoryLabel: "Scaffolding Equipment",
    image: "https://cpimg.tistatic.com/10588646/b/4/Scaffolding-Sleeve-Clamp.jpg",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Size", value: "Standard" },
      { label: "Surface", value: "Hot Dip Galvanized" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "100 Piece" },
      { label: "Supply Ability", value: "5000 Piece Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "High-quality Scaffolding Sleeve Clamp made from steel with hot dip galvanized surface. Designed for secure connections in scaffolding systems.",
  },
  {
    id: "se-5",
    slug: "standard-cuplock",
    name: "Standard Cuplock",
    category: "scaffolding-equipment",
    categoryLabel: "Scaffolding Equipment",
    image: "https://cpimg.tistatic.com/10588647/b/4/Standard-Cuplock.jpg",
    specs: [
      { label: "Material", value: "Aluminum" },
      { label: "Surface", value: "Pre-Galvanized" },
      { label: "Outer Diameter", value: "48.3 mm" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "100 Kilogram" },
      { label: "Supply Ability", value: "5000 Kilogram Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "Standard Cuplock made from aluminum with pre-galvanized surface treatment. Features 48.3mm outer diameter for standard scaffolding compatibility.",
  },
  {
    id: "se-6",
    slug: "swivel-coupler-scaffolding",
    name: "Swivel Coupler Scaffolding",
    category: "scaffolding-equipment",
    categoryLabel: "Scaffolding Equipment",
    image: "https://cpimg.tistatic.com/10588648/b/4/Swivel-Coupler-Scaffolding.jpg",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Size", value: "40*40 / 50*40 in" },
      { label: "Surface", value: "Hot Dip Galvanized" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "10 Unit" },
      { label: "Supply Ability", value: "500 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "Swivel Coupler for scaffolding made from steel with hot dip galvanized finish. Available in 40*40 and 50*40 inch configurations.",
  },
  {
    id: "se-7",
    slug: "adjustable-base-jacks-pipe",
    name: "Adjustable Base Jacks Pipe",
    category: "scaffolding-equipment",
    categoryLabel: "Scaffolding Equipment",
    image: "https://cpimg.tistatic.com/10588649/b/4/Adjustable-Base-Jacks-Pipe.jpg",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Diameter", value: "600 mm" },
      { label: "Length", value: "550 mm" },
      { label: "Surface", value: "Hot Dip Galvanized" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "10 Unit" },
      { label: "Supply Ability", value: "500 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "Adjustable Base Jacks Pipe made from steel with 600mm diameter and 550mm length. Hot dip galvanized for durability in construction environments.",
  },
  {
    id: "se-8",
    slug: "adjustable-stirrup-heads",
    name: "Adjustable Stirrup Heads",
    category: "scaffolding-equipment",
    categoryLabel: "Scaffolding Equipment",
    image: "https://cpimg.tistatic.com/10588650/b/4/Adjustable-Stirrup-Heads.jpg",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Diameter", value: "600 mm" },
      { label: "Surface", value: "Powder Coating" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "10 Unit" },
      { label: "Supply Ability", value: "500 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "Adjustable Stirrup Heads made from steel with 600mm diameter and powder coating finish. Essential component for scaffolding support systems.",
  },
  {
    id: "se-9",
    slug: "cuplock-scaffolding-system",
    name: "Cuplock Scaffolding System",
    category: "scaffolding-equipment",
    categoryLabel: "Scaffolding Equipment",
    image: "https://cpimg.tistatic.com/10588651/b/4/Cuplock-Scaffolding-System-Rental-Services..jpg",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Thickness", value: "3 mm" },
      { label: "Surface", value: "Hot Dip Galvanized" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "100 Kilogram" },
      { label: "Supply Ability", value: "5000 Kilogram Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "Cuplock Scaffolding System made from 3mm thick steel with hot dip galvanized surface. Provides versatile and secure scaffolding for construction projects.",
    faqs: [
      {
        question: "What is the advantage of cuplock scaffolding?",
        answer:
          "Cuplock systems allow rapid assembly without loose fittings, reducing setup time and improving safety.",
      },
    ],
  },
  {
    id: "se-10",
    slug: "scaffolding-u-head-jack",
    name: "Scaffolding U Head Jack",
    category: "scaffolding-equipment",
    categoryLabel: "Scaffolding Equipment",
    image: "https://cpimg.tistatic.com/10588652/b/4/Scaffolding-U-Head-Jack.jpg",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Load Capacity", value: "50-100 kg" },
      { label: "Surface", value: "Hot Dip Galvanized" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "100 Kilogram" },
      { label: "Supply Ability", value: "5000 Kilogram Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "Scaffolding U Head Jack made from steel with 50-100 kg load capacity. Hot dip galvanized for superior corrosion resistance.",
  },
  {
    id: "se-11",
    slug: "scaffolding-props-and-spans",
    name: "Scaffolding Props and Spans",
    category: "scaffolding-equipment",
    categoryLabel: "Scaffolding Equipment",
    image: "https://cpimg.tistatic.com/10588653/b/4/Scaffolding-Props-And-Spans.jpg",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Size", value: "4-6 ft" },
      { label: "Load Capacity", value: "50-100 kg" },
      { label: "Surface", value: "Hot Dip Galvanized" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "100 Kilogram" },
      { label: "Supply Ability", value: "5000 Kilogram Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "Scaffolding Props and Spans made from steel with 4-6 ft size range and 50-100 kg load capacity. Hot dip galvanized for long-lasting performance.",
  },
  {
    id: "se-12",
    slug: "centering-plates",
    name: "Centering Plates",
    category: "scaffolding-equipment",
    categoryLabel: "Scaffolding Equipment",
    image: "https://cpimg.tistatic.com/10812403/b/4/Centering-Plates.jpeg",
    price: "\u20B940 / Kilogram",
    specs: [
      { label: "Type", value: "Forged" },
      { label: "Surface", value: "Powder Coating" },
      { label: "Load Capacity", value: "1000 kg" },
      { label: "Application", value: "Construction" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "100 Kilogram" },
      { label: "Supply Ability", value: "5000 Kilogram Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "Centering Plates of forged type with powder coating finish. Load capacity of 1000 kg, suitable for heavy-duty construction centering applications.",
  },
  {
    id: "se-13",
    slug: "h-frame-cross-bracing",
    name: "H Frame Cross Bracing",
    category: "scaffolding-equipment",
    categoryLabel: "Scaffolding Equipment",
    image: "https://cpimg.tistatic.com/11673975/b/4/H-Frame-Cross-Bressing.jpeg",
    price: "\u20B91,000 / Kilogram",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Surface", value: "Hot Dip Galvanized" },
      { label: "Application", value: "Construction" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "50 Number" },
      { label: "Delivery Time", value: "1 Week" },
    ],
    description:
      "H Frame Cross Bracing made from steel with hot dip galvanized surface treatment. Essential for structural stability in H-frame scaffolding setups.",
  },

  // ─── SCAFFOLDING RENTAL SERVICE (11) ────────────────────────────────
  {
    id: "sr-1",
    slug: "h-frame-scaffolding-rental",
    name: "H Frame Scaffolding",
    category: "scaffolding-rental",
    categoryLabel: "Scaffolding Rental Service",
    image: "https://cpimg.tistatic.com/10588683/b/4/H-Frame-Scaffolding.jpg",
    images: [
      "https://cpimg.tistatic.com/10588683/b/4/H-Frame-Scaffolding.jpg",
      "https://cpimg.tistatic.com/10812304/b/4/H-Frame-Scaffolding.jpg",
      "https://cpimg.tistatic.com/10812305/b/4/H-Frame-Scaffolding.jpg",
      "https://cpimg.tistatic.com/10812306/b/4/H-Frame-Scaffolding.jpg",
      "https://cpimg.tistatic.com/10812307/b/4/H-Frame-Scaffolding.jpg",
    ],
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Surface", value: "Hot Dip Galvanized" },
      { label: "Application", value: "Construction" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "1 Unit" },
      { label: "Supply Ability", value: "500 Unit Per Month" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "H Frame Scaffolding available on rental basis. Made from steel with hot dip galvanized finish, suitable for all types of construction and maintenance projects.",
  },
  {
    id: "sr-2",
    slug: "adjusted-base-jack-rental",
    name: "Adjusted Base Jack",
    category: "scaffolding-rental",
    categoryLabel: "Scaffolding Rental Service",
    image: "https://cpimg.tistatic.com/10588669/b/4/Adjusted-Base-Jack.jpg",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Surface", value: "Hot Dip Galvanized" },
      { label: "Application", value: "Construction" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "1 Unit" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "Adjusted Base Jack available on rental. Made from steel with hot dip galvanized surface for corrosion resistance in construction environments.",
  },
  {
    id: "sr-3",
    slug: "cuplock-system-on-rental",
    name: "Cuplock System On Rental",
    category: "scaffolding-rental",
    categoryLabel: "Scaffolding Rental Service",
    image: "https://cpimg.tistatic.com/10588670/b/4/Cuplock-System-On-Rental.jpg",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Surface", value: "Galvanized" },
      { label: "Application", value: "Construction" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "100 Kilogram" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "Cuplock System available on rental basis. Our cuplock scaffolding rental comes with all necessary components for quick and secure assembly.",
  },
  {
    id: "sr-4",
    slug: "scaffolding-cross-brace-rental",
    name: "Scaffolding Cross Brace",
    category: "scaffolding-rental",
    categoryLabel: "Scaffolding Rental Service",
    image: "https://cpimg.tistatic.com/10588671/b/4/Scaffolding-Cross-Brace.jpg",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Surface", value: "Hot Dip Galvanized" },
      { label: "Application", value: "Construction" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "1 Unit" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "Scaffolding Cross Brace on rental. Essential for structural stability in scaffolding systems, made from steel with galvanized finish.",
  },
  {
    id: "sr-5",
    slug: "scaffolding-rental",
    name: "Scaffolding Rental",
    category: "scaffolding-rental",
    categoryLabel: "Scaffolding Rental Service",
    image: "https://cpimg.tistatic.com/10588673/b/4/Scaffolding-Rental.jpg",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Types", value: "All Types Available" },
      { label: "Application", value: "Construction" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "1 Unit" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "Comprehensive scaffolding rental services covering all types of scaffolding systems for construction, maintenance, and industrial applications.",
  },
  {
    id: "sr-6",
    slug: "steel-walkway-plank-rental",
    name: "Steel Walkway Plank",
    category: "scaffolding-rental",
    categoryLabel: "Scaffolding Rental Service",
    image: "https://cpimg.tistatic.com/10588677/b/4/Steel-Walkway-Plank.jpg",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Surface", value: "Hot Dip Galvanized" },
      { label: "Application", value: "Construction" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "1 Unit" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "Steel Walkway Plank on rental for safe access on scaffolding structures. Made from steel with hot dip galvanized finish for durability.",
  },
  {
    id: "sr-7",
    slug: "cuplock-system-rental",
    name: "Cuplock System",
    category: "scaffolding-rental",
    categoryLabel: "Scaffolding Rental Service",
    image: "https://cpimg.tistatic.com/10588678/b/4/Cuplock-System.jpg",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Surface", value: "Galvanized" },
      { label: "Application", value: "Construction" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "100 Kilogram" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "Cuplock System available for rental. Fast-assembling scaffolding system with secure cup-and-blade locking mechanism for safe construction access.",
  },
  {
    id: "sr-8",
    slug: "ms-vertical-cuplock-scaffolding",
    name: "MS Vertical Cuplock Scaffolding System",
    category: "scaffolding-rental",
    categoryLabel: "Scaffolding Rental Service",
    image: "https://cpimg.tistatic.com/10588679/b/4/MS-Vertical-Cuplock-Scaffolding-System.jpg",
    specs: [
      { label: "Material", value: "Mild Steel" },
      { label: "Orientation", value: "Vertical" },
      { label: "Surface", value: "Galvanized" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "100 Kilogram" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "MS Vertical Cuplock Scaffolding System for rental. Vertical cuplock system for height-intensive construction projects.",
  },
  {
    id: "sr-9",
    slug: "horizontal-cuplock-system",
    name: "Horizontal Cuplock System",
    category: "scaffolding-rental",
    categoryLabel: "Scaffolding Rental Service",
    image: "https://cpimg.tistatic.com/10588680/b/4/Horizontal-Cuplock-System.jpg",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Orientation", value: "Horizontal" },
      { label: "Surface", value: "Galvanized" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "100 Kilogram" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "Horizontal Cuplock System for rental. Ideal for creating working platforms and horizontal support structures in construction.",
  },
  {
    id: "sr-10",
    slug: "ms-pipe-scaffolding-rental",
    name: "MS Pipe Scaffolding",
    category: "scaffolding-rental",
    categoryLabel: "Scaffolding Rental Service",
    image: "https://cpimg.tistatic.com/10588681/b/4/MS-Pipe-Scaffolding.jpg",
    images: [
      "https://cpimg.tistatic.com/10588681/b/4/MS-Pipe-Scaffolding.jpg",
      "https://cpimg.tistatic.com/11673948/b/4/MS-Pipe-Scaffolding.jpg",
    ],
    specs: [
      { label: "Material", value: "Mild Steel" },
      { label: "Type", value: "Pipe Scaffolding" },
      { label: "Application", value: "Construction" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "1 Unit" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "MS Pipe Scaffolding on rental basis. Traditional pipe-and-clamp scaffolding system suitable for all construction and maintenance projects.",
  },
  {
    id: "sr-11",
    slug: "cuplock-rental",
    name: "Cuplock Rental",
    category: "scaffolding-rental",
    categoryLabel: "Scaffolding Rental Service",
    image: "https://cpimg.tistatic.com/10588682/b/4/Cuplock-Rental.jpg",
    specs: [
      { label: "Material", value: "Steel" },
      { label: "Surface", value: "Galvanized" },
      { label: "Application", value: "Construction" },
    ],
    tradeInfo: [
      { label: "Min. Order Qty", value: "100 Kilogram" },
      { label: "Delivery Time", value: "2-10 Days" },
    ],
    description:
      "Cuplock scaffolding rental service. We provide complete cuplock systems with all accessories for construction and industrial applications.",
  },
]

/** Get a single product by slug */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

/** Get related products (same category, excluding current) */
export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit)
}
