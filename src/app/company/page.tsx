import Image from 'next/image'
import { ScrollAnimation } from '@/components/common/ScrollAnimation'
import type { ReactNode } from 'react'

const PageHeader = () => (
  <div className="relative bg-gray-900">
    <div className="absolute inset-0">
      <Image
        src="/images/company-background.jpg"
        alt="Datanaut Team"
        fill
        className="object-cover opacity-30"
        priority
        quality={90}
      />
    </div>
    <div className="relative isolate py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          About Us
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Datanautの基本情報と、私たちの想いをご紹介します。
        </p>
      </div>
    </div>
  </div>
)

const ProfileTable = () => {
  const profileItems: { term: string; description: ReactNode }[] = [
    { term: '会社名（商号）', description: 'Datanaut合同会社' }, // 株式会社 -> 合同会社 に修正
    { term: '設立年月日', description: 'XXXX年XX月XX日' },
    { term: 'CEO', description: '橋本 玖都' },
    {
      term: '所在地',
      description:
        '〒150-0021 東京都渋谷区恵比寿西二丁目8番4号 EX恵比寿西ビル5階',
    },
    // 電話番号と役員構成は削除
    { term: '資本金', description: 'XXX万円' },
    { term: 'ウェブサイトURL', description: 'https://www.datanaut.jp' },
    { term: '取引銀行', description: 'XXXXXXX' },
    // 許認可は情報がないため一旦削除（必要であれば戻します）
  ]

  return (
    <div className="mt-10 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <dl className="divide-y divide-gray-200">
        {profileItems.map((item) => (
          <div
            className="px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4"
            key={item.term}
          >
            <dt className="text-base font-medium text-gray-900">{item.term}</dt>
            <dd className="mt-1 text-base leading-7 text-gray-600 sm:col-span-2 sm:mt-0">
              {item.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default function CompanyPage() {
  return (
    <div>
      <PageHeader />

      <section className="bg-gradient-to-r from-white to-blue-50 py-24 sm:py-32">
        <div className="container mx-auto max-w-4xl px-4">
          <ScrollAnimation>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                データで、未来の羅針盤を創る。
              </h2>
              <div className="mt-8 space-y-6 text-left text-lg leading-9 text-gray-700">
                <p>
                  Datanaut合同会社のウェブサイトへお越しいただき、誠にありがとうございます。
                </p>
                <p>CEOの橋本 玖都です。</p>
                <p>
                  情報が溢れる現代社会。多くの企業が、膨大なデータという宝の山を前に、その活用法を見出せずにいます。私たちは、この状況に風穴を開け、データが持つ無限の可能性を解放したい。その一つの熱い想いを原動力に、Datanaut合同会社を創業いたしました。
                </p>
                <p>
                  私たちの使命は、単なるデータ分析ではありません。ビジネスという予測不能な大海原を航海するすべての挑戦者へ、「データという、最高精度の羅針盤を提供する」こと。それが私たちの存在意義であると確信しています。
                </p>
                <p>
                  勘や経験だけに頼るのではなく、客観的なデータに基づいた確かな一手で未来を切り拓く。そのために私たちは、お客様一社一社の課題に深く、熱く、寄り添うコンサルティングに全力を注いでいます。それは単なるツール提供ではなく、お客様のビジョンを共有し、成功という目的地まで共に汗をかく「パートナー」としての挑戦です。
                </p>
                <p>
                  データが指し示す先には、私たちがまだ見ぬビジネスチャンスが、そして想像するだけでワクワクするような未来が広がっています。私たちはデータの力で人と企業のポテンシャルを最大化し、誰もが自信を持って未来へ一歩を踏み出せる社会を創造します。
                </p>
                <p>
                  この情熱を胸に、私たちは挑戦を止めません。常識を打ち破り、未来を切り拓くdatanautの航海に、どうぞご期待ください。今後とも、皆様の変わらぬご支援とご指導を賜りますよう、心よりお願い申し上げます。
                </p>
                <div className="pt-6 text-right">
                  <p>Datanaut合同会社</p>
                  <p>CEO　橋本 玖都</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <ScrollAnimation>
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              会社情報
            </h2>
            <ProfileTable />
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}
