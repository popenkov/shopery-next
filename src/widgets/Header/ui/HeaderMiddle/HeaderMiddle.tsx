'use client';

import React, { FC, useState } from 'react';
import cn from 'classnames';

import { ProductSearch } from 'features/ProductsSearch';
import { BurgerButton } from 'shared/ui/BurgerButton';
import { Logo } from 'shared/ui/Logo';

import { HeaderActions } from '../HeaderActions';
import { MobileMenu } from '../MobileMenu';

import cls from './HeaderMiddle.module.scss';

export const HeaderMiddle: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    // todo add link
    <div className={cls.middle}>
      <BurgerButton className={cls.mobileBurger} onClick={handleMenuToggle} />
      <Logo className={cls.logoDesktop} />
      <Logo className={cls.logoMobile} size="small" />
      <div className={cn(cls.search, cls.searchDesktop)}>
        <ProductSearch />
      </div>
      <HeaderActions />
      <MobileMenu isOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
    </div>
  );
};
