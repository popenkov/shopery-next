'use client';

import { memo, useState } from 'react';
import { UnknownAction } from '@reduxjs/toolkit';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { VALIDATION_MESSAGES } from '@/shared/lib/constants';
import { getRouteHome, getRoutePasswordReset, getRouteRegistation } from '@/shared/lib/constants';
import { EMAIL_REGEX } from '@/shared/lib/constants';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui/Buttons';
import { Checkbox } from '@/shared/ui/Checkbox';
import { FormError } from '@/shared/ui/FormError';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';

import { LoginSchema } from '../../model';
import { loginByUsername } from '../../services';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const t = useTranslations('LoginPage');

  const {
    reset,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<LoginSchema>({
    mode: 'onChange',
  });

  const [hasError, setHasError] = useState(false);

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    if (isValid) {
      const response = await dispatch(loginByUsername(data) as unknown as UnknownAction);
      reset({ email: '', password: '' });
      if (response.payload === 'error') {
        setHasError(true);
        return;
      }
      router.push(getRouteHome());
    }
  };

  return (
    <form className={cn(cls.LoginForm, className)} onSubmit={handleSubmit(onSubmit)}>
      <Text variant="heading_5" weight="semibold" as="h2" className="LoginFormTitle">
        {t('signIn')}
      </Text>
      <div className={cls.LoginFormInputContainer}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Required field',
            pattern: {
              value: EMAIL_REGEX,
              message: VALIDATION_MESSAGES.WRONG_EMAIL,
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <Input
              label="Email"
              placeholder="Email Address"
              errorText={error?.message}
              {...field}
              className={cls.LoginFormInput}
            />
          )}
        />
      </div>
      <div className={cls.LoginFormInputContainer}>
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
      <div className={cls.LoginFormRow}>
        <Checkbox
          value="remember"
          onChange={() => false}
          text="Remember me"
          className={cls.checkoutFormCheckbox}
        />

        <Link className={cls.LoginFormforgotPassLink} href={getRoutePasswordReset()}>
          <Text varian="body_s">Forget Password</Text>
        </Link>
      </div>
      <Button type="submit" className={cls.LoginFormsubmitButton}>
        {t('login')}
      </Button>
      {hasError && <FormError text="email: user-1@mail.com, password: 123" />}
      <div className={cls.LoginFormRegistration}>
        <Text variant="body_s" className={cls.LoginFormRegistrationText} as="span">
          {t('noAccount')}
        </Text>
        <Link className={cls.LoginFormRegistrationLink} href={getRouteRegistation()}>
          <Text variant="body_s" weight="medium" as="span">
            {t('register')}
          </Text>
        </Link>
      </div>
    </form>
  );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
