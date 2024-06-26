'use client';
import { FC } from 'react';

import { useAppDispatch } from '@/app/lib/store/hooks';
import { TProduct } from '@/entities/Product';
import { addToCart, openAsideCartMenu } from 'entities/Cart/';
import { RoundButton, RoundButtonTheme } from 'shared/ui/Buttons';
import { CartIcon } from 'shared/ui/icons';

type Props = {
  item: TProduct;
  theme?: RoundButtonTheme;
  className?: string;
};

export const AddToCart: FC<Props> = ({ className, item, theme = 'primary' }) => {
  const dispatch = useAppDispatch();
  const handleAddToCartButtonClick = () => {
    const CartModel = { ...item, amount: 1 };
    dispatch(addToCart(CartModel));
    dispatch(openAsideCartMenu());
  };

  return (
    <RoundButton
      icon={<CartIcon />}
      theme={theme}
      className={className}
      onClick={handleAddToCartButtonClick}
    />
  );
};
