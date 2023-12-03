/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode: true,
  env: {
    DOMAIN_NAME: process.env.DOMAIN_NAME,
    CLIENT_ID: process.env.CLIENT_ID
  },
  images: {
    domains: [
      'images.unsplash.com',
      'unsplash.com',
      'media.licdn.com',
      'tailwindui.com',
      'plus.unsplash.com',
      'propmedia1.propertyshare.in',
      'propmedia2.propertyshare.in',
      'assetmonk.com',
      'aurumwisex.com',
      'media1.propertyshare.in',
      'media.licdn.com',
      'flowbite.com',
      'flowbite.s3.amazonaws.com'
    ]
  }
}
