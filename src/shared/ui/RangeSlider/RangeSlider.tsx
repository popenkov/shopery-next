'use client';

import { FC } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export const RangeSlider: FC = () => {
  return (
    <div>
      <Slider range />
    </div>
  );
};
