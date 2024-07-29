import type { Meta, StoryObj } from '@storybook/react';

import { MobileSlider } from './MobileSlider';
import { getBannerData } from '@/widgets/Banners/api';
import { Banner, TBanner } from '@/entities/Banner';

const meta = {
  title: 'shared/MobileSlider',
  component: MobileSlider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof MobileSlider>;

export default meta;
type TStory = StoryObj<typeof MobileSlider<TBanner>>;

const { banners } = getBannerData();

export const MobileSliderComponent: TStory = {
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  args: {
    data: banners,
    render: (child: TBanner) => <Banner {...child} />,
  },
};
