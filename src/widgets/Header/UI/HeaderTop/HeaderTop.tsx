import cn from 'classnames';
import React from 'react';

import { CurrencySwitcher } from '@/features/CurrencySwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Location } from '@/shared';

import cls from './HeaderTop.module.scss';

export const HeaderTop = () => {
  return (
    <div className={cls.top}>
      <div className={cn(cls.content, 'container')}>
        <Location address="Store Location: Lincoln- 344, Illinois, Chicago, USA" />
        <div className={cls.actions}>
          <div className={cls.dropdowns}>
            <LangSwitcher />
            <CurrencySwitcher />
          </div>
          <div className={cls.actionsSeparator}></div>
          <div className="header__auth">
            <a className="header__auth-link" href="#">
              Sign in
            </a>
            <span className="header__auth-separator">/</span>
            <a className="header__auth-link" href="#">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
