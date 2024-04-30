import { FC } from 'react';

import { Navigation } from '@/features/Navigation';
import { HeaderMiddle } from './HeaderMiddle';
import { HeaderTop } from './HeaderTop';

import cls from './Header.module.scss';















export const Header: FC = () => {
    return (
        <header className={cls.header}>
            <HeaderTop />
            <HeaderMiddle />
            <Navigation />
        </header>
    );
};
