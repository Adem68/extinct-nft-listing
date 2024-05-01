/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'picsum.photos',
      'cdn.midjourney.com',
      'cdn.dsmcdn.com'
    ],
  },
}

export default nextConfig
