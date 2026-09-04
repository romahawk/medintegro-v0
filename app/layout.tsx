import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import { BackToTop } from '@/components/back-to-top'
import { ScrollIndicator } from '@/components/scroll-indicator'
import { HOME_SEO, OG_IMAGE, SITE_URL, canonicalUrl } from '@/lib/seo'
import './globals.css'

const _inter = Inter({ subsets: ["latin", "cyrillic"] })

/**
 * Site-wide defaults only. Per-route titles, descriptions, canonicals and
 * hreflang live in lib/seo.ts and are applied by each page's metadata export.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_SEO.uk.title,
    template: "%s | Medintegro",
  },
  description: HOME_SEO.uk.description,
  alternates: {
    canonical: canonicalUrl("/"),
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
    locale: "uk_UA",
    url: canonicalUrl("/"),
    title: HOME_SEO.uk.title,
    description: HOME_SEO.uk.ogDescription,
    images: [
      {
        url: OG_IMAGE.uk,
        width: 1200,
        height: 630,
        alt: "Інтеграція операційних та медична інфраструктура від Medintegro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_SEO.uk.title,
    description: HOME_SEO.uk.ogDescription,
    images: [OG_IMAGE.uk],
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
            __html: `(function(){try{var s=localStorage.getItem('medintegro-theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s==='light'||s==='dark'?s:d?'dark':'light';document.documentElement.classList.toggle('dark',t==='dark');document.documentElement.classList.toggle('light',t==='light');document.documentElement.style.colorScheme=t}catch(e){}})()`,
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
      </body>
    </html>
  )
}
