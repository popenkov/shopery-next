import { getWishlistItems } from '@/entities/Product/api/get-wishlist-items';
import { ProductWishlist } from '@/entities/Product/ui/ProductWishlist';

import { FC } from 'react';
import { WishlistTableHeader } from './WishlistTableHeader/WishlistTableHeader';
import { WishlistTableFooter } from './WishlistTableFooter/WishlistTableFooter';

import cls from './WishlistTable.module.scss';
import { AddToCartFromWishlist } from '@/features/Product/add-to-cart-from-wishlist';
import { RemoveFromFavorites } from '@/features/Product/remove-from-favorites/ui/RemoveFromFavorites';

export const WishlistTable: FC = () => {
    const { items } = getWishlistItems();
    return (
        <div className={cls.wishlistTable}>
            <WishlistTableHeader />
            <div className={cls.wishlistTableBody}>
                {items.map((item) => {
                    return (
                        <ProductWishlist
                            key={item.id}
                            data={item}
                            actions={
                                <>
                                    <AddToCartFromWishlist />
                                    <RemoveFromFavorites />
                                </>
                            }
                        />
                    );
                })}
            </div>
            <WishlistTableFooter />
        </div>
    );
};
