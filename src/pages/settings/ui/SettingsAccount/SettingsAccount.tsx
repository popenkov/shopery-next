import { FC } from 'react';
import cn from 'classnames';

import { EditUserSettings } from '@/features/User';
import { ChangePassword } from '@/features/User/change-password';
import { EditUserBillingAddress } from '@/features/User/edit-user-billing-address';
import { Text } from '@/shared/ui/Text';

import cls from './SettingsAccount.module.scss';

type Props = {
  className?: string;
};

export const SettingsAccount: FC<Props> = ({ className }) => {
  return (
    <>
      <div className={cn(cls.SettingsAccount, className)}>
        <div className={cls.SettingsAccountHeader}>
          <Text variant="body_xl" weight="medium" as="h2">
            Account Settings
          </Text>
        </div>
        <EditUserSettings className={cls.SettingsAccountMain} />
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
