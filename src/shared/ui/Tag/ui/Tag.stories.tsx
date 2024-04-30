import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from './Tag';

const meta = {
    title: 'shared/Tag',
    component: Tag,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RedTag: Story = {
    args: {
        children: 'Text',
        variant: 'red',
    },
};

export const BlueTag: Story = {
    args: {
        children: 'Text',
        variant: 'blue',
    },
};

export const OrangeTag: Story = {
    args: {
        children: 'Text',
        variant: 'orange',
    },
};

export const BlackTag: Story = {
    args: {
        children: 'Text',
        variant: 'black',
    },
};
