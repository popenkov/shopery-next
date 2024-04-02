import type { StorybookConfig } from '@storybook/nextjs';
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
import path from 'path';

const config: StorybookConfig = {
  stories: ['../../../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          // Replaces any existing Sass rules with given rules
          {
            test: /\.s[ac]ss$/i,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                webpackImporter: false,
                options: { implementation: require.resolve('sass') },
              },
            ],
          },
        ],
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },

  staticDirs: ['../../../../public'], // This loads images at localhost:6006/next.svg e.t.c.
  webpackFinal: async (config, { configType }) => {
    if (config.resolve) {
      config.resolve.plugins = [
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
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
