'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// navItems をここで定義し、下のJSX内で確実に使用します
const navItems = [
  { href: '/vision', label: 'Vision' },
  { href: '/service', label: 'Service' },
  { href: '/resources', label: '資料・事例' }, 
  { href: '/company', label: 'Company' },
  { href: '/blog', label: '公式note' }, 
]

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* ロゴ */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-full-color.svg"
            alt="Datanaut ロゴ"
            width={180}
            height={41}
            className="hidden md:block"
            priority
          />
          <Image
            src="/images/logo-icon-color.svg"
            alt="Datanaut ロゴ"
            width={40}
            height={40}
            className="block md:hidden"
            priority
          />
        </Link>

        {/* ナビゲーションメニュー */}
        <div className="hidden items-center space-x-8 md:flex">
          <nav className="flex items-center space-x-8">
            {/* ここで navItems を使っています */}
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="link-underline text-sm font-semibold text-gray-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* CTAボタン */}
          <Link
            href="/contact"
            className="rounded-md bg-[#305A9C] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#284B82]"
          >
            相談窓口
          </Link>
        </div>

        {/* ハンバーガーメニュー */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-md p-2 text-gray-700 transition hover:bg-gray-100" aria-label="メニューを開く">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </div>

      {/* モバイル用メニュー */}
      {isMenuOpen && (
        <div className="absolute w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col space-y-2 p-4">
            {/* ここでも navItems を使っています */}
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} className="rounded-md p-3 text-base font-medium text-gray-700 hover:bg-gray-50">
                {item.label}
              </Link>
            ))}
            
            <div className="pl-4 text-sm text-gray-500 border-l-2 border-gray-100 ml-2">
               <Link href="/cases" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-blue-600">導入事例</Link>
               <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-blue-600">よくあるご質問</Link>
            </div>

            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="mt-2 rounded-md bg-[#305A9C] p-3 text-center font-medium text-white">
              相談窓口
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}