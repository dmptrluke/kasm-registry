/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Dmptr Registry',
    description: 'My custom images',
    icon: '/img/logo.svg',
    listUrl: 'https://dmptrluke.github.io/kasm-registry',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
