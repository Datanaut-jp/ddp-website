import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTopButton } from '@/components/common/ScrollToTopButton' // ← ここをインポート

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTopButton /> {/* ← ここにボタンを配置 */}
      </body>
    </html>
  )
}