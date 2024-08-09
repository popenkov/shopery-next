'use client';

import { FC, useEffect } from 'react';
import cn from 'classnames';

import { EditUserSettings } from '@/features/User';
import { ChangePassword } from '@/features/User/change-password';
import { EditUserBillingAddress } from '@/features/User/edit-user-billing-address';
import { Text } from '@/shared/ui/Text';

import cls from './SettingsAccount.module.scss';
import { getUserDataById } from '@/entities/User';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { UnknownAction } from '@reduxjs/toolkit';
import { getUserData, getUserError, getUserIsLoading } from '@/entities/User/selectors';

type Props = {
  className?: string;
};

export const SettingsAccount: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserData);
  const isLoading = useAppSelector(getUserIsLoading);
  const error = useAppSelector(getUserError);
  useEffect(() => {
    // todo откуда брать юзерИд
    const testUserID = '1';
    dispatch(getUserDataById(testUserID) as unknown as UnknownAction);
  }, [dispatch]);

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  if (error) {
    return <Text>Error</Text>;
  }

  if (!userData) {
    return;
  }

  return (
    <>
      <div className={cn(cls.SettingsAccount, className)}>
        <div className={cls.SettingsAccountHeader}>
          <Text variant="body_xl" weight="medium" as="h2">
            Account Settings
          </Text>
        </div>
        <EditUserSettings className={cls.SettingsAccountMain} data={userData.personalData} />
      </div>

      <div className={cn(cls.SettingsAccount)}>
        <div className={cls.SettingsAccountHeader}>
          <Text variant="body_xl" weight="medium" as="h2">
            Billing Address
          </Text>
        </div>
        <EditUserBillingAddress className={cls.SettingsAccountAddress} />
      </div>

      <div className={cn(cls.SettingsAccount)}>
        <div className={cls.SettingsAccountHeader}>
          <Text variant="body_xl" weight="medium" as="h2">
            Change Password
          </Text>
        </div>
        <ChangePassword className={cls.SettingsAccountChangePassword} />
      </div>
    </>
  );
};
