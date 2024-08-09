/** @type {import('next').NextConfig} */
import withSvgr from 'next-plugin-svgr';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/app/configs/i18n/i18n.ts');

const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
      },
    ],
  },
  webpack: (config) => {
    config.plugins.push(
      new CircularDependencyPlugin({
        exclude: /a\.js|node_modules|/,
        include: /src/,
        failOnError: false, //todo
        allowAsyncCycles: false,
        cwd: process.cwd(),
      }),
    );

    return config;
  },
};

export default withNextIntl(withSvgr(nextConfig));
