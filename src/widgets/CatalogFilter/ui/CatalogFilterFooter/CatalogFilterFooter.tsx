import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { Button } from '@/shared';

import cls from './CatalogFilterFooter.module.scss';
interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    applyFilter: () => void;
}

export const CatalogFilterFooter: FC<Props> = ({ applyFilter }) => {
    return (
        <div className={cls.footer}>
            <Button size="large" className={cls.button} onClick={applyFilter}>
                Apply filter
            </Button>
        </div>
    );
};
