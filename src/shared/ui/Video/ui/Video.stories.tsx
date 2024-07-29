import type { Meta, StoryObj } from '@storybook/react';

import { Video } from './Video';
import { getVideoData } from '@/widgets/MainVideo/api';

const meta = {
  title: 'shared/Video',
  component: Video,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Video>;

export default meta;
type TStory = StoryObj<typeof meta>;

const { video } = getVideoData();

export const VideoComponent: TStory = {
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  args: {
    data: video,
  },
};
