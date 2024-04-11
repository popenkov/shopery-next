import path from 'path';

import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
    stories: ['../../../**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-styling-webpack',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
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

        if (config.module && config.module.rules) {
            config.module.rules.push({
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                    },
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'static/media/[path][name].[ext]',
                        },
                    },
                ],
                type: 'javascript/auto',
                issuer: {
                    and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
                },
            });
        }
        return config;
    },
};
export default config;
