// src/libs/noteFeed.ts

import Parser from 'rss-parser';

const NOTE_RSS_URL = 'https://note.com/datanaut/rss';
const FALLBACK_IMAGE_URL = '/images/apple-icon.png'; 

export interface NoteArticle {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
}

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
    }
  });
  
  try {
    const feed = await parser.parseURL(NOTE_RSS_URL);
    if (!feed.items) {
      return [];
    }

    const sortedItems = feed.items
      .filter(item => item.title && item.link && item.pubDate)
      .sort((a, b) => new Date(b.pubDate!).getTime() - new Date(a.pubDate!).getTime());

    return sortedItems.map(item => {
      
      // ------------------------------------
      // ▼▼▼ ここからが最後の修正箇所 ▼▼▼
      // ------------------------------------

      // デバッグ用のconsole.logは削除します
      // console.log('--- RSS Item Data ---', item); 

      let thumbnail: string | undefined | null;

      // 1. 'media:thumbnail'キーにURL文字列が直接入っているか確認（これが正解でした）
      if (typeof item['media:thumbnail'] === 'string' && item['media:thumbnail'].startsWith('http')) {
        thumbnail = item['media:thumbnail'];
      } 
      
      // 2. それがなければ、RSS標準の <enclosure> タグを探す
      else if (item.enclosure && item.enclosure.url && item.enclosure.type?.startsWith('image/')) {
        thumbnail = item.enclosure.url;
      } 
      
      // 3. それでもなければ、記事本文(content:encoded)から最初の画像を探す
      else {
        const htmlContent = item['content:encoded'] || item.content || ''; 
        thumbnail = extractImageFromHtml(htmlContent);
      }
      
      // ------------------------------------
      // ▲▲▲ ここまでが修正箇所 ▲▲▲
      // ------------------------------------


      return {
        title: item.title!,
        link: item.link!,
        pubDate: item.pubDate!,
        // 最終的にサムネイルが見つからなければ、代替画像を使う
        thumbnail: thumbnail || FALLBACK_IMAGE_URL, 
      };
    });

  } catch (error) {
    console.error("note RSS feedの取得に失敗しました:", error);
    return []; 
  }
}