import type { Meta, StoryObj } from '@storybook/react';

import { RangeSlider } from './RangeSlider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/RangeSlider',
    component: RangeSlider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RangeSliderComponent: Story = {
    args: {
        min: 0,
        max: 550,
        onChange: () => {
            console.log('change');
        },
    },
};
