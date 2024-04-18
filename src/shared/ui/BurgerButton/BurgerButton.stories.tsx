import type { Meta, StoryObj } from '@storybook/react';

import { BurgerButton } from './BurgerButton';
import { fn } from '@storybook/test';

const meta = {
    title: 'shared/BurgerButton',
    component: BurgerButton,
    parameters: {
        layout: 'centered',
    },
    args: { onClick: fn() },
    tags: ['autodocs'],
} satisfies Meta<typeof BurgerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BurgerButtonComponent: Story = {};
