'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

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
    ],
  },
  { href: '/company', label: 'Company' },
  { href: '/blog', label: '公式note' },
]

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(
    null,
  )

  const pathname = usePathname()

  useEffect(() => {
    // ページ遷移したらメニューとサブメニューを閉じる
    setIsMenuOpen(false)
    setOpenMobileSubMenu(null)
  }, [pathname])

  const toggleMobileSubMenu = (label: string) => {
    if (openMobileSubMenu === label) {
      setOpenMobileSubMenu(null)
    } else {
      setOpenMobileSubMenu(label)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* ロゴ */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-full-color.svg"
            alt="Datanaut ロゴ"
            width={200}
            height={44}
            className="hidden md:block"
            priority
          />
          <Image
            src="/images/logo-icon-color.svg"
            alt="Datanaut ロゴ"
            width={44}
            height={44}
            className="block md:hidden"
            priority
          />
        </Link>

        {/* PC用ナビゲーションメニュー */}
        <div className="hidden items-center space-x-10 md:flex">
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => {
              const hasDropdown = !!item.children
              const isActiveParent =
                pathname === item.href ||
                (item.children?.some((child) => pathname === child.href) ??
                  false)

              return (
                <div
                  key={item.label}
                  className="group relative flex h-full items-center"
                  onMouseEnter={() => hasDropdown && setIsDropdownOpen(true)}
                  onMouseLeave={() => hasDropdown && setIsDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`link-underline flex items-center py-3 text-lg font-semibold transition-colors duration-200 ${isActiveParent ? 'text-[#305A9C]' : 'text-gray-700 hover:text-[#305A9C]'}`}
                  >
                    {item.label}
                    {hasDropdown && (
                      <span
                        className={`ml-1 text-[10px] transition-transform duration-300 ease-in-out ${isDropdownOpen ? 'rotate-180' : 'rotate-0'} ${isActiveParent ? 'text-[#305A9C]' : 'text-gray-400 group-hover:text-[#305A9C]'} `}
                      >
                        ▼
                      </span>
                    )}
                  </Link>

                  {item.children && (
                    <div
                      className={`absolute top-full left-1/2 w-52 origin-top -translate-x-1/2 pt-4 transition-all duration-300 ease-out ${
                        isDropdownOpen
                          ? 'visible translate-y-0 opacity-100'
                          : 'pointer-events-none invisible -translate-y-2 opacity-0'
                      }`}
                    >
                      <div className="absolute -top-4 left-0 h-4 w-full bg-transparent" />

                      <div className="ring-opacity-5 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl ring-1 ring-black">
                        {item.children.map((child) => {
                          const isActive = pathname === child.href
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block border-l-4 px-5 py-3.5 text-base transition-all duration-200 ${
                                isActive
                                  ? 'border-[#305A9C] bg-blue-50 font-bold text-[#305A9C]'
                                  : 'border-transparent text-gray-600 hover:border-blue-200 hover:bg-gray-50 hover:text-[#305A9C]'
                              }`}
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
            className="rounded-md bg-[#305A9C] px-6 py-3 text-base font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#284B82] hover:shadow-lg"
          >
            相談窓口
          </Link>
        </div>

        {/* ハンバーガーメニューボタン */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 text-gray-700 transition hover:bg-gray-100"
            aria-label="メニューを開く"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
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

      {/* モバイル用メニュー */}
      {isMenuOpen && (
        <div className="animate-in slide-in-from-top-5 absolute h-[calc(100vh-64px)] w-full overflow-y-auto bg-white shadow-md duration-200 md:hidden">
          <nav className="flex flex-col space-y-1 p-4">
            {navItems.map((item) => {
              const hasDropdown = !!item.children
              const isOpen = openMobileSubMenu === item.label
              const isActiveParent =
                pathname === item.href ||
                (item.children?.some((child) => pathname === child.href) ??
                  false)

              return (
                <div
                  key={item.label}
                  className="border-b border-gray-100 last:border-0"
                >
                  {hasDropdown ? (
                    <button
                      onClick={() => toggleMobileSubMenu(item.label)}
                      className={`flex w-full items-center justify-between p-4 text-base font-medium transition-colors ${isActiveParent ? 'bg-blue-50 text-[#305A9C]' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      {item.label}
                      <span
                        className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      >
                        ▼
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block p-4 text-base font-medium transition-colors ${pathname === item.href ? 'bg-blue-50 text-[#305A9C]' : 'text-gray-700 hover:bg-gray-50'}`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {hasDropdown && isOpen && (
                    <div className="animate-in slide-in-from-top-2 bg-gray-50 duration-200">
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block border-l-4 py-3 pr-4 pl-8 text-sm transition-colors ${
                            pathname === child.href
                              ? 'border-[#305A9C] bg-white font-bold text-[#305A9C]'
                              : 'border-transparent text-gray-600 hover:text-[#305A9C]'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}

            <div className="px-4 pt-6 pb-8">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full rounded-lg bg-[#305A9C] p-4 text-center text-base font-bold text-white shadow-md transition-transform active:scale-95"
              >
                相談窓口
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
