import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import CartIcon from '@public/icons/icon__cart.svg';

import { RoundButton } from './RoundButton';

const meta = {
    title: 'shared/RoundButton',
    component: RoundButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
    argTypes: {
        theme: ['primary', 'secondary', 'ghost'],
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
        theme: 'secondary',
    },
};

export const PrimaryGhost: Story = {
    args: {
        children: <CartIcon />,
        theme: 'ghost',
    },
};
