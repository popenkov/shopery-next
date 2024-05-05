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
        '@storybook/addon-a11y',
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
