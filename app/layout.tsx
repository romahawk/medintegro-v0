import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import { BackToTop } from '@/components/back-to-top'
import { ScrollIndicator } from '@/components/scroll-indicator'
import './globals.css'

const _inter = Inter({ subsets: ["latin", "cyrillic"] })

const UK_TITLE = "Medintegro | Інтеграція операційних та медичних систем"
const UK_DESCRIPTION =
  "Medintegro проєктує та інтегрує операційні, хірургічні відеосистеми, медичну інфраструктуру та обладнання для сучасних клінік."
const UK_OG_DESCRIPTION =
  "Інтеграція операційних, хірургічні відеосистеми, медична інфраструктура та обладнання для сучасних клінік."

export const metadata: Metadata = {
  metadataBase: new URL("https://www.medintegro.com.ua"),
  title: {
    default: UK_TITLE,
    template: "%s | Medintegro",
  },
  description: UK_DESCRIPTION,
  alternates: {
    canonical: "https://www.medintegro.com.ua/",
    languages: {
      "uk-UA": "https://www.medintegro.com.ua/",
      en: "https://www.medintegro.com.ua/en",
      "x-default": "https://www.medintegro.com.ua/",
    },
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
    title: UK_TITLE,
    description: UK_OG_DESCRIPTION,
    images: [
      {
        url: "/og/og-image-uk.jpg",
        width: 1200,
        height: 630,
        alt: "Інтеграція операційних та медична інфраструктура від Medintegro",
      },
    ],
    locale: "uk_UA",
  },
  twitter: {
    card: "summary_large_image",
    title: UK_TITLE,
    description: UK_OG_DESCRIPTION,
    images: ["/og/og-image-uk.jpg"],
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
      </body>
    </html>
  )
}
