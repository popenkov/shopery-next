'use client';

import cn from 'classnames';
import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useRef,
  useState,
} from 'react';

import SearchIcon from '@public/icons/icon__search.svg';

import cls from './Input.module.scss';
import { checkEmailValidation } from '@/shared/lib/utils/checkEmailValidation/checkEmailValidation';

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

  const [isInvalid, setIsInvalid] = useState(true);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (type === 'email') {
      setIsInvalid(!checkEmailValidation(value?.toString() || ''));
    }

    onChange?.(evt.target.value);
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
        {type === 'search' && <SearchIcon className={cls.searchIcon} />}
      </div>
      {isInvalid && <span>error</span>}
    </>
  );
});

Input.displayName = 'Input';
