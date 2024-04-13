/** @type {import('next').NextConfig} */
import withSvgr from 'next-plugin-svgr';

const nextConfig = {
    experimental: {
        forceSwcTransforms: true,
    },
    // todo если не нужен дефолтный импорт svg
    // fileLoader: true,
    // svgrOptions: {},
};

export default withSvgr(nextConfig);
