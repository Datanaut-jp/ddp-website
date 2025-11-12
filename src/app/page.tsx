// src/app/page.tsx

import { Hero } from '@/components/home/Hero';
import { Concept } from '@/components/home/Concept';
import { Services } from '@/components/home/Services';
import { Features } from '@/components/home/Features';
import { BlogPreview } from '@/components/home/BlogPreview';
import { client } from '@/libs/microcms';
import { ScrollAnimation } from '@/components/common/ScrollAnimation';
import { getNoteFeed } from '@/libs/noteFeed';
import { MicroCMSPost, MergedArticle } from '@/types'; // NoteArticleは使わないので削除

export default async function Home() {
  // --- 1. MicroCMSの記事を取得 ---
  const blogData = await client.get<{ contents: MicroCMSPost[] }>({
    endpoint: 'blog',
    // (depth: 1 は参照フィールドがないため不要ですが、残しても害はありません)
    queries: { limit: 3, orders: '-publishedAt', depth: 1 },
  });

  // --- 2. noteの記事を取得 ---
  const allNoteArticles = await getNoteFeed();

  // --- 3. データを「共通の型 (MergedArticle)」に変換 ---

  // 3a. MicroCMSの記事を変換
  const internalArticles: MergedArticle[] = blogData.contents.map((post) => ({
    id: post.id,
    title: post.title,
    thumbnail: post.eyecatch?.url || '/images/apple-icon.png', // 代替画像
    publishedAt: post.publishedAt || new Date().toISOString(),
    url: `/blog/${post.id}`, // 内部リンク
    sourceType: 'internal',
    // --- ▼ 修正箇所 ▼ ---
    // .name を削除し、文字列そのものを参照
    category: post.category || '未分類', 
    // --- ▲ 修正箇所 ▲ ---
  }));

  // 3b. noteの記事を変換
  const noteArticles: MergedArticle[] = allNoteArticles.map((article) => ({
    id: article.link,
    title: article.title,
    thumbnail: article.thumbnail,
    publishedAt: new Date(article.pubDate).toISOString(),
    url: article.link,
    sourceType: 'note',
    category: '外部記事 (note)',
  }));

  // --- 4. 2つのリストを合体させ、日付（新着順）で並び替え ---
  const allMergedArticles = [...internalArticles, ...noteArticles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  // --- 5. 最新3件だけを取得 ---
  const latestThreeMergedArticles = allMergedArticles.slice(0, 3);

  return (
    <>
      <ScrollAnimation animation="slide-in-left">
        <Hero />
      </ScrollAnimation>
      <ScrollAnimation animation="slide-in-right">
        <Concept />
      </ScrollAnimation>
      <ScrollAnimation animation="slide-in-left">
        <Services />
      </ScrollAnimation>
      <ScrollAnimation animation="slide-in-right">
        <Features />
      </ScrollAnimation>

      <ScrollAnimation animation="slide-in-left">
        <BlogPreview posts={latestThreeMergedArticles} />
      </ScrollAnimation>
    </>
  );
}