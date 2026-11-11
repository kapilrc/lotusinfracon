import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { SITE_URL, generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/seo"
import "./globals.css"

const googleVerification = (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "")
  .replace(/^google-site-verification=/, "")
  .trim()

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Lotus Infracon | Construction Equipment & Concrete Pump Rental in Pune, Maharashtra",
    template: "%s | Lotus Infracon Pune",
  },
  description:
    "Leading construction equipment rental company in Pune, Maharashtra. We provide Putzmeister concrete pumps, 36m & 42m boom placers, modular cuplock scaffolding & MS pipes across Pune, PCMC & Maharashtra.",
  keywords: [
    "concrete pump rental in pune",
    "boom pump rental pune",
    "construction equipment rental pune",
    "putzmeister concrete pump rental pune",
    "cuplock scaffolding rental pune",
    "scaffolding hire pune maharashtra",
    "heavy equipment rental swargate pune",
    "concrete boom placer on rent pcmc",
    "ms pipes rental pune",
    "lotus infracon pune",
    "construction equipment contractors maharashtra",
    "commercial scaffolding pune",
    "concrete pump hire chakan",
    "stationary concrete pump rental pune",
  ],
  authors: [{ name: "Lotus Infracon", url: SITE_URL }],
  creator: "Lotus Infracon",
  publisher: "Lotus Infracon",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Lotus Infracon | Construction Equipment & Concrete Pump Rental in Pune",
    description:
      "Powering Pune and Maharashtra infrastructure with high-performance Putzmeister concrete pumps, 36m & 42m boom placers, and modular scaffolding rentals.",
    url: SITE_URL,
    siteName: "Lotus Infracon",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-boom-pump.jpg",
        width: 1200,
        height: 630,
        alt: "Lotus Infracon Construction Equipment Rental Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Lotus Infracon | Construction Equipment Rental in Pune, Maharashtra",
    description:
      "Putzmeister concrete pumps, boom pumps, and cuplock scaffolding on hire in Pune, PCMC, and Maharashtra.",
    images: ["/images/hero-boom-pump.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: googleVerification,
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Pune",
    "geo.position": "18.4998;73.8587",
    ICBM: "18.4998, 73.8587",
  },
}

export const viewport: Viewport = {
  themeColor: "#1A1A1A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const localBusinessSchema = generateLocalBusinessSchema()
  const webSiteSchema = generateWebSiteSchema()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
