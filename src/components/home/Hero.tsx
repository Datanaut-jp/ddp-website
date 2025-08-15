import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] text-white">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        {/* モバイル用背景画像 (画面幅が768px未満で表示) */}
        <Image
          src="/images/top-S.jpg"
          alt="Datanaut hero background for mobile"
          fill
          className="object-cover md:hidden" // md以上で非表示
          priority
          quality={90}
        />
        {/* PC用背景画像 (画面幅が768px以上で表示) */}
        <Image
          src="/images/top-L.jpg"
          alt="Datanaut hero background for desktop"
          fill
          className="object-cover hidden md:block" // md未満で非表示
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* テキストとボタンのコンテンツ（お客様の既存のスタイルを維持） */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 
          className="text-4xl font-semibold tracking-widest md:text-5xl"
          style={{ transform: 'scale(0.85)' }}
        >
          Charting your data universe.
        </h1>
        <p className="mt-4 text-lg text-white">
          データの宇宙に、地図と航路を。
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="animate-pulse-glow relative rounded-md bg-white px-6 py-2.5 text-base font-medium text-blue-900 shadow-lg transition-all duration-200 ease-out hover:scale-110 hover:shadow-white/50 active:scale-95 active:border-blue-300 border-4 border-transparent"
          >
            航海（ビジネス）の相談をする
          </a>
        </div>
      </div>
    </section>
  );
};