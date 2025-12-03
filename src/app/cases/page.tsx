import Link from 'next/link'
import { CTASection } from '@/components/common/CTASection'
import { ScrollAnimation } from '@/components/common/ScrollAnimation'

export default function CasesPage() {
  return (
    <div className="bg-white">
      {/* ヘッダー */}
      <div className="bg-gray-900 py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Case Studies
          </h1>
          <p className="mt-4 text-xl text-gray-300">導入事例</p>
        </div>
      </div>

      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {/* 株式会社Urus様の事例カード */}
            <ScrollAnimation>
              <Link href="/cases/urus" className="group block h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
                  <div className="bg-blue-600 px-6 py-8 text-white">
                    <p className="mb-2 text-xs font-semibold tracking-wider text-blue-100 uppercase">
                      株式会社Urus 様
                    </p>
                    <h2 className="text-xl font-bold decoration-2 underline-offset-4 group-hover:underline">
                      24時間対応AIチャットボット導入
                    </h2>
                  </div>
                  <div className="flex flex-grow flex-col p-6">
                    <p className="mb-4 line-clamp-3 flex-grow text-sm leading-relaxed text-gray-600">
                      「データなし」の状態から、わずか3日でAI導入。CS対応の工数を月20時間削減し、24時間無人化を実現。
                    </p>
                    <div className="mt-auto border-t border-gray-100 pt-4">
                      <span className="flex items-center text-sm font-semibold text-blue-600">
                        詳しく見る
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </ScrollAnimation>

            {/* 今後事例が増えたらここに追加 */}
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  )
}
