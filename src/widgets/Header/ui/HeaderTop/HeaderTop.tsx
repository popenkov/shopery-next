
import { FC } from 'react';
import Link from 'next/link';

import { CurrencySwitcher } from 'features/CurrencySwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { Location } from 'entities/Location';


import cls from './HeaderTop.module.scss';

export const HeaderTop: FC = () => {
  return (
    <div className={cls.top}>
      <div className={cls.content}>
        <Location address="Store Location: Lincoln- 344, Illinois, Chicago, USA" />
        <div className={cls.actions}>
          <div className={cls.dropdowns}>
            <LangSwitcher />
            <CurrencySwitcher />
          </div>
          <div className={cls.actionsSeparator}></div>
          <div className={cls.auth}>
            <Link className={cls.authLink} href="#">
              Sign in
            </Link>
            <span className={cls.authSeparator}>/</span>
            <Link className={cls.authLink} href="#">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
