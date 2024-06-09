/** @type {import('next').NextConfig} */
import withSvgr from 'next-plugin-svgr';
import CircularDependencyPlugin from 'circular-dependency-plugin';

const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  webpack: (config) => {
    config.plugins.push(
      new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/,
        include: /src/,
        failOnError: true,
        allowAsyncCycles: false,
        cwd: process.cwd(),
      }),
    );

    return config;
  },
};

export default withSvgr(nextConfig);
