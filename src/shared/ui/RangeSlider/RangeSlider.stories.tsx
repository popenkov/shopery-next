import type { Meta, StoryObj } from '@storybook/react';

import { RangeSlider } from './RangeSlider';

const meta = {
  title: 'shared/RangeSlider',
  component: RangeSlider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RangeSlider>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const RangeSliderComponent: TStory = {
  args: {
    min: 0,
    max: 550,
    range: [0, 550],
    onChange: () => {
      console.log('change');
    },
  },
};
