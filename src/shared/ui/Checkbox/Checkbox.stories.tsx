import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';
import { fn } from '@storybook/test';

const meta = {
    title: 'shared/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    args: {
        onBlur: fn(),
        onChange: fn(),
        onFocus: fn(),
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxComponent: Story = {
    args: {
        name: 'name',
        value: 'value',
        text: 'test',
    },
};
