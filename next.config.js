/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  env: {
    EXCHANGE: "https://e2ac-181-132-2-224.ngrok.io",
    NEWS: "https://e2ac-181-132-2-224.ngrok.io",
    ACCOUNTS: "https://e2ac-181-132-2-224.ngrok.io"
  },
  images: {
    unoptimized: true,
  },
}
