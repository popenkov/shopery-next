import Link from 'next/link';
import React from 'react';

import { Text } from '@/shared';
import { getFormattedPrice } from '@/shared/lib/utils/getFormattedPrice';
import CartIcon from '@public/icons/icon__cart.svg';

import cls from './HeaderCart.module.scss';
import { getCartAmount } from '../api/getCartAmount';

export const HeaderCart = () => {
  const { amount, price } = getCartAmount();
  const formattedPrice = getFormattedPrice(price);
  return (
    <div className={cls.cart}>
      <Link className={cls.cartLink} href="#">
        <CartIcon className={cls.cartIcon} />
        {typeof amount === 'number' && (
          <span className={cls.cartItemsAmount}>{amount}</span>
        )}
      </Link>
      <div className={cls.cartInfo}>
        <Text variant="body_xs" className={cls.cartTitle}>
          Shopping cart:
        </Text>
        <Text variant="body_s" weight="medium">
          {formattedPrice}
        </Text>
      </div>
    </div>
  );
};
