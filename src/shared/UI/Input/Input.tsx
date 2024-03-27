'use client';

import cn from 'classnames';
import { ChangeEvent, InputHTMLAttributes, memo, useRef } from 'react';

import SearchIcon from '@public/icons/icon__search.svg';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const { className, value, onChange, type = 'text', ...otherProps } = props;
  const ref = useRef<HTMLInputElement>(null);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange?.(evt.target.value);
  };

  const isSearchInput = type === 'search';

  return (
    <div className={cn(cls.inputWrapper, className)}>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={handleInputChange}
        className={cn(cls.input, {
          [cls.search]: isSearchInput,
        })}
        {...otherProps}
      />
      {isSearchInput && <SearchIcon className={cls.searchIcon} />}
    </div>
  );
});

Input.displayName = 'Input';
