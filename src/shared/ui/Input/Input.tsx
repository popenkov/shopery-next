'use client';

import { ChangeEvent, InputHTMLAttributes, memo, useRef, useState } from 'react';
import cn from 'classnames';

import SearchIcon from '@public/icons/icon__search.svg';
import { checkEmailValidation } from 'shared/lib/utils/checkEmailValidation/checkEmailValidation';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface Props extends HTMLInputProps {
  className?: string;
  hasValidation?: boolean;
  value?: string | number;
  onChange?: (value: string) => void;
}

export const Input = memo((props: Props) => {
  const { className, value, onChange, type = 'text', hasValidation = false, ...otherProps } = props;
  const ref = useRef<HTMLInputElement>(null);

  const [isInvalid, setIsInvalid] = useState(true);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (type === 'email') {
      setIsInvalid(!checkEmailValidation(value?.toString() || ''));
    }

    onChange?.(evt.target.value);
  };

  const handleLoupeClick = () => {
    ref.current?.focus();
  };

  return (
    <>
      <div className={cn(cls.inputWrapper, className)}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={handleInputChange}
          className={cn(cls.input, {
            [cls.search]: type === 'search',
          })}
          {...otherProps}
        />
        {type === 'search' && <SearchIcon className={cls.searchIcon} onClick={handleLoupeClick} />}
      </div>
      {isInvalid && hasValidation && <span>error</span>}
    </>
  );
});

Input.displayName = 'Input';
