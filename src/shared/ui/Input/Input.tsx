'use client';

import { ChangeEvent, InputHTMLAttributes, forwardRef, memo, useId } from 'react';
import cn from 'classnames';

import AlertIcon from '@public/icons/icon__alert.svg';
import SearchIcon from '@public/icons/icon__search.svg';
import SuccessIcon from '@public/icons/icon__success.svg';

import { Text } from '../Text';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface Props extends HTMLInputProps {
  className?: string;
  label?: string;
  errorText?: string;
  hasValidation?: boolean;
  value?: string;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = memo(
  forwardRef<HTMLInputElement, Props>((props, ref) => {
    const {
      className,
      value,
      label,
      type = 'text',
      errorText,
      hasValidation = true,
      onChange,
      ...otherProps
    } = props;

    //   // todo
    //   // const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    //   //   // if (type === 'email') {
    //   //   //   setIsInvalid(!checkEmailValidation(value?.toString() || ''));
    //   //   // }

    //   //   onChange?.(evt.target.value);
    //   // };

    // todo
    const handleLoupeClick = () => {
      // ref?.current?.focus();
    };

    const uniqueId = useId();

    return (
      <div className={cls.inputContainer}>
        {label && (
          <label htmlFor={uniqueId} className={cls.inputLabel}>
            {label}
          </label>
        )}
        <div className={cn(cls.inputWrapper, className)}>
          <input
            id={uniqueId}
            ref={ref}
            type={type}
            // value={value}
            onChange={(evt) => onChange?.(evt)}
            className={cn(cls.input, {
              [cls.search]: type === 'search',
              [cls.error]: errorText,
              [cls.success]: value && !errorText,
            })}
            {...otherProps}
          />
          {type === 'search' && (
            <SearchIcon
              className={cn(cls.inputIcon, cls.inputIconSearch)}
              onClick={handleLoupeClick}
            />
          )}
          {/* todo */}
          {hasValidation && (
            <>
              {errorText && <AlertIcon className={cn(cls.inputIcon, cls.inputIconError)} />}
              {/* <WarningIcon className={cn(cls.inputIcon, cls.inputIconWarning)} /> */}
              {value && !errorText && (
                <SuccessIcon className={cn(cls.inputIcon, cls.inputIconSuccess)} />
              )}
            </>
          )}

          {errorText && (
            <Text variant="body_s" weight="medium" className={cls.errorMessage} as="span">
              {errorText}
            </Text>
          )}
        </div>
        {/* todo */}
        {/* {isInvalid && hasValidation && <span>error</span>} */}
      </div>
    );
  }),
);

Input.displayName = 'Input';
