import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { userEvent, within } from '@storybook/test';

const meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputComponent: Story = {
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '400px' }}>
                <Story />
            </div>
        ),
    ],
    args: { placeholder: 'name' },
};

export const InputFilledComponent: Story = {
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '400px' }}>
                <Story />
            </div>
        ),
    ],
    args: {
        placeholder: 'name',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const emailInput = canvas.getByPlaceholderText('name');

        await userEvent.type(emailInput, 'example-email@email.com', {
            delay: 100,
        });
    },
};
