'use client'

import { ScrollAnimation } from '@/components/common/ScrollAnimation'
import Script from 'next/script'
import Image from 'next/image' // Imageコンポーネントをインポート

// PageHeaderを背景画像対応のデザインに更新
const PageHeader = () => (
  <div className="relative bg-gray-900">
    <div className="absolute inset-0">
      <Image 
        src="/images/company-background.jpg" // 共通の背景画像を指定
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

// HubSpotフォーム埋め込み用コンポーネント（変更なし）
const HubSpotForm = () => {
  return (
    <>
      <div
        className="hs-form-frame"
        data-region="na1"
        data-form-id="d59791dd-02f2-49f1-b9b3-4046aacb2b6e"
        data-portal-id="48547585"
      ></div>
      <Script
        src="https://js.hsforms.net/forms/embed/48547585.js"
        strategy="afterInteractive"
        async
        defer
      />
    </>
  );
};


export default function ContactPage() {
  return (
    <div className="bg-gray-100">
      <PageHeader />
      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-2xl px-4">
          <ScrollAnimation>
            <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-10">
              <HubSpotForm />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}