'use client';

import { FC } from 'react';

import { selectWishlistProducts } from '@/entities/Favorites';
import { ProductWishlist } from '@/entities/Product/';
import { AddToCartFromWishlist } from '@/features/Cart';
import { RemoveFromWishlist } from '@/features/Product';
import { useAppSelector } from '@/shared/lib/hooks';

import cls from './WishlistTable.module.scss';
import { WishlistTableFooter } from './WishlistTableFooter';
import { WishlistTableHeader } from './WishlistTableHeader';

export const WishlistTable: FC = () => {
  const items = useAppSelector(selectWishlistProducts);

  if (!items.length) {
    return (
      <div className={cls.wishlistTable}>
        <p className={cls.wishlistTableNoItems}>No products in the wishlist</p>
      </div>
    );
  }
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
                  <AddToCartFromWishlist item={item} />
                  <RemoveFromWishlist id={item.id} />
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
