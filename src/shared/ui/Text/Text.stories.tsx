import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        theme: ['primary', 'inverted', 'error'],
        align: ['right', 'left', 'center'],
        variant: [
            'search-field',
            'display_1',
            'heading_1',
            'heading_2',
            'heading_3',
            'heading_4',
            'heading_5',
            'body_xxl',
            'body_xl',
            'body_l',
            'body_m',
            'body_s',
            'body_xs',
            'body_tiny',
        ],
        weight: ['light', 'regular', 'medium', 'semibold', 'bold'],
        children: {
            controls: 'Text',
        },
    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const TextStory: Story = {
    args: {
        children: 'Text',
        theme: 'primary',
        size: 'small',
    },
};
