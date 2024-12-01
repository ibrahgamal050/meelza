/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: 'http://meelza.com/:path*',
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
    ];
  },
};

export default nextConfig;
