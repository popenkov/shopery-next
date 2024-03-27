import cn from 'classnames';
import React from 'react';

import { Location } from '@/shared/ui';

import cls from './HeaderTop.module.scss';
import { LangSwitcher } from '@/features/LangSwitcher';
import { CurrencySwitcher } from '@/features/CurrencySwitcher';

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
