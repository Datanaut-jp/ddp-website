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
            AI System Development (MVSP【松】)
          </div>

          <h1 className="mb-4 text-xl leading-snug font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
            <span className="block">
              「データなし」の状態から、わずか3日でAI導入。」
            </span>
            <span className="block">
              CS対応の工数を月20時間削減し、24時間無人化を実現。
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-sm leading-[1.7] text-gray-300 sm:text-lg">
            <span className="block">
              クライアント: 株式会社Urus（広告・CS事業）
            </span>
            <span className="block">
              プロジェクト: 24時間対応AIチャットボット導入
            </span>
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-3 py-10 sm:py-20">
        {/* 01 Challenge */}
        <ScrollAnimation>
          <section className="mb-10 sm:mb-12">
            <div className="mb-4 flex items-center">
              <span className="mr-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-base font-bold text-red-600 sm:h-12 sm:w-12 sm:text-lg">
                01
              </span>
              <h2 className="text-xl font-bold text-red-600 sm:text-3xl">
                The Challenge (課題と背景)
              </h2>
            </div>

            <div className="rounded-2xl border-l-4 border-red-500 bg-red-50 p-5 shadow-sm sm:p-8">
              <h3 className="mb-2 text-base font-bold text-gray-900 sm:text-xl">
                「マニュアル不在。対応品質が個人の記憶に依存していた」
              </h3>

              <p className="text-sm leading-[1.75] text-gray-700 sm:text-base">
                広告運用およびCS代行事業を展開するUrus様では、公式LINEでの顧客対応が「平日日中のみ」の人力運用となっており、夜間・休日の機会損失が課題でした。
                <br />
                さらに深刻だったのは、回答のための「マニュアル」や「FAQリスト」が社内のどこにも存在せず、対応ノウハウが全てスタッフ個人の頭の中（暗黙知）にあったことです。
                そのため、AIを導入しようにも「学習させるデータがない」という、多くの中小企業が直面する壁にぶつかっていました。
              </p>
            </div>
          </section>
        </ScrollAnimation>

        {/* 02 Solution */}
        <ScrollAnimation>
          <section className="mb-10 sm:mb-12">
            <div className="mb-4 flex items-center">
              <span className="mr-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-600 sm:h-12 sm:w-12 sm:text-lg">
                02
              </span>
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                The Solution (解決策)
              </h2>
            </div>

            <div className="mb-4">
              <h4 className="text-base font-bold text-gray-800 sm:text-lg">
                「ヒアリングから実装まで数日。ゼロからデータを整備し、爆速でAI化」
              </h4>
              <p className="mt-2 text-sm leading-[1.75] text-gray-700 sm:text-base">
                datanautは、単なるシステム開発に留まらず、AI導入の前段階である「データ構築」から伴走しました。
              </p>
            </div>

            <div className="mb-6">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    n: '1',
                    title: '暗黙知のデータ化',
                    text: '経営者・現場スタッフへのヒアリングを行い、頭の中にあったノウハウをその場で言語化。AIが学習可能な「構造化データ（FAQ）」として整備しました。',
                  },
                  {
                    n: '2',
                    title: '圧倒的なスピード開発',
                    text: 'ヒアリングから要件定義、PoC、本導入までを「実働3日（約1週間）で完遂」。一般的な企業の1/10以下の期間でAI導入を実現しました。',
                  },
                  {
                    n: '3',
                    title: '高精度なチューニング',
                    text: '独自ルールをそのままAIが回答できるよう、ゼロから構築したデータをもとにRAG技術で精度向上させました。',
                  },
                ].map((box) => (
                  <div
                    key={box.n}
                    className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                  >
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white sm:h-9 sm:w-9 sm:text-sm">
                      {box.n}
                    </div>
                    <h5 className="mb-1 font-bold text-gray-900">
                      {box.title}
                    </h5>
                    <p className="text-xs leading-[1.7] text-gray-600 sm:text-sm">
                      {box.text}
                    </p>
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
              <span className="mr-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-600 sm:h-12 sm:w-12 sm:text-lg">
                03
              </span>
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                The Impact (導入後の成果)
              </h2>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 shadow-md sm:p-8">
              <h3 className="mb-4 text-center text-base font-bold text-gray-800 sm:text-xl">
                「月間20時間以上の工数削減と、24時間対応を同時に実現」
              </h3>

              <p className="mb-6 text-center text-xs leading-[1.7] text-gray-600 sm:text-base">
                定型対応の自動化と、AIによる24時間稼働により、顕著な成果が得られています。
              </p>

              <div className="grid gap-4 text-center sm:grid-cols-3">
                {[
                  {
                    label: '対応工数',
                    value: '20h 削減',
                    sub: '月間 / 年間30〜50万円のコストカット',
                  },
                  {
                    label: 'リードタイム',
                    value: '0秒',
                    sub: '夜間・休日72時間待ち → 即時回答へ',
                  },
                  {
                    label: '業務の属人化',
                    value: '解消',
                    sub: '新人教育コストの大幅短縮',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm"
                  >
                    <p className="text-xs text-gray-500">{item.label}</p>
                    <p className="mb-1 text-2xl font-bold text-blue-600 sm:text-3xl">
                      {item.value}
                    </p>
                    <p className="text-[10px] text-gray-500 sm:text-xs">
                      {item.sub}
                    </p>
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
