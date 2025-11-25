import Image from 'next/image'; // Imageコンポーネントをインポート

// FeatureCardという、一つの強みを表す部品
const FeatureCard = ({ iconSrc, title, children }: { iconSrc: string, title: string, children: React.ReactNode }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <Image
            src={iconSrc}
            alt={`${title}のアイコン`}
            width={40}
            height={40}
          />
        </div>
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
          <FeatureCard title="実装まで担う、実務家の航海士" iconSrc="/images/icon-navigator.svg">
            口だけのコンサルティングは行いません。私たちは、最新のAI技術とエンジニアリングスキルを持つ「実務家」です。戦略を描くだけでなく、実際のツール開発や環境構築まで、手を動かしてゴールまで伴走します。
          </FeatureCard>
          <FeatureCard title="「データ」という海図を整備する" iconSrc="/images/icon-map.svg">
            勘や経験だけに頼る航海は終わりです。AI活用の土台となるのは、貴社の中に眠る「データ」です。私たちはデータの整理・整備（クリーニング）から入り、ビジネスの現状を正しく映し出す「正確な海図」を描き出します。
          </FeatureCard>
          <FeatureCard title="AIという「推進力」を手渡す" iconSrc="/images/icon-fuel.svg">
            人手不足の時代、挑戦には新しいエネルギーが必要です。私たちは、チャットボットや業務自動化といったAI技術を、誰もが使える「武器（推進力）」として提供し、貴社のビジネススピードを劇的に加速させます。
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}
