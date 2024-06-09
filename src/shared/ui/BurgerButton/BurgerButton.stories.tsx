import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { BurgerButton } from './BurgerButton';

const meta = {
  title: 'shared/BurgerButton',
  component: BurgerButton,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
  tags: ['autodocs'],
} satisfies Meta<typeof BurgerButton>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const BurgerButtonComponent: TStory = {};
