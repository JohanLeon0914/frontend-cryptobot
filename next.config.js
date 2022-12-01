/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  env: {
    EXCHANGE: "https://this-is-crypto-bot.online",
    NEWS: "https://this-is-crypto-bot.online",
    ACCOUNTS: "https://this-is-crypto-bot.online",
    MESSAGING: "https://this-is-crypto-bot.online",
    QA: "https://this-is-crypto-bot.online",
  },
  images: {
    unoptimized: true,
  },
}
