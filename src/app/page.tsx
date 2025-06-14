import { Hero } from '@/components/home/Hero';
import { Concept } from '@/components/home/Concept';
import { Services } from '@/components/home/Services';
import { Features } from '@/components/home/Features';
import { BlogPreview } from '@/components/home/BlogPreview';
import { client } from '@/libs/microcms';
import { ScrollAnimation } from '@/components/common/ScrollAnimation';

export default async function Home() {
 const blogData = await client.get({
   endpoint: 'blog',
   queries: { limit: 3, orders: '-publishedAt' },
 });

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
     {/* 今後ここに他のセクションを追加していきます */}
   </>
 );
}