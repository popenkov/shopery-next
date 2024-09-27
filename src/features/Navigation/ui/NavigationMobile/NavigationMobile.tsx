'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { TLink } from '@/shared/model/navigation-link.types';
import { Accordion } from '@/shared/ui/Accordion';
import { Text } from '@/shared/ui/Text';

import { getNavigationData } from '../../api';

import cls from './NavigationMobile.module.scss';

export const NavigationMobile = () => {
  const [navigation, setNavigation] = useState<TLink[]>([]);

  const getData = async () => {
    const data = await getNavigationData();
    setNavigation(data.navigation);
  };

  useEffect(() => {
    getData();
  }, []);

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
            key={`${link.path}/${link.title}`}
          >
            {link?.items?.map((sublink) => {
              return (
                <li key={`${sublink.path}/${sublink.title}`} className={cls.navigationMenuItem}>
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
