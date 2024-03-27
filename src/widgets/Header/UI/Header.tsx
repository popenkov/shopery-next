import React from 'react';

import { Navigation } from '@/features/Navigation';

import cls from './Header.module.scss';
import { HeaderMiddle } from './HeaderMiddle';
import { HeaderTop } from './HeaderTop';

export const Header = () => {
  return (
    <header className={cls.header}>
      <HeaderTop />
      <HeaderMiddle />
      <Navigation />
    </header>
  );
};
