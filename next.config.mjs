/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: 'http://meelza.com/:path*', // Ensure this matches incoming traffic
        destination: 'https://meelza.site/:path*', // Redirect to new domain
        permanent: true, // 301 Redirect
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?<subdomain>.*)\\.meelza\\.com', // Match subdomains
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
