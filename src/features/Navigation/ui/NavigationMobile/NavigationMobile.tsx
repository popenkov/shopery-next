import React from 'react';
import Link from 'next/link';

import { Accordion } from 'shared/ui/Accordion';
import { Text } from 'shared/ui/Text';

import { getNavigationData } from '../../api';

import cls from './NavigationMobile.module.scss';

export const NavigationMobile = () => {
  const { navigation } = getNavigationData();

  if (!navigation?.length) {
    return null;
  }
  return (
    <div className={cls.navigation}>
      {navigation.map((link) => {
        return (
          <Accordion
            title={
              <Text variant="body_l" weight="medium">
                {link.title}
              </Text>
            }
            key={link.path}
          >
            {link?.items?.map((sublink) => {
              return (
                <li key={sublink.path} className={cls.navigationMenuItem}>
                  <Link href={sublink.path} className={cls.navigationLink}>
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
