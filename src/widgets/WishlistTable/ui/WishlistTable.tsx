import { getWishlistItems } from '@/entities/Product/api/get-wishlist-items';
import { ProductWishlist } from '@/entities/Product/ui/ProductWishlist';

import { FC } from 'react';
import { WishlistTableHeader } from './WishlistTableHeader/WishlistTableHeader';
import { WishlistTableFooter } from './WishlistTableFooter/WishlistTableFooter';

import cls from './WishlistTable.module.scss';

export const WishlistTable: FC = () => {
    const { items } = getWishlistItems();
    return (
        <div className={cls.wishlistTable}>
            <WishlistTableHeader />
            <div className="wishlist__items-body">
                {items.map((item) => {
                    return <ProductWishlist key={item.id} data={item} />;
                })}
            </div>
            <WishlistTableFooter />
        </div>
    );
};
