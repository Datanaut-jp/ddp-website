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
    <div className="w-full">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfMQBwcSVN0ZIjrOCEGxLaLmqU-kaF0EWJdTpBDMkMm2nOUIA/viewform?embedded=true"
        width="640"
        height="1449"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        className="w-full"
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
      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-2xl px-4">
          <ScrollAnimation>
            <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-10">
              <GoogleForm />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
