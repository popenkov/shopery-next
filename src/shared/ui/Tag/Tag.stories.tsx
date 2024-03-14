import type { Meta, StoryObj } from '@storybook/react';
import { Logo, LogoSize } from './Tag';

const meta = {
  title: 'shared/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLogo: Story = {
  args: {
    size: LogoSize.DEFAULT,
  },
};

export const SmallLogo: Story = {
  args: {
    size: LogoSize.SMALL,
  },
};
