import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import cn from 'classnames';

import { Text } from '@/shared';
import { getAdvantageIcon } from './getAdvantageIcon';
import { TAdvantage } from '..';

import cls from './AdvantageCard.module.scss';











interface Props
    extends Omit<
            DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
            'id' | 'title'
        >,
        TAdvantage {}

export const AdvantageCard: FC<Props> = ({
    icon,
    title,
    text,
    isHighlighted,
}) => {
    const Icon = getAdvantageIcon(icon);
    return (
        <div
            className={cn(cls.advantage, {
                [cls.highlighted]: isHighlighted,
            })}
        >
            <div className={cls.iconWrapper}>
                <Icon className={cls.icon} />
            </div>
            <Text
                variant="body_l"
                weight="semibold"
                className={cls.title}
                as="h2"
            >
                {title}
            </Text>
            <Text variant="body_s" className={cls.text}>
                {text}
            </Text>
        </div>
    );
};
