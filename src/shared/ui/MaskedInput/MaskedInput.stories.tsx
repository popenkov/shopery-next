import type { Meta, StoryObj } from '@storybook/react';

import { MaskedInput } from './MaskedInput';

const meta = {
  title: 'shared/MaskedInput',
  component: MaskedInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    inputMode: 'numeric',
    mask: '000 000',
    type: 'text',
    unmask: true,
    label: 'Zip Code',
    placeholder: 'Zip Code',
  },
  argTypes: {},
} satisfies Meta<typeof MaskedInput>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const MaskedInputComponent: TStory = {
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  args: {
    inputMode: 'numeric',
    mask: '000 000',
    type: 'text',
    unmask: true,
    label: 'Zip Code',
    placeholder: 'Zip Code',
  },
};
