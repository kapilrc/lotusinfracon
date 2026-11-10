import type { Metadata } from "next"
import { ContactView } from "@/components/contact-view"

export const metadata: Metadata = {
  title:
    "Contact Lotus Infracon Pune Yard | Equipment Rental Hotline & Dispatch",
  description:
    "Connect with Lotus Infracon dispatch yard in Swargate, Pune. Concrete pumps, boom placers, scaffolding rentals. Call +91 90110 27909 or visit Ackriti Chambers, Swargate, Pune - 411037.",
  keywords: [
    "lotus infracon contact number",
    "concrete pump rental swargate pune",
    "scaffolding suppliers pune contact",
    "construction equipment yard pune address",
    "lotus infracon phone number",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Lotus Infracon Pune | Equipment Rental Inquiries",
    description:
      "Get fast commercial quotes for concrete pumps, boom placers, and scaffolding in Pune and Maharashtra. Call +91 90110 27909.",
    url: "/contact",
  },
}

export default function ContactPage() {
  return <ContactView />
}
