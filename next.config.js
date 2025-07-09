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
        destination: 'https://mmenus.com/:path*',
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
        destination: 'https://:subdomain.mmenus.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
