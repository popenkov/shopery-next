import type { Preview } from '@storybook/react';

// import '!style-loader!css-loader!sass-loader!../../styles/globals.scss';
import '../../styles/globals.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
