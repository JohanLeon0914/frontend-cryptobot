/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  env: {
    EXCHANGE: "http://34.125.172.125:5000",
    NEWS: "http://34.125.68.73:5000",
    ACCOUNTS: "http://34.125.117.244:5000",
    MESSAGING: "http://34.125.244.168:8080",
    QA: "http://34.125.238.86:9000",
  },
  images: {
    unoptimized: true,
  },
}
