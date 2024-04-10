import React, { FC } from 'react';

import cn from 'classnames';


import { InstagramPosts } from '@/features/InstagramPosts';

import cls from './Footer.module.scss';
import { FooterAbout } from './FooterAbout';
import { FooterCopyright } from './FooterCopyright';
import { FooterNavigation } from './FooterNavigation';

export const Footer: FC = () => {
    return (
        <footer className={cls.footer}>
            <div className={cls.footerInner}>
                <div className={cn(cls.footerContent, 'container')}>
                    <FooterAbout />
                    <FooterNavigation />
                    <InstagramPosts />
                    <FooterCopyright />
                </div>
            </div>
        </footer>
    );
};
