// src/app/page.tsx

import { Hero } from '@/components/home/Hero';
import { Concept } from '@/components/home/Concept';
import { Services } from '@/components/home/Services';
import { Features } from '@/components/home/Features';
import { BlogPreview } from '@/components/home/BlogPreview';
import { client } from '@/libs/microcms';
import { ScrollAnimation } from '@/components/common/ScrollAnimation';

// --- ▼ 3行追加 ▼ ---
// ステップ4で作成したコンポーネント
import { NoteFeed } from '@/components/home/NoteFeed';
// ステップ3で作成したロジック
import { getNoteFeed } from '@/libs/noteFeed';
// --- ▲ 3行追加 ▲ ---


export default async function Home() {
  const blogData = await client.get({
    endpoint: 'blog',
    queries: { limit: 3, orders: '-publishedAt' },
  });

  // --- ▼ 2行追加 ▼ ---
  // noteの記事を取得
  const allNoteArticles = await getNoteFeed();
  // ご要望通り、最新3件だけ取得
  const latestThreeArticles = allNoteArticles.slice(0, 3);
  // --- ▲ 2行追加 ▲ ---

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
        <BlogPreview posts={blogData.contents} />
      </ScrollAnimation>
      
      {/* --- ▼ 3行追加（ここが最下部） ▼ --- */}
      {/* サイトの表示とアニメーションを統一するため、ScrollAnimationで囲います */}
      <ScrollAnimation animation="slide-in-right">
        <NoteFeed items={latestThreeArticles} />
      </ScrollAnimation>
      {/* --- ▲ 3行追加 ▲ --- */}
    </>
  );
}