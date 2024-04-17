import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        href: '/',
    },
    argTypes: {
        theme: ['primary', 'ghost', 'secondary', 'outlined', 'gray', 'text'],
        size: ['small', 'medium', 'large'],
        children: {
            controls: 'Test',
        },
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

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
