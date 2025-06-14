import Image from 'next/image'; // Imageコンポーネントをインポート

export const Hero = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] text-white">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          // ↓↓↓ ここをローカルの画像パスに変更しました ↓↓↓
          src="/images/hero-background.jpg" 
          alt="Datanautのヒーローセクション背景"
          fill
          className="object-cover"
          priority 
          quality={90}
        />
        {/* 画像の上に半透明の黒いオーバーレイを重ねて、文字を読みやすくします */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* テキストとボタンのコンテンツ */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl animate-fade-in delay-500">
          Charting your data universe.
        </h1>
        <p className="mt-4 text-lg text-blue-200">
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