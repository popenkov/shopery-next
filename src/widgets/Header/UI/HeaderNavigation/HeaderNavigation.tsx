import React from 'react';
import { Categories } from '../Categories';
import { MAIN_PAGE_DATA } from '@/shared/mock/mainPage';
import { HeaderLinks } from '../HeaderLink';
import { PhoneLink } from '@/shared/ui';
import cls from './HeaderNavigation.module.scss';

export const HeaderNavigation = () => {
  const navigation = MAIN_PAGE_DATA.header.navigation;
  return (
    <nav className={cls.navigation}>
      <div className="container">
        <div className={cls.navigationContent}>
          <Categories />
          <HeaderLinks links={navigation} />
          <PhoneLink phone="(219) 555-0114" href="2195550114" />
        </div>
      </div>
    </nav>
  );
};
