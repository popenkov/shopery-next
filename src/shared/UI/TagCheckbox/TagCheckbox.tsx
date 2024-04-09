import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import cls from './TagCheckbox.module.scss';
import { Text } from '..';

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  value: string;
  name: string;
  title: string;
}

export const TagCheckbox: FC<Props> = ({ value, name, title }) => {
  return (
    <label className={cls.tag}>
      <input
        className={cls.tagInput}
        type="checkbox"
        name={name}
        value={value}
      />
      <Text variant="body_s" className={cls.tagText}>
        {title}
      </Text>
    </label>
  );
};
