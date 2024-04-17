'use client';

import {
    DetailedHTMLProps,
    FC,
    HTMLAttributes,
    memo,
    useEffect,
    useState,
} from 'react';

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
    range: number[];
    onChange: (value: RangeValueInterface) => void;
}

export const RangeSlider: FC<Props> = memo((props) => {
    const { min, max, range, onChange } = props;
    const [currentRange, setCurrentRange] = useState<number[]>(range);

    const handleSliderUpdate = (value: number | number[]) => {
        if (Array.isArray(value)) {
            const [min, max] = value;
            setCurrentRange(value);
            onChange({ min, max });
        }
    };
    return (
        <div className={cls.range}>
            <Slider
                range
                min={min}
                max={max}
                defaultValue={range}
                value={currentRange}
                onChange={handleSliderUpdate}
                className={cls.rangeSlider}
            />
            <span className={cls.text}>
                Price:{' '}
                <span className={cls.textValue}>
                    {currentRange[0]} - {currentRange[1]}
                </span>
            </span>
        </div>
    );
});

RangeSlider.displayName = 'RangeSlider';
