'use client';

import { memo } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';
import { useAppDispatch } from '@/app/lib/store/hooks';
import Link from 'next/link';
import { getRoutePasswordReset, getRouteRegistation } from '@/shared/lib/constants/routes';
import { Text } from '@/shared/ui/Text';
import { LoginSchema } from '../../model/types/loginSchema';
import { EMAIL_REGEX } from '@/shared/lib/constants/validation-regex';
import { VALIDATION_MESSAGES } from '@/shared/lib/constants';
import { Input } from '@/shared/ui/Input';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Button } from '@/shared/ui/Buttons';

export interface LoginFormProps {
  className?: string;
  onSuccess?: () => void; //todo
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const dispatch = useAppDispatch();

  const {
    reset,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<LoginSchema>({
    mode: 'onChange',
  });

  // todo   сделать модел для запроса из формы и из стора и отправить
  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    console.log('data', data);
    if (isValid) {
      console.log('form sent');
      const result = await dispatch(loginByUsername(data));
      console.log('result', result);
      if (result.meta.requestStatus === 'fulfilled') {
        reset();
      }
    }
  };

  return (
    <form className={cls.LoginForm} onSubmit={handleSubmit(onSubmit)}>
      <Text variant="heading_5" weight="semibold" as="h2" className="LoginFormTitle">
        Sign in
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
        <Controller
          control={control}
          name="remember-me"
          rules={{
            required: 'Required field',
          }}
          render={({ field, fieldState: { error } }) => (
            <Checkbox text="Remember me" {...field} className={cls.checkoutFormCheckbox} />
          )}
        />

        <Link className={cls.LoginFormforgotPassLink} href={getRoutePasswordReset()}>
          <Text varian="body_s">Forget Password</Text>
        </Link>
      </div>
      <Button type="submit" className={cls.LoginFormsubmitButton}>
        Login
      </Button>
      <div className={cls.LoginFormRegistration}>
        <Text variant="body_s" className={cls.LoginFormRegistrationText} as="span">
          Don’t have account?
        </Text>
        <Link className={cls.LoginFormRegistrationLink} href={getRouteRegistation()}>
          <Text variant="body_s" weight="medium" as="span">
            Register
          </Text>
        </Link>
      </div>
    </form>
  );
});

export default LoginForm;
