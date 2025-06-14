import Link from 'next/link';
import { format } from 'date-fns'; // 日付フォーマット用にライブラリを後で追加します

// microCMSの型定義（仮）
type Post = {
  id: string;
  title: string;
  category?: { name: string };
  publishedAt?: string;
};

// 仮のデータ（mockPosts）はここから削除します

export const BlogPreview = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Blog & Knowledge
          </h2>
          <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            航海のヒントになる、最新の知見
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <div className="group overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                <div className="h-40 bg-gray-100">{/* 将来ここに画像が入ります */}</div>
                <div className="p-6">
                  <p className="text-sm text-blue-600">{post.category?.name || '未分類'}</p>
                  <h3 className="mt-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                    {post.title}
                  </h3>
                  {post.publishedAt && (
                    <p className="mt-4 text-sm text-gray-500">
                      {/* 日付の表示形式を整えます */}
                      {format(new Date(post.publishedAt), 'yyyy年M月d日')}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-blue-700"
          >
            すべての記事を見る
          </Link>
        </div>
      </div>
    </section>
  );
};