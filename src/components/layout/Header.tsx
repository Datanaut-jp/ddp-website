'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/vision', label: 'Vision' },
  { href: '/service', label: 'Service' },
  { 
    href: '/cases',
    label: '資料・事例',
    children: [
      { href: '/cases', label: '導入事例' },
      { href: '/resources', label: 'お役立ち資料' },
      { href: '/faq', label: 'よくあるご質問' },
    ]
  }, 
  { href: '/company', label: 'Company' },
  { href: '/blog', label: '公式note' }, 
]

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  
  const pathname = usePathname()

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

        {/* PC用ナビゲーションメニュー */}
        <div className="hidden items-center space-x-8 md:flex">
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => {
              const hasDropdown = !!item.children;
              
              // 親メニューのアクティブ判定ロジックを強化
              // 1. 自身のhrefと一致するか
              // 2. または、子メニューのいずれかのhrefと一致するか
              const isActiveParent = 
                pathname === item.href || 
                (item.children?.some(child => pathname === child.href) ?? false);

              return (
                <div 
                  key={item.label} 
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => hasDropdown && setIsDropdownOpen(true)}
                  onMouseLeave={() => hasDropdown && setIsDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`link-underline text-sm font-semibold py-2 flex items-center transition-colors duration-200
                      ${isActiveParent ? 'text-[#305A9C]' : 'text-gray-700 hover:text-[#305A9C]'}`}
                  >
                    {item.label}
                    {hasDropdown && (
                      <span 
                        className={`ml-1 text-[10px] transition-transform duration-300 ease-in-out
                          ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}
                          ${isActiveParent ? 'text-[#305A9C]' : 'text-gray-400 group-hover:text-[#305A9C]'}
                        `}
                      >
                        ▼
                      </span>
                    )}
                  </Link>

                  {item.children && (
                    <div 
                      className={`absolute left-1/2 top-full -translate-x-1/2 pt-4 w-52 transition-all duration-300 ease-out origin-top
                        ${isDropdownOpen 
                          ? 'opacity-100 translate-y-0 visible' 
                          : 'opacity-0 -translate-y-2 invisible pointer-events-none'}`}
                    >
                      <div className="absolute -top-4 left-0 h-4 w-full bg-transparent" />
                      
                      <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden ring-1 ring-black ring-opacity-5">
                        {item.children.map((child) => {
                          const isActive = pathname === child.href
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-5 py-3.5 text-sm transition-all duration-200 border-l-4
                                ${isActive 
                                  ? 'border-[#305A9C] bg-blue-50 text-[#305A9C] font-bold' 
                                  : 'border-transparent text-gray-600 hover:border-blue-200 hover:bg-gray-50 hover:text-[#305A9C]'}`}
                            >
                              {child.label}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>
          
          <Link
            href="/contact"
            className="rounded-md bg-[#305A9C] px-4 py-2 text-sm font-medium text-white shadow-md hover:shadow-lg transition-all hover:bg-[#284B82] hover:-translate-y-0.5"
          >
            相談窓口
          </Link>
        </div>

        {/* ハンバーガーメニューボタン */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-md p-2 text-gray-700 transition hover:bg-gray-100" aria-label="メニューを開く">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </div>

      {/* モバイル用メニュー */}
      {isMenuOpen && (
        <div className="absolute w-full bg-white shadow-md md:hidden animate-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => {
              // モバイルメニューでも同様に親のアクティブ判定を行う
              const isActiveParent = 
                pathname === item.href || 
                (item.children?.some(child => pathname === child.href) ?? false);

              return (
                <div key={item.label}>
                  <Link 
                    href={item.href} 
                    onClick={() => setIsMenuOpen(false)} 
                    className={`block rounded-md p-3 text-base font-medium transition-colors
                      ${isActiveParent ? 'text-[#305A9C] bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    {item.label}
                  </Link>
                  
                  {item.children && (
                    <div className="pl-4 ml-2 border-l-2 border-gray-100 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block rounded-md p-2 text-sm transition-colors
                            ${pathname === child.href 
                              ? 'text-[#305A9C] font-bold bg-blue-50' 
                              : 'text-gray-600 hover:text-[#305A9C] hover:bg-gray-50'}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}

            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="mt-4 rounded-md bg-[#305A9C] p-3 text-center font-medium text-white shadow-sm">
              相談窓口
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}