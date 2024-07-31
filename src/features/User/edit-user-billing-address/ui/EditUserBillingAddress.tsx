'use client';

import { FC } from 'react';
import cn from 'classnames';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import {
  VALIDATION_MESSAGES,
  COUNTRIES_LIST,
  STATES_LIST,
  EMAIL_REGEX,
} from '@/shared/lib/constants';
import { AppSelect } from '@/shared/ui/AppSelect';
import { Button } from '@/shared/ui/Buttons';
import { Input } from '@/shared/ui/Input';
import { MaskedInput } from '@/shared/ui/MaskedInput';

import { TFormData } from '../model';

import cls from './EditUserBillingAddress.module.scss';

type Props = {
  className?: string;
};

export const EditUserBillingAddress: FC<Props> = ({ className }) => {
  const {
    reset,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<TFormData>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<TFormData> = (data) => {
    console.log('data', data);
    if (isValid) {
      console.log('form sent');
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn(cls.EditUserBillingAddress, className)}>
      <div className={cls.EditUserBillingAddressRowGridThree}>
        <Controller
          control={control}
          name="firstName"
          rules={{
            required: VALIDATION_MESSAGES.REQUIRED,
          }}
          render={({ field, fieldState: { error } }) => (
            <Input
              label="First name"
              placeholder="Your first name"
              errorText={error?.message}
              {...field}
              className={cls.EditUserBillingAddressInput}
            />
          )}
        />

        <Controller
          control={control}
          name="lastName"
          rules={{
            required: VALIDATION_MESSAGES.REQUIRED,
          }}
          render={({ field, fieldState: { error } }) => (
            <Input
              label="Last name"
              placeholder="Your Last name"
              errorText={error?.message}
              {...field}
              className={cls.EditUserBillingAddressInput}
            />
          )}
        />

        <Controller
          control={control}
          name="companyName"
          render={({ field, fieldState: { error } }) => (
            <Input
              label="Company Name (optional)"
              placeholder="Company name"
              errorText={error?.message}
              {...field}
              className={cls.EditUserBillingAddressInput}
            />
          )}
        />
      </div>
      <div className={cls.EditUserBillingAddressRow}>
        <Controller
          control={control}
          name="streetAddress"
          rules={{
            required: VALIDATION_MESSAGES.REQUIRED,
          }}
          render={({ field, fieldState: { error } }) => (
            <Input
              label="Street Address"
              placeholder="Street Address"
              errorText={error?.message}
              {...field}
              className={cls.EditUserBillingAddressInput}
            />
          )}
        />
      </div>
      <div className={cls.EditUserBillingAddressRowGridThree}>
        <Controller
          control={control}
          name="countryAddress"
          rules={{
            required: VALIDATION_MESSAGES.REQUIRED,
          }}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <AppSelect
              label="Country / Region"
              placeholder="Select"
              options={COUNTRIES_LIST}
              onChange={(newValue) => onChange(newValue)}
              errorText={error?.message}
              className={cls.EditUserBillingAddressInput}
            />
          )}
        />

        <Controller
          control={control}
          name="countryState"
          rules={{
            required: VALIDATION_MESSAGES.REQUIRED,
          }}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <AppSelect
              label="States"
              placeholder="Select"
              options={STATES_LIST}
              onChange={(newValue) => onChange(newValue)}
              errorText={error?.message}
              className={cls.EditUserBillingAddressInput}
            />
          )}
        />

        <Controller
          control={control}
          name="zipAddress"
          rules={{
            required: VALIDATION_MESSAGES.REQUIRED,
            pattern: {
              value: /^\d{3} \d{3}$/,
              message: VALIDATION_MESSAGES.WRONG_FORMAT,
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <MaskedInput
              inputMode="numeric"
              mask="000 000"
              type="text"
              unmask={true}
              label="Zip Code"
              placeholder="Zip Code"
              errorText={error?.message}
              {...field}
              className={cls.EditUserBillingAddressInput}
            />
          )}
        />
      </div>
      <div className={cls.EditUserBillingAddressRowGridTwo}>
        <Controller
          control={control}
          name="email"
          rules={{
            required: VALIDATION_MESSAGES.REQUIRED,
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
              className={cls.EditUserBillingAddressInput}
            />
          )}
        />

        <Controller
          control={control}
          name="phone"
          rules={{
            required: VALIDATION_MESSAGES.REQUIRED,
            pattern: {
              value: /^\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
              message: VALIDATION_MESSAGES.WRONG_PHONE,
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <MaskedInput
              inputMode="numeric"
              mask="+0 (000) 000-00-00"
              type="text"
              unmask={true}
              label="Phone"
              placeholder="Phone number"
              errorText={error?.message}
              {...field}
              className={cls.EditUserBillingAddressInput}
            />
          )}
        />
      </div>

      <Button type="submit" className={cls.EditUserBillingAddressButton}>
        Save Changes
      </Button>
    </form>
  );
};
