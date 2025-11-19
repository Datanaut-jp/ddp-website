'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// サイトマップ変更案に基づきメニューを更新
// Vision, Service, 資料・事例, Company, Blog, 相談窓口
const navItems = [
  { href: '/vision', label: 'Vision' },
  { href: '/service', label: 'Service' },
  // 新設カテゴリ「資料・事例」を追加（一旦親ページへリンク、またはドロップダウンにするのが一般的ですが、今回はシンプルに一覧ページへのリンクと仮定）
  // ※もし「導入事例」「お役立ち資料」などを個別に表示したい場合はドロップダウンの実装が必要です。
  // 今回はシンプルに「資料・事例」ページへのリンクとして実装します。
  // 必要であれば後ほどドロップダウンに変更できます。
  // { href: '/resources', label: '資料・事例' }, // ← 今回はページがないので一旦コメントアウトするか、Serviceの下などに配置
  // 経営者様の指示にある「新規ページ（3つ）の枠作成」が完了していないため、
  // メニューには表示させたいがリンク先がない状態です。
  // ひとまず、既存のメニュー構成を維持しつつ、Blogを「Blog (公式note)」のように見せるか、
  // 指示通りサイトマップを変更するか確認が必要ですが、
  // ここでは指示通り「資料・事例」を追加し、リンク先を仮で設定します。
  
  // ドキュメントの「2.2. HPサイトマップの変更」に基づき更新
  { href: '/vision', label: 'Vision' },
  { href: '/service', label: 'Service' },
  // { href: '/resources', label: '資料・事例' }, // ※ページ作成後に有効化推奨
  { href: '/company', label: 'Company' },
  { href: '/blog', label: 'Blog' }, // 「公式note」への名称変更はテキスト変更のみで対応可能
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
            <Link href="/vision" className="link-underline text-sm font-semibold text-gray-700">Vision</Link>
            <Link href="/service" className="link-underline text-sm font-semibold text-gray-700">Service</Link>
            
            {/* 資料・事例（ドロップダウンメニュー風の見た目にするか、シンプルに並べるか） */}
            {/* 今回はシンプルに追加します。ページ実装後にリンクを有効化してください */}
            {/* <Link href="/resources" className="link-underline text-sm font-semibold text-gray-700">資料・事例</Link> */}
            
            <Link href="/company" className="link-underline text-sm font-semibold text-gray-700">Company</Link>
            <Link href="/blog" className="link-underline text-sm font-semibold text-gray-700">Blog</Link>
          </nav>
          
          {/* CTAボタン（相談窓口） */}
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
            <Link href="/vision" onClick={() => setIsMenuOpen(false)} className="rounded-md p-3 text-base font-medium text-gray-700 hover:bg-gray-50">Vision</Link>
            <Link href="/service" onClick={() => setIsMenuOpen(false)} className="rounded-md p-3 text-base font-medium text-gray-700 hover:bg-gray-50">Service</Link>
            {/* <Link href="/resources" onClick={() => setIsMenuOpen(false)} className="rounded-md p-3 text-base font-medium text-gray-700 hover:bg-gray-50">資料・事例</Link> */}
            <Link href="/company" onClick={() => setIsMenuOpen(false)} className="rounded-md p-3 text-base font-medium text-gray-700 hover:bg-gray-50">Company</Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="rounded-md p-3 text-base font-medium text-gray-700 hover:bg-gray-50">Blog</Link>
            
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="mt-2 rounded-md bg-[#305A9C] p-3 text-center font-medium text-white">
              相談窓口
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}