import { FC } from 'react';

import { AddToCartFromWishlist, RemoveFromFavorites } from 'features/Product';
import { getWishlistItems } from 'entities/Product/';
import { ProductWishlist } from 'entities/Product/';

import cls from './WishlistTable.module.scss';
import { WishlistTableFooter } from './WishlistTableFooter';
import { WishlistTableHeader } from './WishlistTableHeader';

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
