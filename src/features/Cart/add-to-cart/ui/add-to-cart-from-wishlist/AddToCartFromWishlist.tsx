'use client';
import { FC } from 'react';

import { addToCart, openAsideCartMenu } from '@/entities/Cart';
import { TProduct } from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui/Buttons';

import cls from './AddToCartFromWishlist.module.scss';

type Props = {
  item: TProduct;
};

export const AddToCartFromWishlist: FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();
  const handleAddToCartButtonClick = () => {
    const CartModel = { ...item, amount: 1 };
    dispatch(addToCart(CartModel));
    dispatch(openAsideCartMenu());
  };
  return (
    <Button theme="primary" className={cls.addToCardButton} onClick={handleAddToCartButtonClick}>
      Add to Cart
    </Button>
  );
};
