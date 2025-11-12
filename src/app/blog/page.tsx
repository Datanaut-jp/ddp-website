// src/app/blog/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/libs/microcms';
import { format } from 'date-fns';

// --- ▼ 1. 必要な型と関数をインポート ▼ ---
import { getNoteFeed } from '@/libs/noteFeed';
import { MicroCMSPost, NoteArticle, MergedArticle } from '@/types';

// --- ▲ 1. 必要な型と関数をインポート ▲ ---

// --- 2. 古いPost型定義は削除 (src/types/index.tsで管理するため) ---
// type Post = { ... }; // ◀ 削除

// ブログ一覧ページ
export default async function BlogPage() {
  
  // --- ▼ 3. MicroCMSとnoteの両方から全データを取得 ▼ ---

  // 3a. MicroCMSから全記事のデータを取得 (最大100件)
  const blogData = await client.get<{ contents: MicroCMSPost[] }>({
    endpoint: 'blog',
    queries: { orders: '-publishedAt', limit: 100 },
  });

  // 3b. noteから全記事のデータを取得
  const allNoteArticles = await getNoteFeed();

  // --- ▲ 3. MicroCMSとnoteの両方から全データを取得 ▲ ---


  // --- ▼ 4. データを「共通の型 (MergedArticle)」に変換 ▼ ---

  // 4a. MicroCMSの記事を変換
  const internalArticles: MergedArticle[] = blogData.contents.map((post) => ({
    id: post.id,
    title: post.title,
    thumbnail: post.eyecatch?.url || '/images/apple-icon.png', // 代替画像
    publishedAt: post.publishedAt || new Date().toISOString(),
    url: `/blog/${post.id}`, // 内部リンク
    sourceType: 'internal',
    category: post.category?.name || '未分類',
  }));

  // 4b. noteの記事を変換
  const noteArticles: MergedArticle[] = allNoteArticles.map((article) => ({
    id: article.link, // リンクをIDとして使用
    title: article.title,
    thumbnail: article.thumbnail,
    publishedAt: new Date(article.pubDate).toISOString(), // Dateオブジェクトに変換
    url: article.link, // 外部リンク
    sourceType: 'note',
    category: '外部記事 (note)',
  }));

  // --- ▲ 4. データを「共通の型 (MergedArticle)」に変換 ▲ ---


  // --- ▼ 5. 2つのリストを合体させ、日付（新着順）で並び替え ▼ ---
  const allMergedArticles = [...internalArticles, ...noteArticles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  // --- (※ホームページと違い、.slice(0, 3) を使わない) ---

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        
        {/* --- ▼ 6. タイトルとサブタイトルを修正 ▼ --- */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            News
          </h1>
          <p className="mt-4 text-lg text-blue-600 font-semibold">
            新着情報 & 外部記事
          </p>
        </div>
        {/* --- ▲ 6. タイトルとサブタイトルを修正 ▲ --- */}

        {/* --- ▼ 7. 合体・並び替え後のリストでループ処理 ▼ --- */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {allMergedArticles.map((post) => {
            // 記事カード全体をリンクにするか、ただのdivにするかを決める
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
                    {/* 共通の post.thumbnail を使用 */}
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
                    {/* 共通の post.category を使用 */}
                    <p className="text-sm text-blue-600">
                      {post.sourceType === 'note' ? '外部記事 (note)' : post.category}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600 line-clamp-3">
                      {post.title}
                    </h3>
                    {/* 共通の post.publishedAt を使用 */}
                    {post.publishedAt && (
                      <p className="mt-4 text-sm text-gray-500">
                        {format(new Date(post.publishedAt), 'yyyy年M月d日')}
                      </p>
                    )}
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
        {/* --- ▲ 7. 合体・並び替え後のリストでループ処理 ▲ --- */}

        {/* --- 8. 「すべての記事を見る」ボタンは、一覧ページ自体には不要なので削除 --- */}

      </div>
    </div>
  );
}