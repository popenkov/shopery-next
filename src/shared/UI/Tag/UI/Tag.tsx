import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, memo } from 'react';

import cn from 'classnames';

import cls from './Tag.module.scss';

type TagVariant = 'red' | 'blue' | 'orange' | 'black';

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
