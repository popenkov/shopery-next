'use client';
import { ChangeEvent, FC, useState } from 'react';

import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import cls from './CheckoutForm.module.scss';
import { Input } from '@/shared/ui/Input';
import { VALIDATION_MESSAGES } from '@/shared/constants/validation-messages';
import { AppSelect, SelectOption } from '@/shared/ui/AppSelect';
import { COUNTRIES_LIST, STATES_LIST } from '../constants/countries-list';
import { getSelectValue } from '@/shared/lib/utils/getSelectOption';
import { MaskedInput } from '@/shared/ui/MaskedInput/MaskedInput';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Text } from '@/shared/ui/Text';
import { TextArea } from '@/shared/ui/TextArea';

type FormData = {
  firstName: string;
  lastName: string;
  companyName?: string;
  streetAddress: string;
  countryAddress: string;
  countryState: string;
  zipAddress: string;
  email: string;
  phone: string;
  shippingStreetAddress: string;
  shippingCountryAddress: string;
  shippingCountryState: string;
  shippingZipAddress: string;
  comment: string;
};

export const CheckoutForm: FC = () => {
  const [showAddAddress, setShowAddAddress] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    watch,
    setValue,
    control,
    resetField,
    getFieldState,
    clearErrors,
    formState: { errors, isValid, isDirty, dirtyFields, touchedFields },
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('data', data);
  };

  const handleAddressCheckboxChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setShowAddAddress(evt.target.checked);
  };

  return (
    <form className={cls.checkoutForm} id="checkoutForm" onSubmit={handleSubmit(onSubmit)}>
      <div className={cls.checkoutFormMain}>
        <div className={cls.checkoutFormRowGridThree}>
          <Controller
            control={control}
            name="firstName"
            render={({ field, fieldState: { error } }) => (
              <Input
                label="First name"
                placeholder="Your first name"
                errorText={error?.message}
                {...field}
                className={cls.checkoutFormInput}
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
                className={cls.checkoutFormInput}
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
                className={cls.checkoutFormInput}
              />
            )}
          />
        </div>
        <div className={cls.checkoutFormRow}>
          <Controller
            control={control}
            name="streetAddress"
            render={({ field, fieldState: { error } }) => (
              <Input
                label="Street Address"
                placeholder="Street Address"
                errorText={error?.message}
                {...field}
                className={cls.checkoutFormInput}
              />
            )}
          />
        </div>
        <div className={cls.checkoutFormRowGridThree}>
          <Controller
            control={control}
            name="countryAddress"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <AppSelect
                label="Country / Region"
                placeholder="Select"
                options={COUNTRIES_LIST}
                // selectedOption={getSelectedOption(selectedGender, genderOptions)}
                // value={getSelectValue(value, COUNTRIES_LIST) as SelectOption}
                onChange={(newValue) => onChange(newValue)}
                error={error?.message}
                className={cls.checkoutFormInput}
              />
            )}
          />

          <Controller
            control={control}
            name="countryState"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <AppSelect
                label="Country / Region"
                placeholder="Select"
                options={STATES_LIST}
                // selectedOption={getSelectedOption(selectedGender, genderOptions)}
                // value={getSelectValue(value, COUNTRIES_LIST) as SelectOption}
                // onChange={(newValue) => onChange(newValue.value)}
                error={error?.message}
                className={cls.checkoutFormInput}
              />
            )}
          />

          <Controller
            control={control}
            name="zipAddress"
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
                className={cls.checkoutFormInput}
              />
            )}
          />

          <div className={cls.checkoutFormRowGridTwo}>
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <Input
                  label="Email"
                  placeholder="Email Address"
                  errorText={error?.message}
                  {...field}
                  className={cls.checkoutFormInput}
                />
              )}
            />

            <Controller
              control={control}
              name="phone"
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
                  className={cls.checkoutFormInput}
                />
              )}
            />
          </div>
        </div>
        <Checkbox
          text="Ship to a different address"
          onChange={handleAddressCheckboxChange}
          className={cls.checkoutFormCheckbox}
        />

        {showAddAddress && (
          <div className={cls.checkoutFormShippingAddress}>
            <div className={cls.checkoutFormRow}>
              <Controller
                control={control}
                name="shippingStreetAddress"
                render={({ field, fieldState: { error } }) => (
                  <Input
                    label="Street Address"
                    placeholder="Street Address"
                    errorText={error?.message}
                    {...field}
                    className={cls.checkoutFormInput}
                  />
                )}
              />
            </div>
            <div className={cls.checkoutFormRowGridThree}>
              <Controller
                control={control}
                name="shippingCountryAddress"
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <AppSelect
                    label="Country / Region"
                    placeholder="Select"
                    options={COUNTRIES_LIST}
                    // selectedOption={getSelectedOption(selectedGender, genderOptions)}
                    // value={getSelectValue(value, COUNTRIES_LIST) as SelectOption}
                    onChange={(newValue) => onChange(newValue)}
                    error={error?.message}
                    className={cls.checkoutFormInput}
                  />
                )}
              />

              <Controller
                control={control}
                name="shippingCountryState"
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <AppSelect
                    label="Country / Region"
                    placeholder="Select"
                    options={STATES_LIST}
                    // selectedOption={getSelectedOption(selectedGender, genderOptions)}
                    // value={getSelectValue(value, COUNTRIES_LIST) as SelectOption}
                    // onChange={(newValue) => onChange(newValue.value)}
                    error={error?.message}
                    className={cls.checkoutFormInput}
                  />
                )}
              />

              <Controller
                control={control}
                name="shippingZipAddress"
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
                    className={cls.checkoutFormInput}
                  />
                )}
              />
            </div>
          </div>
        )}
      </div>

      <div className={cls.checkoutFormComment}>
        <Text variant="body_xxl" weight="medium" as="h3">
          Additional Info
        </Text>
        <Controller
          control={control}
          name="comment"
          render={({ field, fieldState: { error } }) => (
            <TextArea
              label="Order Notes (Optional)"
              placeholder="Notes about your order, e.g. special notes for delivery"
              errorText={error?.message}
              {...field}
              className={cls.checkoutFormInput}
            />
          )}
        />
      </div>

      {/* todo test */}

      <button type="submit">test submit</button>
    </form>
  );
};
