'use client';

import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import { useAppDispatch, useAppSelector } from '@/app/lib/store/hooks';
import {
  TWishlistProduct,
  addToWishlist,
  removeProductFromWishlist,
  selectWishlistProducts,
} from '@/entities/Favorites';
import { TProduct } from '@/entities/Product';
import { type TRoundButtonTheme } from '@/shared/ui/Buttons/RoundButton';
import { RoundButton } from 'shared/ui/Buttons';
import { HeartIcon, HeartLinedIcon } from 'shared/ui/icons';

import cls from './AddToWishlist.module.scss';

type Props = {
  item: TProduct;
  theme?: TRoundButtonTheme;
  className?: string;
};

export const AddToWishlist: FC<Props> = ({ className, item, theme = 'primary' }) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectWishlistProducts);

  useEffect(() => {
    setIsAdded(items.some((i) => i.id === item.id));
  }, [items]);

  const handleAddButtonClick = () => {
    if (isAdded) {
      const id = item.id;
      dispatch(removeProductFromWishlist({ id }));
    } else {
      dispatch(addToWishlist(item as TWishlistProduct));
    }
  };

  return (
    <RoundButton
      icon={isAdded ? <HeartIcon className={cls.AddToWishlistAddedIcon} /> : <HeartLinedIcon />}
      theme={theme}
      className={cn(cls.AddToWishlistButton, className)}
      onClick={handleAddButtonClick}
    />
  );
};
