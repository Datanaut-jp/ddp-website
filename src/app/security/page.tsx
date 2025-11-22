import React from 'react';

const PageHeader = () => (
  <div className="border-b border-gray-200 bg-white">
    <div className="container mx-auto max-w-5xl px-4 py-16 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        セキュリティ
      </h1>
    </div>
  </div>
);

export default function SecurityPage() {
  return (
    <div className="bg-slate-50">
      <PageHeader />
      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="rounded-2xl bg-white p-8 shadow-xl sm:p-12">
            <article className="prose prose-lg mt-8 max-w-none text-gray-800">

              {/* セクション: データ取り扱いと機密保持 */}
              <h2>【データの取り扱いと機密保持について】</h2>

              {/* 各項目は独立したブロックにして読みやすくしています */}
              <div className="mt-6 mb-6">
                <h3 className="text-lg font-semibold">1. AIモデルへの学習利用の禁止</h3>
                <p>
                  当社が開発・提供するソリューションにおいて、API経由で送信されるお客様の入力データ（機密情報、個人情報、顧客データ等）は、AIモデルの学習（トレーニング）には一切使用されません。当社は各AIプラットフォーマー（OpenAI社等）が提供する「Zero Data Retention（データ保持なし）」またはそれに準ずるセキュアな設定を適用します。
                </p>
              </div>

              <div className="mt-6 mb-6">
                <h3 className="text-lg font-semibold">2. データの保持期間と破棄</h3>
                <p>
                  お客様からお預かりした検証用データ（CSV、ドキュメント等）は、プロジェクトの目的遂行に必要な期間のみ厳重に管理し、業務完了後または契約終了後は速やかに適切な方法で破棄・消去いたします。
                </p>
              </div>

              <div className="mt-6 mb-6">
                <h3 className="text-lg font-semibold">3. 機密保持契約 (NDA)</h3>
                <p>
                  実データの受領や詳細な内部情報の共有が発生するプロジェクトに関しては、業務開始前にお客様と当社間で機密保持契約（NDA）を締結いたします。
                </p>
              </div>

              <hr className="my-12 border-gray-200" />

              {/* セクション: 生成AIの特性に関する免責事項 */}
              <h2>【生成AIの特性に関する免責事項】</h2>

              <div className="mt-6 mb-6">
                <h3 className="text-lg font-semibold">1. 出力結果の正確性</h3>
                <p>
                  生成AI（大規模言語モデル）は、確率に基づいて文章や回答を生成する特性上、事実と異なる情報（ハルシネーション）や不適切な表現を出力する可能性があります。当社はプロンプトエンジニアリング等により精度の向上に努めますが、AIの生成物の完全性、正確性、確実性を保証するものではありません。
                </p>
              </div>

              <div className="mt-6 mb-6">
                <h3 className="text-lg font-semibold">2. 人間による最終確認（Human-in-the-loop）</h3>
                <p>
                  AIが生成したメール文面、コード、レポート等は、必ずお客様（人間の担当者）による最終確認を行った上で、実業務にご利用ください。AIの出力結果をそのまま利用したことに起因して生じた損害、トラブル、逸失利益について、当社は一切の責任を負いかねます。
                </p>
              </div>

              <div className="mt-6 mb-6">
                <h3 className="text-lg font-semibold">3. サービスの継続性</h3>
                <p>
                  本サービスは、OpenAI社等の外部APIを利用して提供される場合があります。これら外部サービスの仕様変更、稼働停止、価格改定等の影響により、やむを得ず当社の提供サービスの仕様変更や一時停止が発生する可能性があります。
                </p>
              </div>

            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
