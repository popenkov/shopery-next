import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './Pagination';

const meta = {
  title: 'shared/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onPageChange: () => console.log('page changed'),
    totalCount: 10,
    currentPage: 2,
    pageSize: 10,
    className: '',
    siblingCount: 3,
  },
  argTypes: {},
} satisfies Meta<typeof Pagination>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const PaginationComponent: TStory = {
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
  args: {
    onPageChange: () => console.log('page changed'),
    totalCount: 10,
    currentPage: 2,
    pageSize: 10,
    className: '',
    siblingCount: 3,
  },
};
