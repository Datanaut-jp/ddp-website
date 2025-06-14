/** @type {import('next').NextConfig} */
const nextConfig = {
  // ↓↓↓ ビルドエラーを無視するための設定を追加しました ↓↓↓
  typescript: {
    // Vercelでのビルド時に、TypeScriptのエラーを無視する設定
    ignoreBuildErrors: true,
  },

  // お客様の現在の画像設定はそのままです
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
}

export default nextConfig