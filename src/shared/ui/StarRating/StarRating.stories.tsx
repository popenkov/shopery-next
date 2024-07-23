import type { Meta, StoryObj } from '@storybook/react';

import { StarRating } from './StarRating';

const meta = {
  title: 'shared/StarRating',
  component: StarRating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    value: 4,
    maxValue: 5,
    className: '',
  },
  argTypes: {},
} satisfies Meta<typeof StarRating>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const StarRatingComponent: TStory = {
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  args: {
    value: 4,
    maxValue: 5,
    className: '',
  },
};
