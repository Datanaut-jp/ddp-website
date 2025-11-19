// import Link from 'next/link';  <-- この行を削除しました

export const CTASection = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          ビジネスの変革を、<br className="sm:hidden" />データとAIで。
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Datanautは、お客様の課題に寄り添い、最適な解決策をご提案します。<br />
          まずはお気軽にご相談ください。
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-x-6">
          {/* 資料ダウンロードボタン */}
          <a
            href="https://forms.gle/ffTAy3ktWwSDMKD56"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-md bg-white px-8 py-3.5 text-base font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-200 hover:bg-blue-50 sm:w-auto"
          >
            お役立ち資料ダウンロード
          </a>
          
          {/* 相談窓口ボタン */}
          <a
            href="https://forms.gle/6wa1JxbmEJR9rXTdA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-md bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto"
          >
            無料相談を申し込む
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          ※外部フォーム（Google Forms）へ移動します
        </p>
      </div>
    </section>
  );
};