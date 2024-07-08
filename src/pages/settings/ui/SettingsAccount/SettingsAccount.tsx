import { FC } from 'react';
import cn from 'classnames';

import { EditUserSettings } from '@/features/User';
import { Text } from '@/shared/ui/Text';

import cls from './SettingsAccount.module.scss';

type Props = {
  className?: string;
};

export const SettingsAccount: FC<Props> = ({ className }) => {
  return (
    <div className={cn(cls.SettingsAccount, className)}>
      <div className={cls.SettingsAccountHeader}>
        <Text variant="body_xl" weight="medium" as="h2">
          Account Settings
        </Text>
      </div>

      <EditUserSettings className={cls.SettingsAccountMain} />
    </div>
  );
};
