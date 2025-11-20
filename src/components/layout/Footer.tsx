import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white">
      {/* 上下の余白を py-12 から py-10 に少し詰めました */}
      <div className="container mx-auto px-4 py-10">
        {/* ▼ 修正箇所：モバイルで2列 (grid-cols-2)、PCで4列 (md:grid-cols-4) に変更 */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          
          {/* ▼ 修正箇所：ロゴ部分はモバイルで2列分（全幅）を使って配置 */}
          <div className="col-span-2 space-y-4 md:col-span-1">
            <Image
              src="/images/logo-full-white.svg"
              alt="Datanaut ロゴ"
              width={160}
              height={36}
            />
            {/* text-sm -> text-base に変更 */}
            <p className="text-base text-gray-400">-データ宇宙の航海士たち-</p>
          </div>

          {/* サイトマップ - メイン */}
          <div>
            {/* text-sm -> text-base に変更 */}
            <h3 className="font-semibold tracking-wider text-gray-300 uppercase mb-4 text-base">
              Menu
            </h3>
            {/* text-sm -> text-base に変更 */}
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/vision" className="text-gray-400 transition-colors hover:text-white">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-gray-400 transition-colors hover:text-white">
                  Service
                </Link>
              </li>
              <li>
                <Link href="/company" className="text-gray-400 transition-colors hover:text-white">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 transition-colors hover:text-white">
                  公式note
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 transition-colors hover:text-white">
                  相談窓口
                </Link>
              </li>
            </ul>
          </div>

          {/* サイトマップ - 資料・事例 */}
          <div>
            {/* text-sm -> text-base に変更 */}
            <h3 className="font-semibold tracking-wider text-gray-300 uppercase mb-4 text-base">
              Resources
            </h3>
            {/* text-sm -> text-base に変更 */}
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/cases" className="text-gray-400 transition-colors hover:text-white">
                  導入事例
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 transition-colors hover:text-white">
                  お役立ち資料
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 transition-colors hover:text-white">
                  よくあるご質問
                </Link>
              </li>
            </ul>
          </div>

          {/* その他リンク（サポート） */}
          <div>
            {/* text-sm -> text-base に変更 */}
            <h3 className="font-semibold tracking-wider text-gray-300 uppercase mb-4 text-base">
              Support
            </h3>
            {/* text-sm -> text-base に変更 */}
            <ul className="space-y-2 text-base">
              <li>
                <Link href="/privacy" className="text-gray-400 transition-colors hover:text-white">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 transition-colors hover:text-white">
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        {/* text-xs -> text-sm に変更 */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Datanaut. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}