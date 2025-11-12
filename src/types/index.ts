// src/types/index.ts

// 1. MicroCMSの記事の型
export type MicroCMSPost = {
  id: string;
  title: string;
  // --- ▼ 修正箇所 ▼ ---
  // { name: string } ではなく、 string? （文字列）に修正
  category?: string;
  // --- ▲ 修正箇所 ▲ ---
  publishedAt?: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
  // contentフィールドも追加（blog/[id]/page.tsx で使われているため）
  content?: string;
};

// 2. noteの記事の型
export type NoteArticle = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
};

// 3. 合体後の「共通の記事」の型
export type MergedArticle = {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string; // ISODate形式の文字列
  url: string;
  sourceType: 'internal' | 'note'; // 記事の出処
  category: string;
};