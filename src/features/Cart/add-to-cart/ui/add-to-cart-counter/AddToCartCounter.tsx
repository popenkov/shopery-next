'use client';

import { FC } from 'react';
import cn from 'classnames';

import { AmountCounter } from 'shared/ui/AmountCounter';
import { Button } from 'shared/ui/Buttons';
import { CartIcon } from 'shared/ui/icons';

import cls from './AddToCartCounter.module.scss';

type Props = {
  className: string;
};

// todo
export const AddToCartCounter: FC<Props> = ({ className }) => {
  const handleAmountChange = (value: number) => {
    console.log(value);
  };

  const handleButtonClick = () => {
    console.log('handleButtonClick');
  };
  return (
    <div className={cn(cls.AddToCartCounter, className)}>
      <AmountCounter
        value={5}
        onChange={handleAmountChange}
        className={cls.AddToCartCounterAmount}
      />
      <Button size="large" className={cls.AddToCartCounterCartButton} onClick={handleButtonClick}>
        Add to Cart
        <CartIcon className={cls.AddToCartCounterCartButtonIcon} />
      </Button>
    </div>
  );
};
