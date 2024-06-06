import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CategoriesButton } from '.';

const meta = {
  title: 'shared/CategoriesButton',
  component: CategoriesButton,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
  tags: ['autodocs'],
} satisfies Meta<typeof CategoriesButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CategoriesButtonComponent: Story = {};
