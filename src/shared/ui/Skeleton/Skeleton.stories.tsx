import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkeletonComponent: Story = {
    args: {
        width: 200,
        height: 550,
        border: '5',
    },
};
