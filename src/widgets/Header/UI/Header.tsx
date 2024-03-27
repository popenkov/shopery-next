import React from 'react';

import cls from './Header.module.scss';
import { HeaderMiddle } from './HeaderMiddle';
import { HeaderTop } from './HeaderTop';
import { Navigation } from '@/features/Navigation';

export const Header = () => {
  return (
    <header className={cls.header}>
      <HeaderTop />
      <HeaderMiddle />
      <Navigation />
    </header>
  );
};
