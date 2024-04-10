import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { Text } from '@/shared';

import cls from './CatalogSortAmount.module.scss';

interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const CatalogSortAmount: FC<Props> = () => {
    return (
        <Text variant="body_m" className={cls.itemsFound}>
            <span className={cls.itemsFoundValue}>52</span>
            <span className={cls.itemsFoundText}>Results Found</span>
        </Text>
    );
};
