import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ScrollAnimation } from '@/components/common/ScrollAnimation';

// このページで使うアイコンコンポーネント
const CheckIcon = () => <svg className="h-6 w-6 flex-none text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>;
const FeatureIcon = () => <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>;

// サービスデータの型を定義
type Service = {
  title: string;
  titleImage?: string;
  description: string;
  challenges: string[];
  features: { name: string; description: string }[];
};

// 各サービスの詳細データ
const servicesData: { [key: string]: Service } = {
  'dx-support': {
    title: '業務効率化とDX推進支援',
    description: '貴社の業務プロセスを深く理解し、最適なITツール導入から定着までをワンストップで伴走支援。単なるツール導入ではない、抜本的な業務改革を実現します。',
    challenges: ['日々の業務に追われ、何から手をつければいいか分からない', 'ITツールを導入したが、うまく活用できていない', 'データの入力や転記作業に多くの時間がかかっている'],
    features: [
      { name: '現状分析と課題の可視化', description: '専門家が貴社の業務を徹底的にヒアリング・分析し、DX化のボトルネックを特定します。' },
      { name: '最適なITツールの選定・導入', description: '多数のSFA/MAツールの中から、貴社の課題と予算に最適なものを中立的な立場で選定します。' },
      { name: '定着化までの手厚いサポート', description: 'ツールの使い方だけでなく、組織全体で活用するためのルール作りや研修まで、成果が出るまで伴走します。' },
    ],
  },
  'sme-consultant': {
    title: '中小企業診断士事務所',
    titleImage: '/images/fujimoto-office-logo.svg',
    description: '国や自治体が提供する、返済不要の補助金・助成金を活用しませんか？情報収集から複雑な申請手続き、採択後の報告まで、専門家がフルサポートします。',
    challenges: ['使える補助金があるのか、調べる時間がない', '申請書の書き方が難しくて、途中で諦めてしまった', '自社の取り組みがどの補助金に該当するかわからない'],
    features: [
      { name: '最適な補助金・助成金の提案', description: '貴社の事業計画や投資内容に合わせ、活用できる可能性のある制度を網羅的にリストアップし、ご提案します。' },
      { name: '採択率を高める事業計画書作成', description: '審査員に響く、説得力のある事業計画書の作成を、中小企業診断士が徹底的にサポートします。' },
      { name: '複雑な申請・報告プロセスの代行', description: '手間のかかる電子申請や、採択後の実績報告まで、専門家として責任を持って対応します。' },
    ],
  },
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  const steps = ["無料相談・ヒアリング", "ご提案・お見積もり", "ご契約・支援開始", "定期的な進捗確認"];

  return (
    <div className="bg-white">
      {/* 1. ページヘッダー */}
      <div className="bg-gray-50">
        <div className="container mx-auto max-w-5xl px-4 py-16 text-center sm:py-24">
          <ScrollAnimation>
            {service.titleImage ? (
              <Image
                src={service.titleImage}
                alt={service.title}
                width={500}
                height={150}
                className="mx-auto"
                priority
              />
            ) : (
              <h1 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-5xl">{service.title}</h1>
            )}
            <p className="mt-6 text-lg leading-8 text-gray-700">{service.description}</p>
          </ScrollAnimation>
        </div>
      </div>

      {/* 2. 「こんな課題はありませんか？」セクション */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <ScrollAnimation>
            <h2 className="text-2xl font-bold tracking-tight text-center text-gray-900 sm:text-3xl">こんな課題はありませんか？</h2>
            {/* ↓↓↓ このulタグとliタグのクラス名を修正しました ↓↓↓ */}
            <div className="flex justify-center">
              <ul className="mt-8 space-y-4 text-lg text-gray-600">
                {service.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start whitespace-nowrap">
                    <CheckIcon />
                    <span className="ml-3">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* 3. サービスの特徴 */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <ScrollAnimation>
            <div className="text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Our Features</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Datanautが提供する価値</p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {service.features.map((feature) => (
                <div key={feature.name} className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <FeatureIcon />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* 4. ご支援の流れ */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">ご支援の流れ</h2>
            <ol className="mt-12 grid grid-cols-1 gap-8 text-left sm:grid-cols-2 md:grid-cols-4">
              {steps.map((step, index) => (
                <li key={step} className="relative flex items-start">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="ml-4 text-lg font-medium text-gray-800">{step}</p>
                </li>
              ))}
            </ol>
          </ScrollAnimation>
        </div>
      </div>

      {/* 5. CTAセクション */}
      <div className="bg-white">
        <div className="container mx-auto max-w-4xl px-4 py-16 text-center sm:py-20">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              あなたの航海を、始めませんか？
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              まずはお気軽にご相談ください。専門家があなたの課題を整理し、最適な航路をご提案します。
            </p>
            <div className="mt-10">
              <Link href="/contact" className="rounded-md bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-lg transition-transform hover:scale-105">
                無料で相談する
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}