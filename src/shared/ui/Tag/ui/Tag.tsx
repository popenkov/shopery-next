import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode, memo } from 'react';

import cn from 'classnames';

import cls from './Tag.module.scss';
import { Text } from '../../Text';

type TagVariant =
    | 'sale'
    | 'not-available'
    | 'best-sale'
    | 'new'
    | 'out-of-stock'
    | 'in-stock';

interface TagProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLSpanElement>,
        HTMLSpanElement
    > {
    children: ReactNode;
    variant: TagVariant;
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
