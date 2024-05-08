import { FC } from 'react';
import Link from 'next/link';

import LikeIcon from '@public/icons/icon__heart.svg';
import { HeaderCart } from '@/entities/Cart';

import cls from './HeaderActions.module.scss';

export const HeaderActions: FC = () => {
  return (
    <div className={cls.actions}>
      <Link className={cls.favoriteLink} href="#">
        <LikeIcon className={cls.favoriteIcon} />
      </Link>
      <span className={cls.actionsSeparator} />
      <HeaderCart />
    </div>
  );
};
