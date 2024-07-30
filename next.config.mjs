/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'healthflex.plethorathemes.com',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
