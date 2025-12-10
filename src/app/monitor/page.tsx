'use client'

import Script from 'next/script'
import { useEffect } from 'react'

// 1. windowオブジェクトの型を拡張して定義（オプションを追加）
interface WindowWithTally extends Window {
  TallyConfig?: {
    formId: string
    popup: {
      width: number
      emoji: {
        text: string
        animation: string
      }
      // ↓↓↓ ここを追加（表示タイミングの設定） ↓↓↓
      open?: {
        trigger: 'scroll'
        scrollPercent: number
      }
      // ↑↑↑ ここまで ↑↑↑
      autoClose: number
    }
  }
  Tally?: {
    loadEmbeds: () => void
  }
}

export default function MonitorPage() {
  // 2. ページが表示されたら設定を読み込ませる
  useEffect(() => {
    const w = window as unknown as WindowWithTally

    // Tallyの設定を注入
    w.TallyConfig = {
      formId: 'jaejO9',
      popup: {
        width: 450,
        emoji: {
          text: '👋',
          animation: 'wave',
        },
        // ↓↓↓ ここを追加（50%スクロールで表示） ↓↓↓
        open: {
          trigger: 'scroll',
          scrollPercent: 50
        },
        // ↑↑↑ ここまで ↑↑↑
        autoClose: 1000,
      },
    }

    // すでにスクリプトが読み込まれている場合は再読み込み
    if (w.Tally) {
      w.Tally.loadEmbeds()
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        /* ... CSSは前回と同じなので省略しません（コピペ用に全文載せます） ... */
        :root {
          /* Color Palette */
          --primary-color: #2563EB;
          --primary-dark: #1E40AF;
          --primary-light: #EFF6FF;

          /* Accent Colors */
          --accent-orange: #F97316;
          --accent-cyan: #06B6D4;
          --accent-red: #EF4444;

          --text-main: #111827;
          --text-sub: #4B5563;
          --bg-gray: #F9FAFB;
          --bg-white: #FFFFFF;
          --border-color: #E5E7EB;

          /* Spacing */
          --container-width: 1000px;
          --section-padding: 80px 0;

          /* Effects */
          --shadow-sm: 0 1px 3px rgba(0,0,0,0.05);
          --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --shadow-lg: 0 10px 15px -3px rgba(37, 99, 235, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --radius-md: 12px;
          --radius-lg: 16px;
        }

        *, *::before, *::after {
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', 'Noto Sans JP', sans-serif;
          color: var(--text-main);
          line-height: 1.7;
          margin: 0;
          padding: 0;
          background-color: var(--bg-white);
          -webkit-font-smoothing: antialiased;
        }

        .container {
          max-width: var(--container-width);
          margin: 0 auto;
          padding: 0 24px;
        }
        .text-center { text-align: center; }
        .bold { font-weight: 700; }
        .section { padding: var(--section-padding); }
        .section-gray { 
          background-color: var(--bg-gray);
          background-image: radial-gradient(#E5E7EB 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .ib { display: inline-block; }

        h1, h2, h3 { line-height: 1.3; margin-top: 0; letter-spacing: -0.02em; }
        h2 { font-size: 2rem; margin-bottom: 2rem; position: relative; display: inline-block; max-width: 800px; }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 32px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          border: none;
          font-size: 1rem;
          gap: 8px;
          position: relative;
          overflow: hidden;
        }
        .btn-primary {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: white;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
          filter: brightness(1.1);
        }
        .btn-secondary {
          background-color: white;
          border: 2px solid var(--border-color);
          color: var(--text-main);
        }
        .btn-secondary:hover {
          border-color: var(--text-main);
          background-color: #F9FAFB;
        }
        .btn-label {
          display: block;
          font-size: 0.8rem;
          color: var(--text-sub);
          margin-bottom: 8px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .hero {
          padding: 100px 0 80px;
          background: radial-gradient(circle at 50% 0%, #EFF6FF 0%, #fff 70%);
          border-bottom: 1px solid var(--border-color);
        }
        .limited-badge {
          background-color: #FFF7ED;
          color: var(--accent-orange);
          border: 1px solid #FFEDD5;
          padding: 6px 16px;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          margin-bottom: 32px;
          box-shadow: 0 2px 4px rgba(249, 115, 22, 0.1);
        }
        .hero h1 {
          font-size: 3rem;
          color: var(--text-main);
          margin-bottom: 24px;
        }
        .hero h1 span.gradient-text {
          background: linear-gradient(120deg, var(--primary-color), var(--accent-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }
        .hero p {
          font-size: 1.125rem;
          max-width: 760px;
          margin: 0 auto 48px;
          color: var(--text-sub);
        }
        .cta-group {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 24px;
        }

        .integrations-wrapper {
          max-width: 900px;
          margin: 0 auto;
        }
        .integration-logos {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 20px;
          margin-top: 32px;
        }
        .integration-card {
          background: white;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 600;
          font-size: 1rem;
          color: var(--text-main);
          box-shadow: var(--shadow-sm);
          transition: all 0.2s;
        }
        .integration-card:hover {
          transform: translateY(-3px);
          border-color: var(--primary-color);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
        }
        .brand-icon {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: white;
          font-weight: bold;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          flex-shrink: 0;
        }

        .problem-list {
          list-style: none;
          padding: 0;
          max-width: 800px;
          margin: 40px auto 0;
        }
        .problem-item {
          background: white;
          padding: 24px 32px;
          margin-bottom: 16px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: flex-start;
          box-shadow: var(--shadow-sm);
          border: 1px solid transparent;
          transition: border-color 0.2s;
        }
        .problem-item:hover {
          border-color: #FECACA;
        }
        .problem-icon {
          color: var(--accent-red);
          margin-right: 20px;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .solution-grid {
          display: grid;
          gap: 24px;
          margin-top: 48px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .solution-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .solution-card {
          padding: 32px;
          background: white;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .solution-card:hover {
          border-color: var(--accent-cyan);
          box-shadow: 0 10px 30px -10px rgba(6, 182, 212, 0.2);
          transform: translateY(-4px);
        }
        .solution-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-color), var(--accent-cyan));
          opacity: 0;
          transition: opacity 0.3s;
        }
        .solution-card:hover::before { opacity: 1; }
        .solution-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }
        .solution-icon-box {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%);
          color: var(--primary-color);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .solution-title {
          color: var(--text-main);
          font-weight: 700;
          font-size: 1.15rem;
          margin: 0;
          line-height: 1.4;
        }
        .solution-desc {
          color: var(--text-sub);
          font-size: 0.95rem;
          margin-top: auto;
          margin-bottom: 0;
        }

        .case-card { margin-bottom: 80px; }
        .case-header {
          color: var(--accent-cyan);
          font-weight: 800;
          font-size: 0.9rem;
          margin-bottom: 8px;
          display: inline-block;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: #ECFEFF;
          padding: 4px 12px;
          border-radius: 4px;
        }
        .case-title {
          font-size: 1.75rem;
          margin-bottom: 32px;
          font-weight: 700;
          margin-top: 12px;
        }
        .comparison-wrapper {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 0;
          align-items: stretch;
          background: white;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-color);
        }
        .before-panel {
          background-color: #F8FAFC;
          padding: 40px;
          color: var(--text-sub);
          border-right: 1px solid var(--border-color);
        }
        .after-panel {
          background-color: white;
          padding: 40px;
        }
        .arrow-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          width: 40px;
          position: relative;
          margin-left: -20px;
          margin-right: -20px;
          z-index: 2;
        }
        .arrow-circle {
          width: 36px;
          height: 36px;
          background: var(--accent-cyan);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 0 0 6px white;
        }
        @media (max-width: 768px) {
          .comparison-wrapper {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
          }
          .before-panel { border-right: none; border-bottom: 1px solid var(--border-color); }
          .arrow-divider { width: 100%; height: 40px; margin: -20px 0; }
          .arrow-circle svg { transform: rotate(90deg); }
        }
        .panel-label {
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 16px;
          font-size: 0.85rem;
          padding: 6px 12px;
          border-radius: 6px;
        }
        .label-before { background: #F1F5F9; color: #64748B; }
        .label-after { background: #ECFEFF; color: var(--accent-cyan); }
        .result-list { margin: 0; padding: 0; list-style: none; }
        .result-list li {
          margin-bottom: 12px;
          padding-left: 28px;
          position: relative;
          font-size: 1rem;
        }
        .result-list li svg {
          position: absolute;
          left: 0;
          top: 4px;
          color: var(--accent-cyan);
          width: 20px;
          height: 20px;
        }

        .voice-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 40px;
        }
        .voice-card {
          background: white;
          padding: 32px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }
        .stars { 
          color: var(--accent-orange);
          margin-bottom: 16px; 
          display: flex; 
          gap: 2px; 
        }
        .stars svg { width: 18px; height: 18px; fill: currentColor; }

        .price-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          margin: 40px auto 0;
          max-width: 800px;
        }
        .price-card {
          background: white;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 40px 32px;
          text-align: center;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: all 0.3s;
        }
        .price-card:hover {
          border-color: var(--primary-color);
          box-shadow: var(--shadow-lg);
        }
        .price-card.featured {
          border: 2px solid var(--primary-color);
          box-shadow: var(--shadow-lg);
          background: linear-gradient(180deg, #F0F9FF 0%, #FFFFFF 100%);
        }
        .featured-tag {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--accent-orange);
          color: white;
          padding: 6px 20px;
          border-radius: 99px;
          font-size: 0.85rem;
          font-weight: 700;
          box-shadow: 0 4px 6px -1px rgba(249, 115, 22, 0.3);
        }
        .price-strike {
          text-decoration: line-through;
          color: #9CA3AF;
          font-size: 0.9rem;
          margin-bottom: 4px;
        }
        .price-main {
          font-size: 2.75rem;
          font-weight: 800;
          color: var(--text-main);
          margin: 0 0 8px;
          line-height: 1;
          letter-spacing: -0.05em;
        }
        .price-main span { font-size: 1rem; font-weight: 500; color: var(--text-sub); margin-left: 4px; letter-spacing: 0; }
        .price-desc { flex-grow: 1; margin-bottom: 32px; color: var(--text-sub); font-size: 0.95rem; }

        .last-cta {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: white;
          text-align: center;
          padding: 100px 0;
        }
        .last-cta h2 { color: white; margin-bottom: 16px; font-size: 2.25rem; }
        .last-cta p { opacity: 0.9; margin-bottom: 40px; font-size: 1.1rem; }
        .last-cta .btn {
          background: white;
          color: var(--primary-color);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
        .last-cta .btn:hover {
          background: #F8FAFC;
          transform: translateY(-2px);
        }
        .last-cta .btn-outline {
          background: transparent;
          border: 2px solid rgba(255,255,255,0.8);
          color: white;
          box-shadow: none;
        }
        .last-cta .btn-outline:hover {
          background: rgba(255,255,255,0.1);
          border-color: white;
        }

        .icon-sm { width: 18px; height: 18px; }
        .icon-md { width: 24px; height: 24px; }
        .icon-lg { width: 32px; height: 32px; }

        @media (max-width: 768px) {
          .hero h1 { font-size: 1.8rem; line-height: 1.4; }
          .ib { display: inline; }
          .hero { padding: 80px 0 60px; }
          .btn { width: 100%; }
          .cta-item { width: 100%; max-width: 400px; margin: 0 auto; }
          h2 { font-size: 1.5rem; }
          .integration-logos { 
            grid-template-columns: repeat(2, 1fr); 
            gap: 12px;
          }
          .integration-card {
            padding: 12px;
            font-size: 0.9rem;
          }
          .section { padding: 60px 0; }
        }
      `}</style>

      <div className="bg-white">
        <header className="hero text-center">
          <div className="container">
            <span className="limited-badge">
              〜1/15面談 3社限定 モニター募集中
            </span>
            <h1>
              <span className="ib">「手作業」の限界を、</span>
              <span className="ib">
                <span className="gradient-text">AIとの接着</span>
                で突破する。
              </span>
            </h1>

            <p>
              チャット、会計、顧客管理……。バラバラなツールをAIでつなぎ、
              <span className="ib">業務フローを完全自動化。</span>
              <span className="ib">50種類以上の連携実績を持つDatanautが、</span>
              <span className="ib">貴社のデスクワークを「秒」で終わらせます。</span>
            </p>

            <div className="cta-group">
              <div className="cta-item">
                <span className="btn-label">まずは課題を見つける</span>
                <a
                  href="https://calendly.com/datanaut-official/30min"
                  className="btn btn-secondary"
                >
                  <svg
                    className="icon-sm"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  20分スポット相談を予約
                </a>
              </div>
              <div className="cta-item">
                <span className="btn-label">すぐに成果物が欲しい</span>
                <a
                  href="https://tally.so/r/jaejO9"
                  className="btn btn-primary"
                >
                  <svg
                    className="icon-sm"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7H11V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                  </svg>
                  プロンプト作成を依頼
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* INTEGRATIONS SECTION */}
        <section className="section">
          <div className="container integrations-wrapper text-center">
            <h2 style={{ marginBottom: '12px' }}>
              メジャーツールのAPI連携はお任せください
            </h2>
            <p
              style={{
                color: 'var(--text-sub)',
                marginBottom: '32px',
                fontSize: '0.95rem',
              }}
            >
              Communication, Accounting, CRM, Database... 50+ integrations
            </p>

            <div className="integration-logos">
              <div className="integration-card">
                <span className="brand-icon" style={{ background: '#4A154B' }}>
                  S
                </span>
                Slack
              </div>
              <div className="integration-card">
                <span className="brand-icon" style={{ background: '#EC362D' }}>
                  C
                </span>
                Chatwork
              </div>
              <div className="integration-card">
                <span className="brand-icon" style={{ background: '#2263E6' }}>
                  f
                </span>
                freee
              </div>
              <div className="integration-card">
                <span className="brand-icon" style={{ background: '#00A1E0' }}>
                  S
                </span>
                Salesforce
              </div>
              <div className="integration-card">
                <span className="brand-icon" style={{ background: '#000000' }}>
                  N
                </span>
                Notion
              </div>
              <div className="integration-card">
                <span
                  className="brand-icon"
                  style={{ background: '#FFC629', color: 'black' }}
                >
                  k
                </span>
                kintone
              </div>
            </div>
          </div>
        </section>

        <section className="section section-gray">
          <div className="container">
            <h2 className="text-center">こんな「空回り」起きていませんか？</h2>
            <ul className="problem-list">
              <li className="problem-item">
                <div className="problem-icon">
                  <svg
                    className="icon-md"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <div>
                  <strong
                    style={{
                      display: 'block',
                      marginBottom: '4px',
                      fontSize: '1.05rem',
                    }}
                  >
                    ツール過多でカオス
                  </strong>
                  <span
                    style={{ color: 'var(--text-sub)', fontSize: '0.95rem' }}
                  >
                    Chatwork, Slack, Notion...
                    便利ツールが増えるほど確認コストが増大し、情報が分散している。
                  </span>
                </div>
              </li>
              <li className="problem-item">
                <div className="problem-icon">
                  <svg
                    className="icon-md"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <div>
                  <strong
                    style={{
                      display: 'block',
                      marginBottom: '4px',
                      fontSize: '1.05rem',
                    }}
                  >
                    結局「コピペ」の手作業
                  </strong>
                  <span
                    style={{ color: 'var(--text-sub)', fontSize: '0.95rem' }}
                  >
                    AIを使えば早いと分かっているが、設定が面倒で結局いつものコピペと手入力を繰り返している。
                  </span>
                </div>
              </li>
              <li className="problem-item">
                <div className="problem-icon">
                  <svg
                    className="icon-md"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <strong
                    style={{
                      display: 'block',
                      marginBottom: '4px',
                      fontSize: '1.05rem',
                    }}
                  >
                    業務の「塩漬け」状態
                  </strong>
                  <span
                    style={{ color: 'var(--text-sub)', fontSize: '0.95rem' }}
                  >
                    「もっと効率いい方法があるはず」と思いつつ、忙しさを理由に古いやり方を変えられない。
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2>
                <span className="ib">必要なのは「新しいツール」ではなく、</span>
                <span className="ib">
                  正しい
                  <span
                    style={{
                      background:
                        'linear-gradient(120deg, transparent 60%, var(--primary-light) 60%)',
                      padding: '0 4px',
                    }}
                  >
                    航路（フロー）の設計
                  </span>
                  です。
                </span>
              </h2>
              <p>
                既存のツールを活かしたまま、バックグラウンドで自動化のパイプをつなぎます。
              </p>
            </div>

            <div className="solution-grid">
              <div className="solution-card">
                <div className="solution-header">
                  <div className="solution-icon-box">
                    <svg
                      className="icon-md"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                  <h3 className="solution-title">業務フローの「整理と接続」</h3>
                </div>
                <p className="solution-desc">
                  複雑になった業務手順を整理し、ツール同士をAPIで正しく接続。人間がやるべき判断業務以外を排除します。
                </p>
              </div>
              <div className="solution-card">
                <div className="solution-header">
                  <div className="solution-icon-box">
                    <svg
                      className="icon-md"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </div>
                  <h3 className="solution-title">「明日から使える」実装</h3>
                </div>
                <p className="solution-desc">
                  絵に描いた餅ではなく、現場のスタッフが無理なく使えるルールと設定まで落とし込みます。
                </p>
              </div>
              <div className="solution-card">
                <div className="solution-header">
                  <div className="solution-icon-box">
                    <svg
                      className="icon-md"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3 className="solution-title">セキュアな環境構築</h3>
                </div>
                <p className="solution-desc">
                  社内情報を外部モデルの学習に使わせないAPI経由でのAI利用設定など、セキュリティ面も考慮します。
                </p>
              </div>
            </div>

            {/* Solution Bottom Button */}
            <div className="text-center" style={{ marginTop: '48px' }}>
              <span className="btn-label">
                ▼ まずは現状のボトルネックを特定する
              </span>
              <a
                href="https://calendly.com/datanaut-official/30min"
                className="btn btn-secondary"
              >
                <svg
                  className="icon-sm"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                20分スポット診断を予約
              </a>
            </div>
          </div>
        </section>

        <section className="section section-gray">
          <div className="container">
            {/* Case 1 */}
            <div className="case-card">
              <span className="case-header">Case Study 01</span>
              <div className="case-title">
                「データなし」から3日で実装。
                <br />
                24時間AI対応を実現。
              </div>

              <div className="comparison-wrapper">
                {/* Before */}
                <div className="before-panel">
                  <span className="panel-label label-before">
                    <svg
                      className="icon-sm"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    Before
                  </span>
                  <ul
                    style={{
                      paddingLeft: '20px',
                      margin: '0',
                      lineHeight: '1.8',
                    }}
                  >
                    <li>マニュアルがなく、対応ノウハウが属人化</li>
                    <li>夜間・休日の問い合わせに対応不可</li>
                    <li>最大72時間の待ち時間が発生</li>
                  </ul>
                </div>

                {/* Arrow */}
                <div className="arrow-divider">
                  <div className="arrow-circle">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>

                {/* After */}
                <div className="after-panel">
                  <span className="panel-label label-after">
                    <svg
                      className="icon-sm"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    After
                  </span>
                  <ul className="result-list">
                    <li>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <strong>「暗黙知」をAI化:</strong>{' '}
                      ヒアリングだけで学習データ構築
                    </li>
                    <li>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <strong>リードタイム0秒:</strong> 24時間365日、AIが即時回答
                    </li>
                    <li>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <strong>工数削減:</strong> 月20時間の削減とCX向上を両立
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="case-card" style={{ marginBottom: '0' }}>
              <span className="case-header">Case Study 02</span>
              <div className="case-title">
                商談終了と同時に、
                <br />
                Salesforceへの入力が完了。
              </div>

              <div className="comparison-wrapper">
                <div className="before-panel">
                  <span className="panel-label label-before">
                    <svg
                      className="icon-sm"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    Before
                  </span>
                  <ul
                    style={{
                      paddingLeft: '20px',
                      margin: '0',
                      lineHeight: '1.8',
                    }}
                  >
                    <li>商談後のSFA入力と日報作成に毎日1時間</li>
                    <li>入力が面倒で情報が更新されない</li>
                    <li>営業データの鮮度が落ちていた</li>
                  </ul>
                </div>

                <div className="arrow-divider">
                  <div className="arrow-circle">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>

                <div className="after-panel">
                  <span className="panel-label label-after">
                    <svg
                      className="icon-sm"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    After
                  </span>
                  <ul className="result-list">
                    <li>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <strong>完全自動化:</strong> Zoom内容から「予算・決裁者」を抽出
                    </li>
                    <li>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <strong>入力工数ゼロ:</strong>{' '}
                      営業は内容を確認して「保存」を押すだけ
                    </li>
                    <li>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <strong>データ精度向上:</strong>{' '}
                      全商談が均質なフォーマットで蓄積
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Case Bottom Button */}
            <div className="text-center" style={{ marginTop: '48px' }}>
              <span className="btn-label">▼ 同様の仕組みを構築したい方へ</span>
              <a
                href="https://tally.so/r/jaejO9"
                className="btn btn-primary"
              >
                <svg
                  className="icon-sm"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7H11V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                </svg>
                プロンプト・自動化の作成を依頼
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="text-center">
              <span className="ib">「もっと早く頼めばよかった」</span>
              <span className="ib">現場のリーダーから、驚きの声。</span>
            </h2>

            <div className="voice-grid">
              <div className="voice-card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <h3 style={{ fontSize: '1rem', marginBottom: '8px' }}>
                  株式会社Urus 代表取締役 様
                </h3>
                <p className="bold" style={{ color: 'var(--primary-color)' }}>
                  「『0秒』で顧客対応が終わる衝撃」
                </p>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-sub)',
                  }}
                >
                  以前は休み明けの対応に追われていましたが、今ではAIが寝ている間に全て片付けてくれます。単なる工数削減ではなく、お客様をお待たせしない「体験」を作れたことが最大の価値です。
                </p>
              </div>
              <div className="voice-card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <h3 style={{ fontSize: '1rem', marginBottom: '8px' }}>
                  EC運営企業 マネージャー 様
                </h3>
                <p className="bold" style={{ color: 'var(--primary-color)' }}>
                  「社内の『AIアレルギー』が消えた」
                </p>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-sub)',
                  }}
                >
                  「AIなんて難しくて使えない」と敬遠していたベテラン社員も、使い慣れたChatworkに組み込んでもらったおかげで、今では「これAIに聞いておいて」が口癖になっています。
                </p>
              </div>
              <div className="voice-card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <h3 style={{ fontSize: '1rem', marginBottom: '8px' }}>
                  不動産営業 担当者 様
                </h3>
                <p className="bold" style={{ color: 'var(--primary-color)' }}>
                  「事務作業が消滅。商談に集中できる」
                </p>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-sub)',
                  }}
                >
                  議事録と日報で毎日1時間は残業していましたが、今はZoomを切った瞬間にタスクが完了しています。空いた時間で顧客への提案を練れるようになり、成約率も上がりました。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-gray">
          <div className="container">
            <div className="text-center">
              <span className="limited-badge">
                【〜1/15面談 3社限定】モニター特別プラン
              </span>
            </div>

            <div className="price-grid">
              {/* Plan 1 */}
              <div className="price-card">
                <h3>AI・業務改善スポット診断</h3>
                <p className="price-desc">
                  ヒアリングを行い「どこをAI化できるか」ボトルネックを特定する診断セッション（20分）。
                </p>
                <div className="price-strike">通常 ¥15,000</div>
                <div className="price-main">
                  ¥3,000<span>(税込)</span>
                </div>

                <a
                  href="https://calendly.com/datanaut-official/30min"
                  className="btn btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  🗓️ 診断を予約する
                </a>
              </div>

              {/* Plan 2 */}
              <div className="price-card featured">
                <div className="featured-tag">人気No.1</div>
                <h3>プロンプト作成代行</h3>
                <p className="price-desc">
                  実務ですぐ使える「AIへの指示書」や簡単な自動化フローを作成・納品します。
                </p>
                <div className="price-strike">通常 ¥50,000</div>
                <div className="price-main">
                  ¥10,000〜<span>(税込)</span>
                </div>

                <a
                  href="https://tally.so/r/jaejO9"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  🤖 作成代行を依頼する
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section last-cta">
          <div className="container">
            <h2>まずは「小さな自動化」から。</h2>
            <p>モニター枠は埋まり次第終了となります。お早めにご相談ください。</p>
            <div className="cta-group">
              <a
                href="https://calendly.com/datanaut-official/30min"
                className="btn btn-outline"
              >
                🗓️ ¥3,000で相談予約
              </a>
              <a
                href="https://tally.so/r/jaejO9"
                className="btn btn-secondary"
                style={{ color: 'var(--primary-color)' }}
              >
                🤖 ¥10,000〜で代行依頼
              </a>
            </div>
          </div>
        </section>

        <footer
          style={{
            padding: '40px 0',
            background: '#111827',
            color: '#9CA3AF',
            fontSize: '0.85rem',
          }}
        >
          <div className="container text-center">
            <div
              style={{
                fontWeight: 700,
                fontSize: '1.5rem',
                color: 'white',
                marginBottom: '12px',
              }}
            >
              Datanaut
            </div>
            <p>&copy; 2024 Datanaut All Rights Reserved.</p>
          </div>
        </footer>

        {/* Tally Embed Code */}
        {/* スクリプト読み込み: TallyConfigはuseEffectで設定済み */}
        <Script 
          id="tally-js" 
          src="https://tally.so/widgets/embed.js" 
          strategy="afterInteractive"
          onLoad={() => {
            // スクリプトが読み込まれた直後に再チェック
            const w = window as unknown as WindowWithTally
            if (w.Tally) {
              w.Tally.loadEmbeds()
            }
          }}
        />
      </div>
    </>
  )
}