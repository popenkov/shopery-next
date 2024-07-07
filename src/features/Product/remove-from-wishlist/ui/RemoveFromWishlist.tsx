'use client';

import React, { FC } from 'react';
import cn from 'classnames';

import { CloseIcon } from 'shared/ui/icons';

import cls from './RemoveFromWishlist.module.scss';
import { useAppDispatch } from '@/app/lib/store/hooks';
import { removeProductFromWishlist } from '@/entities/Favorites';

interface Props {
  id: string;
  className?: string;
}

export const RemoveFromWishlist: FC<Props> = ({ id, className }) => {
  const dispatch = useAppDispatch();

  const handleDeleteButtonClick = () => {
    dispatch(removeProductFromWishlist({ id }));
  };
  return (
    <button className={cn(cls.removeButton, className)} onClick={handleDeleteButtonClick}>
      <CloseIcon className={cls.removeButtonIcon} />
    </button>
  );
};
