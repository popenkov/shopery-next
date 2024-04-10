import { AppSelect } from '@/shared';
import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cls from './CatalogSort.module.scss';
import { CatalogSortAmount } from '../CatalogSortAmount';

interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const SORT_OPTION = [
    { value: 'popular', label: 'Popular' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'highest', label: 'Highest' },
    { value: 'lowest', label: 'Lowest' },
];

export const CatalogSort: FC<Props> = () => {
    return (
        <div className={cls.sorting}>
            <AppSelect options={SORT_OPTION} />
            <CatalogSortAmount />
        </div>
    );
};
