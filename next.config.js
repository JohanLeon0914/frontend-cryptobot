/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  env: {
    EXCHANGE: "https://cryptobot-345516.ue.r.appspot.com",
    NEWS: "https://news-dot-cryptobot-345516.ue.r.appspot.com",
    ACCOUNTS: "https://accounts-dot-cryptobot-345516.ue.r.appspot.com",
    MESSAGING: "https://messaging-dot-cryptobot-345516.ue.r.appspot.com",
    QA: "https://qa-dot-cryptobot-345516.ue.r.appspot.com",
  },
  images: {
    unoptimized: true,
  },
}
