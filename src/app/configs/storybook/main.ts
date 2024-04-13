import path from 'path';

import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
    stories: ['../../../**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-styling-webpack',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {
            nextConfigPath: path.resolve(
                __dirname,
                '../../../../next.config.mjs',
            ),
            builder: {},
        },
    },
    docs: {
        autodocs: 'tag',
    },

    staticDirs: ['../../../../public'], // This loads images at localhost:6006/next.svg
    webpackFinal: async (config) => {
        //  апроблема с путями
        if (config.resolve) {
            // @ts-expect-error
            config.resolve.alias['@'] = path.resolve(__dirname, '../../../');
            // @ts-expect-error
            config.resolve.alias['@public'] = path.resolve(
                __dirname,
                '../../../../public',
            );
        }

        // config.module.rules
        //     .filter((rule) => rule.test.test('.svg'))
        //     .forEach((rule) => (rule.exclude = /\.svg$/i));

        // config.module.rules.unshift({
        //     test: /\.svg$/,
        //     oneOf: [
        //         {
        //             dependency: { not: ['url'] },
        //             use: [
        //                 {
        //                     loader: require.resolve('@svgr/webpack'),
        //                     options: {
        //                         prettier: false,
        //                         svgo: false,
        //                         svgoConfig: {
        //                             plugins: [{ removeViewBox: false }],
        //                         },
        //                         titleProp: true,
        //                         ref: true,
        //                     },
        //                 },
        //                 path.resolve(
        //                     __dirname,
        //                     '../webpack-custom-loaders/svg-url-loader.js',
        //                 ),
        //             ],
        //         },
        //     ],
        // });

        // if (!config.module || !config.module.rules) {
        //     return config;
        // }
        // config.module.rules.push({
        //     test: /\.svg$/,
        //     use: ['@svgr/webpack'],
        // });

        // if (!config.module || !config.module.rules) {
        //     return config;
        // }

        // config.module.rules = [
        //     ...config.module.rules.map((rule) => {
        //         if (!rule || rule === '...') {
        //             return rule;
        //         }

        //         if (rule.test && /svg/.test(String(rule.test))) {
        //             return { ...rule, exclude: /\.svg$/i };
        //         }
        //         return rule;
        //     }),
        //     {
        //         test: /\.svg$/,
        //         use: [
        //             {
        //                 loader: 'babel-loader',
        //             },
        //             {
        //                 loader: '@svgr/webpack',
        //                 options: {
        //                     exportAsDefault: true,
        //                 },
        //             },
        //         ],
        //     },
        // ];

        // if (config.module && config.module.rules) {
        //     config.module.rules.push({
        //         test: /\.svg$/,
        //         use: [
        //             {
        //                 loader: '@svgr/webpack',
        //             },
        //             {
        //                 loader: 'file-loader',
        //                 options: {
        //                     name: 'static/media/[path][name].[ext]',
        //                 },
        //             },
        //         ],
        //         type: 'javascript/auto',
        //         issuer: {
        //             and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
        //         },
        //     });
        // }
        // todo 2
        const imageRule = config.module?.rules?.find((rule) => {
            const test = (rule as { test: RegExp }).test;

            if (!test) {
                return false;
            }

            return test.test('.svg');
        }) as { [key: string]: any };

        imageRule.exclude = /\.svg$/;

        config.module?.rules?.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};
export default config;
