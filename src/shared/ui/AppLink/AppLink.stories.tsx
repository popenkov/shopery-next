import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme, AppLinkSize } from './AppLink';

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
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const PrimarySmall: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
    size: AppLinkSize.SMALL,
  },
};

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const PrimaryLarge: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
    size: AppLinkSize.LARGE,
  },
};

export const Ghost: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.GHOST,
  },
};

export const White: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.WHITE,
  },
};

export const Border: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.BORDER,
  },
};

export const Gray: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.GRAY,
  },
};
