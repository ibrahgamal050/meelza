/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'meelza.com',
          },
        ],
        destination: 'https://meelza.site/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?<subdomain>.*)\\.meelza\\.com',
          },
        ],
        destination: 'https://:subdomain.meelza.site/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Redirect-Debug',
            value: 'Redirect rule applied',
          },
        ],
      },
    ];
  },
};

console.log('Next.js config loaded:', JSON.stringify(nextConfig, null, 2));

module.exports = nextConfig;

