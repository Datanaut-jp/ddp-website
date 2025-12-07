'use client'

import { CTASection } from '@/components/common/CTASection'
import { ScrollAnimation } from '@/components/common/ScrollAnimation'
import React from 'react'

export default function CasesPage() {
  return (
    <div className="bg-white">
      {/* ヘッダー */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 pt-24 pb-16 text-white sm:pt-36 sm:pb-24">
        <div className="container mx-auto max-w-5xl px-3 text-center">
          <div className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-200 sm:text-sm">
            AI System Development
          </div>

          <h1 className="mb-4 text-xl font-bold leading-snug tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
            {/* 修正ポイント1: 改行位置調整 */}
            <span className="block sm:inline">「データなし」の状態から、</span>
            <span className="block sm:inline">わずか3日でAI導入。</span>
            {/* 修正ポイント2: モバイルで改行 */}
            <span className="block sm:inline">
              CS対応の工数を月20時間削減し、
              <span className="block sm:inline">24時間無人化を実現。</span>
            </span>
          </h1>



          <p className="mx-auto max-w-2xl text-sm leading-[1.7] text-gray-300 sm:text-lg">
            <span className="block">クライアント: 株式会社Urus（広告・CS事業）</span>
            <span className="block">プロジェクト: 24時間対応AIチャットボット導入</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-3 py-10 sm:py-20">
        {/* 01 Challenge */}
        <ScrollAnimation>
          <section className="mb-10 sm:mb-12">
            <div className="mb-4 flex items-center">
              <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-base font-bold text-red-600 sm:h-12 sm:w-12 sm:text-lg">
                01
              </span>
              <h2 className="text-xl font-bold text-red-600 sm:text-3xl">The Challenge</h2>
            </div>

            <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-5 shadow-sm sm:p-8">
              <h3 className="mb-4 text-base font-bold text-gray-900 sm:text-xl">
                【1 最大72時間のタイムラグとCX悪化】
              </h3>
              <p className="mb-6 text-sm leading-[1.75] text-gray-700 sm:text-base">
                平日日中のみの運用により、夜間・休日の問い合わせは週明けまで放置。顧客を長時間待たせることで、機会損失だけでなく顧客体験（CX）の著しい低下を招いていました。
              </p>

              <h3 className="mb-2 text-base font-bold text-gray-900 sm:text-xl">
                【2 「暗黙知」によるAI化の壁】
              </h3>
              <p className="text-sm leading-[1.75] text-gray-700 sm:text-base">
                マニュアルやFAQが一切なく、ノウハウは個人の記憶に依存。AIを導入したくても、学習させるための「正解データ」が社内に存在しない状態でした。
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* 02 Solution */}
        <ScrollAnimation>
          <section className="mb-10 sm:mb-12">
            <div className="mb-4 flex items-center">
              <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-600 sm:h-12 sm:w-12 sm:text-lg">
                02
              </span>
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">The Solution</h2>
            </div>

            <div className="mb-4">
              {/* 修正ポイント3: モバイルで改行 */}
              <h4 className="text-base font-bold text-gray-800 sm:text-lg">
                <span className="block sm:inline">ヒアリングから実装まで数日。</span>
                <span className="block sm:inline">ゼロからデータを整備し、迅速にAI化</span>
              </h4>
              <p className="mt-2 text-sm leading-[1.75] text-gray-700 sm:text-base">
                datanautは、AI導入の前段階となる「データ構築」から伴走し、最適な情報設計と高速実装を実現しました。
              </p>
            </div>

            <div className="mb-6">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    n: '1',
                    title: '暗黙知のデータ化',
                    text: '経営者・現場スタッフへのヒアリングを行い、頭の中のノウハウを言語化し、AI学習用データとして整備。',
                  },
                  {
                    n: '2',
                    title: '圧倒的なスピード開発',
                    text: 'ヒアリング〜PoC〜本導入までを「実働3日」で完了。一般的なAI導入の1/10以下の期間を実現。',
                  },
                  {
                    n: '3',
                    title: '高精度RAGチューニング',
                    text: '独自ルールをAIが正確に回答できるよう、RAG技術で精度を最適化。',
                  },
                ].map((box) => (
                  <div key={box.n} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white sm:h-9 sm:w-9 sm:text-sm">
                      {box.n}
                    </div>
                    <h5 className="mb-1 font-bold text-gray-900">{box.title}</h5>
                    <p className="text-xs leading-[1.7] text-gray-600 sm:text-sm">{box.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* 03 Impact */}
        <ScrollAnimation>
          <section className="mb-10 sm:mb-12">
            <div className="mb-4 flex items-center">
              <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-600 sm:h-12 sm:w-12 sm:text-lg">
                03
              </span>
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">The Impact</h2>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 shadow-md sm:p-8">
              {/* 修正ポイント4: 文字サイズを小さくして一行表示 */}
              <h3 className="mb-4 text-center text-sm sm:text-base font-bold text-gray-800">
                月間20時間以上の工数削減と、24時間対応を同時に実現
              </h3>

              <p className="mb-6 text-center text-xs leading-[1.7] text-gray-600 sm:text-base">
                定型対応の自動化とAIの24時間稼働により、顕著な成果が得られています。
              </p>

              <div className="grid gap-4 text-center sm:grid-cols-3">
                {[
                  {
                    label: '対応工数',
                    value: '20h 削減',
                    sub: '月間 / 年間30〜50万円のコスト削減',
                  },
                  {
                    label: 'リードタイム',
                    value: '0秒',
                    sub: '夜間・休日72時間待ち → 即時回答へ',
                  },
                  {
                    label: '業務の属人化',
                    value: '解消',
                    sub: '新人教育時間の大幅短縮',
                  },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm">
                    <p className="text-xs text-gray-500">{item.label}</p>
                    <p className="mb-1 text-2xl font-bold text-blue-600 sm:text-3xl">{item.value}</p>
                    <p className="text-[10px] text-gray-500 sm:text-xs">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* 技術 */}
        <ScrollAnimation>
          <section className="border-t border-gray-200 pt-8">
            <h3 className="mb-3 text-xs font-bold tracking-wider text-gray-500 uppercase sm:text-sm">
              使用技術 (Tech Stack)
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                'Frontend: React (Next.js)',
                'Backend: Python (FastAPI)',
                'AI Engine: OpenAI API (GPT-4o) / RAG',
                'Data Engineering: Unstructured Data Processing',
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </ScrollAnimation>
      </div>

      <CTASection />
    </div>
  )
}
