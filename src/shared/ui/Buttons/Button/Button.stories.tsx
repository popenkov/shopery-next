import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: { onClick: fn() },
    argTypes: {
        theme: ['primary', 'ghost', 'secondary', 'outlined', 'gray', 'text'],
        size: ['small', 'medium', 'large'],
        children: {
            controls: 'Test',
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimarySmall: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Кнопка с зеленым фоном',
            },
        },
    },
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

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: 'secondary',
    },
};

export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: 'outlined',
    },
};

export const Gray: Story = {
    args: {
        children: 'Text',
        theme: 'gray',
    },
};
