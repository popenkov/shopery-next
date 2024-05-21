import { FC } from 'react';

import { RoundButton, RoundButtonTheme } from 'shared/ui/Buttons';
import { CartIcon } from 'shared/ui/icons';

import { useAppDispatch } from '@/shared/lib/store/hooks';
import { addToCart, CartProduct } from 'entities/Cart/';
import { TProduct } from '@/entities/Product';

type Props = {
  item: TProduct;
  theme?: RoundButtonTheme;
  className?: string;
};

export const AddToCart: FC<Props> = ({ className, item, theme = 'primary' }) => {
  const dispatch = useAppDispatch();
  const handleAddToCartButtonClick = () => {
    const CartModel = { ...item, amount: 1 };
    console.log('CartModel', CartModel);
    dispatch(addToCart(CartModel));
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
