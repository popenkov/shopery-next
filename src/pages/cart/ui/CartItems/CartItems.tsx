'use client';

import React, { FC } from 'react';

import cn from 'classnames';

import cls from './CartItems.module.scss';
import { useAppSelector } from '@/app/lib/store/hooks';
import { selectCart } from '@/entities/Cart';
import { getRouteCart, getRouteCatalog } from '@/shared/lib/constants';
import { AppLink } from '@/shared/ui/AppLink';

type Props = {
  className?: string;
};

export const CartItems: FC<Props> = ({ className }) => {
  const cartItems = useAppSelector(selectCart);
  return (
    <div className={cn('cart-page__items', className)}>
      <div className="cart-page__header">
        <span className="cart-page__column-title">Product</span>
        <span className="cart-page__column-title">price</span>
        <span className="cart-page__column-title">Quantity</span>
        <span className="cart-page__column-title">Subtotal</span>
      </div>
      <div className="cart-page__body"></div>
      <div className="cart-page__footer">
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
