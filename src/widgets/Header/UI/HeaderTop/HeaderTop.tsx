'use client';

import cn from 'classnames';
import React from 'react';

import { Dropdown, Location } from '@/shared/ui';

import cls from './HeaderTop.module.scss';

const CHANGE_LANG_DATA = [
  {
    value: 'eng',
    label: 'Eng',
  },
  {
    value: 'de',
    label: 'De',
  },
];
const CHANGE_CURRENCY_DATA = [
  {
    value: 'USD',
    label: 'USD',
  },
  {
    value: 'EUR',
    label: 'EUR',
  },
];

export const HeaderTop = () => {
  return (
    <div className={cls.top}>
      <div className={cn(cls.content, 'container')}>
        <Location address="Store Location: Lincoln- 344, Illinois, Chicago, USA" />
        <div className={cls.actions}>
          <div className={cls.dropdowns}>
            <Dropdown
              data={CHANGE_LANG_DATA}
              onChange={(item) => console.log(item)}
            />
            <Dropdown
              data={CHANGE_CURRENCY_DATA}
              onChange={(item) => console.log(item)}
            />
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
