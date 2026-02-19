import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['react-icons-kit'],
  reactStrictMode: false,

};

export default nextConfig;
