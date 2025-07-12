import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] text-white">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Data network abstract background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* テキストとボタンのコンテンツ */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        {/* ▼▼▼ ご指示に合わせてこのh1タグを修正しました ▼▼▼ */}
        <h1 
          className="text-4xl font-semibold tracking-widest md:text-5xl"
          style={{ transform: 'scale(0.85)' }}
        >
          Charting your data universe.
        </h1>

        {/* ▼▼▼ ご指示に合わせてこのpタグを修正しました ▼▼▼ */}
        <p className="mt-4 text-lg text-white">
          データの宇宙に、地図と航路を。
        </p>

        {/* ボタン（変更なし） */}
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