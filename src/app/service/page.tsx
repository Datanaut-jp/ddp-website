import { SectionTitle } from '@/components/common/SectionTitle'
import React from 'react'

export default function ServicePage() {
  return (
    <div className="bg-white">
      {/* 1. ヒーローセクション */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Service & Price
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300">
            AI導入は、小さく試して、大きく育てる。
            <br />
            貴社のデータ環境に合わせた、無駄のない自動化プランをご提案します。
          </p>
          <p className="mt-4 text-base text-gray-400">
            datanautは、決まりきったパッケージの押し売りはいたしません。
            <br />
            「まずはプロンプト1本から」「本格的なシステム連携まで」、お客様のフェーズに合わせたオーダーメイド開発を提供します。
          </p>
        </div>
      </div>

      {/* 2. 【期間限定】Starter Campaign */}
      <section className="bg-blue-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="relative overflow-hidden rounded-2xl border-2 border-blue-500 bg-white shadow-xl">
            <div className="absolute top-0 right-0 z-10 rounded-bl-lg bg-red-500 px-4 py-1 text-xs font-bold text-white">
              初回限定キャンペーン
            </div>
            <div className="p-8 sm:p-10">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  🚀 プロンプトエンジニアリング「お試し」パッケージ
                </h2>
                <p className="mt-4 text-gray-600">
                  「AIを業務に使いたいが、どう指示すればいいか分からない」「精度が出ない」という方へ。
                  <br />
                  貴社の実業務に即した、すぐに使える堅牢なプロンプトを作成します。
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="font-semibold text-gray-900">価格</h3>
                  <p className="mt-2 text-3xl font-bold text-blue-600">
                    ¥30,000{' '}
                    <span className="text-sm font-normal text-gray-500">
                      (税別) / 1セット *要相談
                    </span>
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    ※初回のお取引に限らせていただきます。
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">提供内容</h3>
                  <ul className="mt-4 list-inside list-disc space-y-3 text-sm text-gray-600">
                    <li>業務ヒアリング (30分)：解決したいタスクの特定</li>
                    <li>
                      プロンプト設計 (3本)：例）メール生成、要約、アイデア出し等
                    </li>
                    <li>精度検証・修正 (1回)：実際に使ってみての微調整</li>
                  </ul>
                  <p className="mt-4 text-xs text-gray-500">
                    対象: ChatGPT (Plus/Team/Enterprise), Claude, Gemini 等
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Model Cases（代表的な開発事例） */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <SectionTitle title="Model Cases" subtitle="代表的な開発事例" />
          <p className="mb-12 text-center text-gray-600">
            お客様の課題に近い事例から、費用感（目安）をご確認いただけます。
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Case 01 */}
            <div className="rounded-xl border border-gray-200 p-6 shadow-sm transition-shadow hover:shadow-md">
              <span className="text-sm font-bold text-blue-600">Case 01</span>
              <h3 className="mt-2 text-xl font-bold text-gray-900">
                ハイパー・パーソナライズメール生成
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                顧客1社1社に合わせて「刺さる」文面を自動生成。
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <p className="text-gray-800">
                  <span className="font-semibold text-gray-900">課題:</span>{' '}
                  一斉配信メールの開封率が低い。1通ずつ書く時間がない。
                </p>
                <p className="text-gray-800">
                  <span className="font-semibold text-gray-900">解決:</span>{' '}
                  CRMデータ(顧客情報)とWeb上の最新ニュースや行動インテントデータを掛け合わせ、「なぜ今、あなたに連絡したか」を個別生成するフローを構築。送付対象毎にパーソナライズされたメールを作成、自動化。
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  技術: GAS / Python / LLM API
                </p>
              </div>
              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="text-lg font-bold text-gray-900">
                  参考費用: ¥200,000 〜
                  <span className="text-xs font-normal text-gray-500">
                    (税別)
                  </span>
                </p>
              </div>
            </div>

            {/* Case 02 */}
            <div className="rounded-xl border border-gray-200 p-6 shadow-sm transition-shadow hover:shadow-md">
              <span className="text-sm font-bold text-blue-600">Case 02</span>
              <h3 className="mt-2 text-xl font-bold text-gray-900">
                インサイドセールス「トークレコメンド」
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                トップセールスの「切り返し」を、新人が再現可能に。
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <p className="text-gray-800">
                  <span className="font-semibold text-gray-900">課題:</span>{' '}
                  アポ獲得率、顧客支援が属人化している。とっさの質問に答えられない。
                </p>
                <p className="text-gray-800">
                  <span className="font-semibold text-gray-900">解決:</span>{' '}
                  顧客の業界や想定される反論(Counter
                  Argument)に対し、最適な切り返しトークをAIがリアルタイムに提示するツールを開発。
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  技術: Knowledge Base構築 / プロンプト設計
                </p>
              </div>
              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="text-lg font-bold text-gray-900">
                  参考費用: ¥100,000 〜
                  <span className="text-xs font-normal text-gray-500">
                    (税別)
                  </span>
                </p>
              </div>
            </div>

            {/* Case 03 */}
            <div className="rounded-xl border border-gray-200 p-6 shadow-sm transition-shadow hover:shadow-md">
              <span className="text-sm font-bold text-blue-600">Case 03</span>
              <h3 className="mt-2 text-xl font-bold text-gray-900">
                商談・製品・応答品質フィードバックの自動抽出 (VoC)
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                録画データの山から、&quot;顧客の悲鳴&quot;と&quot;機能要望&quot;だけを抽出。
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <p className="text-gray-800">
                  <span className="font-semibold text-gray-900">課題:</span>{' '}
                  商談動画が見返されない。開発や商談へのフィードバックが感覚値頼み。
                </p>
                <p className="text-gray-800">
                  <span className="font-semibold text-gray-900">解決例:</span>{' '}
                  全商談ログから「機能への不満」「競合情報」「価格反応」のみを構造化データとして抽出し、PM向けレポートを自動生成。商談データを分析し、人事評価支援等。
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  技術: Speech-to-Text / 長文脈LLM / 自動レポート
                </p>
              </div>
              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="text-lg font-bold text-gray-900">
                  参考費用: ¥300,000 〜
                  <span className="text-xs font-normal text-gray-500">
                    (税別)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Chatbot Development */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <SectionTitle
            title="Chatbot Development"
            subtitle="チャットボット開発"
          />
          <p className="mb-12 text-center text-gray-600">
            「学習させるデータの深さ」でプランが変わります。
            <br />
            社内ナレッジ活用やFAQ対応など、ご希望のデータ連携レベルに合わせてお選びください。
          </p>

          {/* スマホで横スクロール可能にするラッパー */}
          <div className="overflow-x-auto pb-4">
            <div className="grid min-w-[800px] grid-cols-3 gap-4">
              {/* Level 1 */}
              {/* 変更点: flex flex-col を追加 */}
              <div className="rounded-lg border-t-4 border-gray-400 bg-white p-6 shadow-sm flex flex-col">
                <h3 className="text-lg font-bold text-gray-900">
                  Level 1: 定型QAボット
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  スモールスタートに最適
                </p>
                {/* 変更点: flex-1 を追加（ここで高さを調整し、下部を押し下げる） */}
                <div className="mt-6 space-y-4 text-sm flex-1">
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 uppercase">
                      仕組み
                    </span>
                    <p className="mt-1 text-gray-800">
                      用意したQ&Aリストから回答
                    </p>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 uppercase">
                      用途
                    </span>
                    <p className="mt-1 text-gray-800">単純なFAQ対応</p>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 uppercase">
                      データ更新
                    </span>
                    <p className="mt-1 text-gray-800">手動 (ファイル差替)</p>
                  </div>
                </div>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="text-xl font-bold text-gray-900">
                    ¥100,000 〜
                    <span className="text-xs font-normal text-gray-500">
                      (税別)
                    </span>
                  </p>
                </div>
              </div>

              {/* Level 2 (RAG) */}
              {/* 変更点: flex flex-col を追加 */}
              <div className="relative z-10 rounded-lg border-t-4 border-blue-500 bg-white p-6 shadow-sm flex flex-col">
                <div className="absolute top-1 right-4 rounded-full bg-blue-500 px-2 py-1 text-xs text-white">
                  おすすめ
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  Level 2: ドキュメント検索 (RAG)
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  最も費用対効果が高い
                </p>
                {/* 変更点: flex-1 を追加 */}
                <div className="mt-6 space-y-4 text-sm flex-1">
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 uppercase">
                      仕組み
                    </span>
                    <p className="mt-1 text-gray-800">
                      PDF/Wordマニュアルを検索
                    </p>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 uppercase">
                      用途
                    </span>
                    <p className="mt-1 text-gray-800">
                      社内規定・マニュアル検索
                    </p>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 uppercase">
                      データ更新
                    </span>
                    <p className="mt-1 text-gray-800">
                      手動 (ドラッグ＆ドロップ)
                    </p>
                  </div>
                </div>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="text-xl font-bold text-blue-600">
                    ¥300,000 〜
                    <span className="text-xs font-normal text-gray-500">
                      (税別)
                    </span>
                  </p>
                </div>
              </div>

              {/* Level 3 */}
              {/* 変更点: flex flex-col を追加 */}
              <div className="rounded-lg border-t-4 border-indigo-600 bg-white p-6 shadow-sm flex flex-col">
                <h3 className="text-lg font-bold text-gray-900">
                  Level 3: データベース連携
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  高度なセキュリティ設計込み
                </p>
                {/* 変更点: flex-1 を追加 */}
                <div className="mt-6 space-y-4 text-sm flex-1">
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 uppercase">
                      仕組み
                    </span>
                    <p className="mt-1 text-gray-800">社内DB/SaaSと常時接続</p>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 uppercase">
                      用途
                    </span>
                    <p className="mt-1 text-gray-800">在庫確認・顧客情報照会</p>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-500 uppercase">
                      データ更新
                    </span>
                    <p className="mt-1 text-gray-800">全自動 (API連携)</p>
                  </div>
                </div>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="text-xl font-bold text-gray-900">
                    ¥1,000,000 〜
                    <span className="text-xs font-normal text-gray-500">
                      (税別)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Basic Menu */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <SectionTitle title="Basic Menu" subtitle="基本料金表" />
          {/* 追加：説明文 */}
          <p className="mt-4 mb-8 text-center text-sm text-gray-600">
            開発以外のスポット支援メニューです。
          </p>

          <div className="divide-y divide-gray-200">
            <div className="py-6 sm:flex sm:items-center sm:justify-between">
              <div className="sm:w-0 sm:flex-1">
                <h3 className="text-lg font-medium text-gray-900">
                  AI/DX導入相談 (壁打ち)
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  「何から始めればいいか分からない」を整理します。ツール選定や技術的な実現可能性の診断に。
                </p>
              </div>
              <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-6">
                <span className="text-xl font-bold text-gray-900">¥15,000</span>
                <span className="text-sm text-gray-500"> (税別) / 60分</span>
              </div>
            </div>
            <div className="py-6 sm:flex sm:items-center sm:justify-between">
              <div className="sm:w-0 sm:flex-1">
                <h3 className="text-lg font-medium text-gray-900">
                  PoC (概念実証) 開発
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  「まずはCSVデータ100件だけでテストしたい」など、本開発前の小規模検証プラン。
                </p>
              </div>
              <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-6">
                <span className="text-xl font-bold text-gray-900">
                  ¥50,000 〜
                </span>
                <span className="text-sm text-gray-500"> (税別)</span>
              </div>
            </div>
            <div className="py-6 sm:flex sm:items-center sm:justify-between">
              <div className="sm:w-0 sm:flex-1">
                <h3 className="text-lg font-medium text-gray-900">
                  AIエージェント保守・運用
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  プロンプトの微修正、参照データの更新、利用ログ分析レポートの作成など。
                </p>
              </div>
              <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-6">
                <span className="text-xl font-bold text-gray-900">
                  月額 ¥30,000 〜
                </span>
                <span className="text-sm text-gray-500"> (税別)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Security & Policy */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Security & Policy（安心への取り組み）
          </h2>
          <p className="mb-8 text-center text-gray-400">
            企業様のデータを扱うプロフェッショナルとして、以下のポリシーを遵守します。
          </p>
          <div className="grid gap-6 text-center md:grid-cols-3">
            <div className="rounded bg-gray-800 p-4">
              <h3 className="font-bold text-blue-400">学習利用の禁止</h3>
              <p className="mt-2 text-sm text-gray-300">
                お客様のデータはAIモデルの学習には使用されません（Zero Data
                Retention設定）。
              </p>
            </div>
            <div className="rounded bg-gray-800 p-4">
              <h3 className="font-bold text-blue-400">機密保持</h3>
              <p className="mt-2 text-sm text-gray-300">
                開発にあたりNDA（機密保持契約）を締結いたします。
              </p>
            </div>
            <div className="rounded bg-gray-800 p-4">
              <h3 className="font-bold text-blue-400">データの破棄</h3>
              <p className="mt-2 text-sm text-gray-300">
                検証用データはプロジェクト終了後に速やかに破棄します。
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="/security"
              className="text-sm text-gray-400 underline hover:text-white"
            >
              プライバシーポリシー・免責事項の全文はこちら &gt;
            </a>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-2xl font-bold text-black">
            あなたの業務も、自動化できるか診断しませんか？
          </h2>
          <p className="mb-6 text-gray-600">
            現状の業務フローや、連携したいデータの種類をお聞かせください。
            <br />
            「キャンペーン希望」や「とりあえず概算を知りたい」というご相談も歓迎です。
          </p>
          <div className="inline-block">
            {/* ここにフォームリンクを当ててください（例：Googleフォームなど） */}
            <a
              href="/contact"
              className="inline-block rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              無料相談・お見積もりフォームへ
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}