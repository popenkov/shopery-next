import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    href: '/',
  },
  argTypes: {
    theme: ['primary', 'ghost', 'secondary', 'outlined', 'gray', 'text'],
    size: ['small', 'medium', 'large'],
    children: {
      controls: 'Test',
    },
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const PrimarySmall: TStory = {
  args: {
    children: 'Text',
    theme: 'primary',
    size: 'small',
  },
};

export const Primary: TStory = {
  args: {
    children: 'Text',
    theme: 'primary',
  },
};

export const PrimaryLarge: TStory = {
  args: {
    children: 'Text',
    theme: 'primary',
    size: 'large',
  },
};

export const Ghost: TStory = {
  args: {
    children: 'Text',
    theme: 'ghost',
  },
};

export const Secondary: TStory = {
  args: {
    children: 'Text',
    theme: 'secondary',
  },
};

export const Outlined: TStory = {
  args: {
    children: 'Text',
    theme: 'outlined',
  },
};

export const Gray: TStory = {
  args: {
    children: 'Text',
    theme: 'gray',
  },
};
