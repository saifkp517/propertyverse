/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  images: {
    domains: [
      'images.unsplash.com',
      'unsplash.com',
      'media.licdn.com',
      'tailwindui.com',
      'plus.unsplash.com',
      'propmedia1.propertyshare.in',
      'propmedia2.propertyshare.in'
    ]
  }
}
