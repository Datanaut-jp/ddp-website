import { CTASection } from '@/components/common/CTASection';
import { SectionTitle } from '@/components/common/SectionTitle';

export default function ResourcesPage() {
  return (
    <>
      <div className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Resources" subtitle="お役立ち資料" />
          
          <div className="mt-16 flex min-h-[300px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900">準備中です</h3>
            <p className="mt-2 text-gray-500">
              現在、資料を作成中です。<br />
              公開準備が整い次第、こちらでご案内いたします。
            </p>
            
            {/* 将来的にここに資料一覧が入ります */}
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}