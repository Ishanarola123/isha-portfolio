/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Remove this if you don't need it
  trailingSlash: false,
  experimental: {
    // Remove any experimental features that might cause issues
  }
}

module.exports = nextConfig