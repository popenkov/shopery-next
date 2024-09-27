import { FC } from 'react';

import { InstagramPosts } from '@/features/InstagramPosts';

import cls from './Footer.module.scss';
import { FooterAbout } from './FooterAbout';
import { FooterCopyright } from './FooterCopyright';
import { FooterNavigation } from './FooterNavigation';

export const Footer: FC = () => {
  return (
    <footer className={cls.footer}>
      <div className={cls.footerInner}>
        <div className={cls.footerContent}>
          <FooterAbout />
          <FooterNavigation />
          <InstagramPosts />
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
};
