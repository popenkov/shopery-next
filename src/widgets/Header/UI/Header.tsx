import { FC } from 'react';

import { Navigation } from '@/features/Navigation';

import cls from './Header.module.scss';
import { HeaderMiddle } from './HeaderMiddle';
import { HeaderTop } from './HeaderTop';

export const Header: FC = () => {
  return (
    <header className={cls.header}>
      <HeaderTop />
      <HeaderMiddle />
      <Navigation />
    </header>
  );
};
