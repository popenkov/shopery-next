import { FC } from 'react';

import cls from './SettingsPage.module.scss';
import { SettingsAccount } from './SettingsAccount/SettingsAccount';

export const SettingsPage: FC = () => {
  return (
    <div className={cls.SettingsPage}>
      <SettingsAccount />
    </div>
  );
};
