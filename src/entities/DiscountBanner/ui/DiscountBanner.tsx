
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import Image from 'next/image';

import ArrowIcon from '@public/icons/icon__arrow.svg';
import { AppLink } from 'shared/ui/AppLink';
import { Text } from 'shared/ui/Text';

import { TDiscountBanner } from '../model/banner';

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
        <p className={cls.bannerTitle}>{title}</p>
        <p className={cls.bannerSubtitle}>{subtitle}</p>
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
