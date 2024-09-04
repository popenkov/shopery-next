'use client';

import { FC, useEffect } from 'react';
import { UnknownAction } from '@reduxjs/toolkit';
import cn from 'classnames';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { getPersonalUserData, TUserPersonalData, updatePersonalData } from '@/entities/User';
import { VALIDATION_MESSAGES } from '@/shared/lib/constants';
import { EMAIL_REGEX } from '@/shared/lib/constants';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { Button } from '@/shared/ui/Buttons';
import { ImageUploader } from '@/shared/ui/ImageUploader';
import { Input } from '@/shared/ui/Input';
import { MaskedInput } from '@/shared/ui/MaskedInput';

import cls from './EditUserSettings.module.scss';

type Props = {
  className?: string;
};

export const EditUserSettings: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getPersonalUserData);
  const {
    reset,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<TUserPersonalData>({
    mode: 'onChange',
  });

  useEffect(() => {
    if (Object.keys(userData).length) {
      reset(userData);
    }
  }, [userData]);

  // todo обновить данные

  const onSubmit: SubmitHandler<TUserPersonalData> = (data) => {
    if (isValid) {
      dispatch(updatePersonalData(data) as unknown as UnknownAction);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn(cls.EditUserSettings, className)}>
      <div className={cls.EditUserSettingsInputs}>
        <Controller
          control={control}
          name="firstName"
          render={({ field, fieldState: { error } }) => (
            <Input
              label="First name"
              placeholder="Your first name"
              errorText={error?.message}
              {...field}
              className={cls.EditUserSettingsInput}
            />
          )}
        />

        <Controller
          control={control}
          name="lastName"
          render={({ field, fieldState: { error } }) => (
            <Input
              label="Last name"
              placeholder="Your Last name"
              errorText={error?.message}
              {...field}
              className={cls.EditUserSettingsInput}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          rules={{
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
              className={cls.EditUserSettingsInput}
            />
          )}
        />

        <Controller
          control={control}
          name="phone"
          rules={{
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
              label="Phone number"
              placeholder="Phone number"
              errorText={error?.message}
              {...field}
              className={cls.EditUserSettingsInput}
            />
          )}
        />

        <Button type="submit" className={cls.EditUserSettingsButton}>
          Save Changes
        </Button>
      </div>
      <Controller
        control={control}
        name="photo"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <ImageUploader
            imageSrc={value}
            className={cls.EditUserSettingsImageUploader}
            onChange={(newValue) => onChange(newValue)}
            errorText={error?.message}
          />
        )}
      />
    </form>
  );
};
