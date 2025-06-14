import { Hero } from '@/components/home/Hero'
import { Concept } from '@/components/home/Concept'
import { Services } from '@/components/home/Services'
import { Features } from '@/components/home/Features'
import { BlogPreview } from '@/components/home/BlogPreview'
import { client } from '@/libs/microcms' // microCMSクライアントをインポート

export default async function Home() {
  // microCMSからブログ記事を3件取得
  const blogData = await client.get({
    endpoint: 'blog',
    queries: { limit: 3, orders: '-publishedAt' },
  })

  return (
    <>
      <Hero />
      <Concept />
      <Services />
      <Features />
      {/* 取得したデータをBlogPreviewコンポーネントに渡す */}
      <BlogPreview posts={blogData.contents} />
    </>
  )
}