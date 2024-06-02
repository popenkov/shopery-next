import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from './Radio';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioComponent: Story = {
  args: {
    name: 'name',
    value: 'value',
    text: 'test',
    amount: 33,
  },
};
