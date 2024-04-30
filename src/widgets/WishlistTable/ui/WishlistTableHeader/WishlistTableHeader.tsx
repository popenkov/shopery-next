import { FC } from 'react';

import cls from '../WishlistTable.module.scss';

export const WishlistTableHeader: FC = () => {
    return (
        <div className={cls.wishlistTableHeader}>
            <span className={cls.wishlistTableColumnTitle}>Product</span>
            <span className={cls.wishlistTableColumnTitle}>price</span>
            <span className={cls.wishlistTableColumnTitle}>Stock Status</span>
        </div>
    );
};
