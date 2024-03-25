import React from 'react';

import cls from './HeaderActions.module.scss';
import { HeaderCart } from '../HeaderCart';
import LikeIcon from '@public/icons/icon__heart.svg';
import Link from 'next/link';

export const HeaderActions = () => {
  return (
    <div className={cls.actions}>
      <div className="header__favorite">
        <Link className="header__favorite-link" href="#">
          <LikeIcon className="header__favorite-icon" />
        </Link>
      </div>
      <span className={cls.actionsSeparator} />
      <HeaderCart />
    </div>
  );
};
