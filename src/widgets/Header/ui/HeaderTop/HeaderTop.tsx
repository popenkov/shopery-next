'use client';

import { FC } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Location } from '@/entities/Location';
import { selectAuthData } from '@/entities/User';
import { CurrencySwitcher } from '@/features/CurrencySwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { getRouteLogin, getRouteRegistation } from '@/shared/lib/constants';
import { useAppSelector } from '@/shared/lib/hooks';
import { Text } from '@/shared/ui/Text';

import { UserMenu } from '../UserMenu';

import cls from './HeaderTop.module.scss';

export const HeaderTop: FC = () => {
  const t = useTranslations('HomePage');
  const authData = useAppSelector(selectAuthData);

  return (
    <div className={cls.top}>
      <div className={cls.content}>
        <Location address={t('address')} />
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
              <Link
                className={cls.authLink}
                href={getRouteLogin()}
                data-testid="header-top-login-link"
              >
                {t('login')}
              </Link>
              <span className={cls.authSeparator}>/</span>
              <Link
                className={cls.authLink}
                href={getRouteRegistation()}
                data-testid="header-top-register-link"
              >
                {t('registration')}
              </Link>
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};
