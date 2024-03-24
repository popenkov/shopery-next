'use client';

import { ChangeEvent, InputHTMLAttributes, memo, useRef } from 'react';
import cn from 'classnames';
import cls from './Radio.module.scss';

type HTMLRadioProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface RadioProps extends HTMLRadioProps {
  className?: string;
  name: string;
  value: string | number;
  placeholder?: string;
  amount?: number;
  onChange?: (value: string) => void;
}

export const Radio = memo((props: RadioProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    name,
    amount,
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);

  const handleRadioChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange?.(evt.target.value);
  };

  return (
    <label className={cn(cls.radio, className)}>
      <input
        ref={ref}
        type="radio"
        name={name}
        value={value}
        onChange={handleRadioChange}
        className={cls.input}
        {...otherProps}
      />
      <span className={cls.fakeInput} />
      {placeholder && <span className={cls.placeholder}>{placeholder}</span>}
      {amount && <span className={cls.amount}>( ${amount} )</span>}
    </label>
  );
});

Radio.displayName = 'Radio';
