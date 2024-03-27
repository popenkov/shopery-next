import Link from 'next/link';
import React from 'react';

import { Accordion } from '@/shared';

import cls from './NavigationMobile.module.scss';
import { getNavigationData } from '../../api/getNavigationData';

export const NavigationMobile = () => {
  const { navigation } = getNavigationData();

  if (!navigation?.length) {
    return null;
  }
  return (
    <div className={cls.navigation}>
      {navigation.map((link) => {
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
