import React from 'react';

import CartIcon from '@public/icons/icon__cart.svg';
import Link from 'next/link';
import cls from './HeaderCart.module.scss';
import { Text, TextVariant, TextWeight } from '@/shared/ui';

export const HeaderCart = () => {
  return (
    <div className={cls.cart}>
      <Link className={cls.cartLink} href="#">
        <CartIcon className={cls.cartIcon} />
        <span className={cls.cartItemsAmount}>2</span>
      </Link>
      <div className={cls.cartInfo}>
        <Text variant={TextVariant.BODY_XS} className={cls.cartTitle}>
          Shopping cart:
        </Text>
        <Text variant={TextVariant.BODY_S} weight={TextWeight.MEDIUM}>
          ${'57.00'}
        </Text>
      </div>
    </div>
  );
};
