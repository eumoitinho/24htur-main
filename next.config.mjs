/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: 'kyx4ncqy',
    NEXT_PUBLIC_SANITY_TOKEN: process.env.SANITY_TOKEN,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
}

export default nextConfig