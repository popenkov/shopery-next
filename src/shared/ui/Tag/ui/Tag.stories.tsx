import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from './Tag';

const meta = {
  title: 'shared/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const SaleTag: TStory = {
  args: {
    children: 'Text',
    variant: 'sale',
  },
};

export const NotAvailableTag: TStory = {
  args: {
    children: 'Text',
    variant: 'not-available',
  },
};

export const BestSaleTag: TStory = {
  args: {
    children: 'Text',
    variant: 'best-sale',
  },
};

export const NewTag: TStory = {
  args: {
    children: 'Text',
    variant: 'new',
  },
};

export const OutOfStockTag: TStory = {
  args: {
    children: 'Text',
    variant: 'out-of-stock',
  },
};

export const InStockTag: TStory = {
  args: {
    children: 'Text',
    variant: 'in-stock',
  },
};
