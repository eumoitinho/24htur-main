/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: 'cj4qiuma',
    NEXT_PUBLIC_SANITY_TOKEN: process.env.SANITY_TOKEN,
  },
}

export default nextConfig