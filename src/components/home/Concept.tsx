import Link from 'next/link'

export const Concept = () => {
  return (
    // ↓↓↓ この行のクラス名を修正しました ↓↓↓
    <section className="bg-gradient-to-r from-gray-800 via-blue-950 to-gray-800 py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        {/* ↓↓↓ テキストカラーを修正しました ↓↓↓ */}
        <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400 animate-fade-in delay-200">
          WHAT IS DATANAUT?
        </h2>
        {/* ↓↓↓ テキストカラーを修正しました ↓↓↓ */}
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl animate-fade-in delay-400">
          ビジネスという宇宙を旅する、あなたの航海士。
        </p>
        {/* ↓↓↓ テキストカラーを修正しました ↓↓↓ */}
        <p className="mt-6 text-lg leading-8 text-gray-300 animate-fade-in delay-600">
          データは現代の未踏領域＝ビジネス宇宙。私たちはその広大な空間と共に挑む航海士として、お客様の経営課題という“ブラックボックス”に挑み、知見とテクノロジーで突破口を拓きます。
        </p>
        <div className="mt-10">
          {/* ↓↓↓ ボタンデザインを修正しました ↓↓↓ */}
          <Link
            href="/vision"
            className="rounded-md border border-white px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            私たちのビジョンについて
          </Link>
        </div>
      </div>
    </section>
  )
}