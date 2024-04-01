import { AppLink, Text } from '@/shared';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import ArrowIcon from '@public/icons/icon__arrow.svg';
import cls from './BestDeals.module.scss';
import { Countdown } from '@/entities/Countdown';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const BestDeals: FC<Props> = () => {
  return (
    <div className="section--green">
      <div className={cls.bgContainer}>
        <div className={cls.container}>
          <Text variant="body_m" weight="medium" className={cls.subtitle}>
            Best Deals
          </Text>
          <Text
            variant="heading_3"
            weight="semibold"
            className={cls.title}
            as="h2"
          >
            Our Special Products Deal of the Month
          </Text>
          <Countdown date="2024-05-17T03:24:00" />
          <AppLink href={'path'}>
            <span className="icon-button__text">Shop now</span>
            <ArrowIcon />
          </AppLink>
        </div>
      </div>
    </div>
  );
};
