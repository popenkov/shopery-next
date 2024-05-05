import { FC } from 'react';

import { SocialShare } from 'shared/ui/SocialShare/SocialShare';

import cls from '../WishlistTable.module.scss';

export const WishlistTableFooter: FC = () => {
  return (
    <div className={cls.wishlistTableFooter}>
      <SocialShare />
    </div>
  );
};
