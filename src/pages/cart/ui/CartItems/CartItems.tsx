'use client';

import React, { FC } from 'react';
import cn from 'classnames';

import { useAppSelector } from '@/app/lib/store/hooks';
import { selectCartProducts } from '@/entities/Cart';
import { ProductCart } from '@/entities/Product/ui/ProductCart';
import { ChangeAmount } from '@/features/Cart';
import { RemoveFromCart } from '@/features/Cart/remove-from-cart';
import { getRouteCart, getRouteCatalog } from '@/shared/lib/constants';
import { AppLink } from '@/shared/ui/AppLink';
import { Text } from '@/shared/ui/Text';

import cls from './CartItems.module.scss';

type Props = {
  className?: string;
};

export const CartItems: FC<Props> = ({ className }) => {
  const cartItems = useAppSelector(selectCartProducts);
  return (
    <div className={cn(cls.CartItems, className)}>
      <div className={cls.CartItemsHeader}>
        <Text variant="body_s" weight="medium" className={cls.CartItemsHeaderTitle}>
          Product
        </Text>
        <Text variant="body_s" weight="medium" className={cls.CartItemsHeaderTitle}>
          price
        </Text>
        <Text variant="body_s" weight="medium" className={cls.CartItemsHeaderTitle}>
          Quantity
        </Text>
        <Text variant="body_s" weight="medium" className={cls.CartItemsHeaderTitle}>
          Subtotal
        </Text>
      </div>
      <div className={cls.CartItemsMain}>
        {cartItems.length ? (
          cartItems.map((item) => {
            return (
              <ProductCart
                data={item}
                key={item.id}
                className={cls.CartItemsProduct}
                cartActions={<ChangeAmount id={item.id} amount={item.amount} />}
                deleteActions={<RemoveFromCart id={item.id} />}
              />
            );
          })
        ) : (
          <Text variant="body_s" weight="medium" align="center" className={cls.CartItemsEmpty}>
            Your cart is empty
          </Text>
        )}
      </div>
      <div className={cls.CartItemsFooter}>
        <AppLink href={getRouteCatalog()} theme="monochrome-light" className={cls.CartPageButton}>
          Return to shop
        </AppLink>
        <AppLink href={getRouteCart()} theme="monochrome-light" className={cls.CartPageButton}>
          Update Cart
        </AppLink>
      </div>
    </div>
  );
};
