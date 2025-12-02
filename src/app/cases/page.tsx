import Link from 'next/link';
import { CTASection } from '@/components/common/CTASection';
import { ScrollAnimation } from '@/components/common/ScrollAnimation';

export default function CasesPage() {
  return (
    <div className="bg-white">
      {/* ヘッダー */}
      <div className="bg-gray-900 py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Case Studies
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            導入事例
          </p>
        </div>
      </div>

      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            
            {/* 株式会社Urus様の事例カード */}
            <ScrollAnimation>
              <Link href="/cases/urus" className="block h-full group">
                <article className="h-full rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                  <div className="bg-blue-600 px-6 py-8 text-white">
                    <p className="text-blue-100 text-xs font-semibold tracking-wider uppercase mb-2">
                      株式会社Urus 様
                    </p>
                    <h2 className="text-xl font-bold group-hover:underline decoration-2 underline-offset-4">
                      24時間対応AIチャットボット導入
                    </h2>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
                      「データなし」の状態から、わずか3日でAI導入。CS対応の工数を月20時間削減し、24時間無人化を実現。マニュアル不在の課題を、暗黙知のデータ化とRAG技術で解決しました。
                    </p>
                    <div className="pt-4 border-t border-gray-100 mt-auto">
                      <span className="text-blue-600 text-sm font-semibold flex items-center">
                        詳しく見る 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
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
  );
}