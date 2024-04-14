import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './Accordion';

const meta = {
    title: 'shared/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccordionComponent: Story = {
    args: {
        title: <p>Заголовок</p>,
        children: <p>Содержимое</p>,
    },
};
