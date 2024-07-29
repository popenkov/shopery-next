import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { AppRouteNames } from '@/shared/model';
import { ImageUploader } from './ImageUploader';

const meta = {
  title: 'shared/ImageUploader',
  component: ImageUploader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { imageSrc: 'image path' },
  argTypes: {},
} satisfies Meta<typeof ImageUploader>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const ImageUploaderComponent: TStory = {
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  args: {
    imageSrc: '/images/product-red-capsicum.jpg',
    onChange: async (e) => console.log('onChange', e.target.files[0]),
  },
};
