import Link from 'next/link';
import React from 'react';

import { HeaderCart } from '@/entities/HeaderCart';
import LikeIcon from '@public/icons/icon__heart.svg';

import cls from './HeaderActions.module.scss';

export const HeaderActions = () => {
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
