'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CTASection } from '@/components/common/CTASection'
import { ScrollAnimation } from '@/components/common/ScrollAnimation'

export default function CasesPage() {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      {/* ヘッダー */}
      <div className="bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Case Studies
          </h1>
          <p className="mt-4 text-xl text-gray-300">導入事例</p>
        </div>
      </div>

      {/* 事例一覧 */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-5xl px-4">
          <div className="grid w-full gap-8 md:grid-cols-2">
            {/* 株式会社URUS様の事例カード */}
            <ScrollAnimation>
              <Link
                href="/cases/urus"
                className="block w-full h-full"
              >
                <article className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl">
                  
                  {/* ヘッダー */}
                  <div className="bg-blue-600 px-5 py-6 text-white">
                    <div className="flex flex-wrap items-start gap-4 sm:flex-nowrap sm:items-center">
                      
                      {/* ロゴ */}
                      <div className="relative h-12 w-12 shrink-0">
                        <Image
                          src="/images/urus-logo.png"
                          alt="Urus Logo"
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* テキスト */}
                      <div className="flex min-w-0 flex-col text-left">
                        <p className="text-xs font-semibold tracking-wider text-blue-100">
                          株式会社URUS 様
                        </p>
                        <h2 className="break-words text-lg font-bold sm:text-xl">
                          24時間対応AIチャットボット導入
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* 本文 */}
                  <div className="flex flex-grow flex-col p-6">
                    <p className="mb-4 line-clamp-3 flex-grow text-sm leading-relaxed text-gray-600">
                      「データなし」の状態から、わずか3日でAI導入。
                      CS対応の工数を月20時間削減し、24時間無人化を実現。
                      タイムラグによるCX悪化と暗黙知の課題を、
                      RAG技術で解決しました。
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
