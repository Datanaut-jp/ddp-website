import Link from 'next/link'

export const Concept = () => {
  return (
    <section className="bg-gradient-to-r from-gray-800 via-blue-950 to-gray-800 py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="animate-fade-in text-sm font-bold tracking-widest text-cyan-400 uppercase delay-200">
          WHAT IS DATANAUT?
        </h2>
        <p className="animate-fade-in mt-4 text-3xl leading-tight font-bold tracking-tight text-white delay-400 sm:text-4xl">
          データとAIで、
          <br className="sm:hidden" />
          すべてのビジネスに
          <br />
          「進化」の追い風を。
        </p>
        <p className="animate-fade-in mx-auto mt-6 max-w-2xl text-left text-lg leading-8 text-gray-300 delay-600 sm:text-center">
          「業務効率化」はあくまで手段。
          <br />
          真の目的は、企業や個人が本来持っているポテンシャルを解放し、成長させることだと定義する。
        </p>
        <div className="mt-10">
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
