import { notFound } from 'next/navigation'
import Image from 'next/image'
import { client } from '@/libs/microcms'
import { format } from 'date-fns'
import parse from 'html-react-parser'

// microCMSの型定義
type Post = {
  id: string
  title: string
  content: string // 本文の型
  category?: { name: string }
  publishedAt?: string
  eyecatch?: {
    url: string
    height: number
    width: number
  }
}

// 記事詳細ページ
export default async function PostPage({ params }: { params: { id: string } }) {
  const postId = params.id

  let post: Post
  try {
    // URLのIDを元に、microCMSから特定の記事データを1件取得
    post = await client.get({
      endpoint: 'blog',
      contentId: postId,
    })
  } catch { // 変数(_error)自体を削除
    // 記事が見つからない場合は404ページを表示
    notFound();
  }

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="container mx-auto max-w-3xl px-4">
        {/* アイキャッチ画像 */}
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

        {/* タイトルとメタ情報 */}
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

        {/* 本文 */}
        <div className="prose prose-lg mt-12 max-w-none">
          {parse(post.content)}
        </div>
      </div>
    </div>
  )
}
