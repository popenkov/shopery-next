'use client';

import React, { FC, useState } from 'react';

import cn from 'classnames';

import { ProductSearch } from '@/features/ProductsSearch';
import { Logo } from '@/shared';
import { BurgerButton } from '@/shared';

import cls from './HeaderMiddle.module.scss';
import { HeaderActions } from '../HeaderActions';
import { MobileMenu } from '../MobileMenu';

export const HeaderMiddle: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div className={cn(cls.middle, 'container')}>
            <BurgerButton
                className={cls.mobileBurger}
                onClick={handleMenuToggle}
            />
            <Logo className={cls.logoDesktop} />
            <Logo className={cls.logoMobile} size="small" />
            <div className={cn(cls.search, cls.searchDesktop)}>
                <ProductSearch />
            </div>
            <HeaderActions />
            <MobileMenu
                isOpen={isMenuOpen}
                handleMenuToggle={handleMenuToggle}
            />
        </div>
    );
};
