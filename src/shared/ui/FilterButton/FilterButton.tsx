import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import cn from 'classnames';

import FilterIcon from '@public/icons/icon__filter.svg';
import { Text } from '..';

import cls from './FilterButton.module.scss';
















interface Props
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    className?: string;
    onClick: () => void;
}

export const FilterButton: FC<Props> = ({ className, onClick }) => {
    return (
        <button className={cn(cls.button, className)} onClick={onClick}>
            <Text variant="body_s" className={cls.text}>
                Filter
            </Text>
            <FilterIcon className={cls.icon} />
        </button>
    );
};
