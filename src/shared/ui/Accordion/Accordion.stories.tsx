import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Accordion } from './Accordion';

const meta = {
  title: 'shared/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn(), open: true },
  argTypes: {},
} satisfies Meta<typeof Accordion>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const AccordionComponent: TStory = {
  decorators: [
    (Story) => (
      <div style={{ width: '200px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    variant: 'border',
    title: <p>Заголовок</p>,
    children: <p>Содержимое</p>,
  },
};
