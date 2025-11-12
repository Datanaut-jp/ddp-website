// src/components/home/NoteFeed.tsx

import Link from 'next/link';
import Image from 'next/image';
import { NoteArticle } from '@/libs/noteFeed';
import { SectionTitle } from '@/components/common/SectionTitle';

interface NoteFeedProps {
  items: NoteArticle[];
}

/**
 * ホームページ用のnote記事一覧表示コンポーネント
 */
export function NoteFeed({ items }: NoteFeedProps) {
  if (!items || items.length === 0) {
    return null; // 記事がない場合は何も表示しない
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50"> {/* 背景色を薄いグレーに */}
      <div className="container px-4 mx-auto">
        
        {/* ステップ2で作成した見出しコンポーネントを使用 */}
        <SectionTitle title="Note" subtitle="外部記事" />

        {/* 最新3件の記事一覧 (ご要望の通り) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              target="_blank" // 外部リンク
              rel="noopener noreferrer" // セキュリティ対策
              className="group block rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 bg-white"
            >
              {/* サムネイル画像 */}
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* タイトル */}
              <div className="p-4 md:p-5">
                <h3 className="font-bold text-lg leading-snug line-clamp-3 group-hover:text-blue-600">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(item.pubDate).toLocaleDateString('ja-JP')}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* 全ての記事を見るボタン (ご要望の通り) */}
        <div className="text-center mt-12">
          <Link
            href="https://note.com/datanaut"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 hover:bg-blue-700"
          >
            全ての記事を見る
          </Link>
        </div>
      </div>
    </section>
  );
}