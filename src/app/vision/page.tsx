import { Roles } from '@/components/vision/Roles'
import { ScrollAnimation } from '@/components/common/ScrollAnimation'

export default function VisionPage() {
  return (
    <div className="bg-white">
      {/* 1. ページヘッダー */}
      <div className="bg-gray-900 py-12 sm:py-16">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Vision
          </h1>
          <p className="mt-3 text-xl text-gray-300">
            データとAIで、すべてのビジネスに「進化」の追い風を。
          </p>
        </div>
      </div>

      {/* 2. 私たちのビジョン */}
      <ScrollAnimation>
        <section className="bg-blue-50 py-12 sm:py-16">
          <div className="container mx-auto flex max-w-3xl justify-center px-4">
            <div className="space-y-4 text-left text-lg leading-8 text-gray-800 md:text-xl md:leading-9">
              <p>私たちは、単なる効率化を目指しているのではありません。</p>
              <p>
                雑務という「重り」を取り除き、データという「帆」を張ることで、
                <br className="hidden md:inline" />
                あらゆる企業が本来のポテンシャルを発揮できる社会を目指します。
              </p>
              <p>
                小さな一歩から始まる技術革新が、やがてビジネスを大きく進化させる
                <br className="hidden md:inline" />
                「追い風」になると信じています。
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

{/* 3. ブランドストーリー */}
<ScrollAnimation>
  <div className="bg-white py-8 sm:py-12">
    <div className="container mx-auto max-w-3xl space-y-6 px-4 text-lg leading-8 text-gray-700">
      <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
        Concept
      </h2>
      <p>「業務効率化」はあくまで手段。</p>
      <p>
        真の目的は、企業や個人が本来持っているポテンシャルを解放し、
        成長させることだと定義する。
      </p>
    </div>
  </div>
</ScrollAnimation>


      {/* 4. Datanautの役割 */}
      <ScrollAnimation>
        <div className="bg-white py-12 sm:py-16">
          <Roles />
        </div>
      </ScrollAnimation>
    </div>
  )
}
