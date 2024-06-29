import { FC } from 'react';
import cn from 'classnames';
import { Text } from '../Text';
import cls from './FormError.module.scss';

interface Props {
  text: string;
  className?: string;
}

export const FormError: FC<Props> = ({ text, className }) => {
  return (
    <div className={cn(cls.FormError, className)}>
      <Text className={cls.FormErrorText}>{text}</Text>
    </div>
  );
};
