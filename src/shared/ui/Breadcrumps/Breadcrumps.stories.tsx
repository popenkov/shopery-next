import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { AppRouteNames } from '@/shared/model';
import { Breadcrumbs } from './Breadcrumps';

const meta = {
  title: 'shared/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { items: ['link 1', 'link 2', 'link 3'] },
  argTypes: {},
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const BreadcrumbsComponent: TStory = {
  decorators: [
    (Story) => (
      <div style={{ width: '100vw' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    items: [AppRouteNames.HOME, AppRouteNames.CATALOG],
  },
};
