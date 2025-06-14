import Link from 'next/link';
import Image from 'next/image'; // Imageコンポーネントをインポート
import { format } from 'date-fns';

// microCMSの型定義を、画像の型も含めて更新
type Post = {
  id: string;
  title: string;
  category?: { name: string };
  publishedAt?: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
};

export const BlogPreview = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        {/* ... (中略) ... */}

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              {/* group-hoverで画像が少し拡大するエフェクトを追加 */}
              <div className="group overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-lg">
                
                {/* 画像表示部分 */}
                <div className="relative h-40 w-full overflow-hidden">
                  {post.eyecatch ? (
                    <Image
                      src={post.eyecatch.url}
                      alt={post.title}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      fill // fillを使うと親要素に合わせて画像が拡大・縮小します
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="h-full w-full bg-gray-100"></div>
                  )}
                </div>

                <div className="p-6">
                  <p className="text-sm text-blue-600">{post.category?.name || '未分類'}</p>
                  <h3 className="mt-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                    {post.title}
                  </h3>
                  {post.publishedAt && (
                    <p className="mt-4 text-sm text-gray-500">
                      {format(new Date(post.publishedAt), 'yyyy年M月d日')}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* ... (中略) ... */}
      </div>
    </section>
  );
};