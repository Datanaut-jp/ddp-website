import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative h-[85vh] text-white md:h-auto md:aspect-video">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        {/* モバイル用背景画像 */}
        <Image
          src="/images/top-S.jpg"
          alt="Datanaut hero background for mobile"
          fill
          className="object-cover md:hidden"
          priority
          quality={100} // ← 画質を最高設定(100)に変更
        />
        {/* PC用背景画像 */}
        <Image
          src="/images/top-L.jpg"
          alt="Datanaut hero background for desktop"
          fill
          className="object-cover hidden md:block object-bottom"
          priority
          quality={100} // ← 画質を最高設定(100)に変更
        />
      </div>
    </section>
  );
};