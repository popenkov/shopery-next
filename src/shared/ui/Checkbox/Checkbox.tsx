'use client';

import {
    ChangeEvent,
    InputHTMLAttributes,
    ReactNode,
    memo,
    useRef,
} from 'react';

import cn from 'classnames';

import CheckIcon from '@public/icons/icon__check.svg';

import { Text } from '..';

import cls from './Checkbox.module.scss';

type HTMLCheckboxProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface CheckboxProps extends HTMLCheckboxProps {
    className?: string;
    children?: ReactNode;
    name: string;
    value: string | number;
    text?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = memo((props: CheckboxProps) => {
    const { className, value, text, name, children, onChange, ...otherProps } =
        props;
    const ref = useRef<HTMLInputElement>(null);

    return (
        <label className={cn(cls.checkbox, className)}>
            <input
                ref={ref}
                type="checkbox"
                name={name}
                value={value}
                onChange={onChange}
                className={cls.input}
                {...otherProps}
            />
            <span className={cls.fakeInput}>
                <CheckIcon />
            </span>
            {children && <span>{children}</span>}
            {text && <Text>{text}</Text>}
        </label>
    );
});

Checkbox.displayName = 'Checkbox';
