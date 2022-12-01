/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  env: {
    EXCHANGE: "https://48de-181-132-2-224.ngrok.io",
    NEWS: "https://488b-179-32-182-204.ngrok.io",
    ACCOUNTS: "https://this-is-crypto-bot.online",
    MESSAGING: "https://ea64-181-132-0-23.ngrok.io",
    QA: "https://this-is-crypto-bot.online",
  },
  images: {
    unoptimized: true,
  },
}
