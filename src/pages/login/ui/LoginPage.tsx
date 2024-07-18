import { FC } from 'react';

import LoginForm from '@/features/User/login-by-username/ui/LoginForm/LoginForm';

import cls from './LoginPage.module.scss';

export const LoginPage: FC = () => {
  return (
    <div className={cls.LoginPage}>
      <LoginForm />
    </div>
  );
};
