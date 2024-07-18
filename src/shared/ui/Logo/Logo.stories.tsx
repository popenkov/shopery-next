import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';

const meta = {
  title: 'shared/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const DefaultLogo: TStory = {
  args: {
    size: 'default',
  },
};

export const SmallLogo: TStory = {
  args: {
    size: 'small',
  },
};
