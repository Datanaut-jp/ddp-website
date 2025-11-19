import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script' // Scriptコンポーネントをインポート
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTopButton } from '@/components/common/ScrollToTopButton'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Datanaut | データの宇宙に、地図と航路を。',
  description:
    'Datanautは、データとAIの活用を強みとする、中小企業・個人事業主向けの経営コンサルティング会社です。',
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/apple-icon.png',
  },
  // Googleサーチコンソールの認証タグ
  verification: {
    google: 'sqQ9uaSCsTuc8xiz1ZjKRfweWBW6p36hd-5NjXF3_w4',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DSH9MN0XV5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DSH9MN0XV5');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  )
}