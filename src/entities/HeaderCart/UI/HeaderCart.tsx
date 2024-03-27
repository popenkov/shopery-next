import Link from 'next/link';
import React from 'react';

import { Text } from '@/shared';
import CartIcon from '@public/icons/icon__cart.svg';

import cls from './HeaderCart.module.scss';

export const HeaderCart = () => {
  return (
    <div className={cls.cart}>
      <Link className={cls.cartLink} href="#">
        <CartIcon className={cls.cartIcon} />
        <span className={cls.cartItemsAmount}>2</span>
      </Link>
      <div className={cls.cartInfo}>
        <Text
          // todo
          // variant={TextVariant.BODY_XS}
          className={cls.cartTitle}
        >
          Shopping cart:
        </Text>
        <Text
        // todo
        // variant={TextVariant.BODY_S}
        // weight={TextWeight.MEDIUM}
        >
          ${'57.00'}
        </Text>
      </div>
    </div>
  );
};
