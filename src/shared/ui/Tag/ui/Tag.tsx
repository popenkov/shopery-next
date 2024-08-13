import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, memo } from 'react';
import cn from 'classnames';

import { TTagVariant } from '../model';
import { Text } from '../../Text';

import cls from './Tag.module.scss';

interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  children: ReactNode;
  variant: TTagVariant;
}

export const Tag: FC<TagProps> = memo(({ children, variant }) => {
  return (
    <Text
      variant="body_s"
      className={cn(cls.tag, {
        [cls[variant]]: true,
      })}
      as="span"
    >
      {children}
    </Text>
  );
});

Tag.displayName = 'Tag';
