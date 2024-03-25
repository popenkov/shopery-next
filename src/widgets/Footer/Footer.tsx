import React from 'react';
import { FooterAbout } from './FooterAbout';
import cn from 'classnames';
import cls from './Footer.module.scss';
import { FooterNavigation } from './FooterNavigation';
import { FooterInstagram } from './FooterInstagram';
import { FooterCopyright } from './FooterCopyright';

export const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className={cls.footerInner}>
        <div className={(cn(cls.footerContent), 'container')}>
          <FooterAbout className={cls.footerAbout} />
          <FooterNavigation className={cls.footerNavigation} />
          <FooterInstagram className={cls.footerInstagram} />
          <FooterCopyright className={cls.footerCopyright} />
        </div>
      </div>
    </footer>
  );
};
