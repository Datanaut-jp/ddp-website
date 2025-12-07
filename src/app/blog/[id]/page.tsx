export const dynamicParams = false;

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { client } from '@/libs/microcms';
import { format } from 'date-fns';
import parse from 'html-react-parser';


// --- ▼ 1. 修正箇所 ▼ ---
// 共通の型定義をインポート
import { MicroCMSPost } from '@/types'; 

// --- ▼ 2. 削除 ▼ ---
// このファイル内の古いPost型定義は削除します
// type Post = { ... };
// --- ▲ 2. 削除 ▲ ---


type Props = {
  params: {
    id: string;
  };
};

// データを取得する非同期関数
async function getPost(postId: string) {
  try {
    // --- ▼ 3. 修正箇所 ▼ ---
    // 型を <Post> から <MicroCMSPost> に変更
    // (depth: 1 は不要ですが、残しておいても害はありません)
    const post = await client.get<MicroCMSPost>({
      endpoint: 'blog',
      contentId: postId,
      queries: { depth: 1 },
    });
    // --- ▲ 3. 修正箇所 ▲ ---
    return post;
  } catch {
    notFound();
  }
}

// ページ本体
export default async function PostPage({ params }: Props) {
  const post = await getPost(params.id);

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="container mx-auto max-w-3xl px-4">
        {post.eyecatch && (
          <div className="relative mb-8 aspect-video w-full">
            <Image
              src={post.eyecatch.url}
              alt={post.title}
              className="rounded-lg object-cover"
              fill
              sizes="100vw"
              priority
            />
          </div>
        )}

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
          
          {/* --- ▼ 4. 修正箇所 ▼ --- */}
          {/* .name を削除し、文字列そのものを参照 */}
          <span>{post.category || '未分類'}</span>
          {/* --- ▲ 4. 修正箇所 ▲ --- */}

          <span className="h-1 w-1 rounded-full bg-gray-400"></span>
          {post.publishedAt && (
            <time dateTime={post.publishedAt}>
              {format(new Date(post.publishedAt), 'yyyy年M月d日')}
            </time>
          )}
        </div>

        <div className="prose prose-lg mt-12 max-w-none text-gray-900">
          {/* contentフィールドがMicroCMSPost型にないので、型エラーを回避 */}
          {post.content && parse(post.content)}
        </div>
      </div>
    </div>
  );
}

// generateStaticParamsも必要なので残します
export async function generateStaticParams() {
  const data = await client.get({
    endpoint: 'blog',
    queries: { fields: 'id' },
  });

  const paths = data.contents.map((content: { id: string }) => ({
    id: content.id,
  }));

  return [...paths];
}