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
  status: "available" | "on-hire" | "maintenance"
  statusLabel: string
  description: string
}

export const categories = [
  { id: "all", label: "All Equipment" },
  { id: "concrete-pumps", label: "Concrete Pumps" },
  { id: "construction-equipment", label: "Construction Equipment" },
  { id: "scaffolding", label: "Scaffolding Systems" },
  { id: "pipes", label: "Pipes Rental" },
] as const

export const products: Product[] = [
  {
    id: "1",
    slug: "putzmeister-1403",
    name: "Putzmeister BSF 1403",
    category: "concrete-pumps",
    categoryLabel: "Concrete Pumps",
    image: "/images/concrete-pump.jpg",
    specs: [
      { label: "Output", value: "130 m\u00B3/h" },
      { label: "Pressure", value: "85 bar" },
      { label: "Cylinder", value: "200 x 1400 mm" },
    ],
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "High-performance stationary concrete pump ideal for high-rise buildings and large-scale infrastructure projects. Delivers consistent output with superior pressure handling.",
  },
  {
    id: "2",
    slug: "putzmeister-1407",
    name: "Putzmeister BSF 1407",
    category: "concrete-pumps",
    categoryLabel: "Concrete Pumps",
    image: "/images/concrete-pump.jpg",
    specs: [
      { label: "Output", value: "160 m\u00B3/h" },
      { label: "Pressure", value: "108 bar" },
      { label: "Cylinder", value: "230 x 1400 mm" },
    ],
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Heavy-duty stationary pump designed for demanding concrete placement tasks. Optimal for mega infrastructure projects requiring high-volume concrete delivery.",
  },
  {
    id: "3",
    slug: "truck-mounted-36m",
    name: "Truck Mounted Boom Pump 36M",
    category: "construction-equipment",
    categoryLabel: "Construction Equipment",
    image: "/images/hero-boom-pump.jpg",
    specs: [
      { label: "Reach", value: "36 meters" },
      { label: "Output", value: "160 m\u00B3/h" },
      { label: "Arms", value: "4-Section RZ" },
    ],
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Versatile truck-mounted concrete boom pump with 36-meter vertical reach. Perfect for medium to large construction sites with excellent maneuverability.",
  },
  {
    id: "4",
    slug: "boom-pump-42m",
    name: "Boom Pump 42M",
    category: "construction-equipment",
    categoryLabel: "Construction Equipment",
    image: "/images/hero-boom-pump.jpg",
    specs: [
      { label: "Reach", value: "42 meters" },
      { label: "Output", value: "180 m\u00B3/h" },
      { label: "Arms", value: "5-Section RZ" },
    ],
    status: "on-hire",
    statusLabel: "Currently On Hire",
    description:
      "Extended-reach boom pump offering 42-meter vertical reach for tall structures. Ideal for high-rise construction and bridge projects.",
  },
  {
    id: "5",
    slug: "cuplock-scaffolding",
    name: "Cuplock Scaffolding System",
    category: "scaffolding",
    categoryLabel: "Scaffolding Systems",
    image: "/images/scaffolding.jpg",
    specs: [
      { label: "Load", value: "20 kN/m\u00B2" },
      { label: "Height", value: "Up to 60m" },
      { label: "Material", value: "Hot-Dip Galvanized" },
    ],
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Industry-standard cuplock scaffolding with rapid assembly mechanism. Suitable for all types of construction, maintenance, and industrial access requirements.",
  },
  {
    id: "6",
    slug: "h-frame-scaffolding",
    name: "H-Frame Scaffolding System",
    category: "scaffolding",
    categoryLabel: "Scaffolding Systems",
    image: "/images/scaffolding.jpg",
    specs: [
      { label: "Load", value: "15 kN/m\u00B2" },
      { label: "Height", value: "Up to 40m" },
      { label: "Material", value: "Mild Steel" },
    ],
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Economical H-frame scaffolding system for routine construction and building maintenance. Quick to erect and dismantle with standardized components.",
  },
  {
    id: "7",
    slug: "ms-pipes-rental",
    name: "MS Pipes (All Sizes)",
    category: "pipes",
    categoryLabel: "Pipes Rental",
    image: "/images/pipes.jpg",
    specs: [
      { label: "Diameter", value: "100-600 mm" },
      { label: "Length", value: "6m / 12m" },
      { label: "Grade", value: "IS 1239 / IS 3589" },
    ],
    status: "available",
    statusLabel: "Available for Immediate Hire",
    description:
      "Full range of mild steel pipes available for construction, plumbing, and industrial applications. All standard sizes with bulk availability.",
  },
  {
    id: "8",
    slug: "putzmeister-stationary-pump",
    name: "Putzmeister BSA 1005",
    category: "concrete-pumps",
    categoryLabel: "Concrete Pumps",
    image: "/images/concrete-pump.jpg",
    specs: [
      { label: "Output", value: "53 m\u00B3/h" },
      { label: "Pressure", value: "55 bar" },
      { label: "Cylinder", value: "160 x 1000 mm" },
    ],
    status: "maintenance",
    statusLabel: "Under Maintenance",
    description:
      "Compact stationary concrete pump for small to medium projects. Excellent for residential construction and limited-access job sites.",
  },
]
