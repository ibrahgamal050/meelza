/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*", // كل المسارات
        has: [
          {
            type: "host",
            value: "(?<subdomain>.*)\\.meelza\\.com", // الدومين القديم مع دعم الدومينات الفرعية
          },
        ],
        destination: "https://:subdomain.meelza.site/:path*", // تحويل إلى الدومين الجديد بنفس الدومين الفرعي
        permanent: true, // تحويل دائم 301
      },
      {
        source: "/:path*", // مسار لدعم الطلبات بدون دومينات فرعية
        has: [
          {
            type: "host",
            value: "meelza.com", // الدومين الأساسي
          },
        ],
        destination: "https://meelza.site/:path*", // تحويل إلى الدومين الجديد بدون فرعي
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
