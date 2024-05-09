'use client';

import { ChangeEvent, InputHTMLAttributes, forwardRef, memo, useId, useState } from 'react';
import cn from 'classnames';

import SearchIcon from '@public/icons/icon__search.svg';
import AlertIcon from '@public/icons/icon__alert.svg';
import WarningIcon from '@public/icons/icon__warning.svg';
import SuccessIcon from '@public/icons/icon__success.svg';
import { checkEmailValidation } from 'shared/lib/utils/checkEmailValidation/checkEmailValidation';

import cls from './Input.module.scss';
import { Text } from '../Text';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface Props extends HTMLInputProps {
  className?: string;
  label?: string;
  errorText?: string;
  hasValidation?: boolean;
  value?: string | number;
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

    const [isInvalid, setIsInvalid] = useState(true);

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
      <>
        <div className={cn(cls.inputWrapper, className)}>
          {label && <label htmlFor={uniqueId}>{label}</label>}
          <input
            id={uniqueId}
            ref={ref}
            type={type}
            value={value}
            onChange={(evt) => onChange?.(evt)}
            className={cn(cls.input, {
              [cls.search]: type === 'search',
            })}
            {...otherProps}
          />
          {type === 'search' && (
            <SearchIcon className={cls.searchIcon} onClick={handleLoupeClick} />
          )}
          {/* todo */}
          {hasValidation && (
            <>
              <AlertIcon className="field__icon field__icon--error" />
              <WarningIcon className="field__icon field__icon--warning" />
              <SuccessIcon className="field__icon field__icon--success" />
            </>
          )}
        </div>
        {/* todo */}
        {/* {isInvalid && hasValidation && <span>error</span>} */}
        {errorText && (
          <Text variant="body_s" weight="medium" className={cls.errorMessage} as="span">
            {errorText}
          </Text>
        )}
      </>
    );
  }),
);

Input.displayName = 'Input';
