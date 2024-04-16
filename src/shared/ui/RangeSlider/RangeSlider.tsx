'use client';

import { DetailedHTMLProps, FC, HTMLAttributes, useState } from 'react';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import cls from './RangeSlider.module.scss';

interface RangeValueInterface {
    min: number;
    max: number;
}

interface Props
    extends Omit<
            DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
            'onChange'
        >,
        RangeValueInterface {
    onChange: (value: RangeValueInterface) => void;
}

export const RangeSlider: FC<Props> = (props) => {
    const { min, max, onChange } = props;
    const [range, setRange] = useState<RangeValueInterface>({ min, max });

    const handleSliderUpdate = (value: number | number[]) => {
        if (Array.isArray(value)) {
            const [min, max] = value;
            setRange({ min, max });
            onChange({ min, max });
        }
    };

    return (
        <div className={cls.range}>
            <Slider
                range
                defaultValue={[min, max]}
                onChange={handleSliderUpdate}
                className={cls.rangeSlider}
            />
            <span className={cls.text}>
                Price:{' '}
                <span className={cls.textValue}>
                    {range.min} - {range.max}
                </span>
            </span>
        </div>
    );
};
