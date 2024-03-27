import React from 'react';
import { FooterAbout } from './FooterAbout';
import cn from 'classnames';
import cls from './Footer.module.scss';
import { FooterNavigation } from './FooterNavigation';
import { FooterCopyright } from './FooterCopyright';
import { InstagramPosts } from '@/features/InstagramPosts';

export const Footer = () => {
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
