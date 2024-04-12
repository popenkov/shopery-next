/** @type {import('next').NextConfig} */
import withSvgr from 'next-plugin-svgr';

const nextConfig = {
    experimental: {
        forceSwcTransforms: true,
    },
    // todo added new
    fileLoader: true,
    svgrOptions: {},
};

// todo
// export default nextConfig;
export default withSvgr(nextConfig);

// const nextConfig = {
//     // ... other next config items
//     experimental: {
//         forceSwcTransforms: true,
//     },
//     webpack: (config) => {
//         // ... other rules

//         config.module.rules.push({
//             test: /\.svg$/,
//             use: [
//                 {
//                     loader: '@svgr/webpack',
//                 },
//                 {
//                     loader: 'file-loader',
//                     options: {
//                         name: 'static/[path][name].[ext]',
//                     },
//                 },
//             ],
//             type: 'javascript/auto',
//             issuer: {
//                 and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
//             },
//         });

//         return config;
//     },
// };

// export default nextConfig;
