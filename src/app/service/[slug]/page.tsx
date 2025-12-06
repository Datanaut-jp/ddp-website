import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ScrollAnimation } from '@/components/common/ScrollAnimation'
import React from 'react'

export async function generateStaticParams() {
  return [{ slug: 'dx-support' }, { slug: 'sme-consultant' }]
}

// アイコンコンポーネント
const CheckIcon = () => (
  <svg
    className="h-6 w-6 flex-none text-blue-600"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
)

const FeatureIcon = ({ number }: { number: number }) => (
  <div className="relative h-12 w-12">
    <svg
      className="h-full w-full text-blue-600"
      fill="none"
      viewBox="0 0 64 64"
    >
      <path
        stroke="currentColor"
        strokeWidth="2"
        d="M14 1H50C57.1797 1 63 6.8203 63 14V50C63 57.1797 57.1797 63 50 63H14C6.8203 63 1 57.1797 1 50V14C1 6.8203 6.8203 1 14 1Z"
      />
    </svg>
    <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-blue-600">
      {number}
    </span>
  </div>
)

// サービスデータ型
type Service = {
  title: string
  titleImage?: string
  description: string
  challenges: string[]
  features: { name: string; description: string }[]
}

// サービスデータ
const servicesData: { [key: string]: Service } = {
  'dx-support': {
    title: 'AI活用とデータ整備による業務自動化支援',
    description:
      '貴社の業務プロセスを深く理解し、最適なITツール導入から定着までをワンストップで伴走支援。単なるツール導入ではない、抜本的な業務改革を実現します。',
    challenges: [
      'AI/DXの始め方が分からない',
      'AIチャットボットがポンコツで使えない',
      'Excel集計/転記に時間を奪われている',
    ],
    features: [
      {
        name: '業務プロセスの可視化と課題診断',
        description:
          '専門家が貴社の業務を徹底的にヒアリング・分析し、DX化のボトルネックを特定します。',
      },
      {
        name: '最適なAI自動化ツールの設計・構築',
        description:
          '多数のSFA/MAツールの中から、貴社の課題と予算に最適なものを中立的な立場で選定します。',
      },
      {
        name: '定着のための研修・継続支援',
        description:
          'ツールの使い方だけでなく、組織全体で活用するためのルール作りや研修まで、成果が出るまで伴走します。',
      },
    ],
  },
  'sme-consultant': {
    title: '中小企業診断士事務所',
    titleImage: '/images/fujimoto-office-logo.svg',
    description:
      '国や自治体が提供する、返済不要の補助金・助成金を活用しませんか？情報収集から複雑な申請手続き、採択後の報告まで、専門家がフルサポートします。',
    challenges: [
      '使える補助金があるのか、調べる時間がない',
      '申請書の書き方が難しくて、途中で諦めてしまった',
      '自社の取り組みがどの補助金に該当するかわからない',
    ],
    features: [
      {
        name: '最適な補助金・助成金の提案',
        description:
          '貴社の事業計画や投資内容に合わせ、活用できる可能性のある制度を網羅的にリストアップし、ご提案します。',
      },
      {
        name: '採択率を高める事業計画書作成',
        description:
          '審査員に響く、説得力のある事業計画書の作成を、中小企業診断士が徹底的にサポートします。',
      },
      {
        name: '複雑な申請・報告プロセスの代行',
        description:
          '手間のかかる電子申請や、採択後の実績報告まで、専門家として責任を持って対応します。',
      },
    ],
  },
}

interface ServiceDetailPageProps {
  params: { slug: string }
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const slug = params.slug
  const service = servicesData[slug]

  if (!service) notFound()

  const steps = [
    '無料相談・診断',
    'ご提案・お見積もり',
    '開発・実装',
    '研修/継続サポート',
  ]

  return (
    <div className="bg-white">
      {/* ページヘッダー */}
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
              <h1 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-5xl">
                {service.title}
              </h1>
            )}
            <p className="mt-6 text-lg leading-8 text-gray-700">
              {service.description}
            </p>
          </ScrollAnimation>

          {/* 「準備中」セクションは dx-support 以外のみ表示 */}
          {slug !== 'dx-support' && (
            <div className="mt-12 flex min-h-[200px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                準備中です
              </h3>
              <p className="mt-2 text-gray-500">
                現在、資料を作成中です。
                <br />
                公開準備が整い次第、こちらでご案内いたします。
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 課題セクション */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <ScrollAnimation>
            <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              こんな課題はありませんか？
            </h2>
            <div className="flex justify-center">
              <ul className="mt-8 space-y-4 text-lg text-gray-600">
                {service.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start sm:whitespace-nowrap"
                  >
                    <CheckIcon />
                    <span className="ml-3">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* 特徴セクション */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <ScrollAnimation>
            <div className="text-center">
              <h2 className="text-base leading-7 font-semibold text-blue-600">
                Our Features
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Datanautが提供する価値
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {service.features.map((feature, index) => (
                <div
                  key={feature.name}
                  className="flex flex-col items-center text-center"
                >
                  <FeatureIcon number={index + 1} />
                  <h3 className="mt-5 text-xl font-semibold text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* ご支援の流れ */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ご支援の流れ
            </h2>
            <ol className="mt-16 flex flex-col items-center justify-between gap-y-8 sm:flex-row sm:gap-x-4">
              {steps.map((step, index) => (
                <React.Fragment key={step}>
                  <li className="flex w-full flex-col items-center text-center sm:w-auto">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="mt-2 text-lg font-medium text-gray-800">
                      {step}
                    </p>
                  </li>
                  {index < steps.length - 1 && (
                    <li className="hidden flex-1 items-center sm:flex">
                      <div className="relative w-full">
                        <div className="w-full border-b-2 border-gray-300"></div>
                        <div className="absolute top-1/2 -right-2 -translate-y-1/2 text-gray-300">
                          ▶
                        </div>
                      </div>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ol>
          </ScrollAnimation>
        </div>
      </div>

      {/* CTAセクション */}
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
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-lg transition-transform hover:scale-105"
              >
                無料で相談する
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
