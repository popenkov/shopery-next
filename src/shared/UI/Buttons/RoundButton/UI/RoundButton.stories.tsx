import type { Meta, StoryObj } from '@storybook/react';

import { RoundButton, RoundButtonTheme } from './RoundButton';
import CartIcon from '../@public/icons/icon__cart.svg';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/RoundButton',
  component: RoundButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof RoundButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <CartIcon />,
    theme: RoundButtonTheme.PRIMARY,
  },
};

export const PrimaryInversed: Story = {
  args: {
    children: <CartIcon />,
    theme: RoundButtonTheme.PRIMARYINVERSED,
  },
};

export const PrimaryGhost: Story = {
  args: {
    children: <CartIcon />,
    theme: RoundButtonTheme.GHOST,
  },
};
