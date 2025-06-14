import Image from 'next/image';
import { ScrollAnimation } from '@/components/common/ScrollAnimation';

// ページヘッダー
const PageHeader = () => (
  // 背景画像の上に半透明の黒を重ねて、文字を読みやすくするテクニック
  <div className="relative bg-gray-900">
    <div className="absolute inset-0">
      {/* 仮の背景画像です。後で最適なものに差し替えます。 */}
      <Image 
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
        alt="Datanaut Team"
        fill
        className="object-cover opacity-30"
        priority
      />
    </div>
    <div className="relative isolate py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          会社概要
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Datanautの基本情報をご紹介します。
        </p>
      </div>
    </div>
  </div>
);

// 会社情報のテーブル
const ProfileTable = () => {
  const profileItems = [
    { term: '商号', description: 'Datanaut' },
    { term: '設立', description: '[設立日]' },
    { term: '代表者', description: '[代表者名]' },
    { term: '所在地', description: '[会社の所在地]' },
    {
      term: '事業内容',
      description:
        'データとAI活用支援、業務効率化・DX推進支援、補助金・助成金活用コンサルティング',
    },
  ];

  return (
    <div className="mt-10 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <dl className="divide-y divide-gray-200">
        {profileItems.map((item) => (
          <div className="px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4" key={item.term}>
            <dt className="text-base font-medium text-gray-900">{item.term}</dt>
            <dd className="mt-1 text-base text-gray-600 sm:col-span-2 sm:mt-0">
              {item.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

// 会社概要ページ本体
export default function CompanyPage() {
  return (
    <div className="bg-gray-50">
      <PageHeader />
      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <ScrollAnimation>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {/* ご挨拶セクション */}
              <div className="md:col-span-1">
                <div className="relative h-40 w-40 overflow-hidden rounded-full mx-auto md:mx-0">
                  {/* 仮の代表者写真 */}
                  <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" alt="代表者プロフィール写真" fill className="object-cover" />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-lg font-semibold text-gray-900">[代表者名]</h3>
                  <p className="text-sm text-gray-500">代表取締役</p>
                </div>
              </div>

              {/* メインコンテンツ（ご挨拶文と会社情報） */}
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  ご挨拶
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  [ここにご挨拶文が入ります。Datanautのミッションや、お客様への想いなどを記載します。]
                </p>
                <ProfileTable />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}