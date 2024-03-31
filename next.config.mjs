/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
      
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    taint: true,
  },
}

export default config