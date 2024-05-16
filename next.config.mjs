/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'picsum.photos',
      'cdn.midjourney.com',
      'ipfs.io'
    ],
  },
}

export default nextConfig
