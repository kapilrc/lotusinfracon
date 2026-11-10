import { Product } from "./products"
import { CONTACT, SITE } from "./constants"

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://lotusinfracon.in"

export const DEFAULT_GEO = {
  latitude: 18.4998,
  longitude: 73.8587,
  region: "IN-MH",
  placename: "Pune, Maharashtra, India",
}

export const TARGET_AREAS = [
  "Pune",
  "Pimpri-Chinchwad",
  "Swargate",
  "Chakan",
  "Talegaon",
  "Hinjawadi",
  "Hadapsar",
  "Ranjangaon",
  "Bhosari",
  "Kharadi",
  "Wagholi",
  "Navi Mumbai",
  "Mumbai",
  "Maharashtra",
]

export const PUNE_FAQS = [
  {
    question: "How do I rent a Putzmeister concrete pump in Pune?",
    answer:
      "You can rent a Putzmeister concrete pump (BSA 1403, 1405, or 1407) from Lotus Infracon by calling +91 90110 27909 or submitting an inquiry on lotusinfracon.in. We offer flexible monthly and project-based rental terms with immediate dispatch from our Swargate Pune depot to sites across Pune, PCMC, and Maharashtra.",
  },
  {
    question: "What boom pump lengths are available for hire in Pune and Maharashtra?",
    answer:
      "Lotus Infracon provides 36-meter and 42-meter truck-mounted concrete boom pumps, as well as stationary placing booms. Each unit comes with certified, experienced operators, high-pressure pipeline accessories, and 24/7 technical breakdown support across Pune, Chakan, Talegaon, and surrounding regions.",
  },
  {
    question: "Which areas in Pune and Maharashtra does Lotus Infracon serve?",
    answer:
      "We provide prompt equipment mobilization across all regions of Pune and Pimpri-Chinchwad (PCMC), including Swargate, Hinjawadi, Chakan MIDC, Talegaon, Hadapsar, Ranjangaon, Bhosari, Kharadi, and Wagholi, as well as Pan-Maharashtra coverage including Mumbai, Navi Mumbai, Nashik, and Nagpur.",
  },
  {
    question: "What scaffolding systems are available for rent from your Pune yard?",
    answer:
      "We stock over 1,000 metric tons of modular Cuplock scaffolding (standards and ledgers), heavy-duty H-frame scaffolding, adjustable base jacks, U-head jacks, scaffolding props, walkway planks, centering plates, and MS pipes at our Pune yard ready for immediate site delivery.",
  },
  {
    question: "What is the turnaround time for equipment delivery to construction sites in Pune?",
    answer:
      "For standard concrete pumps, scaffolding systems, and pipes available in our Swargate Pune yard, delivery turnaround is typically within 24 to 48 hours following contract confirmation. Emergency breakdown replacements and boom pump deployments can often be coordinated within hours.",
  },
  {
    question: "Are operators and maintenance engineers included with concrete pump rentals?",
    answer:
      "Yes. Lotus Infracon provides certified, safety-trained machine operators and maintenance mechanics with our concrete boom pumps and stationary pumps, guaranteeing maximum uptime and compliance with Tier-1 safety standards.",
  },
]

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EquipmentRentalAgency",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE.name,
    alternateName: ["Lotus Infracon Pune", "Lotus Infracon Construction Equipment Rental"],
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/images/hero-boom-pump.jpg`,
    description:
      "Leading construction equipment rental company in Pune, Maharashtra. We provide Putzmeister concrete pumps, 36m & 42m boom placers, modular cuplock scaffolding & MS pipes across Pune, PCMC & Maharashtra.",
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: "₹₹₹",
    taxID: SITE.gstin,
    foundingDate: SITE.foundedYear,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Office No. 303, 3rd Floor, Ackriti Chambers, Pune Satara Road, Swargate",
      addressLocality: CONTACT.city,
      addressRegion: CONTACT.state,
      postalCode: CONTACT.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: DEFAULT_GEO.latitude,
      longitude: DEFAULT_GEO.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    areaServed: TARGET_AREAS.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    founder: {
      "@type": "Person",
      name: SITE.managingDirector,
      jobTitle: "Managing Director",
    },
    employee: [
      {
        "@type": "Person",
        name: SITE.marketingHead,
        jobTitle: "Marketing Head",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Equipment Rental Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Concrete Pumps Rental",
        },
        {
          "@type": "OfferCatalog",
          name: "Boom Pump Rental",
        },
        {
          "@type": "OfferCatalog",
          name: "Cuplock Scaffolding Rental",
        },
        {
          "@type": "OfferCatalog",
          name: "MS Pipes Rental",
        },
      ],
    },
  }
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Lotus Infracon",
    publisher: {
      "@id": `${SITE_URL}/#localbusiness`,
    },
    inLanguage: "en-IN",
  }
}

export function generateProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/products/${product.slug}#product`,
    name: product.name,
    image: `${SITE_URL}${product.image}`,
    description: product.description,
    sku: `LOTUS-${product.id.padStart(3, "0")}`,
    mpn: product.slug,
    brand: {
      "@type": "Brand",
      name: "Lotus Infracon",
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/products/${product.slug}`,
      priceCurrency: "INR",
      price: "1000",
      priceValidUntil: "2028-12-31",
      availability:
        product.status === "available"
          ? "https://schema.org/InStock"
          : "https://schema.org/LimitedAvailability",
      itemCondition: "https://schema.org/UsedCondition",
      areaServed: {
        "@type": "Place",
        name: "Pune, Maharashtra, India",
      },
      seller: {
        "@id": `${SITE_URL}/#localbusiness`,
      },
    },
  }
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  }
}

export function generateFaqSchema(
  faqs: { question: string; answer: string }[] = PUNE_FAQS
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

