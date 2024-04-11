'use client';

import { ChangeEvent, InputHTMLAttributes, memo, useRef } from 'react';

import cn from 'classnames';

import CheckIcon from '@public/icons/icon__check.svg';

import cls from './Checkbox.module.scss';
import { Text } from '..';

type HTMLCheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface CheckboxProps extends HTMLCheckboxProps {
  className?: string;
  name: string;
  value: string | number;
  text?: string;

  onChange?: (value: string) => void;
}

export const Checkbox = memo((props: CheckboxProps) => {
  const { className, value, onChange, text, name, ...otherProps } = props;
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
        <CheckIcon />
      </span>
      {text && <Text>{text}</Text>}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
