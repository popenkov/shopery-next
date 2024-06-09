import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    theme: ['primary', 'ghost', 'secondary', 'outlined', 'gray', 'text'],
    size: ['small', 'medium', 'large'],
    children: {
      controls: 'Test',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type TStory = StoryObj<typeof Button>;

export const PrimarySmall: TStory = {
  parameters: {
    docs: {
      description: {
        story: 'Кнопка с зеленым фоном',
      },
    },
  },
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
