import Link from 'next/link'

const footerLinks = [
  { href: '/vision', label: 'ビジョン' },
  { href: '/service', label: '事業内容' },
  { href: '/blog', label: 'ブログ' },
  { href: '/company', label: '会社概要' },
  { href: '/contact', label: '相談窓口' },
]

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* ロゴと会社名 */}
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Datanaut</h2>
            <p className="text-sm text-gray-400">
              -データ宇宙の航海士たち-
            </p>
          </div>

          {/* サイトマップ */}
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-gray-300">
              Menu
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* その他リンク（仮） */}
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-gray-300">
              Support
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Datanaut. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}