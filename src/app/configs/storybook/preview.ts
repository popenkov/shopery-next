import type { Preview } from '@storybook/react';
// import { initialize, mswDecorator } from 'msw-storybook-addon';

import '../../styles/globals.scss';

/*
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */
// initialize();

const preview: Preview = {
  // todo разобраться
  // decorators: [mswDecorator],
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#333' },
      ],
    },
  },
};

export default preview;
