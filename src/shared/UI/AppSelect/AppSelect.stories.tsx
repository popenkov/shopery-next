import type { Meta, StoryObj } from '@storybook/react';

import { AppSelect } from './AppSelect';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/AppSelect',
  component: AppSelect,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AppSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const AppSelectComponent: Story = {
  args: {
    options: [
      { label: 'test 1', value: 'test 1' },
      { label: 'test 2', value: 'test 2' },
      { label: 'test 3', value: 'test 3' },
    ],
  },
};
