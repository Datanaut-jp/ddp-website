import { Roles } from '@/components/vision/Roles'
import { ScrollAnimation } from '@/components/common/ScrollAnimation'

export default function VisionPage() {
  return (
    <div className="bg-white">
      {/* 1. ページヘッダー */}
      <div className="bg-gray-900 py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Our Vision
          </h1>
          {/* 修正: brタグではなく、spanのblock切り替えで確実に改行させる */}
          <p className="mt-6 text-lg font-medium leading-8 text-gray-300 sm:text-2xl">
            <span>データとAIで、</span>
            <span className="block sm:inline">
              すべてのビジネスに「進化」の追い風を。
            </span>
          </p>
        </div>
      </div>

      {/* 2. 私たちのビジョン */}
      <ScrollAnimation>
        <section className="bg-blue-50 py-16 sm:py-24">
          <div className="container mx-auto flex max-w-3xl justify-center px-6">
            <div className="space-y-8 text-left text-base leading-8 text-gray-800 md:text-xl md:leading-loose">
              <p className="font-bold text-gray-900">
                私たちは、単なる効率化を目指しているのではありません。
              </p>
              <p>
                雑務という「重り」を取り除き、
                {/* 修正: inline-blockをmd以上のみに限定し、スマホでの自然な改行を優先 */}
                <span className="md:inline-block">
                  データという「帆」を張ることで、
                </span>
                <br className="hidden md:block" />
                あらゆる企業が本来のポテンシャルを
                <span className="md:inline-block">
                  発揮できる社会を目指します。
                </span>
              </p>
              <p>
                小さな一歩から始まる技術革新が、
                <br className="hidden md:block" />
                やがてビジネスを大きく進化させる
                <span className="md:inline-block">
                  「追い風」になると信じています。
                </span>
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* 3. ブランドストーリー */}
      <ScrollAnimation>
        <div className="bg-white py-16 sm:py-24">
          <div className="container mx-auto max-w-2xl px-6 text-center">
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Concept
            </h2>
            <div className="space-y-6 text-lg leading-8 text-gray-700 sm:text-xl sm:leading-relaxed">
              <p>「業務効率化」はあくまで手段。</p>
              <p>
                真の目的は、
                {/* 修正: spanのblock切り替えで確実に改行 */}
                <span>企業や個人が本来持っている</span>
                <br className="hidden sm:block" /> {/* PC用改行 */}
                <span className="block sm:inline">ポテンシャルを解放し、</span>
                <span className="md:inline-block">
                  成長させることだと定義する。
                </span>
              </p>
            </div>
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