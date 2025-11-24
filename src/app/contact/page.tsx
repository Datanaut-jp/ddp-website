'use client'

import { ScrollAnimation } from '@/components/common/ScrollAnimation'
import Image from 'next/image'

// PageHeader（変更なし）
const PageHeader = () => (
  <div className="relative bg-gray-900">
    <div className="absolute inset-0">
      <Image 
        src="/images/company-background.jpg"
        alt="Contact background"
        fill
        className="object-cover opacity-30"
        priority
        quality={90}
      />
    </div>
    <div className="relative isolate py-20 sm:py-28">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          相談窓口
        </h1>
      </div>
    </div>
  </div>
)

// Googleフォーム埋め込みコンポーネント
const GoogleForm = () => {
  return (
    <div className="w-full flex justify-center">
      <iframe
        // ★ここにGoogleフォームのURLが入っているか確認してください
        src="https://docs.google.com/forms/d/e/1FAIpQLSfMQBwcSVN0ZIjrOCEGxLaLmqU-kaF0EWJdTpBDMkMm2nOUIA/viewform?embedded=true"
        width="100%" // 幅を100%にして親要素に合わせる
        height="1800"
        frameBorder="0" 
        marginHeight={0} 
        marginWidth={0}
        className="w-full"
        title="Datanaut お問い合わせフォーム"
      >
        読み込んでいます…
      </iframe>
    </div>
  )
}

export default function ContactPage() {
  return (
    <div className="bg-gray-100">
      <PageHeader />
      <div className="py-8 sm:py-24">
        {/* ▼ 修正箇所：max-w-4xl に広げ、スマホ時の横余白(px)を削除 */}
        <div className="container mx-auto max-w-4xl px-0 sm:px-4">
          <ScrollAnimation>
            {/* ▼ 修正箇所：スマホ時の内側余白(p)を0にし、PC時だけ余白をつける */}
            <div className="rounded-none sm:rounded-2xl bg-white p-0 sm:p-10 shadow-none sm:shadow-2xl overflow-hidden">
              <GoogleForm />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
