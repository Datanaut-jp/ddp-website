import Image from 'next/image';
import { ScrollAnimation } from '@/components/common/ScrollAnimation';

// PageHeaderコンポーネント（変更なし）
const PageHeader = () => (
  <div className="relative bg-gray-900">
    <div className="absolute inset-0">
      <Image 
        src="/images/company-background.jpg"
        alt="Datanaut Team"
        fill
        className="object-cover opacity-30"
        priority
        quality={90}
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

// ProfileTableコンポーネント（変更なし）
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
            <dd className="mt-1 text-base leading-7 text-gray-700 sm:col-span-2 sm:mt-0">
              {item.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

// CompanyPage本体（ProfileTableの配置場所を変更）
export default function CompanyPage() {
  return (
    <div className="bg-gray-50">
      <PageHeader />
      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          {/* ご挨拶セクション */}
          <ScrollAnimation>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="md:col-span-1">
                <div className="relative h-40 w-40 overflow-hidden rounded-full mx-auto md:mx-0">
                  <Image src="/images/ceo.jpg" alt="代表者プロフィール写真" fill className="object-cover" quality={90}/>
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-lg font-semibold text-gray-900">[代表者名]</h3>
                  <p className="text-sm text-gray-500">代表取締役</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  ご挨拶
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  [ここにご挨拶文が入ります。Datanautのミッションや、お客様への想いなどを記載します。]
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* 会社情報セクション（グリッドの外に配置） */}
          <ScrollAnimation>
            <div className="mt-16 sm:mt-24">
              <ProfileTable />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}