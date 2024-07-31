import type { Meta, StoryObj } from '@storybook/react';

import { ProductLarge, TProduct } from '@/entities/Product';
import { getProductTab } from '@/widgets/ProductTab/api';

import { MobileSlider } from '../MobileSlider';

import { ProductTabs } from './ProductTabs';

const meta = {
  title: 'shared/ProductTabs',
  component: ProductTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ProductTabs>;

export default meta;
type TStory = StoryObj<typeof ProductTabs<TProduct>>;

const { productTabs } = getProductTab();

export const ProductTabsComponent: TStory = {
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  args: {
    tabs: productTabs,
    tabContent: (item) => <ProductLarge data={item} actions={<></>} cartAction={<></>} />,
    sliderContent: (props) => (
      <MobileSlider<TProduct>
        {...props}
        render={(child: TProduct) => (
          <ProductLarge data={child} key={child.id} actions={<></>} cartAction={<></>} />
        )}
      />
    ),
  },
};
