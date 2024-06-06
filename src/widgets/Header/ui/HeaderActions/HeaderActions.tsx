import { FC } from 'react';
import Link from 'next/link';

import { HeartIcon } from 'shared/ui/icons';

import { HeaderCart } from '../HeaderCart';

import cls from './HeaderActions.module.scss';

export const HeaderActions: FC = () => {
  return (
    <div className={cls.actions}>
      <Link className={cls.favoriteLink} href="#">
        <HeartIcon className={cls.favoriteIcon} />
      </Link>
      <span className={cls.actionsSeparator} />
      <HeaderCart />
    </div>
  );
};
