import { FC } from 'react';

import { PhoneLink } from 'entities/PhoneLink';

import { getNavigationData } from '../api';

import cls from './Navigation.module.scss';
import { NavigationCategories } from './NavigationCategories';
import { NavigationLinks } from './NavigationLinks';

export const Navigation: FC = () => {
  const { navigation, categories } = getNavigationData();
  return (
    <nav className={cls.navigation}>
      <div className={cls.content}>
        <div className={cls.navigationContent}>
          <NavigationCategories categories={categories} />
          <NavigationLinks links={navigation} />
        </div>
        <PhoneLink phone="(219) 555-0114" href="2195550114" />
      </div>
    </nav>
  );
};
