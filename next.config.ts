/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Try this for some platforms
  trailingSlash: true, // Sometimes helps with routing
  images: {
    unoptimized: true // If you're having image issues
  }
}

module.exports = nextConfig