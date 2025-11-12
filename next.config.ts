// next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
        port: '',
        pathname: '/assets/**',
      },
      // --- ▼ 1ブロック（6行）追加 ▼ ---
      // noteのサムネイル画像（assets.st-note.com）を許可
      {
        protocol: 'https',
        hostname: 'assets.st-note.com',
        port: '',
        pathname: '/**', // noteの画像パスは様々なので/**で全て許可します
      },
      // --- ▲ 1ブロック追加 ▲ ---
    ],
  },

  // @ts-ignore
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
}

export default nextConfig;