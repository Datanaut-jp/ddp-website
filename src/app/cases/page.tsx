import { CTASection } from '@/components/common/CTASection';
import { SectionTitle } from '@/components/common/SectionTitle';
import { ScrollAnimation } from '@/components/common/ScrollAnimation';

export default function CasesPage() {
  return (
    <div className="bg-white">
      {/* 1. ページヘッダー */}
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
          
          {/* 事例 1: 株式会社Urus */}
          <ScrollAnimation>
            <article className="rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
              {/* ヘッダー部分 */}
              <div className="bg-blue-600 px-6 py-8 sm:px-10 sm:py-10 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-blue-100 text-sm font-semibold tracking-wider uppercase">Client</p>
                    <h2 className="text-2xl font-bold mt-1">株式会社Urus 様</h2>
                    <p className="text-blue-100 text-sm mt-1">（広告・CS事業）</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-blue-100 text-sm font-semibold tracking-wider uppercase">Project</p>
                    <p className="text-lg font-bold mt-1">24時間対応AIチャットボット導入</p>
                    <p className="inline-block bg-blue-500 text-xs px-2 py-1 rounded mt-2">AI System Development (MVSP【松】)</p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-blue-500/50">
                  <p className="text-xl sm:text-2xl font-bold leading-relaxed">
                    「データなし」の状態から、わずか3日でAI導入。<br className="hidden sm:block" />
                    CS対応の工数を月20時間削減し、24時間無人化を実現。
                  </p>
                </div>
              </div>

              {/* コンテンツ部分 */}
              <div className="p-6 sm:p-10 space-y-12 text-gray-700">
                
                {/* 1. 課題と背景 */}
                <section>
                  <h3 className="flex items-center text-xl font-bold text-gray-900 mb-4">
                    <span className="text-blue-600 mr-3 text-2xl">01.</span>
                    The Challenge (課題と背景)
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-300">
                    <h4 className="font-bold text-lg text-gray-800 mb-2">「マニュアル不在。対応品質が個人の記憶に依存していた」</h4>
                    <p className="leading-relaxed">
                      広告運用およびCS代行事業を展開するUrus様では、公式LINEでの顧客対応が「平日日中のみ」の人力運用となっており、夜間・休日の機会損失が課題でした。<br />
                      さらに深刻だったのは、回答のための「マニュアル」や「FAQリスト」が社内のどこにも存在せず、対応ノウハウが全てスタッフ個人の頭の中（暗黙知）にあったことです。
                      そのため、AIを導入しようにも「学習させるデータがない」という、多くの中小企業が直面する壁にぶつかっていました。
                    </p>
                  </div>
                </section>

                {/* 2. 解決策 */}
                <section>
                  <h3 className="flex items-center text-xl font-bold text-gray-900 mb-4">
                    <span className="text-blue-600 mr-3 text-2xl">02.</span>
                    The Solution (解決策)
                  </h3>
                  <div className="mb-6">
                    <h4 className="font-bold text-lg text-gray-800">「ヒアリングから実装まで数日。ゼロからデータを整備し、爆速でAI化」</h4>
                    <p className="mt-2 leading-relaxed">
                      datanautは、単なるシステム開発に留まらず、AI導入の前段階である「データ構築」から伴走しました。
                    </p>
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-3">1</div>
                      <h5 className="font-bold text-gray-900 mb-2">暗黙知のデータ化</h5>
                      <p className="text-sm">経営者・現場スタッフへのヒアリングを行い、頭の中にあったノウハウをその場で言語化。AIが学習可能な「構造化データ（FAQ）」として整備しました。</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-3">2</div>
                      <h5 className="font-bold text-gray-900 mb-2">圧倒的なスピード開発</h5>
                      <p className="text-sm">ヒアリングから要件定義、PoC（試作）、そして本導入までを「実働3日（約1週間）で完遂」。ヘッドレス開発により期間を1/10以下に短縮。</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-3">3</div>
                      <h5 className="font-bold text-gray-900 mb-2">高精度なチューニング</h5>
                      <p className="text-sm">ゼロから構築したデータをRAG（検索拡張生成）技術でAIに学習させ、Urus様の独自ルールを正確に回答するボットを構築しました。</p>
                    </div>
                  </div>
                </section>

                {/* 3. 導入後の成果 */}
                <section>
                  <h3 className="flex items-center text-xl font-bold text-gray-900 mb-4">
                    <span className="text-blue-600 mr-3 text-2xl">03.</span>
                    The Impact (導入後の成果)
                  </h3>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-lg text-gray-800 mb-6 text-center">「月間20時間以上の工数削減と、24時間対応を同時に実現」</h4>
                    
                    <div className="grid gap-6 md:grid-cols-3 text-center">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">対応工数</p>
                        <p className="text-3xl font-bold text-blue-600">20h <span className="text-base font-normal text-gray-600">削減/月</span></p>
                        <p className="text-xs text-gray-500 mt-2">年間30〜50万円のコストカット効果</p>
                      </div>
                      <div className="border-l border-r border-gray-200 md:border-y-0 md:px-4">
                        <p className="text-sm text-gray-500 mb-1">リードタイム</p>
                        <p className="text-3xl font-bold text-blue-600">0 <span className="text-base font-normal text-gray-600">秒</span></p>
                        <p className="text-xs text-gray-500 mt-2">最大72時間待ち → 即時回答へ</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">業務の属人化</p>
                        <p className="text-3xl font-bold text-blue-600">解消</p>
                        <p className="text-xs text-gray-500 mt-2">新人教育コストの大幅短縮</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 4. 使用技術 */}
                <section className="pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">React (Next.js)</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">Python (FastAPI)</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">OpenAI API (GPT-4o)</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">RAG</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium">Unstructured Data Processing</span>
                  </div>
                </section>

              </div>
            </article>
          </ScrollAnimation>

        </div>
      </div>
      <CTASection />
    </div>
  );
}