import React from 'react'

const PageHeader = () => (
  <div className="border-b border-gray-200 bg-white">
    <div className="container mx-auto max-w-5xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        特定商取引法に基づく表記
      </h1>
    </div>
  </div>
)

export default function LawPage() {
  const items = [
    {
      term: '販売業者',
      desc: 'datanaut合同会社',
    },
    {
      term: '運営統括責任者',
      desc: '橋下 玖都',
    },
    {
      term: '所在地',
      desc: '〒150-0021 東京都渋谷区恵比寿西二丁目8番4号 EX恵比寿西ビル5階',
    },
    {
      term: '電話番号',
      desc: 'ご請求があり次第、遅滞なく開示いたします。',
    },
    {
      term: 'メールアドレス',
      desc: 'info@datanaut.jp',
    },
    {
      term: 'ホームページURL',
      desc: 'https://datanaut.jp',
    },
    {
      term: '販売価格',
      desc: '各サービス紹介ページに記載',
    },
    {
      term: '商品代金以外の必要料金',
      desc: 'なし（インターネット接続料金はお客様負担）',
    },
    {
      term: 'お支払い方法',
      desc: 'クレジットカード決済（Stripe）',
    },
    {
      term: 'お支払い時期',
      desc: 'サービスお申し込み時（前払い）',
    },
    {
      term: '商品の引渡時期',
      desc: '決済完了後、予約日時にオンラインにて提供',
    },
    {
      term: '返品・キャンセル',
      desc: '決済完了後の返金は不可。日時変更は別途規定の日時まで連絡のこと。',
    },
  ]

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHeader />
      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            <dl className="divide-y divide-gray-200">
              {items.map((item, index) => (
                <div
                  className="grid grid-cols-1 gap-4 px-6 py-5 sm:grid-cols-3 sm:gap-4"
                  key={index}
                >
                  <dt className="text-sm font-bold text-gray-900">
                    {item.term}
                  </dt>
                  <dd className="text-sm leading-6 text-gray-600 sm:col-span-2 whitespace-pre-wrap">
                    {item.desc}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}