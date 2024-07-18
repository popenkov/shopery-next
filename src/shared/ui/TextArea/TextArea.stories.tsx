import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

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
type TStory = StoryObj<typeof meta>;

export const TextAreaComponent: TStory = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
  args: { placeholder: 'name' },
};

export const TextAreaFilledComponent: TStory = {
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
