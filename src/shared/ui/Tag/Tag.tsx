import { DetailedHTMLProps, FC, HTMLAttributes, memo } from 'react';
import cn from 'classnames';
import cls from './Tag.module.scss';

export enum TagVariant {
  RED = 'red',
  BLUE = 'blue',
  ORANGE = 'orange',
  BLACK = 'black',
}

interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  content: string;
  variant: TagVariant;
}

export const Tag: FC<TagProps> = memo(({ content, variant }) => {
  return (
    <span
      className={cn(cls.tag, {
        [cls[variant]]: true,
      })}
    >
      {content}
    </span>
  );
});
