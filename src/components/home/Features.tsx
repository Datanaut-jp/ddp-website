// アイコンを仮置きするためのコンポーネント
const FeatureIcon = ({ children }: { children: React.ReactNode }) => {
  return <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">{children}</div>
}

// FeatureCardという、一つの強みを表す部品
const FeatureCard = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center">
        {/* 将来的にここにSVGアイコンなどを入れます */}
        <FeatureIcon>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" /></svg>
        </FeatureIcon>
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-600">
        {children}
      </p>
    </div>
  )
}

// Featuresセクション本体です
export const Features = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Why Datanaut?
          </h2>
          <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            あなたの航海を支える3つの羅針盤
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8">
          <FeatureCard title="伴走する航海士">
            お客様を孤独な航海にはさせません。中小企業診断士の資格を持つ専門家が良きパートナーとして、経営のゴールまで一緒に伴走します。
          </FeatureCard>
          <FeatureCard title="最適な航路を提示">
            勘や経験だけに頼る航海は終わりです。ITツールとデータを活用し、業務の地図を描き、ビジネスの成長に向けた最適な航路を提示します。
          </FeatureCard>
          <FeatureCard title="航海の資源を確保">
            挑戦には燃料が必要です。お客様が活用できる最適な補助金・助成金を「燃料補給」と捉え、専門家としてリソース確保を強力に支援します。
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}