import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import { BackToTop } from '@/components/back-to-top'
import { ScrollIndicator } from '@/components/scroll-indicator'
import { absoluteUrl, siteConfig } from '@/lib/site'
import './globals.css'

const _inter = Inter({ subsets: ["latin", "cyrillic"] })

const OG_DESCRIPTION =
  "Operating room integration, surgical video systems, medical equipment, and hospital infrastructure solutions for clinics and healthcare projects."

export const metadata: Metadata = {
  metadataBase: new URL("https://www.medintegro.com.ua"),
  title: {
    default: "Medintegro | Operating Room & Medical Infrastructure Integration",
    template: "%s | Medintegro",
  },
  description:
    "Medintegro designs and integrates operating rooms, surgical video systems, medical infrastructure, and hospital equipment solutions for modern healthcare facilities.",
  alternates: {
    canonical: "https://www.medintegro.com.ua/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-light-32.png", type: "image/png", sizes: "32x32", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark-32.png",  type: "image/png", sizes: "32x32", media: "(prefers-color-scheme: dark)"  },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon-light-180.png",
  },
  openGraph: {
    type: "website",
    siteName: "Medintegro",
    url: "https://www.medintegro.com.ua/",
    title: "Medintegro | OR & Medical Infrastructure Integration",
    description: OG_DESCRIPTION,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Modern integrated operating room by Medintegro",
      },
    ],
    locale: "uk_UA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medintegro | OR & Medical Infrastructure Integration",
    description: OG_DESCRIPTION,
    images: ["/images/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk" className="dark" suppressHydrationWarning>
      <head>
        <script
          id="theme-init"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('medintegro-theme');if(t==='light'){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Providers>
          {children}
          <ScrollIndicator />
          <BackToTop />
        </Providers>
        <Analytics />
        {/* Future chatbot integration:
            Tidio / Crisp / Chatbase script can be added here after provider selection.
            Do not enable before production key is available.
        */}
      </body>
    </html>
  )
}
