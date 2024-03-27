import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonTheme, ButtonSize } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimarySmall: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.PRIMARY,
    size: ButtonSize.SMALL,
  },
};

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.PRIMARY,
  },
};

export const PrimaryLarge: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.PRIMARY,
    size: ButtonSize.LARGE,
  },
};

export const Ghost: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.GHOST,
  },
};

export const White: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.WHITE,
  },
};

export const Border: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BORDER,
  },
};

export const Gray: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.GRAY,
  },
};
