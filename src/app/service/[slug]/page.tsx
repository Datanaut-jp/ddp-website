// 仮のサービスデータ
const serviceData: { [key: string]: { title: string; description: string } } = {
  'dx-support': {
    title: '業務効率化とDX推進支援',
    description: 'このページでは、業務効率化とDX推進支援サービスの詳細についてご説明します。',
  },
  'sme-consultant': {
    title: '中小企業診断士事務所',
    description: 'このページでは、中小企業診断士事務所としてのサービス詳細についてご説明します。',
  },
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug];

  if (!service) {
    return <div>サービスが見つかりません。</div>;
  }

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {service.title}
        </h1>
        <p className="mt-6 text-xl leading-8 text-gray-600">
          {service.description}
        </p>
      </div>
    </div>
  );
}