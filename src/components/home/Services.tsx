import Link from 'next/link';

// ServiceCardという、一つのサービスを表す部品
const ServiceCard = ({ title, href, children }: { title: string, href: string, children: React.ReactNode }) => {
  return (
    // カード全体をリンクにする
    <Link href={href}>
      {/* groupクラスを追加し、アニメーション効果を強化 */}
      <div className="group rounded-lg border border-gray-200 bg-white p-6 shadow-lg transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2">
        <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
          {title}
        </h3>
        <p className="mt-4 text-base text-gray-600">
          {children}
        </p>
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
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Our Mission
          </h2>
          <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            あなたの航海を成功に導く
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* ↓↓↓ hrefプロパティを追加しました ↓↓↓ */}
          <ServiceCard title="業務効率化とDX推進支援" href="/service/dx-support">
            SFAやMAといったITツールの価値を分かりやすくお伝えし、選定から導入、定着までをワンストップで支援。抜本的な業務効率化を実現します。
          </ServiceCard>
          <ServiceCard title="中小企業診断士事務所" href="/service/sme-consultant">
            IT導入やDX推進に活用できる最適な補助金・助成金をご提案。複雑な申請手続きも専門家としてサポートし、お客様の投資負担を軽減します。
          </ServiceCard>
        </div>
      </div>
    </section>
  )
}