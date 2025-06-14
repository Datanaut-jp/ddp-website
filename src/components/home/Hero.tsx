export const Hero = () => {
  return (
    <section className="relative flex h-[60vh] min-h-[400px] items-center justify-center bg-gradient-to-br from-sky-500 to-blue-600 text-white">
      <div className="relative z-10 text-center">
        {/* ↓ この行のclassNameにアニメーション用のクラスを追加しました */}
        <h1 className="animate-fade-in text-4xl font-bold tracking-tight delay-500 md:text-6xl">
          Charting your data universe.
        </h1>
        <p className="mt-4 text-lg text-blue-200">
          データの宇宙に、地図と航路を。
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="animate-pulse-glow relative rounded-md border-4 border-transparent bg-white px-6 py-2.5 text-base font-medium text-blue-900 shadow-lg transition-all duration-200 ease-out hover:scale-110 hover:shadow-white/50 active:scale-95 active:border-blue-300">
            航海（ビジネス）の相談をする
          </a>
        </div>
      </div>
    </section>
  )
}
