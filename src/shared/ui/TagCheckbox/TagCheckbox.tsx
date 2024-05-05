import { ChangeEvent, DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { Text } from '../Text';

import cls from './TagCheckbox.module.scss';


































































































interface Props
    extends Omit<
        DetailedHTMLProps<HTMLAttributes<HTMLLabelElement>, HTMLLabelElement>,
        'onChange'
    > {
    value: string;
    name: string;
    title: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TagCheckbox: FC<Props> = ({ value, name, title, onChange }) => {
    return (
        <label className={cls.tag}>
            <input
                className={cls.tagInput}
                type="checkbox"
                name={name}
                value={value}
                onChange={onChange}
            />
            <Text variant="body_s" className={cls.tagText}>
                {title}
            </Text>
        </label>
    );
};
