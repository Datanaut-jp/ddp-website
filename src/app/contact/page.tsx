'use client' // フォームはユーザー操作を伴うため、この行が必要です

import { useState } from 'react'
import { ScrollAnimation } from '@/components/common/ScrollAnimation'

const PageHeader = () => (
  <div className="bg-white py-16 sm:py-24">
    <div className="container mx-auto max-w-5xl px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        相談窓口
      </h1>
      <p className="mt-4 text-xl text-gray-600">
        まずはお気軽にご相談ください。
      </p>
    </div>
  </div>
)

export default function ContactPage() {
  // フォーム送信中の状態を管理（今はまだ使いません）
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <div className="bg-gray-50">
      <PageHeader />
      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <ScrollAnimation>
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-lg leading-8 text-gray-700">
                  Datanautのサービスに関するご質問、協業のご相談、その他どんなことでもお気軽にお問い合わせください。
                  <br />
                  担当者より、3営業日以内にご返信いたします。
                </p>
              </div>

              {/* お問い合わせフォーム */}
              <form className="mt-10 space-y-6 rounded-lg bg-white p-8 shadow-lg">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    お名前<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    会社名
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    メールアドレス<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    お問い合わせ内容<span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      required
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="pt-6 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 px-10 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-cyan-500/50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? '送信中...' : 'メッセージを送信'}
                  </button>
                </div>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}