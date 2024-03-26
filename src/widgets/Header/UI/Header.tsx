import React from 'react';

import cls from './Header.module.scss';
import { HeaderMiddle } from './HeaderMiddle';
import { HeaderNavigation } from './HeaderNavigation';
import { HeaderTop } from './HeaderTop';

export const Header = () => {
  return (
    <header className={cls.header}>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderNavigation />
    </header>
  );
};
