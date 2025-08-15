import Image from 'next/image';

export const Hero = () => {
  return (
    // 高さを少し低めに調整
    <section className="relative h-[70vh] min-h-[400px]">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        {/* モバイル用背景画像 */}
        <Image
          src="/images/top-S.jpg"
          alt="Datanaut hero background for mobile"
          fill
          className="object-cover md:hidden"
          priority
          quality={90}
        />
        {/* PC用背景画像 */}
        <Image
          src="/images/top-L.jpg"
          alt="Datanaut hero background for desktop"
          fill
          className="object-cover hidden md:block object-bottom"
          priority
          quality={90}
        />
        {/* 黒いオーバーレイのdivを削除 */}
      </div>
      {/* テキストとボタンのコンテンツ全体を削除 */}
    </section>
  );
};