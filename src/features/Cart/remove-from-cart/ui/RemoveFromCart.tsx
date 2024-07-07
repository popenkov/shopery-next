'use client';

import React, { FC } from 'react';
import cn from 'classnames';

import { useAppDispatch } from '@/app/lib/store/hooks';
import { removeItemFromCart } from '@/entities/Cart';
import { CrossIcon } from 'shared/ui/icons';

import cls from './RemoveFromCart.module.scss';

type Props = {
  className?: string;
  id: string;
};

export const RemoveFromCart: FC<Props> = ({ className, id }) => {
  const dispatch = useAppDispatch();
  const handleRemoveFromCartButtonClick = () => {
    dispatch(removeItemFromCart({ id }));
  };
  return (
    <button className={cn(cls.removeButton, className)} onClick={handleRemoveFromCartButtonClick}>
      <CrossIcon className={cls.removeButtonIcon} />
    </button>
  );
};
