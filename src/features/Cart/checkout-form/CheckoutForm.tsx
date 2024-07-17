'use client';
import { ChangeEvent, FC, useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '@/app/lib/store/hooks';
import { selectCartProducts } from '@/entities/Cart';
import { TOrder, TOrderProduct, addToOrders } from '@/entities/Order';
import { VALIDATION_MESSAGES } from '@/shared/lib/constants';
import { COUNTRIES_LIST, STATES_LIST } from '@/shared/lib/constants/countries-list';
import { EMAIL_REGEX } from '@/shared/lib/constants/validation-regex';
import { AppSelect } from '@/shared/ui/AppSelect';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Input } from '@/shared/ui/Input';
import { MaskedInput } from '@/shared/ui/MaskedInput';
import { Text } from '@/shared/ui/Text';
import { TextArea } from '@/shared/ui/TextArea';

import cls from './CheckoutForm.module.scss';

type TFormData = {
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
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartProducts);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const {
    reset,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<TFormData>({
    mode: 'onChange',
  });

  // todo   сделать модел для запроса из формы и из стора и отправить
  const onSubmit: SubmitHandler<TFormData> = (data) => {
    const orderItems: TOrderProduct[] = cartItems.map((item) => {
      return {
        id: item.id,
        name: item.title,
        price: item.price,
        quantity: item.amount,
        total: item.price * item.amount,
        img: item.img,
        // todo
        path: '/',
      };
    });

    const orderDate: TOrder = {
      id: Date.now().toString(),
      items: orderItems,
      subtotal: orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      amount: orderItems.reduce((acc, item) => acc + item.quantity, 0),
      discount: 0,
      delivery: null,
      // todo
      paymentMethod: 'PayPal',
      status: 'Processing',
      shippingAddress: {
        firstName: data.firstName,
        lastName: data.lastName,
        companyName: data.companyName,
        email: data.email,
        phone: data.phone,
        street: data.shippingStreetAddress,
        country: data.shippingCountryAddress,
        state: data.shippingCountryState,
        zipCode: data.shippingZipAddress,
      },
      billingAddress: {
        firstName: data.firstName,
        lastName: data.lastName,
        companyName: data.companyName,
        email: data.email,
        phone: data.phone,
        street: data.streetAddress,
        country: data.countryAddress,
        state: data.countryState,
        zipCode: data.zipAddress,
      },
      date: new Date(),
    };
    dispatch(addToOrders(orderDate));

    if (isValid) {
      console.log('form sent');
      reset();
    }
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
            rules={{
              required: VALIDATION_MESSAGES.REQUIRED,
            }}
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
            rules={{
              required: VALIDATION_MESSAGES.REQUIRED,
            }}
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
            rules={{
              required: VALIDATION_MESSAGES.REQUIRED,
            }}
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
                className={cls.checkoutFormInput}
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
                className={cls.checkoutFormInput}
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
                className={cls.checkoutFormInput}
              />
            )}
          />
        </div>
        <div className={cls.checkoutFormRowGridTwo}>
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
                className={cls.checkoutFormInput}
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
                className={cls.checkoutFormInput}
              />
            )}
          />
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
                rules={{
                  required: showAddAddress ? VALIDATION_MESSAGES.REQUIRED : false,
                }}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    label="Street Address"
                    placeholder="Street"
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
                rules={{
                  required: showAddAddress ? VALIDATION_MESSAGES.REQUIRED : false,
                }}
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <AppSelect
                    label="Country / Region"
                    placeholder="Select"
                    options={COUNTRIES_LIST}
                    onChange={(newValue) => onChange(newValue)}
                    errorText={error?.message}
                    className={cls.checkoutFormInput}
                  />
                )}
              />

              <Controller
                control={control}
                name="shippingCountryState"
                rules={{
                  required: showAddAddress ? VALIDATION_MESSAGES.REQUIRED : false,
                }}
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <AppSelect
                    label="States"
                    placeholder="Select"
                    options={STATES_LIST}
                    onChange={(newValue) => onChange(newValue)}
                    errorText={error?.message}
                    className={cls.checkoutFormInput}
                  />
                )}
              />

              <Controller
                control={control}
                name="shippingZipAddress"
                rules={{
                  required: showAddAddress ? VALIDATION_MESSAGES.REQUIRED : false,
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
    </form>
  );
};
