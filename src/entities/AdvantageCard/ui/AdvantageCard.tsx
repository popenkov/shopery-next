import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';

import cls from './AdvantageCard.module.scss';
import { TAdvantage } from '..';
import { getAdvantageIcon } from './getAdvantageIcon';
import { Text } from '@/shared';

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
      <Text variant="body_l" weight="semibold" className={cls.title}>
        {title}
      </Text>
      <Text variant="body_s" className={cls.text}>
        {text}
      </Text>
    </div>
  );
};
