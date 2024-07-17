import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import Image from 'next/image';

import { AppLink } from '@/shared/ui/AppLink';
import { ArrowIcon } from '@/shared/ui/icons';
import { Text } from '@/shared/ui/Text';

import { type TDiscountBanner } from '../model';

import cls from './DiscountBanner.module.scss';

interface Props
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title'>,
    TDiscountBanner {}

export const DiscountBanner: FC<Props> = ({ image, title, subtitle, path, className }) => {
  return (
    <div className={cn(cls.discountBanner, className)}>
      <div className={cls.bannerImageWrapper}>
        <Image className={cls.bannerImage} src={image} alt={title} fill />
      </div>

      <div className={cls.bannerText}>
        <Text variant="body_xxl" className={cls.bannerTitle}>
          {title}
        </Text>
        <Text variant="body_m" className={cls.bannerSubtitle}>
          {subtitle}
        </Text>
        <AppLink href={path} theme="ghost" className={cls.bannerButton}>
          <Text variant="body_m" weight="semibold">
            Shop Now
          </Text>
          <ArrowIcon className={cls.bannerButtonIcon} />
        </AppLink>
      </div>
    </div>
  );
};
