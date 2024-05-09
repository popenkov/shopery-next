import type { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, within } from '@storybook/test';

import { TextArea } from './TextArea';

const meta = {
  title: 'shared/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  args: {
    onBlur: fn(),
    onChange: fn(),
    onFocus: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextAreaComponent: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
  args: { placeholder: 'name' },
};

export const TextAreaFilledComponent: Story = {
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
};
