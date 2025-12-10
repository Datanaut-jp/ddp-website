import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
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
  // Googleサーチコンソールの認証タグ（維持）
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
      {/* GTM Script (Head用) - next/scriptを使って最適化 */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5TB4Q2D5');
        `}
      </Script>
      
      <body className={inter.className}>
        {/* GTM NoScript (Body用) - Reactのstyle記法に修正済み */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5TB4Q2D5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  )
}