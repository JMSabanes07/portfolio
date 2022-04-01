/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  env: {
    MAIL: 'jmsabanes07@gmail.com',
  },
}

module.exports = nextConfig
