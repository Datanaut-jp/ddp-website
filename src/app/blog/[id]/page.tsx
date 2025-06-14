import { notFound } from 'next/navigation';
import Image from 'next/image';
import { client } from '@/libs/microcms';
import { format } from 'date-fns';
import parse from 'html-react-parser';

// microCMSの型定義
type Post = {
  id: string;
  title: string;
  content: string;
  category?: { name: string };
  publishedAt?: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
};

type Props = {
  params: {
    id: string;
  };
};

// データを取得する非同期関数
async function getPost(postId: string) {
  try {
    const post = await client.get<Post>({
      endpoint: 'blog',
      contentId: postId,
    });
    return post;
  } catch {
    notFound();
  }
}

// ページ本体（ここからasyncを外します）
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
          <span>{post.category?.name || '未分類'}</span>
          <span className="h-1 w-1 rounded-full bg-gray-400"></span>
          {post.publishedAt && (
            <time dateTime={post.publishedAt}>
              {format(new Date(post.publishedAt), 'yyyy年M月d日')}
            </time>
          )}
        </div>

        <div className="prose prose-lg mt-12 max-w-none">
          {parse(post.content)}
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