'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// スライドショーに使う画像のリスト
const desktopImages = [
  { src: '/images/top-L.jpg', alt: 'Hero image 1' },
];
const mobileImages = [
  { src: '/images/top-S.jpg', alt: 'Hero image 1 for mobile' },
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
    <section className="relative h-screen text-white">
      {/* 背景画像スライドショー */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="absolute inset-0 hidden md:block"
      >
        {desktopImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              quality={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="absolute inset-0 md:hidden"
      >
        {mobileImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              quality={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="absolute inset-0 bg-black/60"></div>

      {/* テキストとロゴのコンテンツ */}
      {/* ▼▼▼ このdivのクラス名を修正しました ▼▼▼ */}
      <div 
        className={`absolute top-[30%] left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 w-full text-center transition-opacity duration-1000 ${showText ? 'opacity-100' : 'opacity-0'}`}
      >
        <div>
          <h1 className="text-4xl font-bold tracking-wider sm:text-5xl md:text-6xl">
            CHARTING
            <br />
            YOUR DATA UNIVERSE.
          </h1>
          <div className="mt-8 flex justify-center">
            <Image
              src="/images/logo-full-white.svg"
              alt="Datanaut Logo"
              width={200}
              height={45}
            />
          </div>
        </div>
      </div>
      
      {/* スクロール矢印 */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-1000 ${showScroll ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex items-center space-x-2 text-sm font-light">
          <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>scroll.</span>
          <ArrowIcon
            width={24}
            height={64}
            className="animate-bounce"
          />
        </div>
      </div>
    </section>
  )
}

// 矢印SVGをコード内に直接定義
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