'use client';

import cn from 'classnames';
import { ChangeEvent, InputHTMLAttributes, memo, useRef } from 'react';

import cls from './Checkbox.module.scss';
import CheckIcon from '@public/icons/icon__check.svg';

type HTMLCheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface CheckboxProps extends HTMLCheckboxProps {
  className?: string;
  name: string;
  value: string | number;
  placeholder?: string;

  onChange?: (value: string) => void;
}

export const Checkbox = memo((props: CheckboxProps) => {
  const { className, value, onChange, placeholder, name, ...otherProps } =
    props;
  const ref = useRef<HTMLInputElement>(null);

  const handleCheckboxChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange?.(evt.target.value);
  };

  return (
    <label className={cn(cls.checkbox, className)}>
      <input
        ref={ref}
        type="checkbox"
        name={name}
        value={value}
        onChange={handleCheckboxChange}
        className={cls.input}
        {...otherProps}
      />
      <span className={cls.fakeInput}>
        {' '}
        <CheckIcon />{' '}
      </span>
      {placeholder && <span className={cls.placeholder}>{placeholder}</span>}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
