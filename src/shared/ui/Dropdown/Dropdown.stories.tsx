import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const DropdownComponent: TStory = {
  args: {
    defaultItem: {
      value: 'DE',
      label: 'DE',
    },
    data: [
      {
        value: 'DE',
        label: 'DE',
      },
      {
        value: 'ENG',
        label: 'ENG',
      },
    ],
    onChange: () => {
      console.log('change');
    },
  },
};
