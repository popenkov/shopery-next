import { FC } from 'react';

import { SocialShare } from '@/entities/SocialShare';

import cls from '../WishlistTable.module.scss';

export const WishlistTableFooter: FC = () => {
  return (
    <div className={cls.wishlistTableFooter}>
      <SocialShare />
    </div>
  );
};
