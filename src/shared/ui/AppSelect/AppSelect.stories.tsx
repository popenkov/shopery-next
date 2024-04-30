import type { Meta, StoryObj } from '@storybook/react';

import { AppSelect } from './AppSelect';

const meta = {
    title: 'shared/AppSelect',
    component: AppSelect,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AppSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AppSelectComponent: Story = {
    args: {
        options: [
            { label: 'test 1', value: 'test 1' },
            { label: 'test 2', value: 'test 2' },
            { label: 'test 3', value: 'test 3' },
        ],
    },
};
