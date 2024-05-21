'use client';
import { FC } from 'react';

import { Button } from 'shared/ui/Buttons';

import cls from './AddToCartFromWishlist.module.scss';

type Props = {
  itemID: string;
};

export const AddToCartFromWishlist: FC<Props> = ({ itemID }) => {
  const handleAddToCartclick = () => {
    console.log('handleAddToCartclick', itemID);
  };
  return (
    <Button theme="primary" className={cls.addToCardButton} onClick={handleAddToCartclick}>
      Add to Cart
    </Button>
  );
};
