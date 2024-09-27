import { FC } from 'react';

import { LoginFormAsync } from '@/features/User/login-by-username';

import cls from './LoginPage.module.scss';

export const LoginPage: FC = () => {
  return (
    <div className={cls.LoginPage}>
      <LoginFormAsync />
    </div>
  );
};
