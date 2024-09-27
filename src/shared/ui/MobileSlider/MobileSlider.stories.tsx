import type { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line
import { Banner, TBanner } from '@/entities/Banner';
// eslint-disable-next-line
import { getBannerData } from '@/widgets/Banners';

import { MobileSlider } from './MobileSlider';

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
