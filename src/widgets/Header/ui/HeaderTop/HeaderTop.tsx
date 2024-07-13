'use client';

import { FC } from 'react';
import Link from 'next/link';

import { useAppSelector } from '@/app/lib/store/hooks';
import { selectAuthData } from '@/entities/User/selectors/user';
import { getRouteLogin, getRouteRegistation } from '@/shared/lib/constants/routes';
import { Text } from '@/shared/ui/Text';
import { CurrencySwitcher } from 'features/CurrencySwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { Location } from 'entities/Location';

import cls from './HeaderTop.module.scss';
import { UserMenu } from '../UserMenu';

const TEST_DATA = {
  id: '1',
  name: 'Tony Soprano',
  username: 'honest_tony',
  email: 'user-1@mail.com',
  password: '123',
  photo:
    'https://images.unsplash.com/photo-1493106819501-66d381c466f1?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

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
            <UserMenu user={authData} />
          ) : (
            <Text variant="body_tiny" className={cls.auth}>
              <Link className={cls.authLink} href={getRouteLogin()}>
                Sign in
              </Link>
              <span className={cls.authSeparator}>/</span>
              <Link className={cls.authLink} href={getRouteRegistation()}>
                Sign up
              </Link>
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};
