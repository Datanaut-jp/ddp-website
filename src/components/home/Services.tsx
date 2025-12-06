import Link from 'next/link'

// ServiceCardコンポーネント（変更なし）
const ServiceCard = ({
  title,
  href,
  children,
}: {
  title: string
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link href={href}>
      <div className="group rounded-lg border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
        <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
          {title}
        </h3>
        <p className="mt-4 text-base text-gray-600">{children}</p>
        <div className="mt-6 text-sm font-semibold text-blue-600">
          詳しく見る →
        </div>
      </div>
    </Link>
  )
}

// Servicesセクション本体
export const Services = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase">
            Our Mission
          </h2>
          <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block sm:inline">あなたの航海を</span>
            <span className="block sm:inline">成功に導く支援</span>
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="AIエージェント受注開発事業"
            href="/service/dx-support"
          >
            個別要件に合わせて、AIエージェントやAIシステムをカスタム開発。業務適応型のAIを短期間で提供します。
          </ServiceCard>
          <ServiceCard
            title="AI導入 / 業務効率化事業"
            href="/service/dx-support"
          >
            業務フローを分解し、自動化可能な領域をAIとデータで最適化。工数削減と品質向上を同時に実現します。
          </ServiceCard>
          <ServiceCard
            title="中小企業診断士事務所"
            href="/service/sme-consultant"
          >
            経営課題の整理から補助金活用、成長戦略の策定まで。専門的な視点で伴走支援を行います。
          </ServiceCard>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="rounded-lg border-2 border-blue-500 bg-blue-50 px-8 py-3 text-base font-semibold text-blue-600 transition-all duration-300 ease-out hover:bg-blue-100 hover:shadow-lg"
          >
            航海（ビジネス）の相談をする
          </a>
        </div>
      </div>
    </section>
  )
}
