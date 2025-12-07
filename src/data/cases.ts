export type CaseStudy = {
  id: string;
  client: string;
  title: string;
  description: string;
  image: string;
};

export const casesData: CaseStudy[] = [
  {
    id: 'urus',
    client: '株式会社Urus 様',
    title: '24時間対応AIチャットボット導入',
    description: '「データなし」の状態から、わずか3日でAI導入。CS対応の工数を月20時間削減し、24時間無人化を実現。',
    // ※画像は適当なものを指定するか、public/images/に配置してください
    // 今回は仮で top-L-1.jpeg を使います
    image: '/images/top-L-1.jpeg',
  },
  // 今後事例が増えたらここに追加します
];