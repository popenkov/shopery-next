import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import CloseIcon from '@public/icons/icon__close.svg';
import cls from './CatalogFilterHeader.module.scss';
import { Text } from '@/shared';

interface Props
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    handleClose: () => void;
}

export const CatalogFilterHeader: FC<Props> = ({ handleClose }) => {
    return (
        <div className={cls.header}>
            <Text variant="body_xl" weight="medium" as="h2">
                Filter
            </Text>
            <button className={cls.headerCloseButton} onClick={handleClose}>
                <CloseIcon className={cls.headerCloseIcon} />
            </button>
        </div>
    );
};
