// ServiceCardという、一つのサービスを表す部品を先に定義します
const ServiceCard = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
      {/* 将来ここにアイコンを入れます */}
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-4 text-base text-gray-600">
        {children}
      </p>
    </div>
  )
}

// Servicesセクション本体です
export const Services = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
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
          <ServiceCard title="業務効率化とDX推進支援">
            SFAやMAといったITツールの価値を分かりやすくお伝えし、選定から導入、定着までをワンストップで支援。抜本的な業務効率化を実現します。
          </ServiceCard>
          <ServiceCard title="補助金・助成金活用コンサルティング">
            IT導入やDX推進に活用できる最適な補助金・助成金をご提案。複雑な申請手続きも専門家としてサポートし、お客様の投資負担を軽減します。
          </ServiceCard>
        </div>
      </div>
    </section>
  )
}