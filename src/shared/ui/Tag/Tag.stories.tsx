import type { Meta, StoryObj } from '@storybook/react';

import { Tag, TagVariant } from './Tag';

const meta = {
  title: 'shared/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RedTag: Story = {
  args: {
    content: 'Text',
    variant: TagVariant.RED,
  },
};

export const BlueTag: Story = {
  args: {
    content: 'Text',
    variant: TagVariant.BLUE,
  },
};

export const OrangeTag: Story = {
  args: {
    content: 'Text',
    variant: TagVariant.ORANGE,
  },
};

export const BlackTag: Story = {
  args: {
    content: 'Text',
    variant: TagVariant.BLACK,
  },
};
