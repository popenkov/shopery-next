/** @type {import('next').NextConfig} */
import withSvgr from 'next-plugin-svgr';

const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
};

export default withSvgr(nextConfig);
