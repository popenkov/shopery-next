'use client';

import { FC, useEffect, useState } from 'react';
import cn from 'classnames';


import { useAppDispatch, useAppSelector } from '@/app/lib/store/hooks';
import { changeNumItemsInCart, removeItemFromCart } from '@/entities/Cart';
import { changeItemsAmountInCart } from '@/entities/Cart/model/lib/helpers';
import { selectCartData } from '@/entities/Cart/model/selectors/cart';
import { MinusIcon, PlusIcon } from 'shared/ui/icons';

import cls from './ChangeAmount.module.scss';

interface Props {
  id: string;
  amount: number;
  className?: string;
}

export const ChangeAmount: FC<Props> = ({ id, amount, className }) => {
  const cartState = useAppSelector(selectCartData);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(amount);

  const handleAmountChangeButtonClick = (action: 'minus' | 'plus') => {
    switch (action) {
      case 'minus':
        setValue(value - 1);
        break;
      case 'plus':
        setValue(value + 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (value >= 1) {
      const updatedState = changeItemsAmountInCart(cartState, id, value);

      dispatch(changeNumItemsInCart(updatedState));
    } else {
      dispatch(removeItemFromCart({ id }));
    }
  }, [value]);

  return (
    <div className={cn(cls.ChangeAmount, className)}>
      <button
        className={cls.ChangeAmountButton}
        onClick={() => handleAmountChangeButtonClick('minus')}
      >
        <MinusIcon className={cls.ChangeAmountButtonIcon} />
      </button>
      <div className={cls.ChangeAmountButtonInputWrapper}>
        <input
          className={cls.ChangeAmountButtonInput}
          type="number"
          value={value}
          min="1"
          readOnly
        />
      </div>
      <button
        className={cls.ChangeAmountButton}
        onClick={() => handleAmountChangeButtonClick('plus')}
      >
        <PlusIcon className={cls.ChangeAmountButtonIcon} />
      </button>
    </div>
  );
};
