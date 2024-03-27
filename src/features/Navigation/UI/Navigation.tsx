import React from 'react';

import cls from './Navigation.module.scss';
import { NavigationLinks } from './NavigationLinks';
import { Categories } from '../../../widgets/Header/UI/Categories';
import { getNavigationData } from '../api/getNavigationData';
import { PhoneLink } from '@/shared/ui';

export const Navigation = () => {
  const { navigation, categories } = getNavigationData();
  return (
    <nav className={cls.navigation}>
      <div className="container">
        <div className={cls.content}>
          <div className={cls.navigationContent}>
            <Categories categories={categories} />
            <NavigationLinks links={navigation} />
          </div>
          <PhoneLink phone="(219) 555-0114" href="2195550114" />
        </div>
      </div>
    </nav>
  );
};
