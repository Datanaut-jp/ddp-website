// src/components/common/SectionTitle.tsx

import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

/**
 * サイト共通のセクション見出しコンポーネント
 */
export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      {/* 英語のメインタイトル */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {/* 日本語のサブタイトル */}
      <p className="text-base text-blue-600 font-semibold mt-1">{subtitle}</p>
    </div>
  );
}