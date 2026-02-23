import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lotus Infracon | Construction Equipment Rental & Scaffolding Solutions',
  description:
    'Leading provider of concrete pumps, boom pumps, scaffolding systems, and construction equipment rental services across India. Established in 2006 in Pune, Maharashtra.',
  keywords: [
    'construction equipment rental',
    'concrete pump rental',
    'boom pump rental',
    'scaffolding rental',
    'scaffolding equipment',
    'Putzmeister concrete pump',
    'concrete placing boom',
    'cuplock scaffolding',
    'H frame scaffolding',
    'MS pipes rental',
    'Lotus Infracon',
    'construction equipment Pune',
    'boom placer rental India',
  ],
}

export const viewport: Viewport = {
  themeColor: '#1A1A1A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
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
