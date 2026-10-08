/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // Article 1 redirects
      {
        source: '/blog/how-to-setup-iptv-on-firestick-guide',
        destination: '/blog/setup-iptv-firestick-guide',
        permanent: true,
      },
      {
        source: '/blog/how-to-setup-iptv-firestick-complete-guide',
        destination: '/blog/setup-iptv-firestick-guide',
        permanent: true,
      },
      // Article 2 redirects
      {
        source: '/blog/best-iptv-players-comparison',
        destination: '/blog/best-iptv-players',
        permanent: true,
      },
      {
        source: '/blog/best-iptv-players-2026-comparison',
        destination: '/blog/best-iptv-players',
        permanent: true,
      },
      // Article 3 redirects
      {
        source: '/blog/how-to-fix-iptv-buffering-freezing',
        destination: '/blog/fix-iptv-buffering',
        permanent: true,
      },
      {
        source: '/blog/how-to-fix-iptv-buffering-freezing-guide',
        destination: '/blog/fix-iptv-buffering',
        permanent: true,
      },
      // Article 4 redirects
      {
        source: '/blog/iptv-smarters-pro-setup-guide',
        destination: '/blog/iptv-smarters-pro-setup',
        permanent: true,
      },
      {
        source: '/blog/iptv-smarters-pro-setup-configuration-guide',
        destination: '/blog/iptv-smarters-pro-setup',
        permanent: true,
      },
      // Article 5 redirects
      {
        source: '/blog/streaming-live-sports-in-4k-requirements',
        destination: '/blog/live-sports-4k-streaming-guide',
        permanent: true,
      },
      {
        source: '/blog/streaming-live-sports-in-4k-speed-device-requirements',
        destination: '/blog/live-sports-4k-streaming-guide',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
