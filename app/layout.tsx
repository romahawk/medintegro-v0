import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import { BackToTop } from '@/components/back-to-top'
import { ScrollIndicator } from '@/components/scroll-indicator'
import { absoluteUrl, siteConfig } from '@/lib/site'
import './globals.css'

const _inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: {
    default: 'Medintegro | Medical Infrastructure Integration',
    template: '%s | Medintegro',
  },
  metadataBase: new URL(siteConfig.siteUrl),
  description: siteConfig.description,
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Medintegro | Medical Infrastructure Integration',
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl('/images/hero-or.jpg'),
        width: 1600,
        height: 900,
        alt: 'Integrated operating room delivered by Medintegro',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medintegro | Medical Infrastructure Integration',
    description: siteConfig.description,
    images: [absoluteUrl('/images/hero-or.jpg')],
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
