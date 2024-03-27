import React from 'react';
import { Categories } from '../../../widgets/Header/UI/Categories';
import { PhoneLink } from '@/shared/ui';
import cls from './Navigation.module.scss';
import { getNavigationData } from '../api/getNavigationData';
import { NavigationLinks } from './NavigationLinks';

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
