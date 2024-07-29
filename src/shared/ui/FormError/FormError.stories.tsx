import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { AppRouteNames } from '@/shared/model';
import { FormError } from './FormError';

const meta = {
  title: 'shared/FormError',
  component: FormError,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { text: 'error' },
  argTypes: {},
} satisfies Meta<typeof FormError>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const FormErrorComponent: TStory = {
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  args: {
    text: 'Error text',
  },
};
