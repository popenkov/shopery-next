'use client';

import { ChangeEvent, InputHTMLAttributes, memo, useRef } from 'react';
import cn from 'classnames';

import cls from './Radio.module.scss';

type THTMLRadioProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface RadioProps extends THTMLRadioProps {
  className?: string;
  name: string;
  value: string | number;
  text?: string;
  amount?: number;
  checked?: boolean;
  onChange?: (value: string) => void;
}

export const Radio = memo((props: RadioProps) => {
  const { className, value, onChange, text, name, amount, checked, ...otherProps } = props;
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
        checked={checked}
        {...otherProps}
      />
      <span className={cls.fakeInput} />
      {text && <span className={cls.placeholder}>{text}</span>}
      {typeof amount === 'number' && <span className={cls.amount}>({amount})</span>}
    </label>
  );
});

Radio.displayName = 'Radio';
