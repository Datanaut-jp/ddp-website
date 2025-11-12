// src/components/home/BlogPreview.tsx

import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
// ↓ 共通の型をインポート
import { MergedArticle } from '@/types';
// ↓ 先日作成したSectionTitleをインポート
import { SectionTitle } from '@/components/common/SectionTitle';

// ↓ propsの型を MergedArticle[] に変更
export const BlogPreview = ({ posts }: { posts: MergedArticle[] }) => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        
        {/* --- ▼ タイトルをご要望通りに変更 ▼ --- */}
        {/* 既存のタイトルを削除し、SectionTitleコンポーネントで置き換え */}
        <SectionTitle title="News" subtitle="新着情報 & 外部記事" />
        {/* --- ▲ タイトルをご要望通りに変更 ▲ --- */}

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => {
            // 記事カード全体をリンクにするか、ただのdivにするかを決める
            // (外部リンク(note)の場合は<a>を使い、内部リンク(blog)の場合は<Link>を使います)
            const CardWrapper =
              post.sourceType === 'note'
                ? ({ children }: { children: React.ReactNode }) => (
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {children}
                    </a>
                  )
                : ({ children }: { children: React.ReactNode }) => (
                    <Link href={post.url} className="block">
                      {children}
                    </Link>
                  );

            return (
              <CardWrapper key={post.id}>
                <div className="group overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-lg">
                  <div className="relative h-40 w-full overflow-hidden">
                    {/* post.thumbnail は note も microCMS も共通の画像URL */}
                    {post.thumbnail ? (
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="h-full w-full bg-gray-100"></div>
                    )}
                  </div>
                  <div className="p-6">
                    {/* カテゴリ表示を、noteか内部カテゴリかで分岐 */}
                    <p className="text-sm text-blue-600">
                      {post.sourceType === 'note' ? '外部記事 (note)' : post.category}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600 line-clamp-3">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-sm text-gray-500">
                      {/* 共通の publishedAt をフォーマット */}
                      {format(new Date(post.publishedAt), 'yyyy年M月d日')}
                    </p>
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog" // 内部ブログの一覧ページ（もしnoteも含めた一覧ページを作るなら、/news などに変更）
            className="rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-blue-700"
          >
            すべての記事を見る
          </Link>
        </div>
      </div>
    </section>
  );
};