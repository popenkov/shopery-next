'use client';

import { FC, useEffect } from 'react';
import { UnknownAction } from '@reduxjs/toolkit';
import cn from 'classnames';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { PropsValue } from 'react-select';

import { getUserBillingAddress, TUserAddress, updateBillingAddress } from '@/entities/User';
import {
  VALIDATION_MESSAGES,
  COUNTRIES_LIST,
  STATES_LIST,
  EMAIL_REGEX,
} from '@/shared/lib/constants';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { getSelectedOption, getSelectValue } from '@/shared/lib/utils';
import { AppSelect, SelectOption } from '@/shared/ui/AppSelect';
import { Button } from '@/shared/ui/Buttons';
import { Input } from '@/shared/ui/Input';
import { MaskedInput } from '@/shared/ui/MaskedInput';

import cls from './EditUserBillingAddress.module.scss';

type Props = {
  className?: string;
};

export const EditUserBillingAddress: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserBillingAddress);
  const {
    reset,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { isValid },
  } = useForm<TUserAddress>({
    defaultValues: userData,
    mode: 'onChange',
  });

  useEffect(() => {
    if (Object.keys(userData).length) {
      reset(userData);
    }
  }, [userData]);

  const selectedCountry = watch('countryAddress');

  useEffect(() => {
    if (!selectedCountry) {
      setValue('countryAddress', getSelectedOption(selectedCountry, COUNTRIES_LIST).value);
    }
  }, [selectedCountry]);

  const onSubmit: SubmitHandler<TUserAddress> = (data) => {
    if (isValid) {
      dispatch(updateBillingAddress(data) as unknown as UnknownAction);
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
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input
              label="Last name"
              placeholder="Your Last name"
              errorText={error?.message}
              // {...field}
              value={value}
              onChange={(newValue) => onChange(newValue)}
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
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <AppSelect
              label="Country / Region"
              placeholder="Select"
              value={getSelectValue(value, COUNTRIES_LIST) as PropsValue<SelectOption>}
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
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <AppSelect
              label="States"
              placeholder="Select"
              value={getSelectValue(value, STATES_LIST) as PropsValue<SelectOption>}
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
