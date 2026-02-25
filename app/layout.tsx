import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import { BackToTop } from '@/components/back-to-top'
import { ScrollIndicator } from '@/components/scroll-indicator'
import './globals.css'

const _inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: {
    default: 'Medintegro | Medical Equipment Integration',
    template: '%s | Medintegro',
  },
  description:
    'Precision medical equipment solutions and operating room integration for hospitals, clinics, and surgical centers across Europe.',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
