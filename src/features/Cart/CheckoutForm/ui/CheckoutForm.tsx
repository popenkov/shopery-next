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
  companyName: string;
  streetAddress: string;
  countryAddress: string;
  countryState: string;
  zipAddress: string;
  email: string;
  phone: string;
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
    <form
      className="checkout-page__form js-checkout-form"
      id="checkoutForm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="checkout-page__form-main">
        <div className="checkout-page__form-row grid grid__three-items">
          <Controller
            control={control}
            name="firstName"
            render={({ field, fieldState: { error } }) => (
              <Input
                label="First name"
                placeholder="Your first name"
                errorText={error?.message}
                {...field}
                className="checkout-page__input-container"
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
                className="checkout-page__input-container"
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
                className="checkout-page__input-container"
              />
            )}
          />
        </div>
        <div className="checkout-page__form-row">
          <Controller
            control={control}
            name="streetAddress"
            render={({ field, fieldState: { error } }) => (
              <Input
                label="Street Address"
                placeholder="Street Address"
                errorText={error?.message}
                {...field}
                className="checkout-page__input-container"
              />
            )}
          />
        </div>
        <div className="checkout-page__form-row grid grid__three-items">
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
                // onChange={(newValue) => onChange(newValue.value)}
                error={error?.message}
                className="checkout-page__input-container"
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
                className="checkout-page__input-container"
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
                className="checkout-page__input-container"
              />
            )}
          />

          <div className="checkout-page__form-row grid grid__two-items">
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <Input
                  label="Email"
                  placeholder="Email Address"
                  errorText={error?.message}
                  {...field}
                  className="checkout-page__input-container"
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
                  className="checkout-page__input-container"
                />
              )}
            />
          </div>
        </div>
        <Checkbox
          value="5"
          text="Ship to a different address"
          onChange={handleAddressCheckboxChange}
        />

        {showAddAddress && (
          <div className="checkout-page__shipping-address js-checkout-shipping-address">
            <div className="checkout-page__form-row">
              <div className="checkout-page__input-container">
                <label className="field">
                  <span className="field__label">Street Address</span>
                  <div className="field__input-container">
                    <input
                      className="field__input field__input--text checkout-page__input"
                      type="text"
                      name="shipping-address-street"
                      placeholder="Street Address"
                      id="shippingAddressStreet"
                    />
                    <svg className="field__icon field__icon--error">
                      <use href="img/svgSprite.svg#icon__alert"></use>
                    </svg>
                    <svg className="field__icon field__icon--warning">
                      <use href="img/svgSprite.svg#icon__warning"></use>
                    </svg>
                    <svg className="field__icon field__icon--success">
                      <use href="img/svgSprite.svg#icon__success"></use>
                    </svg>
                  </div>
                </label>
              </div>
            </div>
            <div className="checkout-page__form-row grid grid__three-items">
              <div className="checkout-page__input-container">
                <div className="checkout-page__input-label">Country / Region</div>
                <div className="select">
                  <select
                    className="select__field js-nice-select"
                    id="shippingAddressCountry"
                    data-placeholder="Select"
                    data-searchable="true"
                  >
                    <option className="select__option select__placeholder-value">Select</option>
                    <option className="select__option" value="AX">
                      Åland Islands
                    </option>
                  </select>
                </div>
              </div>
              <div className="checkout-page__input-container">
                <div className="checkout-page__input-label">States</div>
                <div className="select">
                  <select
                    className="select__field js-nice-select"
                    id="shippingAddressStates"
                    data-placeholder="Select"
                    data-searchable="true"
                  >
                    <option className="select__option select__placeholder-value">Select</option>
                    <option className="select__option" value="AL">
                      Alabama
                    </option>
                  </select>
                </div>
              </div>
              <div className="checkout-page__input-container">
                <label className="field">
                  <span className="field__label">Zip Code</span>
                  <div className="field__input-container">
                    <input
                      className="field__input field__input--text checkout-page__input"
                      type="text"
                      name="shipping-address-zip-code"
                      placeholder="Zip Code"
                      id="shippingAddressZipCode"
                    />
                    <svg className="field__icon field__icon--error">
                      <use href="img/svgSprite.svg#icon__alert"></use>
                    </svg>
                    <svg className="field__icon field__icon--warning">
                      <use href="img/svgSprite.svg#icon__warning"></use>
                    </svg>
                    <svg className="field__icon field__icon--success">
                      <use href="img/svgSprite.svg#icon__success"></use>
                    </svg>
                  </div>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="checkout-page__form-comment">
        <h3 className="checkout-page__title">Additional Info</h3>
        <div className="checkout-page__input-container">
          <Controller
            control={control}
            name="comment"
            render={({ field, fieldState: { error } }) => (
              <TextArea
                label="Order Notes (Optional)"
                placeholder="Notes about your order, e.g. special notes for delivery"
                errorText={error?.message}
                {...field}
                className="checkout-page__form-comment"
              />
            )}
          />
        </div>
      </div>

      {/* todo test */}

      <button type="submit">test submit</button>
    </form>
  );
};
