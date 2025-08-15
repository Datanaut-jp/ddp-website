import Link from 'next/link';

// ServiceCardコンポーネント（変更なし）
const ServiceCard = ({ title, href, children }: { title: string, href: string, children: React.ReactNode }) => {
    return (
    <Link href={href}>
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
};


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
            あなたの航海を成功に導く支援
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <ServiceCard title="業務効率化とDX推進支援" href="/service/dx-support">
            SFAやMAといったITツールの価値を分かりやすくお伝えし、選定から導入、定着までをワンストップで支援。抜本的な業務効率化を実現します。
          </ServiceCard>
          <ServiceCard title="中小企業診断士事務所" href="/service/sme-consultant">
            IT導入やDX推進に活用できる最適な補助金・助成金をご提案。複雑な申請手続きも専門家としてサポートし、お客様の投資負担を軽減します。
          </ServiceCard>
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="/contact"
            // ↓↓↓ このボタンのクラス名を、ご提示のデザインに修正しました ↓↓↓
            className="rounded-lg border-2 border-blue-500 bg-blue-50 px-8 py-3 text-base font-semibold text-blue-600 transition-all duration-300 ease-out hover:bg-blue-100 hover:shadow-lg"
          >
            航海（ビジネス）の相談をする
          </a>
        </div>

      </div>
    </section>
  )
}