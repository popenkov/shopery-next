import { FC } from 'react';

import { SettingsAccount } from './SettingsAccount';
import cls from './SettingsPage.module.scss';

export const SettingsPage: FC = () => {
  return (
    <div className={cls.SettingsPage}>
      <SettingsAccount />
    </div>
  );
};
