import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'is1-ssl.mzstatic.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog',
        has: [{ type: 'host', value: 'winglepass.com' }],
        destination: 'https://letswingle.com/blog',
        permanent: true,
      },
      {
        source: '/blog/:path*',
        has: [{ type: 'host', value: 'winglepass.com' }],
        destination: 'https://letswingle.com/blog/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
