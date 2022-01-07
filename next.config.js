/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/receipt",
        destination: "/receipts",
        permanent: true,
      },
    ]
  },
}
