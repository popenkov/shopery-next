import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalComponent: Story = {
    args: {
        isOpen: true,
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ',
    },
};
