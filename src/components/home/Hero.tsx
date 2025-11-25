'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// スライドショーに使う画像のリスト
const desktopImages = [
  { src: '/images/top-L-1.jpeg', alt: 'Hero image 1' },
  { src: '/images/top-L-2.jpeg', alt: 'Hero image 2' },
  { src: '/images/top-L-3.jpeg', alt: 'Hero image 3' },
];

export const Hero = () => {
  const [showText, setShowText] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 1000);
    const scrollTimer = setTimeout(() => setShowScroll(true), 3000);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(scrollTimer);
    };
  }, []);

  // 表示する日本語テキスト
  const line1 = "データとAIで、";
  const line2 = 'ビジネスに「進化」の追い風を。';

  return (
    <section className="relative h-screen text-white overflow-hidden">
      {/* 背景画像スライドショー */}
      <div className="absolute inset-0 -z-10">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="h-full w-full"
        >
          {desktopImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={100}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none"></div>

      {/* テキストとロゴのコンテンツ */}
      <div
        className="absolute z-10 top-[30%] left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 w-full px-4 text-center"
      >
        {/* 修正箇所: フォントサイズ調整
            text-2xl: モバイル用（画像のサイズ感を維持）
            sm:text-4xl: タブレット用
            md:text-5xl: PC用 (以前の6xlから縮小)
            lg:text-6xl: 大画面PC用 (以前の7xlから縮小)
        */}
        <h1 className="text-2xl font-bold tracking-wider sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
          {/* 1行目 */}
          <div className="whitespace-nowrap">
            {line1.split('').map((char, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-500 ${showText ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>

          {/* 2行目 */}
          <div className="whitespace-nowrap mt-2">
            {line2.split('').map((char, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-500 ${showText ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                style={{ transitionDelay: `${(line1.length + index) * 40}ms` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        </h1>

        {/* ロゴはテキストアニメーション後に表示 */}
        <div className={`mt-8 flex justify-center transition-opacity duration-700 ${showText ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src="/images/logo-full-white.svg"
            alt="Datanaut Logo"
            width={216}
            height={48.6}
          />
        </div>
      </div>

      {/* スクロール矢印 */}
      <div
        className={`absolute z-10 bottom-20 left-1/2 -translate-x-1/2 transition-opacity duration-1000 ${showScroll ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex items-center space-x-2 text-sm font-light">
          <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>scroll.</span>
          <ArrowIcon width={24} height={64} className="animate-bounce translate-y-6" />
        </div>
      </div>
    </section>
  )
}

// 矢印SVG
const ArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 13.5L12 21m0 0L4.5 13.5M12 21V3"
    />
  </svg>
);