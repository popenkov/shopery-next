'use client';
import { FC } from 'react';

import { addToCart, openAsideCartMenu } from '@/entities/Cart/';
import { type TProduct } from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks';
import { RoundButton, TRoundButtonTheme } from '@/shared/ui/Buttons';
import { CartIcon } from '@/shared/ui/icons';

type Props = {
  item: TProduct;
  theme?: TRoundButtonTheme;
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
