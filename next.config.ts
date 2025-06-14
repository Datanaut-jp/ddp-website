/** @type {import('next').NextConfig} */
const nextConfig = {
  // imagesオブジェクトを追記
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