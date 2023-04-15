/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  env: {
    EXCHANGE: "https://cryptobot-345516.ue.r.appspot.com",
    NEWS: "https://accounts-dot-cryptobot-345516.ue.r.appspot.com",
    ACCOUNTS: "https://this-is-crypto-bot.online",
    MESSAGING: "https://ea64-181-132-0-23.ngrok.io",
    QA: "https://qa-dot-cryptobot-345516.ue.r.appspot.com",
  },
  images: {
    unoptimized: true,
  },
}
