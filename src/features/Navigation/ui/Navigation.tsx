'use client';

import { FC, useEffect, useState } from 'react';

import { THeaderCategory } from '@/entities/NavigationCategory';
import { PhoneLink } from '@/entities/PhoneLink';
import { TLink } from '@/shared/model/navigation-link.types';

import { getNavigationData } from '../api';

import cls from './Navigation.module.scss';
import { NavigationCategories } from './NavigationCategories';
import { NavigationLinks } from './NavigationLinks';

export const Navigation: FC = () => {
  const [categories, setCategories] = useState<THeaderCategory[]>([]);
  const [navigation, setNavigation] = useState<TLink[]>([]);

  const getData = async () => {
    const data = await getNavigationData();
    setCategories(data.categories);
    setNavigation(data.navigation);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <nav className={cls.navigation}>
      <div className={cls.content}>
        <div className={cls.navigationContent}>
          {categories && <NavigationCategories categories={categories} />}
          {navigation && <NavigationLinks links={navigation} />}
        </div>
        <PhoneLink phone="(219) 555-0114" href="2195550114" />
      </div>
    </nav>
  );
};
