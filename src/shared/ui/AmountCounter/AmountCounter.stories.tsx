import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { AmountCounter } from './AmountCounter';

const meta = {
  title: 'shared/AmountCounter',
  component: AmountCounter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { value: 5 },
  argTypes: {},
} satisfies Meta<typeof AmountCounter>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const AmountCounterComponent: TStory = {
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  args: {
    value: 5,
    onChange: (value) => console.log('onChange:', value),
  },
};
