import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, memo } from 'react';

import cls from './Tag.module.scss';

export enum TagVariant {
  RED = 'red',
  BLUE = 'blue',
  ORANGE = 'orange',
  BLACK = 'black',
}

interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  children: ReactNode;
  variant: TagVariant;
}

export const Tag: FC<TagProps> = memo(({ children, variant }) => {
  return (
    <span
      className={cn(cls.tag, {
        [cls[variant]]: true,
      })}
    >
      {children}
    </span>
  );
});

Tag.displayName = 'Tag';
