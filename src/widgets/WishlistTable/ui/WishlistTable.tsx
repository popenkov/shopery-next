import { FC } from 'react';

import { AddToCartFromWishlist } from 'features/Product/add-to-cart-from-wishlist';
import { RemoveFromFavorites } from 'features/Product/remove-from-favorites/ui/RemoveFromFavorites';
import { getWishlistItems } from 'entities/Product/';
import { ProductWishlist } from 'entities/Product/';

import cls from './WishlistTable.module.scss';
import { WishlistTableFooter } from './WishlistTableFooter/WishlistTableFooter';
import { WishlistTableHeader } from './WishlistTableHeader/WishlistTableHeader';












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
