'use client';

import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '@/shared/ui/Buttons';
import { Input } from '@/shared/ui/Input';

import { TFormData } from '../model';

import cls from './ChangePassword.module.scss';

type Props = {
  className?: string;
};

const changePasswordSchema = yup.object({
  password: yup.string().required('Required field'),
  new_password: yup.string().required('Required field'),
  confirm_password: yup
    .string()
    .required('Required field')
    .oneOf([yup.ref('new_password')], 'The passwords do not match. '),
});

export const ChangePassword: FC<Props> = ({ className }) => {
  const {
    reset,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<TFormData>({
    mode: 'onChange',
    resolver: yupResolver(changePasswordSchema),
  });

  const onSubmit: SubmitHandler<TFormData> = (data) => {
    if (isValid) {
      console.log('form sent', data);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn(cls.ChangePassword, className)}>
      <div className={cls.ChangePasswordRow}>
        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Required field',
          }}
          render={({ field, fieldState: { error } }) => (
            <Input
              label="Password"
              placeholder="Password"
              type="password"
              errorText={error?.message}
              {...field}
              className={cls.LoginFormInput}
            />
          )}
        />
      </div>

      <div className={cls.ChangePasswordRowGridTwo}>
        <Controller
          control={control}
          name="new_password"
          rules={{
            required: 'Required field',
          }}
          render={({ field, fieldState: { error } }) => (
            <Input
              label="Password"
              placeholder="Password"
              type="password"
              errorText={error?.message}
              {...field}
              className={cls.LoginFormInput}
            />
          )}
        />
        <Controller
          control={control}
          name="confirm_password"
          rules={{
            required: 'Required field',
          }}
          render={({ field, fieldState: { error } }) => (
            <Input
              label="Password"
              placeholder="Password"
              type="password"
              errorText={error?.message}
              {...field}
              className={cls.LoginFormInput}
            />
          )}
        />
      </div>
      <Button type="submit" className={cls.ChangePasswordButton}>
        Change Password
      </Button>
    </form>
  );
};
