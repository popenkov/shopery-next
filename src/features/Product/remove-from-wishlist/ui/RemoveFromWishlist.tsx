'use client';

import { FC } from 'react';
import cn from 'classnames';

import { removeProductFromWishlist } from '@/entities/Favorites';
import { useAppDispatch } from '@/shared/lib/hooks';
import { CloseIcon } from '@/shared/ui/icons';

import cls from './RemoveFromWishlist.module.scss';

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
