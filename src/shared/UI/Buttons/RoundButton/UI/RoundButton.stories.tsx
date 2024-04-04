import type { Meta, StoryObj } from '@storybook/react';

import CartIcon from '@public/icons/icon__cart.svg';

import { RoundButton } from './RoundButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/RoundButton',
  component: RoundButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: ['primary', 'primary_inversed', 'ghost'],
  },
} satisfies Meta<typeof RoundButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <CartIcon />,
    theme: 'primary',
  },
};

export const PrimaryInversed: Story = {
  args: {
    children: <CartIcon />,
    theme: 'primary_inversed',
  },
};

export const PrimaryGhost: Story = {
  args: {
    children: <CartIcon />,
    theme: 'ghost',
  },
};
