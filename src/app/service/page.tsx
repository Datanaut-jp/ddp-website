import Link from 'next/link'
import { ScrollAnimation } from '@/components/common/ScrollAnimation'

// PageHeaderコンポーネント（変更なし）
const PageHeader = () => (
  <div className="bg-gray-50 py-16 sm:py-24">
    <div className="container mx-auto max-w-5xl px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        事業内容
      </h1>
      <p className="mt-4 text-xl text-gray-600">
        お客様の航海を成功に導く、私たちのサービス
      </p>
    </div>
  </div>
)

// 各サービスセクション用のコンポーネント（ホバーアニメーションを更新）
const ServiceSection = ({
  title,
  href,
  children,
}: {
  title: string
  href: string
  children: React.ReactNode
}) => (
  <ScrollAnimation>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="md:col-span-1">
        <Link href={href} className="group inline-flex items-center gap-x-3">
          {/* ↓↓↓ 新しいCSSクラスを追加し、不要なクラスを削除しました ↓↓↓ */}
          <h2 className="link-underline text-2xl font-black text-blue-600 transition-colors duration-300 ease-out group-hover:text-blue-700">
            {title}
          </h2>
          <span className="text-blue-600 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:opacity-100">
            →
          </span>
        </Link>
      </div>
      <div className="space-y-4 text-lg text-gray-700 md:col-span-2">
        {children}
      </div>
    </div>
  </ScrollAnimation>
)

export default function ServicePage() {
  return (
    <div className="bg-white">
      <PageHeader />

      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl space-y-16 px-4">
          <ServiceSection
            title="AI活用とデータ整備による業務自動化支援"
            href="/service/dx-support"
          >
            <p>
              SFA（営業支援）やMA（マーケティング自動化）といったITツールについて、その価値や適切な活用法を分かりやすくお伝えし、選定から導入、定着までをワンストップで支援します。
            </p>
            <p>これにより、抜本的な業務効率化を実現します。</p>
          </ServiceSection>

          <div className="border-b border-gray-200"></div>

          <ServiceSection
            title="中小企業診断士事務所"
            href="/service/sme-consultant"
          >
            <p>
              IT導入やDX推進に際し、まだ広く知られていない制度も含めて、お客様が活用できる最適な補助金・助成金をご提案します。
            </p>
            <p>
              複雑な申請手続きを専門家としてサポートすることで、情報格差による機会損失を防ぎ、お客様の投資負担を軽減します。
            </p>
          </ServiceSection>
        </div>
      </div>

      <ScrollAnimation>
        <div className="bg-blue-50">
          <div className="container mx-auto max-w-4xl px-4 py-16 text-center sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              あなたの航海を、始めませんか？
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              まずはお気軽にご相談ください。専門家があなたの課題を整理し、最適な航路をご提案します。
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-lg transition-transform hover:scale-105"
              >
                無料で相談する
              </Link>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}
