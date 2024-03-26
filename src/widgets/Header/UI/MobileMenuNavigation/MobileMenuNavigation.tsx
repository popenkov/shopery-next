import { MAIN_PAGE_DATA } from '@/shared/mock/mainPage';
import { Accordion } from '@/shared/ui';
import Link from 'next/link';
import React from 'react';
import cls from './MobileMenuNavigation.module.scss';

export const MobileMenuNavigation = () => {
  const links = MAIN_PAGE_DATA.header.navigation;
  return (
    <div className={cls.navigation}>
      {links.map((link) => {
        return (
          <Accordion title={link.title!} key={link.id}>
            {link?.items?.map((sublink) => {
              return (
                <li key={sublink.id} className={cls.navigationMenuItem}>
                  <Link href={sublink.id} className={cls.navigationLink}>
                    {sublink.title}
                  </Link>
                </li>
              );
            })}
          </Accordion>
        );
      })}
    </div>
  );
};
