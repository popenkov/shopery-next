'use client';

import { FC, useState } from 'react';
import cn from 'classnames';

import { AmountCounter } from '@/shared/ui/AmountCounter';
import { Button } from '@/shared/ui/Buttons';
import { CartIcon } from '@/shared/ui/icons';

import cls from './AddToCartCounter.module.scss';
import { TProductDetailed } from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks';
import { addToCart, openAsideCartMenu } from '@/entities/Cart';

type Props = {
  item: TProductDetailed;
  className: string;
};

export const AddToCartCounter: FC<Props> = ({ className, item }) => {
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState(1);

  const handleAmountChange = (value: number) => {
    setAmount(value);
  };

  const handleAddToCartButtonClick = () => {
    console.log('handleAddToCartButtonClick', amount, item);

    // id: string;
    // path?: string;
    // img: string;
    // title: string;
    // price: number;
    // amount: number;

    const CartModel = { ...item, amount: amount };
    dispatch(addToCart(CartModel));
    dispatch(openAsideCartMenu());
  };

  return (
    <div className={cn(cls.AddToCartCounter, className)}>
      <AmountCounter
        value={5}
        onChange={handleAmountChange}
        className={cls.AddToCartCounterAmount}
      />
      <Button
        size="large"
        className={cls.AddToCartCounterCartButton}
        onClick={handleAddToCartButtonClick}
      >
        Add to Cart
        <CartIcon className={cls.AddToCartCounterCartButtonIcon} />
      </Button>
    </div>
  );
};
