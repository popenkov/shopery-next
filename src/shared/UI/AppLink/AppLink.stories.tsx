import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    href: '/',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: ['primary', 'ghost', 'white', 'border', 'gray', 'text'],
    size: ['small', 'medium', 'large'],
    children: {
      controls: 'Test',
    },
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

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
