'use client';

import { ChangeEvent, InputHTMLAttributes, forwardRef, memo, useId } from 'react';
import cn from 'classnames';

import { AlertIcon, SearchIcon, SuccessIcon } from 'shared/ui/icons';

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

    // todo
    const handleLoupeClick = () => {
      // ref?.current?.focus();
    };

    const uniqueId = useId();

    return (
      <div className={cn(cls.inputContainer, className)}>
        {label && (
          <label htmlFor={uniqueId} className={cls.inputLabel}>
            {label}
          </label>
        )}
        <div className={cn(cls.inputWrapper)}>
          <input
            id={uniqueId}
            ref={ref}
            type={type}
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
          {hasValidation && (
            <>
              {errorText && <AlertIcon className={cn(cls.inputIcon, cls.inputIconError)} />}
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
      </div>
    );
  }),
);

Input.displayName = 'Input';
