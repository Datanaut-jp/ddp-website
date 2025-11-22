import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          
          {/* ロゴ部分（①構成）＋ ②のフォントサイズ・ロゴサイズ */}
          <div className="col-span-2 space-y-4 md:col-span-1">
            <Image
              src="/images/logo-full-white.svg"
              alt="Datanaut ロゴ"
              width={160}      // ←②のサイズ
              height={36}      // ←②のサイズ
            />
            <p className="text-base text-gray-400">-データ宇宙の航海士たち-</p>
          </div>

          {/* Menu（①構成）＋ ②フォントサイズ反映 */}
          <div>
            <h3 className="font-semibold tracking-wider text-gray-300 uppercase mb-4 text-base">
              Menu
            </h3>
            <ul className="space-y-2 text-base">
              <li><Link href="/vision" className="text-gray-400 transition-colors hover:text-white">Vision</Link></li>
              <li><Link href="/service" className="text-gray-400 transition-colors hover:text-white">Service</Link></li>
              <li><Link href="/company" className="text-gray-400 transition-colors hover:text-white">Company</Link></li>
              <li><Link href="/blog" className="text-gray-400 transition-colors hover:text-white">公式note</Link></li>
              <li><Link href="/contact" className="text-gray-400 transition-colors hover:text-white">相談窓口</Link></li>
            </ul>
          </div>

          {/* Resources（①構成）＋ ②フォントサイズ反映 */}
          <div>
            <h3 className="font-semibold tracking-wider text-gray-300 uppercase mb-4 text-base">
              Resources
            </h3>
            <ul className="space-y-2 text-base">
              <li><Link href="/cases" className="text-gray-400 transition-colors hover:text-white">導入事例</Link></li>
              <li><Link href="/resources" className="text-gray-400 transition-colors hover:text-white">お役立ち資料</Link></li>
              <li><Link href="/faq" className="text-gray-400 transition-colors hover:text-white">よくあるご質問</Link></li>
            </ul>
          </div>

          {/* Support（①構成：セキュリティ含む）＋ ②フォントサイズ反映 */}
          <div>
            <h3 className="font-semibold tracking-wider text-gray-300 uppercase mb-4 text-base">
              Support
            </h3>
            <ul className="space-y-2 text-base">
              <li><Link href="/privacy" className="text-gray-400 transition-colors hover:text-white">プライバシーポリシー</Link></li>
              <li><Link href="/terms" className="text-gray-400 transition-colors hover:text-white">利用規約</Link></li>
              <li><Link href="/security" className="text-gray-400 transition-colors hover:text-white">セキュリティ</Link></li>
            </ul>
          </div>
        </div>

        {/* コピーライト（①構成）＋ ②の文字サイズ (text-sm) */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Datanaut. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
