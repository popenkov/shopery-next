'use client';

import { FC } from 'react';
import cn from 'classnames';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { VALIDATION_MESSAGES } from '@/shared/lib/constants';
import { EMAIL_REGEX } from '@/shared/lib/constants/validation-regex';
import { Button } from '@/shared/ui/Buttons';
import { ImageUploader } from '@/shared/ui/ImageUploader/ImageUploader';
import { Input } from '@/shared/ui/Input';
import { MaskedInput } from '@/shared/ui/MaskedInput';

import { TFormData } from '../model';

import cls from './EditUserSettings.module.scss';

type Props = {
  className?: string;
};

export const EditUserSettings: FC<Props> = ({ className }) => {
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<TFormData>({
    mode: 'onChange',
  });

  // todo   сделать модел для запроса из формы и из стора и отправить
  const onSubmit: SubmitHandler<TFormData> = (data) => {
    console.log('data', data);
    if (isValid) {
      console.log('form sent');
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

        <Button type="submit" className={cls.SettingsPageHeaderButton}>
          Save Changes
        </Button>
      </div>

      <ImageUploader
        imageSrc="/test"
        className={cls.EditUserSettingsImageUploader}
        {...register('photo', { required: true })}
      />
    </form>
  );
};
