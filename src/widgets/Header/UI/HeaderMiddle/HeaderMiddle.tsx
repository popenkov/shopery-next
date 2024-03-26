'use client';

import { ProductSearch } from '@/features/ProductsSearch';
import React, { useState } from 'react';
import cn from 'classnames';

import cls from './HeaderMiddle.module.scss';
import { BurgerButton } from '@/shared/ui/BurgerButton';
import { Logo, LogoSize } from '@/shared/ui';
import { HeaderActions } from '../HeaderActions';
import { MobileMenu } from '../MobileMenu';

export const HeaderMiddle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={cn(cls.middle, 'container')}>
      <BurgerButton className={cls.mobileBurger} onClick={handleMenuToggle} />
      <Logo className={cls.logoDesktop} />
      <Logo className={cls.logoMobile} size={LogoSize.SMALL} />
      <div className={cn(cls.search, cls.searchDesktop)}>
        <ProductSearch />
      </div>
      <HeaderActions />
      <MobileMenu isOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />
    </div>
  );
};
