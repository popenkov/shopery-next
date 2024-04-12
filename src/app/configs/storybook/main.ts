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
        if (config.resolve) {
            // @ts-expect-error
            config.resolve.alias['@'] = path.resolve(__dirname, '../../../');
            // @ts-expect-error
            config.resolve.alias['@public'] = path.resolve(
                __dirname,
                '../../../../public',
            );
            return config;
        }

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
        // const imageRule = config.module?.rules?.find((rule) => {
        //     const test = (rule as { test: RegExp }).test;

        //     if (!test) {
        //         return false;
        //     }

        //     return test.test('.svg');
        // }) as { [key: string]: any };

        // imageRule.exclude = /\.svg$/;

        // config.module?.rules?.push({
        //     test: /\.svg$/,
        //     use: ['@svgr/webpack'],
        // });

        // todo 3
        // const imageRule = config.module.rules.find((rule) =>
        //     rule?.['test']?.test('.svg'),
        // );
        // if (imageRule) {
        //     imageRule['exclude'] = /\.svg$/;
        // }

        // // Configure .svg files to be loaded with @svgr/webpack
        // config.module.rules.push({
        //     test: /\.svg$/,
        //     use: ['@svgr/webpack'],
        // });

        // config.module.rules?.push({
        //     test: /\.svg$/,
        //     use: ['@svgr/webpack', 'file-loader'],
        //     // use: [
        //     //     {
        //     //         loader: '@svgr/webpack',
        //     //         options: {
        //     //             exportAsDefault: true,
        //     //         },
        //     //     },
        //     // ],
        // });

        return config;
    },
};
export default config;
