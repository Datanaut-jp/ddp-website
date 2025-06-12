import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// ヘッダーとフッターをインポートします
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Data Drive Partners',
  description: 'データとAIで、経営の未来をデザインする。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {/* Headerコンポーネントをbodyの直下に配置 */}
        <Header />

        {/* children（各ページの本体）をmainタグで囲む */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footerコンポーネントをmainの後、bodyの閉じる直前に配置 */}
        <Footer />
      </body>
    </html>
  )
}