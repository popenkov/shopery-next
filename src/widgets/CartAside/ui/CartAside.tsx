'use client';

import { useAppDispatch, useAppSelector } from '@/app/lib/store/hooks';
import { closeAsideCartMenu, selectCart } from '@/entities/Cart';
import {
  selectMenuState,
  selectTotalAmount,
  selectTotalPrice,
} from '@/entities/Cart/model/selectors/cart';
import { CartSchema } from '@/entities/Cart/model/types/cart-schema';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import React from 'react';
import { CartAsideHeader } from './CartAsideHeader';

import cls from './CartAside.module.scss';
import { CartAsideFooter } from './CartAsideFooter';
import { ProductCart } from '@/entities/Product';

export const CartAside = () => {
  const dispatch = useAppDispatch();

  // todo разобраться с типами
  const cartItems = useAppSelector<{ cart: CartSchema }>(selectCart);
  const isMenuOpen = useAppSelector<{ cart: CartSchema }>(selectMenuState);
  const totalAmount = useAppSelector<{ cart: CartSchema }>(selectTotalAmount);
  const totalPrice = useAppSelector<{ cart: CartSchema }>(selectTotalPrice);

  const handleDrawerClose = () => {
    dispatch(closeAsideCartMenu());
  };

  if (!cartItems.length) {
    return null;
  }
  console.log('data', cartItems);
  return (
    <Drawer isOpen={true} onClose={handleDrawerClose} hasOverlay={false}>
      <div className={cls.CartAside}>
        <CartAsideHeader closeDrawer={handleDrawerClose} amount={totalAmount} />
        <div className={cls.cartAsideItems}>
          {cartItems.map((item) => {
            return <ProductCart data={item} key={item.id} />;
          })}
        </div>
        <CartAsideFooter closeDrawer={handleDrawerClose} amount={totalAmount} price={totalPrice} />
      </div>
    </Drawer>
  );
};
