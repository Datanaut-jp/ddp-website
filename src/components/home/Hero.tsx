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
    const scrollTimer = setTimeout(() => setShowScroll(true), 2000);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(scrollTimer);
    };
  }, []);

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
        className={`absolute z-10 top-[30%] left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 w-full px-4 text-center transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`}
      >
        <h1 className="text-3xl font-light tracking-wider sm:text-5xl md:text-6xl">
          CHARTING
          <br />
          <span className="whitespace-nowrap">YOUR DATA UNIVERSE.</span>
        </h1>
        <div className="mt-8 flex justify-center">
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
        className={`absolute z-10 bottom-24 left-1/2 -translate-x-1/2 transition-opacity duration-1000 ${showScroll ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex items-center space-x-2 text-sm font-light">
          <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>scroll.</span>
          <ArrowIcon width={24} height={64} className="animate-bounce" />
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
    viewBox="0 0 24 24"
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