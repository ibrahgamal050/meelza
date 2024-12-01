/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*', // Matches all paths
        has: [
          {
            type: 'host',
            value: 'meelza.com', // Matches the old domain
          },
        ],
        destination: 'https://meelza.site/:path*', // Redirects to the new domain
        permanent: true, // 301 Redirect
      },
      {
        source: '/:path*', // Matches all paths
        has: [
          {
            type: 'host',
            value: '(?<subdomain>.*)\\.meelza\\.com', // Matches subdomains
          },
        ],
        destination: 'https://:subdomain.meelza.site/:path*', // Redirects to the new subdomain
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
