'use client' // ← ファイルの先頭にこの行を追加してください

import Link from 'next/link'
import { useState } from 'react' // useStateをインポート

const navItems = [
  { href: '/vision', label: 'ビジョン' },
  { href: '/service', label: '事業内容' },
  { href: '/blog', label: 'ブログ' },
  { href: '/company', label: '会社概要' },
]

export const Header = () => {
  // モバイルメニューの開閉状態を管理するためのState
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* ロゴ */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          Data Drive Partners
        </Link>

        {/* PC用メニュー（中〜大画面で表示） */}
        <div className="hidden items-center space-x-6 md:flex">
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700"
          >
            相談窓口
          </Link>
        </div>

        {/* ハンバーガーボタン（小画面で表示） */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 text-gray-700 transition hover:bg-gray-100"
            aria-label="メニューを開く"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* モバイル用メニュー（開閉状態に応じて表示） */}
      {isMenuOpen && (
        <div className="absolute w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md p-2 text-gray-700 hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-md bg-blue-600 p-2 text-center text-white"
            >
              相談窓口
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}