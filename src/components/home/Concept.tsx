import Link from 'next/link'

export const Concept = () => {
  return (
    // 背景のグラデーションは維持
    <section className="bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-300 py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 animate-fade-in delay-200">
          WHAT IS DATANAUT?
        </h2>
        {/* ↓↓↓ 「データと宇宙飛行士。」の行を削除し、上のマージンを調整しました ↓↓↓ */}
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-fade-in delay-400">
          ビジネスという宇宙を旅する、あなたの航海士。
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600 animate-fade-in delay-600">
          データは現代の未踏領域＝ビジネス宇宙。私たちはその広大な空間と共に挑む航海士として、お客様の経営課題という“ブラックボックス”に挑み、知見とテクノロジーで突破口を拓きます。
        </p>
        <div className="mt-10">
          <Link
            href="/vision"
            className="rounded-md border border-blue-600 px-6 py-3 text-base font-medium text-blue-600 transition-colors hover:bg-blue-100 hover:border-blue-700 hover:text-blue-700"
          >
            私たちのビジョンについて
          </Link>
        </div>
      </div>
    </section>
  )
}