'use client';

import React from 'react';

import {
  closeAsideCartMenu,
  selectCartProducts,
  selectMenuState,
  selectTotalAmount,
  selectTotalPrice,
} from '@/entities/Cart';
import { ProductCartPreview } from '@/entities/Product';
import { RemoveFromCart } from '@/features/Cart';
import { useAppSelector, useAppDispatch } from '@/shared/lib/hooks';
import { getFormattedPrice } from '@/shared/lib/utils';
import { Drawer } from '@/shared/ui/Drawer';

import cls from './CartAside.module.scss';
import { CartAsideFooter } from './CartAsideFooter';
import { CartAsideHeader } from './CartAsideHeader';
import { selectCurrentCurrency } from '@/entities/Currency';
import { DEFAULT_CURRENCY } from '@/features/CurrencySwitcher/ui/constants';

export const CartAside = () => {
  const dispatch = useAppDispatch();
  const currentCurrency = useAppSelector(selectCurrentCurrency) || DEFAULT_CURRENCY;
  const cartItems = useAppSelector(selectCartProducts);
  const isMenuOpen = useAppSelector(selectMenuState);
  const totalAmount = useAppSelector(selectTotalAmount);
  const totalPrice = useAppSelector(selectTotalPrice);

  const handleDrawerClose = () => {
    dispatch(closeAsideCartMenu());
  };

  if (!cartItems.length) {
    return null;
  }

  const formattedPrice = getFormattedPrice(totalPrice, currentCurrency);

  return (
    <Drawer isOpen={isMenuOpen} onClose={handleDrawerClose} hasOverlay={false}>
      <div className={cls.CartAside}>
        <CartAsideHeader closeDrawer={handleDrawerClose} amount={totalAmount} />
        <div className={cls.cartAsideItems}>
          {cartItems.map((item) => {
            return (
              <ProductCartPreview
                className={cls.cartAsideItem}
                data={item}
                key={item.id}
                actions={<RemoveFromCart id={item.id} />}
              />
            );
          })}
        </div>
        <CartAsideFooter
          closeDrawer={handleDrawerClose}
          amount={totalAmount}
          price={formattedPrice}
        />
      </div>
    </Drawer>
  );
};
