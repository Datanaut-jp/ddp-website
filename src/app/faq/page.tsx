import { CTASection } from '@/components/common/CTASection';
import { SectionTitle } from '@/components/common/SectionTitle';

export default function FaqPage() {
  return (
    <>
      <div className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="FAQ" subtitle="よくあるご質問" />
          
          <div className="mt-16 flex min-h-[300px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900">準備中です</h3>
            <p className="mt-2 text-gray-500">
              現在、よくあるご質問をまとめております。<br />
              ご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
}