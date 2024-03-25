import { ProductSearch } from '@/features/ProductsSearch';
import React from 'react';
import cn from 'classnames';

import cls from './HeaderMiddle.module.scss';
import { BurgerButton } from '@/shared/ui/BurgerButton';
import { Logo, LogoSize } from '@/shared/ui';
import { HeaderActions } from '../HeaderActions';

export const HeaderMiddle = () => {
  return (
    <div className={cn(cls.middle, 'container')}>
      <BurgerButton className={cls.mobileBurger} />
      <Logo className={cls.logo} />
      <Logo className={cls.logoMobile} size={LogoSize.SMALL} />
      <div className={cn(cls.search, cls.searchDesktop)}>
        <ProductSearch />
      </div>
      <HeaderActions />
    </div>
  );
};
