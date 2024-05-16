'use client';

import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { Countdown } from 'entities/Countdown';
import { AppLink } from 'shared/ui/AppLink';
import { ArrowIcon } from 'shared/ui/icons';
import { Text } from 'shared/ui/Text';

import cls from './BestDeals.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const BestDeals: FC<Props> = () => {
  return (
    <div className={cls.bestDeals}>
      <div className={cls.bgContainer}>
        <div className={cls.container}>
          <Text variant="body_m" weight="medium" align="center" className={cls.subtitle}>
            Best Deals
          </Text>
          <Text variant="heading_3" weight="semibold" align="center" className={cls.title} as="h2">
            Our Special Products Deal of the Month
          </Text>
          <Countdown date="2024-05-17T03:24:00" className={cls.counter} />
          <AppLink href={'path'} className={cls.button}>
            <span className={cls.buttonText}>Shop now</span>
            <ArrowIcon className={cls.buttonIcon} />
          </AppLink>
        </div>
      </div>
    </div>
  );
};
