import { Roles } from '@/components/vision/Roles'
import { ScrollAnimation } from '@/components/common/ScrollAnimation' // 作成したコンポーネントをインポート

export default function VisionPage() {
  return (
    <div className="bg-white">
      {/* 1. ページヘッダー */}
      <div className="bg-gray-900 py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Vision
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            私たちの航海理念
          </p>
        </div>
      </div>

      {/* 2. 私たちのビジョン */}
      <ScrollAnimation>
        <section className="bg-blue-50 py-16 sm:py-24">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <p className="text-xl leading-9 text-gray-800 md:text-2xl md:leading-10">
              私たちの重要なビジョンは、専門知識やリソース不足に起因する、大企業との間に存在する「情報の非対称性」を解消することです。
              <br className="my-2" />
              勘や経験だけに頼る経営から脱却し、すべての中小企業が公平な情報のもとで成長機会を掴める社会の実現を目指します。
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* 3. ブランドストーリー */}
      <ScrollAnimation>
        <div className="py-16 sm:py-24">
          <div className="container mx-auto max-w-3xl px-4 space-y-6 text-lg leading-8 text-gray-700">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              🌌 ブランドストーリー
            </h2>
            <p>
              かつて、情報とは「資産」ではなく「混乱」だった。
              溢れる業務フロー、眠るExcel、つながらないシステム。
              それらは企業の“宇宙”に漂うデータの星屑にすぎなかった。
            </p>
            <p className="font-bold text-gray-900">
              しかし――ある者たちはそれを「道標」と捉えた。
              彼らは、Datanauts（データ航海士）と呼ばれた。
            </p>
          </div>
        </div>
      </ScrollAnimation>
      
      {/* 4. Datanautの役割 */}
      <ScrollAnimation>
        <Roles />
      </ScrollAnimation>
    </div>
  )
}