import type { Meta, StoryObj } from '@storybook/react';

import { Video } from './Video';

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

const video = {
  background: 'video-preview.jpg',
  src: 'https://www.youtube.com/embed/2eX2TCfiFuY',
  title: 'We’re the Best Organic Farm in the World',
  subtitle: 'Video',
};

export default meta;
type TStory = StoryObj<typeof meta>;

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
