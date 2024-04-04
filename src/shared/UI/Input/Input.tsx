'use client';

import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useRef,
  useState,
} from 'react';

import cn from 'classnames';

import { checkEmailValidation } from '@/shared/lib/utils/checkEmailValidation/checkEmailValidation';
import SearchIcon from '@public/icons/icon__search.svg';

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
  const {
    className,
    value,
    onChange,
    type = 'text',
    hasValidation = false,
    ...otherProps
  } = props;
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
      {isInvalid && hasValidation && <span>error</span>}
    </>
  );
});

Input.displayName = 'Input';
