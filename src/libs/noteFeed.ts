// src/libs/noteFeed.ts

import Parser from 'rss-parser';
// ↓ 型定義を外部ファイルからインポート
import { NoteArticle } from '@/types'; 

const NOTE_RSS_URL = 'https://note.com/datanaut/rss';
const FALLBACK_IMAGE_URL = '/images/apple-icon.png';

// ↓ NoteArticle の型定義を削除 (types/index.ts に移動したため)

/**
 * HTMLコンテンツから最初のimgタグのsrcを抽出する（最終手段用）
 */
function extractImageFromHtml(htmlContent: string): string | undefined | null {
  const imgTag = htmlContent.match(/<img[^>]+src="([^">]+)"/);
  return imgTag ? imgTag[1] : null;
}

/**
 * noteのRSSフィードを取得して解析する
 */
export async function getNoteFeed(): Promise<NoteArticle[]> {
  const parser = new Parser({
    customFields: {
      item: ['media:thumbnail', 'content:encoded'],
    },
  });

  try {
    const feed = await parser.parseURL(NOTE_RSS_URL);
    if (!feed.items) {
      return [];
    }

    const sortedItems = feed.items
      .filter((item) => item.title && item.link && item.pubDate)
      .sort(
        (a, b) =>
          new Date(b.pubDate!).getTime() - new Date(a.pubDate!).getTime(),
      );

    return sortedItems.map((item) => {
      let thumbnail: string | undefined | null;

      // 1. 'media:thumbnail'キーにURL文字列が直接入っているか確認
      if (
        typeof item['media:thumbnail'] === 'string' &&
        item['media:thumbnail'].startsWith('http')
      ) {
        thumbnail = item['media:thumbnail'];
      }
      // 2. RSS標準の <enclosure> タグを探す
      else if (
        item.enclosure &&
        item.enclosure.url &&
        item.enclosure.type?.startsWith('image/')
      ) {
        thumbnail = item.enclosure.url;
      }
      // 3. 記事本文(content:encoded)から最初の画像を探す
      else {
        const htmlContent = item['content:encoded'] || item.content || '';
        thumbnail = extractImageFromHtml(htmlContent);
      }

      return {
        title: item.title!,
        link: item.link!,
        pubDate: item.pubDate!, // この時点では元のstringのまま
        thumbnail: thumbnail || FALLBACK_IMAGE_URL,
      };
    });
  } catch (error) {
    console.error('note RSS feedの取得に失敗しました:', error);
    return [];
  }
}