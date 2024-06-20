'use client';

import { FC } from 'react';
import Link from 'next/link';

import { CurrencySwitcher } from 'features/CurrencySwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { Location } from 'entities/Location';

import cls from './HeaderTop.module.scss';
import { Text } from '@/shared/ui/Text';
import { useAppSelector } from '@/app/lib/store/hooks';
import { selectAuthData } from '@/entities/User/selectors/user';

export const HeaderTop: FC = () => {
  const authData = useAppSelector(selectAuthData);

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
          {authData ? (
            <Text variant="body_tiny" className={cls.auth}>
              {authData.name}
            </Text>
          ) : (
            <Text variant="body_tiny" className={cls.auth}>
              <Link className={cls.authLink} href="#">
                Sign in
              </Link>
              <span className={cls.authSeparator}>/</span>
              <Link className={cls.authLink} href="#">
                Sign up
              </Link>
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};
