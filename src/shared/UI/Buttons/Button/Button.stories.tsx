import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: ['primary', 'ghost', 'white', 'border', 'gray', 'text'],
    size: ['small', 'medium', 'large'],
    children: {
      controls: 'Test',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimarySmall: Story = {
  args: {
    children: 'Text',
    theme: 'primary',
    size: 'small',
  },
};

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: 'primary',
  },
};

export const PrimaryLarge: Story = {
  args: {
    children: 'Text',
    theme: 'primary',
    size: 'large',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Text',
    theme: 'ghost',
  },
};

export const White: Story = {
  args: {
    children: 'Text',
    theme: 'white',
  },
};

export const Border: Story = {
  args: {
    children: 'Text',
    theme: 'border',
  },
};

export const Gray: Story = {
  args: {
    children: 'Text',
    theme: 'gray',
  },
};
