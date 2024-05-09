'use client';

import { ChangeEvent, InputHTMLAttributes, forwardRef, memo, useId, useState } from 'react';
import cn from 'classnames';

import cls from './TextArea.module.scss';
import { Text } from '../Text';

type HTMLTextAreaProps = Omit<
  InputHTMLAttributes<HTMLTextAreaElement>,
  'value' | 'onChange' | 'readOnly'
>;

interface Props extends HTMLTextAreaProps {
  className?: string;
  label?: string;
  errorText?: string;
  hasValidation?: boolean;
  value?: string | number;
  onChange?: (evt: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = memo(
  forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
    const {
      className,
      value,
      label,
      errorText,
      hasValidation = true,
      onChange,
      ...otherProps
    } = props;

    const [isInvalid, setIsInvalid] = useState(true);

    const uniqueId = useId();

    return (
      <>
        <div className={cn(cls.inputWrapper, className)}>
          {label && <label htmlFor={uniqueId}>{label}</label>}
          <textarea
            id={uniqueId}
            ref={ref}
            value={value}
            onChange={(evt) => onChange?.(evt)}
            className={cls.input}
            {...otherProps}
          />
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

TextArea.displayName = 'TextArea';
