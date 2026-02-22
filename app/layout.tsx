import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lotus Infracon | Premium Construction Equipment Rental',
  description:
    'Powering India\'s Infrastructure with Precision Rental Solutions. Concrete pumps, boom pumps, scaffolding systems, and pipe rentals for Tier-1 contractors.',
  keywords: [
    'construction equipment rental',
    'concrete pump rental',
    'boom pump',
    'scaffolding rental',
    'Putzmeister',
    'India infrastructure',
    'Lotus Infracon',
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
