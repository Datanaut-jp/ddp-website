import Image from 'next/image';
import { ScrollAnimation } from '@/components/common/ScrollAnimation';
import type { ReactNode } from 'react'; // ← ReactNodeの型をインポート

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

// ProfileTableコンポーネント
const ProfileTable = () => {
  // ↓↓↓ descriptionの型を、ReactNodeに変更しました ↓↓↓
  const profileItems: { term: string; description: ReactNode }[] = [
    { term: '商号', description: 'Datanaut' },
    { term: '設立', description: '2025年6月14日' },
    { term: '代表者', description: '藤本 和海' },
    { term: '所在地', description: '東京都渋谷区桜丘町26-1 セルリアンタワー15F' },
    {
      term: '事業内容',
      description: (
        <>
          データとAI活用支援
          <br />
          業務効率化・DX推進支援
          <br />
          補助金・助成金活用コンサルティング
        </>
      ),
    },
  ];

  return (
    <div className="mt-10 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <dl className="divide-y divide-gray-200">
        {profileItems.map((item) => (
          <div className="px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4" key={item.term}>
            <dt className="text-base font-medium text-gray-900">{item.term}</dt>
            <dd className="mt-1 text-base leading-7 text-gray-600 sm:col-span-2 sm:mt-0">
              {item.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};


// CompanyPage本体（変更なし）
export default function CompanyPage() {
  return (
    <div>
      <PageHeader />
      
      <section aria-labelledby="greeting-heading" className="bg-gradient-to-r from-white to-blue-50 py-24 sm:py-32">
        <div className="container mx-auto max-w-4xl px-4">
          <ScrollAnimation>
            <div className="text-center">
              <h2 id="greeting-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                ご挨拶
              </h2>
              <p className="mt-6 text-xl leading-9 text-gray-700">
                この度、株式会社Datanautを設立いたしました。
                <br />
                データとAIの力で、お客様の事業成長を支援します。
                <br />
                未来を拓く航海を、共に。
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section aria-labelledby="profile-heading" className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <ScrollAnimation>
            <div>
              <h2 id="profile-heading" className="text-3xl font-bold tracking-tight text-gray-900 text-center">
                会社情報
              </h2>
              <ProfileTable />
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}